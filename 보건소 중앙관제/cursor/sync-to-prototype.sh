#!/usr/bin/env bash
# cursor/html -> ../프로토타입
set -eu
set -o pipefail 2>/dev/null || true
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$(dirname "$0")/html"
DST="$ROOT/프로토타입"
mkdir -p "$DST"
cp -a "$SRC/"* "$DST/"
echo "Synced cursor/html -> 프로토타입/"
