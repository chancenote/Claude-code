# AGENTS.md — 오늘의 명언 (Daily Quotes)

이 파일은 AI 에이전트가 이 프로젝트에서 작업할 때 참고하는 가이드입니다.

## 프로젝트 개요

- **앱**: "오늘의 명언" — 키워드 기반 명언 검색 정적 웹앱
- **스택**: Vanilla HTML/CSS/JS (프레임워크 없음), 단일 파일 (`index.html`)
- **서버**: `server.js` (로컬 개발용 Node.js HTTP 서버, 포트 3002)
- **배포**: Vercel 정적 호스팅 (`vercel.json`으로 설정)
- **패키지 매니저**: 없음 (의존성 없음)

## 빌드 / 실행 / 테스트 명령어

```bash
# 로컬 개발 서버 실행
node server.js                  # → http://localhost:3002

# Vercel 로컬 프리뷰
vercel dev

# 배포
vercel deploy                   # 프리뷰 배포
vercel deploy --prod            # 프로덕션 배포

# 테스트 — 현재 테스트 없음
# 린트 — 현재 린터 설정 없음
# 빌드 — 정적 사이트이므로 빌드 스텝 없음
```

## 프로젝트 구조

```
app-today/
├── index.html          # 전체 앱 (HTML + CSS + JS, ~1360줄)
│   ├── <style>         # CSS (라인 7-503) — 다크 그라디언트, 글래스모피즘
│   ├── <body>          # HTML (라인 505-565) — 검색, 카드, 토스트
│   └── <script>        # JS (라인 567-1360) — 아래 참조
│       ├── QUOTES_DB   # 35+ 카테고리, 카테고리당 5-7개 명언
│       ├── SYNONYM_MAP # 동의어/연관어 매핑 (150+ 항목)
│       ├── findQuotes  # 5단계 검색 (직접→동의어→부분→동의어부분→전문)
│       └── UI 함수들    # 파티클, 카드 생성, 복사/공유, 토스트
├── server.js           # 로컬 개발용 HTTP 서버 (30줄)
├── vercel.json         # Vercel 배포 설정
├── .vercelignore       # server.js 제외
└── .claude/            # Claude 에이전트 설정
```

## 코드 스타일 가이드라인

### HTML/CSS

- **언어**: `<html lang="ko">` — 한국어 우선
- **폰트**: Noto Sans KR (본문), Playfair Display (영문/장식)
- **테마**: 다크 그라디언트 (`#0f0c29 → #302b63 → #24243e`)
- **UI 패턴**: 글래스모피즘 (`backdrop-filter: blur`, `rgba` 배경)
- **단위**: `rem` (폰트), `px` (간격/보더), `%`/`vh` (레이아웃)
- **반응형**: `@media (max-width: 640px)` 브레이크포인트 하나
- **애니메이션**: CSS `@keyframes` + `transition` 사용, JS 애니메이션 없음

### JavaScript

- **스타일**: Vanilla ES6+, 모듈 시스템 없음, 전역 스코프
- **변수 선언**: `const` 우선, 변경 필요시 `let` (var 사용 금지)
- **함수**: `function` 선언문 사용 (화살표 함수는 콜백에서만)
- **네이밍**: camelCase (함수/변수), UPPER_SNAKE (상수 객체)
  - 예: `searchQuotes()`, `QUOTES_DB`, `SYNONYM_MAP`
- **DOM 접근**: `document.getElementById()` — querySelector 미사용
- **이벤트**: `addEventListener` — 인라인 핸들러는 동적 카드의 `onclick`만 허용
- **비동기 시뮬레이션**: `setTimeout`으로 로딩 UX 구현 (실제 API 없음)
- **문자열**: 템플릿 리터럴 (`) 사용

### 데이터 구조

```javascript
// 명언 DB — 카테고리 키 → 명언 배열
QUOTES_DB = {
  "카테고리명": [
    { ko: "한국어 명언", en: "English quote", author: "이름 (English Name)" }
  ]
};

// 동의어 맵 — 검색어 → DB 카테고리 키 배열
SYNONYM_MAP = {
  "검색어": ["카테고리1", "카테고리2"]
};
```

### 명언 데이터 품질 규칙 (중요)

- **author 형식**: `"한글이름 (English Name)"` — 속담은 `"한국 속담 (Korean Proverb)"`
- **출처 검증 필수**: 새 명언 추가 시 반드시 원전/실제 발언 확인
- **번역 정확도**: ko와 en이 의미적으로 정확히 대응해야 함
- **중복 방지**: 같은 명언이 여러 카테고리에 들어가지 않도록

### 검색 알고리즘 (5단계 매칭)

1. **직접 매칭**: DB 키와 정확히 일치
2. **동의어 매칭**: SYNONYM_MAP으로 관련 카테고리 탐색
3. **부분 매칭**: DB 키에 검색어가 포함되거나 역포함
4. **동의어 부분 매칭**: SYNONYM_MAP 키에서 부분 매칭
5. **전문 검색**: 명언 본문(ko/en)에서 키워드 검색

## 커밋 컨벤션

루트 `AGENTS.md` 컨벤션 따름:

```
<gitmoji> <type>: <한국어 설명>

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>
```

예시:
```
✨ feat: 명언 카테고리 "과학" 추가
🐛 fix: 모바일에서 검색 버튼 레이아웃 깨지는 문제 수정
🎨 improve: 명언 검색 알고리즘 부분 매칭 정확도 개선
```

## 알려진 제약 사항

- 전체 앱이 단일 HTML 파일 (분리되지 않음)
- 테스트/린터/빌드 시스템 없음
- "AI 추천" 버튼은 실제 AI가 아닌 랜덤 키워드 선택
- `escapeHtml()`이 `<`, `>`, `&` 이스케이프 미처리 (XSS 취약)
- HTTPS 없는 환경에서 클립보드 API 실패 가능
- SEO 메타 태그, OG 태그 없음
- ARIA 레이블 없음 (접근성 미흡)

## 작업 시 주의사항

1. `index.html` 수정 시 CSS/JS가 같은 파일에 있으므로 라인 번호 주의
2. `QUOTES_DB` 수정 시 `SYNONYM_MAP`과 `KEYWORD_CATEGORIES` 동기화 필요
3. 명언 추가/수정 시 출처 검증 필수 — 오인용(misattribution) 주의
4. 모바일 640px 브레이크포인트 반드시 확인
5. Vercel 배포 시 `server.js`는 `.vercelignore`로 제외됨
