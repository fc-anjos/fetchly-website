#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

# Load app tokens from .env
source "$SCRIPT_DIR/.env"

# Default to test account, pass --prod to use production
if [[ "${1:-}" == "--prod" ]]; then
  ACCESS_TOKEN="$HUBSPOT_PROD_TOKEN"
  ACCOUNT_ID="$HUBSPOT_PROD_PORTAL_ID"
  ACCOUNT_LABEL="production"
else
  ACCESS_TOKEN="$HUBSPOT_TEST_TOKEN"
  ACCOUNT_ID="$HUBSPOT_TEST_PORTAL_ID"
  ACCOUNT_LABEL="test"
fi

if [ -z "$ACCESS_TOKEN" ]; then
  echo "ERROR: No token set for $ACCOUNT_LABEL account in scripts/hubspot/.env"
  exit 1
fi

echo "Using account: $ACCOUNT_LABEL ($ACCOUNT_ID)"
echo ""

API="https://api.hubapi.com"
AUTH="Authorization: Bearer $ACCESS_TOKEN"
JSON="Content-Type: application/json"

echo "=== Creating custom contact properties ==="

for prop in \
  '{"name":"project_type","label":"Project Type","type":"string","fieldType":"text","groupName":"contactinformation"}' \
  '{"name":"company_size","label":"Company Size","type":"enumeration","fieldType":"select","groupName":"contactinformation","options":[{"label":"1-5","value":"1-5","displayOrder":0},{"label":"6-10","value":"6-10","displayOrder":1},{"label":"11-49","value":"11-49","displayOrder":2},{"label":"50-250","value":"50-250","displayOrder":3},{"label":"251+","value":"251+","displayOrder":4}]}' \
  '{"name":"linkedin","label":"LinkedIn","type":"string","fieldType":"text","groupName":"contactinformation"}'
do
  name=$(echo "$prop" | python3 -c "import sys,json; print(json.load(sys.stdin)['name'])")
  echo -n "  Creating property: $name ... "
  response=$(curl -s -w "\n%{http_code}" -X POST "$API/crm/v3/properties/contacts" \
    -H "$AUTH" -H "$JSON" -d "$prop")
  http_code=$(echo "$response" | tail -1)
  body=$(echo "$response" | sed '$d')

  if [ "$http_code" = "201" ]; then
    echo "OK"
  elif [ "$http_code" = "409" ]; then
    echo "already exists (skipped)"
  else
    echo "FAILED ($http_code)"
    echo "$body"
  fi
done

echo ""
echo "=== Creating form ==="

NOW=$(date -u +%Y-%m-%dT%H:%M:%S.000Z)

FORM_PAYLOAD=$(cat <<FORM_EOF
{
  "name": "Fetchly Intake Form",
  "formType": "hubspot",
  "fieldGroups": [
    {
      "groupType": "default_group",
      "richTextType": "text",
      "fields": [
        { "objectTypeId": "0-1", "name": "firstname", "label": "First Name", "fieldType": "single_line_text", "required": true, "hidden": false },
        { "objectTypeId": "0-1", "name": "lastname", "label": "Last Name", "fieldType": "single_line_text", "required": true, "hidden": false },
        { "objectTypeId": "0-1", "name": "email", "label": "Email", "fieldType": "single_line_text", "required": true, "hidden": false }
      ]
    },
    {
      "groupType": "default_group",
      "richTextType": "text",
      "fields": [
        { "objectTypeId": "0-1", "name": "phone", "label": "Phone", "fieldType": "phone", "required": false, "hidden": false },
        { "objectTypeId": "0-1", "name": "company", "label": "Company", "fieldType": "single_line_text", "required": true, "hidden": false },
        { "objectTypeId": "0-1", "name": "website", "label": "Company Website", "fieldType": "single_line_text", "required": false, "hidden": false }
      ]
    },
    {
      "groupType": "default_group",
      "richTextType": "text",
      "fields": [
        { "objectTypeId": "0-1", "name": "linkedin", "label": "LinkedIn", "fieldType": "single_line_text", "required": false, "hidden": false },
        { "objectTypeId": "0-1", "name": "project_type", "label": "Project Type", "fieldType": "single_line_text", "required": true, "hidden": false },
        { "objectTypeId": "0-1", "name": "company_size", "label": "Company Size", "fieldType": "dropdown", "required": true, "hidden": false,
          "options": [
            { "label": "1-5", "value": "1-5", "displayOrder": 0 },
            { "label": "6-10", "value": "6-10", "displayOrder": 1 },
            { "label": "11-49", "value": "11-49", "displayOrder": 2 },
            { "label": "50-250", "value": "50-250", "displayOrder": 3 },
            { "label": "251+", "value": "251+", "displayOrder": 4 }
          ]
        }
      ]
    },
    {
      "groupType": "default_group",
      "richTextType": "text",
      "fields": [
        { "objectTypeId": "0-1", "name": "message", "label": "Message", "fieldType": "multi_line_text", "required": true, "hidden": false }
      ]
    }
  ],
  "createdAt": "$NOW",
  "configuration": {
    "createNewContactForNewEmail": true,
    "language": "en"
  }
}
FORM_EOF
)

response=$(curl -s -w "\n%{http_code}" -X POST "$API/marketing/v3/forms" \
  -H "$AUTH" -H "$JSON" -d "$FORM_PAYLOAD")
http_code=$(echo "$response" | tail -1)
body=$(echo "$response" | sed '$d')

if [ "$http_code" = "201" ] || [ "$http_code" = "200" ]; then
  form_id=$(echo "$body" | python3 -c "import sys,json; print(json.load(sys.stdin)['id'])")
  echo "  Form created! GUID: $form_id"
  echo ""
  echo "=== Add this to your .env.local ==="
  echo "HUBSPOT_PORTAL_ID=$ACCOUNT_ID"
  echo "HUBSPOT_FORM_GUID=$form_id"
else
  echo "  FAILED ($http_code)"
  echo "$body"
fi
