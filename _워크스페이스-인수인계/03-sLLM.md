# PV-IMS SLLM

## 현재 경로

`D:\Desktop\서비스기획팀\커서활용\PV-IMS(feat.cursor)\PV-IMS\pv-ims-sllm`  
사이드바 이름: `sLLM 구현` (같은 `cursor` 그룹)

**다시 열 때:** `pv-ims-sllm`만 Open Folder.

```bash
copy .env.example .env
npm run dev
# http://localhost:8787/
```

## 무엇인 프로젝트인가

핌스 메인 HTML과 **분리된** 백신 이상반응 도메인 SLLM + RAG PoC.

- Gateway `:8787` Chat + RAG Search
- BM25 + Embedding(Ollama nomic-embed-text) hybrid
- 수치 Tool: 보고율, AE 분석, LOT 신호, 코호트 outlook
- 루트 `pv_ims_prototype_*.html`은 수정 금지. 데이터는 `npm run sync:data`로 복사만

상세: `README.md`

## 관련 채팅

| 제목 | ID | 마지막 | 요지 |
|---|---|---|---|
| 핌스2 | [핌스2](bb94b8d2-1ace-4d78-a22f-ec985419768d) | 2026-09-09 | 「어시스턴트를 백신 이상반응 SLLM으로 개발하고 싶다」. 작은 모델 + 도메인 지식 + RAG. 폴더 분리 |
| ML-DL 적용 방안 | [ML-DL 적용 방안](2dca349e-f72b-4586-8700-d3393555c332) | 2026-07-07 | 같은 질문으로 SLLM 방향 논의. 비교 목업 HTML도 이 계열 |

## 지금 상태

- RAG hybrid, Tool JSON, Ollama/OpenAI 분기까지 README 기준으로 구현됨
- LLM 미연결이면 RAG 검색 초안으로 폴백
- LoRA 폴더가 있음 (`lora/README.md`). 학습 본작업은 후속일 수 있음

## 다음에 할 일

1. `.env` + Ollama `qwen2.5:3b` / `nomic-embed-text` 연결 확인
2. 이상반응 질의 시나리오를 채팅 UI에서 검증
3. 핌스 메인 HTML에 임베드하지 말고 이 서버를 독립 유지

## 신규 채팅 시작 문구

```
이 워크스페이스는 PV-IMS SLLM + RAG 독립 PoC 다. 경로 pv-ims-sllm, 포트 8787.

규칙:
- 상위 루트 pv_ims_prototype_*.html, pvims-*.js 는 수정하지 마라.
- 데이터는 npm run sync:data 로 복사만 한다.
- RAG: BM25 + nomic-embed-text + RRF. 인덱스 없으면 BM25 폴백.
- Tool: get_dashboard_stats, get_ae_analysis, get_lot_signals, get_cohort_outlook
- LLM은 Ollama(qwen2.5:3b) 우선, 없으면 RAG 초안 폴백.

목표:
백신 이상반응 도메인 어시스턴트. 작은 모델 + 도메인 지식(RAG) + 숫자는 Tool만.

지금 할 일:
(여기에 요청을 한 줄로 적는다)
```
