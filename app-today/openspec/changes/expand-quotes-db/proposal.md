## Why

현재 앱은 35개 카테고리에 약 200개의 명언만 보유해, 같은 키워드 검색 시 동일한 명언이 반복 노출된다.
"오늘의 명언"이라는 앱의 본질에 충실하려면 경영자 명언·심금을 울리는 문구·철학·동기부여 등 다양한 주제에 걸쳐 수천 개 이상의 검증된 이중언어 명언이 필요하다.

## What Changes

- `QUOTES_DB`를 35개 카테고리 / ~200개 → **100개+ 카테고리 / 3,000개+** 명언으로 대폭 확장
- 새 주제 추가: 경영/기업가정신, 위로/치유(심금), 철학/인문, 동기부여, 스포츠, 영성/마음챙김, 과학/혁신, 인간관계심화, 계절/감성 등
- `quotes-data.js` 별도 파일로 명언 데이터 분리 (index.html 가독성·유지보수성 확보)
- `SYNONYM_MAP` 확장 — 신규 카테고리 커버
- `KEYWORD_CATEGORIES` 업데이트 — AI 추천 키워드 다양화
- 검색 시 항상 3개 명언 표시 유지 (기존 로직 동일)
- 이중언어 표시(ko↔en) 유지 (기존 UI 동일)

## Capabilities

### New Capabilities
- `expanded-quotes-db`: 100개+ 카테고리, 3,000개+ 검증된 이중언어 명언 데이터셋 (quotes-data.js)
- `quotes-file-split`: 명언 데이터를 index.html에서 분리해 quotes-data.js로 관리하는 아키텍처

### Modified Capabilities
- (기존 spec 없음 — 수정 대상 없음)

## Impact

- 신규 파일: `quotes-data.js` (명언 DB + 동의어 맵 + 키워드 카테고리)
- 수정 파일: `index.html` — `<script src="quotes-data.js">` 태그 추가, 기존 인라인 데이터 제거
- 파일 크기: quotes-data.js 약 800KB~1.5MB 예상 (정적 호스팅 허용 범위)
- Vercel 배포 영향 없음 (정적 파일 추가만)
- `.vercelignore` 수정 불필요
