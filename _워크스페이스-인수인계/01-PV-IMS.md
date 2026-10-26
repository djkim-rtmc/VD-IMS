# PV-IMS (핌스 프로토타입)

## 현재 경로

`D:\Desktop\서비스기획팀\커서활용\PV-IMS(feat.cursor)`  
(예전: `D:\Desktop\서비스기획팀\핌스\PV-IMS(feat.cursor)`)

**다시 열 때:** 이 폴더만 Open Folder. 하위 `PV-IMS/강원TP`, `PV-IMS/pv-ims-sllm`은 가능하면 **따로** 연다. 채팅이 섞이지 않는다.

## 무엇인 프로젝트인가

백신 이상반응(PV) IMS HTML 프로토타입. 대시보드·차트·ML 목업·운영DB 8000건 시드가 루트에 있다.

| 위치 | 역할 |
|---|---|
| 루트 `pv_ims_prototype_*.html`, `pvims-*.js` | 핌스 메인 프로토타입. SLLM 작업 시 수정하지 말 것 |
| `PV-IMS/` | 과제별 분리 작업 공간 |
| `PV-IMS/강원TP/` | 강원 돌봄 AI (별도 문서 02) |
| `PV-IMS/pv-ims-sllm/` | SLLM+RAG PoC (별도 문서 03) |

## 관련 채팅 (사이드바 `cursor`)

| 제목 | ID | 마지막 | 요지 |
|---|---|---|---|
| 핌스2 | [핌스2](bb94b8d2-1ace-4d78-a22f-ec985419768d) | 2026-09-09 | `cursor` 폴더를 `PV-IMS`로 분리. SLLM 어시스턴트 방향 논의. 워크스페이스 Open Folder 안내 |
| PV-IMS | [PV-IMS](379cc2b7-1f3f-4b06-9add-c2dc2b095439) | 2026-06-29 | 초기 핌스 프로토타입 작업 |
| Project folder organization | (이번 정리 채팅) | 2026-09-09 | 폴더 이동만. 제품 기능 변경 없음 |

## 지금 상태

- 프로토타입 HTML/JS가 루트에 남아 있다.
- SLLM은 `pv-ims-sllm`으로 분리되어 있고, 루트 프로토타입과 서버를 섞지 않는 것이 규칙이다.
- `cursor`라는 예전 폴더명은 더 이상 쓰지 않고 `PV-IMS`를 쓴다.

## 다음에 할 일 (이어서)

1. 핌스 메인 프로토타입을 손볼지, SLLM만 손볼지 **폴더를 나눠 연다.**
2. 이상반응 SLLM은 03 문서로 넘어간다.
3. 강원 자가체크·AI 브리핑은 02 문서로 넘어간다.

## 신규 채팅 시작 문구

```
이 워크스페이스는 PV-IMS(핌스) HTML 프로토타입이다.

규칙:
- 루트 pv_ims_prototype_*.html, pvims-*.js 는 핌스 메인 목업이다.
- SLLM 작업은 PV-IMS/pv-ims-sllm 에서만 한다. 루트 프로토타입을 건드리지 마라.
- 강원 TP(자가체크·AI 브리핑)는 PV-IMS/강원TP/gangwon-tp 이다. 포트 3459. v1.0.0·v2.0.0은 참고용으로 수정하지 마라.

지금 할 일:
(여기에 요청을 한 줄로 적는다)
```
