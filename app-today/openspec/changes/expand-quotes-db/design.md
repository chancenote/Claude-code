## Context

현재 `index.html`은 약 1,360줄이며, 그 중 줄 567~1,051이 QUOTES_DB / SYNONYM_MAP / KEYWORD_CATEGORIES 데이터다. 35개 카테고리 × 5~7개 = 약 200개 명언. 같은 키워드를 반복 검색하면 동일 명언이 노출되고, 주제 다양성이 부족하다. "오늘의 명언" 앱이 일일 영감의 소스로 기능하려면 카테고리를 100개+, 명언을 3,000개+로 확장해야 한다.

스택 제약: Vanilla HTML/CSS/JS, 빌드 시스템 없음, Vercel 정적 호스팅.

## Goals / Non-Goals

**Goals:**
- 명언 데이터를 `quotes-data.js` 별도 파일로 분리해 index.html 유지보수성 확보
- QUOTES_DB 100개+ 카테고리, 3,000개+ 이중언어 명언 (ko + en, 출처 검증)
- 경영자 명언·심금을 울리는 문구·철학·동기부여 등 신규 주제군 추가
- SYNONYM_MAP 신규 카테고리 커버로 확장
- 기존 검색 알고리즘(5-layer) 및 3개 카드 표시 UI 무변경

**Non-Goals:**
- 검색 알고리즘 개선 (5-layer 로직 그대로 유지)
- UI/UX 변경 (카드 디자인, 파티클 등 무변경)
- 서버사이드 API 도입 없음
- 번들러/빌드 도구 도입 없음

## Decisions

### D1: 데이터 분리 — quotes-data.js 별도 파일

**선택**: `<script src="quotes-data.js"></script>`를 `index.html` 내 메인 `<script>` 직전에 추가.  
`QUOTES_DB`, `SYNONYM_MAP`, `KEYWORD_CATEGORIES` 변수를 quotes-data.js에서 전역 선언.

**이유**: index.html이 단일 파일 원칙을 유지하면서도, 명언 데이터 파일이 수천 줄이 되면 한 파일에서 관리 불가. quotes-data.js는 정적 파일이므로 CDN 캐시 효율도 좋음.

**대안 고려**: 
- JSON 파일 + fetch() → 비동기 처리 필요, 초기 로딩 UX 복잡해짐 (거부)
- index.html 내 인라인 유지 → 파일이 10,000줄+ 되어 편집 불가 (거부)

### D2: 데이터 형식 — 기존 {ko, en, author} 유지

기존 카드 렌더링(`createQuoteCard`), 복사/공유 로직이 이 구조에 의존하므로 변경 없음.

### D3: 카테고리 전략 — 100개 카테고리, 카테고리당 15~30개 명언

- 기존 35개 카테고리는 그대로 유지하되 명언 수를 5~7개 → 15~30개로 확장
- 신규 65개+ 카테고리 추가:
  - **경영/비즈니스군**: 경영, 기업가정신, 마케팅, 고객서비스, 혁신, 스타트업, 전략
  - **감성/치유군**: 위로, 치유, 공감, 슬픔, 그리움, 감동, 상처
  - **철학/인문군**: 철학, 존재, 진리, 이성, 윤리, 역사, 문학
  - **동기부여군**: 자기계발, 습관, 목표달성, 마음챙김, 집중력, 회복력
  - **스포츠군**: 스포츠, 승부, 팀워크, 훈련, 챔피언십
  - **과학/기술군**: 과학, 발명, 발견, 기술, 인공지능
  - **영성군**: 명상, 영혼, 신앙, 용서, 연민
  - **계절/자연군**: 봄, 여름, 가을, 겨울, 달, 별, 바다, 산
  - **인간관계심화군**: 신뢰, 배려, 용서, 약속, 소통, 경청
  - **사회/리더십군**: 봉사, 정치, 민주주의, 책임, 공동체

### D4: 명언 수량 목표

| 구분 | 카테고리 수 | 카테고리당 평균 | 총 명언 수 |
|------|------------|----------------|-----------|
| 기존 유지·확장 | 35 | 20개 | 700개 |
| 신규 추가 | 65 | 30개 | 1,950개 |
| **합계** | **100+** | — | **2,650개+** |

목표치인 3,000개는 일부 카테고리에 30개 이상 수록하여 달성.

### D5: 출처 검증 정책

- 실존 인물의 발언은 널리 알려진 출처 기준 수록
- 불확실한 경우 `"작자 미상 (Unknown)"` 또는 `"○○ 속담 (○○ Proverb)"` 표기
- 오인용(misattribution) 방지를 위해 유명 오인용 목록 참고 (예: 아인슈타인에게 잘못 귀속된 명언)

## Risks / Trade-offs

- **[파일 크기]** quotes-data.js 예상 크기 1~2MB → CDN 캐시 후 재방문 시 무료. 초회 방문 시 LTE 기준 1~2초 추가 로딩. → 완화: 데이터 압축(minify) 고려 또는 Vercel Edge Cache 활용
- **[출처 오류]** 수천 개 명언 수동 검증 시간 비용 → 완화: 유명 인물 명언은 1차 검증 후 수록, 불확실하면 Unknown 처리
- **[동의어 맵 불완전]** 신규 카테고리 추가 후 SYNONYM_MAP 매핑 누락 가능 → 완화: 카테고리 추가 시 관련 동의어 동시 추가 원칙

## Migration Plan

1. `quotes-data.js` 파일 생성 — QUOTES_DB, SYNONYM_MAP, KEYWORD_CATEGORIES 전역 선언
2. `index.html`의 `<script>` 태그 직전에 `<script src="quotes-data.js"></script>` 추가
3. `index.html` 내 기존 QUOTES_DB(줄 568~892), SYNONYM_MAP(줄 894~1051), KEYWORD_CATEGORIES(줄 1053~1063) 블록 삭제
4. `ALL_KEYWORDS` 선언은 index.html에 유지 (QUOTES_DB 로드 후 실행)
5. 로컬 `node server.js` 로 동작 확인 후 Vercel 배포

**롤백**: index.html에서 `<script src="quotes-data.js"></script>` 제거 + 기존 데이터 복원 (git revert)

## Open Questions

- quotes-data.js 파일 minify 여부: 가독성 vs 파일 크기 트레이드오프 — 일단 readable 포맷으로 제공, 추후 build step 도입 시 minify
