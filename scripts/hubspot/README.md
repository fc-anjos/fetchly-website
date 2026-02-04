# HubSpot Setup Scripts

One-time setup scripts to provision HubSpot custom properties and forms via the API.

## HubSpot App

The HubSpot app is managed via the new Developer Platform (2025.2) at:

```
fetchly-hubspot/fetchly-api-access/
```

Manage it with the HubSpot CLI (`hs`). Requires Node 22 (see `.mise.toml` in that directory).

### Accounts

| Account | ID | Purpose |
| --- | --- | --- |
| fetchly-labs (standard) | 8974887 | Production |
| developer-test-account-1 | 245087683 | Testing / local dev |

## Prerequisites

1. App tokens from the HubSpot project's **Distribution** tab
2. Copy `.env.example` to `.env` and add your tokens

## Configuration

Create a `.env` file in this directory:

```
HUBSPOT_TEST_TOKEN=pat-na2-xxxxx
HUBSPOT_TEST_PORTAL_ID=245087683

HUBSPOT_PROD_TOKEN=pat-na2-xxxxx
HUBSPOT_PROD_PORTAL_ID=8974887
```

> The `.env` file is gitignored and will not be committed.

## Usage

```bash
# Set up test account (default)
./setup.sh

# Set up production account
./setup.sh --prod
```

This will:

1. Create custom contact properties (`project_type`, `company_size`, `linkedin`) -- skips any that already exist
2. Create the intake form with all required fields
3. Output `HUBSPOT_PORTAL_ID` and `HUBSPOT_FORM_GUID` to add to `.env.local` (server-side only, no `NEXT_PUBLIC_` prefix)

## Current Values

| Environment | Portal ID | Form GUID |
| --- | --- | --- |
| Production | 8974887 | c9162cb0-b706-4716-8997-7daa4d288640 |
| Test | 245087683 | e527c55a-b5d6-49ca-a1ce-65186c26b50f |

## Form Fields

| HubSpot Property | Type | Required | Notes |
| --- | --- | --- | --- |
| `firstname` | text | yes | built-in |
| `lastname` | text | yes | built-in |
| `email` | text | yes | built-in |
| `phone` | phone | no | built-in |
| `company` | text | yes | built-in |
| `website` | text | no | built-in |
| `linkedin` | text | no | custom property |
| `project_type` | text | yes | custom property |
| `company_size` | dropdown | yes | custom property |
| `message` | multi-line | yes | built-in |
