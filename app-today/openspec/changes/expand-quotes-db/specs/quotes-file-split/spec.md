## ADDED Requirements

### Requirement: quotes-data.js 별도 파일로 데이터 분리
시스템은 `QUOTES_DB`, `SYNONYM_MAP`, `KEYWORD_CATEGORIES`를 `quotes-data.js` 파일에 전역 변수로 선언해야 한다(SHALL).  
`index.html`은 메인 `<script>` 블록 직전에 `<script src="quotes-data.js"></script>`를 포함해야 한다(SHALL).  
`index.html` 내의 인라인 데이터 블록(QUOTES_DB, SYNONYM_MAP, KEYWORD_CATEGORIES)은 제거되어야 한다(SHALL).

#### Scenario: quotes-data.js 로드 확인
- **WHEN** 브라우저가 index.html을 로드할 때
- **THEN** quotes-data.js가 먼저 로드되어 QUOTES_DB가 전역 스코프에 존재해야 한다

#### Scenario: 검색 기능 정상 동작 유지
- **WHEN** 사용자가 키워드로 검색할 때
- **THEN** 기존과 동일하게 3개의 명언 카드가 표시되어야 한다

#### Scenario: ALL_KEYWORDS 유효
- **WHEN** index.html 스크립트가 실행될 때
- **THEN** `const ALL_KEYWORDS = Object.keys(QUOTES_DB)` 호출 시 100개 이상의 키가 반환되어야 한다

### Requirement: Vercel 정적 배포 호환성
`quotes-data.js`는 Vercel 정적 파일로 제공되어야 한다(SHALL).  
`.vercelignore`에 포함되지 않아야 하며, `vercel.json` 설정 변경 없이 동작해야 한다(SHALL).

#### Scenario: Vercel 배포 후 접근 가능
- **WHEN** Vercel에 배포된 후
- **THEN** `https://<domain>/quotes-data.js` URL로 직접 접근 가능해야 한다

#### Scenario: server.js 로컬 서버에서 제공
- **WHEN** `node server.js`로 로컬 서버를 실행할 때
- **THEN** `http://localhost:3002/quotes-data.js`에서 파일이 제공되어야 한다
