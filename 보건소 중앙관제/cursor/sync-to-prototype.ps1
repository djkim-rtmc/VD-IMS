# cursor/html -> ../프로토타입 복사 (PR 전 실행)
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$src = Join-Path $PSScriptRoot "html"
$dst = Join-Path $root "프로토타입"
if (-not (Test-Path $src)) { throw "cursor/html not found" }
New-Item -ItemType Directory -Force -Path $dst | Out-Null
Copy-Item -Path (Join-Path $src "*") -Destination $dst -Recurse -Force
Write-Host "Synced cursor/html -> 프로토타입/"
