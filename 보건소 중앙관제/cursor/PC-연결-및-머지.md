# PC OneDrive ↔ GitHub ↔ Cursor (push · merge)

## 지금 GitHub 상태 (2026-10-28)

| 브랜치 | `보건소 중앙관제` 내용 |
|--------|------------------------|
| **main** | PNG 6장만 (웹 업로드) |
| **cursor/bhc-html-prototypes** | `cursor/`, `프로토타입/`, `기획서/`, PNG — [PR #1](https://github.com/djkim-rtmc/VD-IMS/pull/1) |

**main에 HTML·cursor 폴더가 안 보이는 것은 정상**입니다. PR merge 후 main에 합쳐집니다.

---

## 1. PC 폴더와 Git 연결

Git 루트는 **`VD-IMS` 전체**여야 합니다 (하위 `보건소 중앙관제`만 Git 루트로 두지 마세요).

```
C:\Users\djkim\OneDrive\RMTC_MSI\서비스기획팀\커서_프로젝트\VD-IMS\   ← .git 위치
    보건소 중앙관제\
        cursor\          ← Cursor에서 편집
        프로토타입\
        *.png
```

### A) `VD-IMS`에 `.git`이 **없을 때** (GitHub에 PNG만 올린 경우)

PowerShell:

```powershell
cd "C:\Users\djkim\OneDrive\RMTC_MSI\서비스기획팀\커서_프로젝트"

# 기존 폴더 백업 (이름만 바꿈)
Rename-Item VD-IMS VD-IMS_backup_날짜

# clone
git clone https://github.com/djkim-rtmc/VD-IMS.git VD-IMS
cd VD-IMS
git checkout cursor/bhc-html-prototypes

# backup에만 있던 파일이 있으면 수동으로 VD-IMS\보건소 중앙관제 로 복사
```

### B) 이미 `git clone` 된 `VD-IMS`가 있을 때

```powershell
cd "C:\Users\djkim\OneDrive\RMTC_MSI\서비스기획팀\커서_프로젝트\VD-IMS"
git fetch origin
git checkout cursor/bhc-html-prototypes
git pull origin cursor/bhc-html-prototypes
```

### C) Cursor에서 열기

- **File → Open Folder** → `...\VD-IMS` (권장) 또는 `...\VD-IMS\보건소 중앙관제\cursor`
- 좌측 **Source Control**에 Git이 보이면 연결 성공

---

## 2. 일상 작업 (Browser + 편집)

```powershell
cd "...\VD-IMS\보건소 중앙관제\cursor\html"
python -m http.server 8765
```

Cursor Browser: `http://127.0.0.1:8765/통합-대시보드.html`

편집 → 저장 → 새로고침. **push는 나중에 한 번에.**

---

## 3. GitHub에 올리기 (push)

Cursor **Source Control** (Ctrl+Shift+G):

1. `보건소 중앙관제\cursor\sync-to-prototype.ps1` 실행 (선택, 프로토타입 폴더 동기화)
2. 변경 파일 **Stage** (+)
3. **Commit message** 입력 → Commit
4. **Sync / Push** (또는 터미널):

```powershell
cd "...\VD-IMS"
git push origin cursor/bhc-html-prototypes
```

→ [PR #1](https://github.com/djkim-rtmc/VD-IMS/pull/1) diff 자동 갱신

---

## 4. main에 merge (협업 반영)

### 방법 1 — GitHub 웹 (가장 단순)

1. [PR #1](https://github.com/djkim-rtmc/VD-IMS/pull/1) 열기  
2. **Merge pull request** → Confirm  
3. main 브랜치에 `cursor/`, `프로토타입/` 등 표시됨  

### 방법 2 — Cursor / 터미널 (로컬에서 merge 후 push)

```powershell
cd "...\VD-IMS"
git checkout main
git pull origin main
git merge cursor/bhc-html-prototypes
git push origin main
```

(팀 정책상 **PR merge만** 허용이면 방법 1 사용)

### merge 후 PC 동기화

```powershell
git checkout main
git pull origin main
```

---

## 5. 다음 작업부터

```powershell
git checkout main
git pull
git checkout -b cursor/다음-작업-이름
# cursor/html 편집 → commit → push → 새 PR
```

---

## 체크리스트

- [ ] `VD-IMS\.git` 존재  
- [ ] 브랜치 `cursor/bhc-html-prototypes`  
- [ ] `보건소 중앙관제\cursor\html` 존재  
- [ ] Cursor Source Control에서 push 가능  
- [ ] PR #1 merge → main에 HTML·cursor 표시  
