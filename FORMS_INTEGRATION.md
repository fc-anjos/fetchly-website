# Forms & Integration Strategy

## Decisions

| # | Area | Decision |
|---|------|----------|
| 1 | HubSpot | Server-side proxy via `/api/hubspot` route |
| 2 | Calendly | Inline widget |
| 3 | Intake pages | Two paths — `/intake/request` (form + optional Calendly) and `/intake/book` (Calendly directly) |

---

## 1. HubSpot — Server-Side Proxy

### What

Form submissions go through a Next.js API route that validates, filters, and forwards to HubSpot:

```
Browser → POST /api/hubspot → api.hsforms.com
```

Portal ID and Form GUID are server-side only (no `NEXT_PUBLIC_` prefix).

### Configuration

Environment variables (server-side only):

```env
HUBSPOT_PORTAL_ID=8974887
HUBSPOT_FORM_GUID=<form-guid>
```

### Spam Prevention

| Layer | How |
|-------|-----|
| Honeypot | Hidden `_hp` field — bots fill it, humans don't. Server returns 200 to fool bots. |
| Rate limiting | 10 requests per IP per minute (in-memory, resets on cold start) |
| Server-side validation | Required fields, email format, allowed field whitelist |
| No public credentials | Portal ID and Form GUID never reach the browser |

### Submission Types

| Type | Flag | Validation | Used by |
|------|------|-----------|---------|
| Full | `partial: false` | All required fields | Intake form submit |
| Partial | `partial: true` | Email only | Partial autosave, exit intent popup |

### Submission Payload (client to API route)

```typescript
await submitToHubSpot({
  email: fields.email,
  firstname: fields.name,
  lastname: fields.lastName,
  company: fields.companyName,
  message: fields.message,
  project_type: fields.projectType,
  company_size: fields.companySize,
  // optional
  phone: fields.phone,
  linkedin: fields.linkedin,
  website: fields.companyWebsite,
}, { honeypot: fields._hp });
```

### HubSpot Setup

Properties and forms are provisioned via `scripts/hubspot/setup.sh`. See `scripts/hubspot/README.md` for details.

### Accounts

| Environment | Portal ID | Form GUID |
|-------------|-----------|-----------|
| Production | 8974887 | c9162cb0-b706-4716-8997-7daa4d288640 |
| Test (local dev) | 245087683 | e527c55a-b5d6-49ca-a1ce-65186c26b50f |

### Architecture

```
src/
├── app/api/hubspot/route.ts      ← Server-side proxy (validation, rate limit, honeypot)
├── lib/hubspot.ts                ← Client-side submitToHubSpot() → POST /api/hubspot
├── hooks/useIntakeForm.ts        ← Form state, validation, submission
├── hooks/usePartialFormSave.ts   ← Debounced partial saves (partial: true)
├── components/intake/
│   ├── IntakeForm.tsx            ← Multi-step form container
│   ├── ProjectInfoStep.tsx       ← Step 1: project info
│   ├── ContactInfoStep.tsx       ← Step 2: contact info + honeypot
│   └── SuccessStep.tsx           ← Step 3: confirmation + Calendly
└── components/tracking/
    └── ExitIntentPopup.tsx       ← Exit intent email capture (partial: true)
```

---

## 2. Calendly — Inline Widget

### What

Embed Calendly's scheduling widget directly on the page using their external widget script and a container div.

### Configuration

| Key | Value | Source |
|-----|-------|--------|
| Scheduling URL | `https://calendly.com/fetchly1/fetchly-intro` | Old site |
| Primary color | `69E5FB` | Brand cyan |
| Text color | `000000` | Old site |
| Hide GDPR banner | `1` | Old site |

---

## 3. Intake Pages — Two Conversion Paths

### Path A: `/intake/request` — Lead Capture Form

**Flow:**

```
Step 1: About Your Project
  ├── What do you need? (chips)
  ├── Company name / website
  ├── Company size (chips)
  └── Project description (textarea)

Step 2: Contact Info
  ├── First Name / Last Name
  ├── Email
  ├── Phone (optional)
  ├── LinkedIn (optional)
  └── [Submit] → POST /api/hubspot

Step 3: Success + Optional Booking
  └── CalendlyEmbed (inline widget)
```

### Path B: `/intake/book` — Direct Booking

Calendly inline widget. No form, no steps.
