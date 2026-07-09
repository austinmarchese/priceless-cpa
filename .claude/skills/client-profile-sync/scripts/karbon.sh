#!/usr/bin/env bash
# Karbon API helper for the client-profile-sync skill.
# Requires: KARBON_BEARER_TOKEN (Application ID GUID), KARBON_ACCESS_KEY (JWT), curl.
# jq is used for pretty-printing when available; raw JSON otherwise.
set -euo pipefail

BASE="https://api.karbonhq.com/v3"

usage() {
  cat <<'EOF'
Usage: karbon.sh <command> [args]

  smoke                             GET /TenantSettings (credential check)
  find <name>                       Search Contacts + Organizations + ClientGroups by name
  contact <ContactKey>              Contact with BusinessCards + ClientTeam expanded
  org <OrganizationKey>             Organization with Contacts + BusinessCards expanded
  group <ClientGroupKey>            ClientGroup (Members[] = household map)
  workitems <ClientKey>             Work items for a client, newest first
  customfields                      List custom field definitions
  cfvalues <EntityKey>              Custom field values for a contact/org
  files <Contact|Organization> <EntityKey>   Files linked to an entity
  get <path>                        Raw GET, e.g. get "/Contacts?\$top=5"
  post <path> <json>                Raw POST with a JSON body
  put <path> <json>                 Raw PUT with a JSON body
EOF
  exit 1
}

req() {
  local method="$1" path="$2" body="${3:-}"
  : "${KARBON_BEARER_TOKEN:?KARBON_BEARER_TOKEN not set — see setup guide}"
  : "${KARBON_ACCESS_KEY:?KARBON_ACCESS_KEY not set — see setup guide}"
  local args=(-sS --compressed -w '\n%{http_code}' -X "$method"
    -H "Authorization: Bearer $KARBON_BEARER_TOKEN"
    -H "AccessKey: $KARBON_ACCESS_KEY"
    -H "Accept: application/json")
  [ -n "$body" ] && args+=(-H "Content-Type: application/json" -d "$body")
  local out; out="$(curl "${args[@]}" "$BASE$path")"
  local code="${out##*$'\n'}"
  local json="${out%$'\n'*}"
  if [ "$code" -ge 400 ]; then
    echo "HTTP $code from $method $path" >&2
    case "$code" in
      401) echo "Hint: Bearer = Application ID GUID, AccessKey = JWT (eyJ...). They are not interchangeable." >&2 ;;
      403) echo "Hint: endpoint not granted to this API application, or Karbon plan is below Business tier." >&2 ;;
      429) echo "Hint: rate limit (120 req/min). Wait for Retry-After seconds and retry." >&2 ;;
    esac
    echo "$json" >&2
    exit 1
  fi
  if command -v jq >/dev/null 2>&1; then echo "$json" | jq .; else echo "$json"; fi
}

enc() { python3 -c "import urllib.parse,sys; print(urllib.parse.quote(sys.argv[1]))" "$1"; }

cmd="${1:-}"; shift || true
case "$cmd" in
  smoke)        req GET "/TenantSettings" ;;
  find)
    [ $# -ge 1 ] || usage
    name="$(enc "$1")"
    echo "== Contacts ==";      req GET "/Contacts?\$filter=contains(FullName,'$name')"
    echo "== Organizations =="; req GET "/Organizations?\$filter=contains(FullName,'$name')"
    echo "== ClientGroups ==";  req GET "/ClientGroups?\$filter=FullName eq '$name'"
    ;;
  contact)      [ $# -ge 1 ] || usage; req GET "/Contacts/$1?\$expand=BusinessCards,ClientTeam" ;;
  org)          [ $# -ge 1 ] || usage; req GET "/Organizations/$1?\$expand=Contacts,BusinessCards" ;;
  group)        [ $# -ge 1 ] || usage; req GET "/ClientGroups/$1" ;;
  workitems)    [ $# -ge 1 ] || usage; req GET "/WorkItems?\$filter=ClientKey eq '$1'&\$orderby=StartDate desc" ;;
  customfields) req GET "/CustomFields" ;;
  cfvalues)     [ $# -ge 1 ] || usage; req GET "/CustomFieldValues/$1" ;;
  files)        [ $# -ge 2 ] || usage; req GET "/FileList/$1?EntityKey=$2" ;;
  get)          [ $# -ge 1 ] || usage; req GET "$1" ;;
  post)         [ $# -ge 2 ] || usage; req POST "$1" "$2" ;;
  put)          [ $# -ge 2 ] || usage; req PUT "$1" "$2" ;;
  *)            usage ;;
esac
