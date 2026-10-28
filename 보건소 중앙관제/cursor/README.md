# Cursor 작업 공간 (`cursor/`)

**PC에서 Cursor로 편집하는 파일은 이 폴더 아래에 둡니다.**  
완료 후 Git commit → push → GitHub PR로 협업합니다.

## 로컬 경로 (dev RTMC)

```
C:\Users\djkim\OneDrive\RMTC_MSI\서비스기획팀\커서_프로젝트\VD-IMS\보건소 중앙관제\cursor
```

Cursor: **File → Open Folder** → 위 `cursor` 폴더 **또는** 상위 `VD-IMS` 전체.

## 폴더 구조

| 경로 | 용도 |
|------|------|
| `cursor/html/` | HTML·CSS·JS 프로토타입 (**여기서 수정**) |
| `cursor/docs/` | 기획·정책 md (기획서와 동기화) |
| `../프로토타입/` | GitHub/PR에 노출된 **배포용** 사본 — PR 전 `sync` 스크립트로 맞춤 |
| `../기획서/` | 공식 기획 md (레포 루트) |

## Cursor Browser 실시간 미리보기

**PowerShell** (`cursor/html`에서):

```powershell
cd html
python -m http.server 8765
```

Browser: `http://127.0.0.1:8765/통합-대시보드.html`  
수정 → 저장 → 새로고침.

자세히: [html/로컬-라이브-미리보기.md](./html/로컬-라이브-미리보기.md) (복사본) · [워크플로-로컬-GitHub.md](./워크플로-로컬-GitHub.md)

## GitHub 협업 (요약)

1. 작업: `cursor/html/` · `cursor/docs/` 편집  
2. (권장) `.\sync-to-prototype.ps1` → `../프로토타입/` 반영  
3. `git add` → `git commit` → `git push`  
4. GitHub에서 PR → 리뷰 → merge  

전체 절차: [워크플로-로컬-GitHub.md](./워크플로-로컬-GitHub.md)
