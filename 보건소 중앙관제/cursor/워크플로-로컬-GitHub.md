# 로컬 OneDrive ↔ Cursor ↔ GitHub

## 1. 처음 한 번: Git 연결

### A. 전체 레포 clone (권장)

```powershell
cd "C:\Users\djkim\OneDrive\RMTC_MSI\서비스기획팀\커서_프로젝트"
git clone https://github.com/djkim-rtmc/VD-IMS.git
cd VD-IMS
git checkout cursor/bhc-html-prototypes
```

OneDrive에 **이미** `VD-IMS\보건소 중앙관제`만 있다면:

- 그 내용을 `clone`한 `VD-IMS\보건소 중앙관제`와 **병합**하거나  
- OneDrive 쪽을 백업 후 **clone 결과로 교체**하는 편이 Git 충돌이 적습니다.

### B. 이미 OneDrive `VD-IMS`가 Git 루트인 경우

```powershell
cd "C:\Users\djkim\OneDrive\RMTC_MSI\서비스기획팀\커서_프로젝트\VD-IMS"
git remote -v
git fetch origin
git checkout cursor/bhc-html-prototypes
git pull
```

`cursor/` 폴더가 없으면 `git pull` 후 생깁니다.

---

## 2. 일상 작업

| 단계 | 할 일 |
|------|--------|
| 열기 | Cursor → `...\VD-IMS\보건소 중앙관제\cursor` (또는 `VD-IMS` 전체) |
| 편집 | `cursor/html/*.html`, `cursor/docs/*.md` |
| 미리보기 | `cursor/html`에서 `python -m http.server 8765` → Browser |
| 동기화 | `cursor\sync-to-prototype.ps1` (프로토타입 폴더에 반영) |
| 저장 | `git status` → `git add` → `git commit -m "..."` |
| 협업 | `git push origin cursor/bhc-html-prototypes` → GitHub PR |

**매 저장마다 push 할 필요 없습니다.** 로컬에서 Browser로 충분히 본 뒤, 묶음 단위로 commit/push 하면 됩니다.

---

## 3. Project(Cloud) 채팅과의 관계

| | Cloud Project | PC `cursor/` |
|---|---------------|----------------|
| 파일 위치 | Agent VM | OneDrive PC |
| Cursor Browser | PC localhost와 **연동 안 됨** | **연동 됨** |
| 대량 수정·PR | Agent에 맡기기 좋음 | 직접·Agent(로컬 워크스페이스) |

Cloud에서 수정된 내용을 PC에 반영: `git pull`  
PC에서 수정한 내용을 협업: `git push` + PR

---

## 4. 브랜치

- 진행 중: `cursor/bhc-html-prototypes` (PR #1)  
- 완료 후 merge → `main`  
- 새 작업: `main`에서 `cursor/작업명-날짜` 브랜치 생성

---

## 5. 최종 산출물

- HTML: `cursor/html/` → sync 후 `프로토타입/`  
- md: `cursor/docs/` ↔ `기획서/` (필요 시 수동 또는 sync 스크립트 확장)
