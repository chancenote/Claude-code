# Claude Code 프로젝트 모음

Claude Code로 만든 프로젝트들을 모아놓은 저장소입니다.

## 프로젝트 목록

### 1. 오늘 할일 관리 (`todo-app.html`)
할일을 추가/완료/삭제할 수 있는 심플한 투두 앱

- **기술:** HTML, CSS, JavaScript (단일 파일)
- **실행:** 브라우저에서 `todo-app.html` 열기

### 2. 오늘의 명언 (`app-today/`)
매일 새로운 명언을 보여주는 웹 앱

- **기술:** HTML, CSS, JavaScript, Node.js
- **실행:** `cd app-today && node server.js` → http://localhost:3002
- **배포:** Vercel

### 3. 코딩 용어사전 (`code-dic/coding-dictionary/`)
코딩 초보자를 위한 프로그래밍 용어사전. 60개 내장 용어를 쉬운 비유와 예시 코드로 설명합니다.

- **기술:** Next.js, React, TypeScript, Tailwind CSS
- **주요 기능:**
  - `Ctrl+K` / `/` 키로 빠른 검색
  - 다크모드 지원
  - 최근 검색 기록
  - Notion API 연동 로깅
- **실행:** `cd code-dic/coding-dictionary && npm install && npm run dev`
- **배포:** Vercel

### 4. Claude Code 30일 커리큘럼 (`excel-claude-code/`)
Claude Code 마스터를 위한 30일 학습 커리큘럼 랜딩 페이지 및 Excel 생성기

- **기술:** HTML, CSS, JavaScript, ExcelJS
- **실행:** 브라우저에서 `excel-claude-code/index.html` 열기
- **배포:** Vercel

## 기술 스택

| 기술 | 사용처 |
| :--- | :--- |
| HTML / CSS / JS | 전체 프로젝트 |
| Next.js / React | 코딩 용어사전 |
| TypeScript | 코딩 용어사전 |
| Tailwind CSS | 코딩 용어사전 |
| Node.js | 오늘의 명언, 커리큘럼 |
| Vercel | 배포 |

## 커밋 컨벤션

Gitmoji를 사용합니다.

| Gitmoji | 유형 | 의미 |
| :--- | :--- | :--- |
| ✨ | Feat | 새로운 기능 추가 |
| 🐛 | Fix | 버그 수정 |
| 📝 | Docs | 문서 수정 |
| 💄 | Style | 코드 포맷팅 |
| ♻️ | Refactor | 코드 리팩토링 |
| ✅ | Test | 테스트 추가 및 수정 |
