# Forms & Integration Strategy

## Decisions

| # | Area | Decision |
|---|------|----------|
| 1 | HubSpot | Forms API — client-side POST to `hsforms.com` |
| 2 | Calendly | Inline widget |
| 3 | Intake pages | Two paths — `/intake/request` (form + optional Calendly) and `/intake/book` (Calendly directly) |

---

## 1. HubSpot — Forms API (Client-Side POST)

### What

Submit form data directly from the browser to HubSpot's forms endpoint:

```
POST https://api.hsforms.com/submissions/v3/integration/submit/{portalId}/{formGuid}
```

No API key required. No server needed. Compatible with `output: "export"`.

### Configuration

| Key | Value | Source |
|-----|-------|--------|
| Portal ID | `8974887` | Old site (`old/js/hubspot.js`) |
| Hublet | `na2` | Old site |
| Form GUID | **TBD** — create in HubSpot dashboard | HubSpot > Marketing > Forms |

Environment variables:

```env
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=8974887
NEXT_PUBLIC_HUBSPOT_FORM_GUID=<create-in-hubspot>
```

### Why not collected forms script

The current `ChatForm` is a React state machine, not a `<form>` element. HubSpot's collected forms script scrapes `<form>` tags and won't detect it. The Forms API gives explicit field mapping, no external scripts to load, and no cookie banner complications.

### Why not server-side API

The site uses `output: "export"` — no API routes exist. A server route would require removing static export or deploying a separate serverless function. The forms endpoint doesn't need an API key, so client-side is sufficient. If CRM workflows are needed later (create deals, trigger sequences), a serverless function can be added without changing the form UI.

### Submission Payload

```typescript
await fetch(
  `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fields: [
        { name: 'email', value: fields.email },
        { name: 'firstname', value: fields.name },
        { name: 'phone', value: fields.phone },
        { name: 'company', value: fields.companyName },
        { name: 'website', value: fields.companyWebsite },
        { name: 'message', value: fields.message },
        { name: 'project_type', value: fields.projectType },
        { name: 'company_size', value: fields.companySize },
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title,
      },
    }),
  }
);
```

### HubSpot Setup Required

1. Log into HubSpot (portal `8974887`)
2. Go to Marketing > Forms > Create Form
3. Add standard fields: email, firstname, phone, company, website, message
4. Create custom contact properties: `project_type`, `company_size`
5. Copy the form GUID into `NEXT_PUBLIC_HUBSPOT_FORM_GUID`

---

## 2. Calendly — Inline Widget

### What

Embed Calendly's scheduling widget directly on the page using their external widget script and a container div.

### Configuration

| Key | Value | Source |
|-----|-------|--------|
| Scheduling URL | `https://calendly.com/fetchly1/fetchly-intro` | Old site (`old/pages-html/intake-request.html`) |
| Primary color | `69E5FB` | Old site (brand cyan) |
| Text color | `000000` | Old site |
| Hide GDPR banner | `1` | Old site |

Full embed URL:

```
https://calendly.com/fetchly1/fetchly-intro?hide_gdpr_banner=1&primary_color=69E5FB&text_color=000000
```

### Why inline over popup

The marketing strategy positions "Book a Call" as a destination — the hard CTA at the end of every funnel page. An inline widget on a dedicated page is a focused conversion experience. The old site also required booking before submission, which inline makes natural. `postMessage` event tracking works the same either way.

### Event Tracking

Listen for `postMessage` from `https://calendly.com`:

| Event | Meaning |
|-------|---------|
| `calendly.date_and_time_selected` | User picked a time slot |
| `calendly.event_scheduled` | Meeting confirmed |

### Responsive Sizing (from old site)

| Breakpoint | Width | Height |
|------------|-------|--------|
| Desktop (>1024px) | 1102px, centered | 650px |
| Tablet (769–1024px) | 90vw, max 800px | 650px |
| Mobile (480–768px) | 95vw, min 320px | 700px |
| Small mobile (<480px) | 100vw, min 320px | 750px |

---

## 3. Intake Pages — Two Conversion Paths

### Why two paths

The marketing strategy defines two CTA tiers on every page:

| CTA | Commitment | Example | Visitor intent |
|-----|------------|---------|----------------|
| Soft | Low | "Get a free codebase assessment" | Wants something specific, willing to give info |
| Hard | High | "Book a Call" | Ready to talk, doesn't want friction |

Sending high-intent "Book a Call" visitors through a multi-step form adds friction. Sending "Get a free audit" visitors straight to Calendly skips the context the sales team needs. Two paths, one shared component system.

### Path A: `/intake/request` — Lead Capture Form

**Who lands here:** Visitors who clicked a soft CTA ("Get a free MVP planning session", "Get a free migration audit", etc.)

**Flow:**

```
Step 1: About Your Project
  ├── What do you need? (chips)
  │   Build MVP | Scale Team | Rescue & Replace | Modernize
  │   QA & Testing | Design & UX | DevOps | AI Integration
  ├── Company name
  ├── Company website (optional)
  ├── Company size (chips: 1-5, 6-10, 11-49, 50-250, 251+)
  └── Tell us about your project (textarea)

Step 2: Contact Info
  ├── Name
  ├── Email
  ├── Phone (optional)
  └── [Submit] → POST to HubSpot Forms API

Step 3: Success + Optional Booking
  ├── "Got it! We'll be in touch within 24 hours."
  ├── CalendlyEmbed (inline widget)
  │   "Want to skip the back-and-forth? Book a call now."
  └── [Done] (can leave without booking)
```

Calendly is **optional** on this path. The lead is already captured at step 2. Calendly is a bonus for those who want faster follow-up.

### Path B: `/intake/book` — Direct Booking

**Who lands here:** Visitors who clicked the nav "Book a Call" button or a hard CTA ("Start your project", "Book your free assessment").

**Flow:**

```
CalendlyEmbed (inline widget, full-page focus)
  └── Heading: "Book a Call"
  └── Subtext: "Pick a time that works. We'll come prepared."
```

No form. No steps. Straight to scheduling. Calendly collects name and email as part of its own booking flow, which syncs to the Calendly account.

### Route Structure

```
/src/app/intake/
├── request/page.tsx    → Multi-step form (soft CTA destination)
├── book/page.tsx       → Calendly inline widget (hard CTA destination)
└── step-1/page.tsx     → Redirect to /intake/request (legacy URL support)
```

### Pre-Filling from CTAs

Each page's soft CTA passes context via query params:

```
/intake/request?solution=build-mvp
/intake/request?solution=rescue
/intake/request?industry=healthcare
/intake/request?technology=rails-migration
```

The form uses these to:
- Pre-select the project type chip
- Customize the heading ("Let's plan your MVP" vs "Tell us about your project")
- Pass as a HubSpot field for lead source attribution

Hard CTAs can also pass context for Calendly UTM tracking:

```
/intake/book?utm_source=website&utm_content=rescue-page
```

### CTA Mapping Across the Site

| CTA Location | Text | Destination |
|-------------|------|-------------|
| Nav button | "Book a Call" | `/intake/book` |
| Hero (soft CTA) | "Get a free [X] audit" | `/intake/request?solution=X` |
| Final section (hard CTA) | "Start your project" / "Book a call" | `/intake/book` |
| Footer | "Get in Touch" | `/intake/request` |
| E-commerce page ChatForm | (existing chat flow) | POST to HubSpot directly |

---

## Shared Component Architecture

Both paths share underlying components to reduce duplication:

```
src/components/
├── intake/
│   ├── CalendlyEmbed.tsx        ← Used by both paths
│   ├── IntakeForm.tsx           ← Multi-step form (path A only)
│   ├── ProjectInfoStep.tsx      ← Step 1 of form
│   ├── ContactInfoStep.tsx      ← Step 2 of form
│   └── SuccessStep.tsx          ← Step 3 (success + optional Calendly)

src/hooks/
├── useIntakeForm.ts             ← Generalized (remove Shopify-specific fields)
├── useHubSpotSubmit.ts          ← HubSpot Forms API POST logic
└── useCalendlyEvents.ts         ← postMessage listener for Calendly events

src/app/intake/
├── request/page.tsx             ← Renders IntakeForm
├── book/page.tsx                ← Renders CalendlyEmbed full-page
└── step-1/page.tsx              ← Redirect to /intake/request
```

### `CalendlyEmbed` — shared between both paths

```typescript
interface CalendlyEmbedProps {
  url?: string;
  className?: string;
  onEventScheduled?: () => void;
  onDateTimeSelected?: () => void;
}
```

Used full-page on `/intake/book`. Used within `SuccessStep` on `/intake/request` (smaller, optional context).

### `useHubSpotSubmit` — shared between IntakeForm and ChatForm

```typescript
interface HubSpotSubmitOptions {
  portalId: string;
  formGuid: string;
}

function useHubSpotSubmit({ portalId, formGuid }: HubSpotSubmitOptions) {
  // Returns: { submit, isSubmitting, error }
  // submit(fields) → POST to HubSpot Forms API
}
```

The existing `ChatForm` on the e-commerce page can use this same hook to wire its submissions to HubSpot, keeping its Shopify-specific chat UI while sharing the submission logic.

### `useCalendlyEvents` — shared postMessage listener

```typescript
function useCalendlyEvents(callbacks: {
  onDateTimeSelected?: () => void;
  onEventScheduled?: (payload: any) => void;
}) {
  // Sets up window.addEventListener('message', ...)
  // Filters by origin === 'https://calendly.com'
  // Cleans up on unmount
}
```

---

## Existing ChatForm (E-Commerce Page)

The `ChatForm` on `/e-commerce` stays as-is — it's a Shopify-specific conversational form that differentiates that page. Changes:

1. Wire `handleSubmit()` in `useIntakeForm.ts` to use `useHubSpotSubmit` instead of the 800ms delay
2. Keep Shopify-specific project types (New Store, Redesign, Migration, Optimization)
3. Optionally add Calendly as a post-submission step

This keeps the chat UX as a conversion differentiator on the e-commerce page while sharing submission infrastructure with the intake pages.

---

## Implementation Sequence

1. Create HubSpot form in dashboard, get form GUID, set env vars
2. Build `useHubSpotSubmit` hook
3. Build `useCalendlyEvents` hook
4. Build `CalendlyEmbed` component
5. Build `/intake/book` page (Calendly-only — simplest, validates the widget works)
6. Generalize `useIntakeForm` — replace Shopify-specific project types with strategy-aligned types
7. Build `/intake/request` page with 3-step flow
8. Add `/intake/step-1` redirect
9. Wire existing `ChatForm` to `useHubSpotSubmit`
10. Update CTA hrefs across all pages to point to correct intake path
