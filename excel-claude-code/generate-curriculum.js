const ExcelJS = require('exceljs');
const path = require('path');

async function generateCurriculum() {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = 'Claude Code Curriculum Generator';
  workbook.created = new Date();

  // ===== COLOR PALETTE =====
  const colors = {
    primary: '1B1F3B',       // Deep navy
    secondary: '2D6A4F',    // Forest green
    accent: 'D4A574',       // Warm gold
    headerBg: '1B1F3B',     // Deep navy
    headerText: 'FFFFFF',   // White
    weekBg: ['E8F0FE', 'E6F4EA', 'FFF3E0', 'FCE4EC'], // Week colors (light)
    weekAccent: ['4285F4', '34A853', 'FB8C00', 'E91E63'], // Week accent colors
    white: 'FFFFFF',
    lightGray: 'F5F5F5',
    borderColor: 'D0D0D0',
    completed: '34A853',     // Green
    inProgress: 'FB8C00',    // Orange
    notStarted: 'E0E0E0',   // Light gray
    textDark: '212121',
    textMedium: '616161',
    textLight: '9E9E9E',
  };

  // ===== CURRICULUM DATA =====
  const curriculum = [
    // WEEK 1: Foundation
    {
      day: 1, week: 1, phase: 'Foundation',
      title: 'Claude Code 소개 & 환경 설정',
      objective: 'Claude Code가 무엇인지 이해하고 개발 환경을 완벽히 설정한다',
      topics: '• Claude Code 개념과 아키텍처 이해\n• Node.js, npm 설치 및 설정\n• Claude Code CLI 설치 (npm install -g @anthropic/claude-code)\n• API Key 발급 및 환경변수 설정\n• 터미널/셸 기초 (cd, ls, mkdir 등)',
      practice: '1. Claude Code 설치 후 "claude" 명령어로 실행 확인\n2. 간단한 프로젝트 폴더 생성\n3. "Hello World" 대화 시작\n4. /help 명령어로 사용 가능한 기능 탐색',
      hours: '5h',
      difficulty: '★☆☆☆☆',
      category: 'Setup'
    },
    {
      day: 2, week: 1, phase: 'Foundation',
      title: '기본 인터페이스 & 명령어 체계',
      objective: 'Claude Code의 UI, 슬래시 명령어, 단축키를 능숙하게 사용한다',
      topics: '• 슬래시 명령어 전체 정리 (/help, /clear, /compact, /cost 등)\n• 키보드 단축키 (Esc 취소, Tab 자동완성 등)\n• 대화 컨텍스트 관리 및 compact 모드\n• 세션 관리와 비용 모니터링\n• Permission 모드 이해 (Yolo, Normal, Strict)',
      practice: '1. 모든 슬래시 명령어 하나씩 실행해보기\n2. /cost로 비용 확인 실습\n3. /compact로 컨텍스트 압축 실습\n4. Permission 모드 전환 실습',
      hours: '5h',
      difficulty: '★☆☆☆☆',
      category: 'Basics'
    },
    {
      day: 3, week: 1, phase: 'Foundation',
      title: '파일 시스템 탐색 & 코드 읽기',
      objective: 'Claude Code로 프로젝트 구조를 파악하고 코드를 분석하는 방법을 익힌다',
      topics: '• 프로젝트 구조 파악 요청 방법\n• 코드 읽기 및 분석 프롬프트 작성\n• 파일 검색과 내용 탐색\n• 코드 설명 요청 테크닉\n• 의존성 및 import 구조 파악',
      practice: '1. 오픈소스 프로젝트 clone 후 Claude Code로 구조 분석\n2. "이 프로젝트의 전체 구조를 설명해줘" 실습\n3. 특정 함수의 동작 원리 질문하기\n4. 코드 의존성 트리 파악 연습',
      hours: '5h',
      difficulty: '★★☆☆☆',
      category: 'Navigation'
    },
    {
      day: 4, week: 1, phase: 'Foundation',
      title: '프롬프트 엔지니어링 기초',
      objective: '효과적인 프롬프트 작성법을 익혀 Claude Code의 응답 품질을 극대화한다',
      topics: '• 명확한 지시문 작성 원칙\n• 컨텍스트 제공의 중요성\n• 단계적 요청 vs 한번에 요청\n• 구체적 예시 포함 기법\n• 역할 부여 프롬프팅',
      practice: '1. 같은 작업을 다양한 프롬프트로 요청해보고 결과 비교\n2. 모호한 프롬프트 → 구체적 프롬프트 개선 연습\n3. 복잡한 작업을 단계별로 분해하는 연습\n4. 5가지 프롬프트 패턴 작성 및 테스트',
      hours: '5h',
      difficulty: '★★☆☆☆',
      category: 'Prompting'
    },
    {
      day: 5, week: 1, phase: 'Foundation',
      title: 'Git 연동 & 버전 관리',
      objective: 'Claude Code와 Git을 연동하여 안전한 코드 변경 관리를 수행한다',
      topics: '• Git 기초 (init, add, commit, push, pull)\n• Claude Code의 Git 인식 기능\n• /commit 명령어로 자동 커밋 메시지 생성\n• 브랜치 관리와 PR 생성\n• 코드 리뷰 요청 방법',
      practice: '1. Git 저장소 생성 후 Claude Code로 작업\n2. /commit으로 자동 커밋 메시지 생성 실습\n3. 브랜치 생성 → 코드 변경 → PR 생성 워크플로우\n4. 코드 diff 분석 요청 연습',
      hours: '5h',
      difficulty: '★★☆☆☆',
      category: 'Git'
    },
    {
      day: 6, week: 1, phase: 'Foundation',
      title: 'CLAUDE.md & 프로젝트 설정',
      objective: 'CLAUDE.md를 작성하여 프로젝트별 맞춤 지시사항을 설정한다',
      topics: '• CLAUDE.md 파일의 역할과 구조\n• 프로젝트 컨벤션 명시 방법\n• 코딩 스타일, 아키텍처 규칙 설정\n• 다중 CLAUDE.md 계층 구조\n• .claude/ 디렉토리 활용',
      practice: '1. 프로젝트 루트에 CLAUDE.md 작성\n2. 코딩 스타일 가이드 포함하기\n3. 자주 사용하는 명령어 문서화\n4. 하위 디렉토리별 CLAUDE.md 설정',
      hours: '5h',
      difficulty: '★★☆☆☆',
      category: 'Config'
    },
    {
      day: 7, week: 1, phase: 'Foundation',
      title: '1주차 종합 복습 & 미니 프로젝트',
      objective: '1주차에 배운 내용을 종합하여 간단한 프로젝트를 완성한다',
      topics: '• 1주차 핵심 개념 정리\n• CLI 도구 전체 복습\n• 프롬프트 패턴 복습\n• Git 워크플로우 복습\n• CLAUDE.md 최적화',
      practice: '1. 간단한 CLI 도구(할일 관리) 프로젝트 시작부터 완성\n2. CLAUDE.md 포함 프로젝트 구성\n3. Git으로 버전 관리하며 개발\n4. 1주차 학습 노트 정리',
      hours: '6h',
      difficulty: '★★☆☆☆',
      category: 'Review'
    },

    // WEEK 2: Core Skills
    {
      day: 8, week: 2, phase: 'Core Skills',
      title: '코드 생성 - 함수 & 모듈',
      objective: 'Claude Code로 고품질 함수와 모듈을 생성하는 기법을 익힌다',
      topics: '• 함수 생성 요청 최적 패턴\n• 입출력 명세 작성법\n• 에러 핸들링 포함 요청\n• 모듈 분리 및 구조화\n• 타입 안전성 확보 (TypeScript)',
      practice: '1. 다양한 유틸리티 함수 생성 (문자열, 배열, 날짜)\n2. 에러 처리가 포함된 API 호출 함수 생성\n3. 모듈 분리가 잘 된 코드 생성 요청\n4. TypeScript 타입 정의 생성',
      hours: '5h',
      difficulty: '★★★☆☆',
      category: 'Code Gen'
    },
    {
      day: 9, week: 2, phase: 'Core Skills',
      title: '코드 생성 - 클래스 & 패턴',
      objective: '객체지향 설계와 디자인 패턴을 Claude Code로 구현한다',
      topics: '• 클래스 설계 요청 방법\n• 디자인 패턴 구현 (싱글톤, 팩토리, 옵저버 등)\n• 상속과 컴포지션 결정\n• SOLID 원칙 적용\n• 인터페이스/추상 클래스 설계',
      practice: '1. 간단한 게임 캐릭터 시스템 설계 (클래스 상속)\n2. Observer 패턴으로 이벤트 시스템 구현\n3. Factory 패턴으로 객체 생성 모듈 작성\n4. SOLID 원칙 위반 코드 → 리팩토링',
      hours: '5h',
      difficulty: '★★★☆☆',
      category: 'Code Gen'
    },
    {
      day: 10, week: 2, phase: 'Core Skills',
      title: '코드 리팩토링 & 최적화',
      objective: '기존 코드를 Claude Code로 분석하고 효과적으로 리팩토링한다',
      topics: '• 코드 스멜 탐지 요청\n• 리팩토링 전략 수립\n• 성능 최적화 분석\n• 중복 코드 제거\n• 가독성 개선 기법',
      practice: '1. 의도적으로 나쁜 코드 작성 후 리팩토링 요청\n2. 성능 병목 분석 및 최적화\n3. 중복 코드 통합 실습\n4. 복잡한 조건문 단순화',
      hours: '5h',
      difficulty: '★★★☆☆',
      category: 'Refactor'
    },
    {
      day: 11, week: 2, phase: 'Core Skills',
      title: '테스트 코드 작성',
      objective: 'Claude Code를 활용하여 단위 테스트와 통합 테스트를 작성한다',
      topics: '• 테스트 프레임워크 (Jest, Vitest, pytest 등)\n• 단위 테스트 생성 요청 방법\n• 엣지 케이스 커버리지 요청\n• 목(Mock) 객체 활용\n• TDD 워크플로우',
      practice: '1. 기존 함수에 대한 테스트 코드 자동 생성\n2. 엣지 케이스 포함 테스트 작성\n3. API 호출 함수의 Mock 테스트\n4. TDD로 새 기능 개발 (테스트 먼저)',
      hours: '5h',
      difficulty: '★★★☆☆',
      category: 'Testing'
    },
    {
      day: 12, week: 2, phase: 'Core Skills',
      title: '디버깅 & 에러 해결',
      objective: 'Claude Code로 버그를 진단하고 체계적으로 해결하는 방법을 익힌다',
      topics: '• 에러 메시지 분석 요청\n• 스택 트레이스 해석\n• 논리 오류 탐지\n• 디버깅 전략 수립\n• 로그 분석 기법',
      practice: '1. 의도적 버그가 있는 코드 디버깅\n2. 에러 로그 붙여넣기 → 원인 분석\n3. 성능 이슈 디버깅 (메모리 누수 등)\n4. 비동기 코드 디버깅 실습',
      hours: '5h',
      difficulty: '★★★☆☆',
      category: 'Debug'
    },
    {
      day: 13, week: 2, phase: 'Core Skills',
      title: 'API 개발 & REST 설계',
      objective: 'Claude Code로 RESTful API를 설계하고 구현한다',
      topics: '• REST API 설계 원칙\n• Express.js / FastAPI 서버 구축\n• 라우팅, 미들웨어 설정\n• 요청 검증과 에러 처리\n• API 문서화 (Swagger/OpenAPI)',
      practice: '1. 간단한 CRUD API 서버 생성\n2. 미들웨어 체인 구성\n3. 입력 검증 로직 추가\n4. Swagger 문서 자동 생성',
      hours: '6h',
      difficulty: '★★★☆☆',
      category: 'Backend'
    },
    {
      day: 14, week: 2, phase: 'Core Skills',
      title: '2주차 종합 복습 & 프로젝트',
      objective: '2주차 학습 내용을 실전 프로젝트에 적용한다',
      topics: '• 코드 생성 패턴 복습\n• 테스트/디버깅 워크플로우 복습\n• API 설계 원칙 복습\n• 리팩토링 기법 종합\n• Best Practice 정리',
      practice: '1. 메모 앱 API 백엔드 완성 프로젝트\n2. 전체 테스트 코드 작성\n3. 코드 리뷰 및 리팩토링\n4. 2주차 학습 노트 정리',
      hours: '6h',
      difficulty: '★★★☆☆',
      category: 'Review'
    },

    // WEEK 3: Advanced
    {
      day: 15, week: 3, phase: 'Advanced',
      title: '멀티파일 프로젝트 관리',
      objective: '여러 파일에 걸친 대규모 변경을 효율적으로 수행한다',
      topics: '• 여러 파일 동시 수정 전략\n• 프로젝트 전체 리팩토링\n• 의존성 그래프 이해\n• 대규모 코드 마이그레이션\n• 컨텍스트 윈도우 최적화',
      practice: '1. 5개 이상 파일에 걸친 기능 추가\n2. 폴더 구조 변경 + import 경로 업데이트\n3. 레거시 코드 마이그레이션 실습\n4. 대규모 리팩토링 세션',
      hours: '5h',
      difficulty: '★★★★☆',
      category: 'Advanced'
    },
    {
      day: 16, week: 3, phase: 'Advanced',
      title: 'MCP (Model Context Protocol) 서버',
      objective: 'MCP 서버를 구성하여 Claude Code의 기능을 확장한다',
      topics: '• MCP 프로토콜 개요\n• MCP 서버 설치 및 설정\n• 커스텀 도구 연결\n• 외부 데이터 소스 통합\n• MCP 서버 디버깅',
      practice: '1. 파일 시스템 MCP 서버 설정\n2. 데이터베이스 MCP 연동\n3. 커스텀 MCP 서버 구축\n4. MCP 도구 활용 워크플로우',
      hours: '5h',
      difficulty: '★★★★☆',
      category: 'MCP'
    },
    {
      day: 17, week: 3, phase: 'Advanced',
      title: 'Hooks & 자동화',
      objective: 'Claude Code의 Hook 시스템을 활용하여 워크플로우를 자동화한다',
      topics: '• Hook 시스템 이해 (PreTool, PostTool 등)\n• .claude/settings.json 설정\n• 자동 린팅/포매팅 Hook\n• 커스텀 검증 Hook\n• CI/CD 파이프라인 연동',
      practice: '1. 코드 저장 시 자동 포매팅 Hook 설정\n2. 커밋 전 자동 테스트 Hook 구현\n3. 커스텀 검증 로직 Hook 작성\n4. GitHub Actions 연동 실습',
      hours: '5h',
      difficulty: '★★★★☆',
      category: 'Automation'
    },
    {
      day: 18, week: 3, phase: 'Advanced',
      title: '데이터베이스 & ORM',
      objective: 'Claude Code로 데이터베이스 스키마 설계부터 쿼리까지 구현한다',
      topics: '• DB 스키마 설계 요청\n• SQL 쿼리 생성 및 최적화\n• ORM 코드 생성 (Prisma, Drizzle 등)\n• 마이그레이션 파일 작성\n• 데이터 시드 스크립트 생성',
      practice: '1. ERD 기반 스키마 생성\n2. 복잡한 SQL 쿼리 작성 요청\n3. Prisma 스키마 + 마이그레이션\n4. 시드 데이터 스크립트 생성',
      hours: '5h',
      difficulty: '★★★★☆',
      category: 'Database'
    },
    {
      day: 19, week: 3, phase: 'Advanced',
      title: '프론트엔드 개발 (React/Vue)',
      objective: 'Claude Code로 현대적인 프론트엔드 컴포넌트를 생성한다',
      topics: '• 컴포넌트 생성 요청 패턴\n• 상태 관리 구현\n• 스타일링 (CSS-in-JS, Tailwind)\n• 반응형 디자인 구현\n• 접근성(a11y) 고려',
      practice: '1. React 컴포넌트 5개 생성 (카드, 모달, 폼 등)\n2. 상태 관리 로직 구현 (useReducer/Zustand)\n3. Tailwind CSS로 반응형 레이아웃\n4. 접근성 검사 및 개선',
      hours: '6h',
      difficulty: '★★★★☆',
      category: 'Frontend'
    },
    {
      day: 20, week: 3, phase: 'Advanced',
      title: '풀스택 프로젝트 구축',
      objective: '프론트엔드와 백엔드를 연결하는 풀스택 앱을 구축한다',
      topics: '• 풀스택 아키텍처 설계\n• API 연동 (fetch/axios)\n• 인증/인가 시스템\n• 환경변수 관리\n• 배포 준비',
      practice: '1. 풀스택 할일 앱 (React + Express + SQLite)\n2. JWT 인증 시스템 구현\n3. 환경변수 분리 설정\n4. 빌드 스크립트 작성',
      hours: '6h',
      difficulty: '★★★★☆',
      category: 'Fullstack'
    },
    {
      day: 21, week: 3, phase: 'Advanced',
      title: '3주차 종합 복습 & 프로젝트',
      objective: '고급 기능을 활용한 실전 프로젝트를 완성한다',
      topics: '• 멀티파일 관리 복습\n• MCP/Hook 활용 복습\n• 풀스택 아키텍처 복습\n• 성능 최적화 기법\n• 코드 품질 관리',
      practice: '1. 블로그 플랫폼 풀스택 프로젝트\n2. MCP 서버 연동\n3. Hook 기반 자동화 파이프라인\n4. 3주차 학습 노트 정리',
      hours: '6h',
      difficulty: '★★★★☆',
      category: 'Review'
    },

    // WEEK 4: Mastery
    {
      day: 22, week: 4, phase: 'Mastery',
      title: 'Claude Code Agent SDK',
      objective: 'Agent SDK를 이해하고 커스텀 에이전트를 구축한다',
      topics: '• Agent SDK 아키텍처\n• 커스텀 에이전트 설계\n• 도구(Tool) 정의 및 등록\n• 에이전트 오케스트레이션\n• 멀티 에이전트 시스템',
      practice: '1. 기본 에이전트 구축 튜토리얼\n2. 커스텀 도구 3개 구현\n3. 에이전트 간 통신 구현\n4. 실용적인 에이전트 시나리오 작성',
      hours: '5h',
      difficulty: '★★★★★',
      category: 'SDK'
    },
    {
      day: 23, week: 4, phase: 'Mastery',
      title: 'CI/CD & DevOps 통합',
      objective: 'Claude Code를 CI/CD 파이프라인에 통합하여 자동화한다',
      topics: '• GitHub Actions + Claude Code\n• 자동 코드 리뷰 파이프라인\n• PR 자동 분석 설정\n• Docker 컨테이너 생성\n• 배포 자동화 스크립트',
      practice: '1. GitHub Actions 워크플로우 작성\n2. 자동 코드 리뷰 봇 설정\n3. Docker 이미지 빌드 자동화\n4. 배포 파이프라인 구성',
      hours: '5h',
      difficulty: '★★★★★',
      category: 'DevOps'
    },
    {
      day: 24, week: 4, phase: 'Mastery',
      title: '보안 & 코드 품질',
      objective: 'Claude Code로 보안 취약점을 탐지하고 코드 품질을 보장한다',
      topics: '• OWASP Top 10 취약점 탐지\n• 코드 보안 리뷰 요청\n• 의존성 취약점 분석\n• ESLint/Prettier 설정 최적화\n• 코드 복잡도 분석',
      practice: '1. 의도적 취약점 코드 → 보안 리뷰\n2. npm audit 결과 분석 및 패치\n3. ESLint 커스텀 룰 생성\n4. 코드 복잡도 리포트 생성',
      hours: '5h',
      difficulty: '★★★★★',
      category: 'Security'
    },
    {
      day: 25, week: 4, phase: 'Mastery',
      title: '레거시 코드 현대화',
      objective: '오래된 코드베이스를 현대적 기술 스택으로 마이그레이션한다',
      topics: '• 레거시 코드 분석 전략\n• 점진적 마이그레이션 계획\n• JS → TS 마이그레이션\n• 프레임워크 업그레이드\n• 기술 부채 관리',
      practice: '1. JavaScript 프로젝트 → TypeScript 변환\n2. 콜백 → async/await 변환\n3. CommonJS → ESM 모듈 변환\n4. 의존성 메이저 업그레이드',
      hours: '5h',
      difficulty: '★★★★★',
      category: 'Migration'
    },
    {
      day: 26, week: 4, phase: 'Mastery',
      title: '문서화 & 지식 관리',
      objective: 'Claude Code로 프로젝트 문서를 체계적으로 생성하고 관리한다',
      topics: '• README.md 자동 생성\n• API 문서화 (JSDoc, TSDoc)\n• 아키텍처 다이어그램 생성\n• 변경 로그(Changelog) 자동화\n• Wiki/문서 사이트 구축',
      practice: '1. 프로젝트 README 자동 생성\n2. 전체 API 문서화 (JSDoc)\n3. Mermaid 다이어그램 생성\n4. Changelog 자동 생성 스크립트',
      hours: '5h',
      difficulty: '★★★★☆',
      category: 'Docs'
    },
    {
      day: 27, week: 4, phase: 'Mastery',
      title: '성능 최적화 & 모니터링',
      objective: '앱 성능을 분석하고 최적화하는 전문 기법을 익힌다',
      topics: '• 프론트엔드 성능 분석 (Lighthouse)\n• 백엔드 성능 프로파일링\n• 번들 사이즈 최적화\n• 캐싱 전략 수립\n• 모니터링 시스템 구축',
      practice: '1. Lighthouse 점수 개선 프로젝트\n2. API 응답 시간 최적화\n3. 번들 분석 및 코드 스플리팅\n4. Redis 캐싱 레이어 구현',
      hours: '5h',
      difficulty: '★★★★★',
      category: 'Performance'
    },
    {
      day: 28, week: 4, phase: 'Mastery',
      title: '실전 워크플로우 최적화',
      objective: '일상 개발에서 Claude Code를 최대한 효율적으로 활용하는 패턴을 정립한다',
      topics: '• 개인 워크플로우 설계\n• 프롬프트 라이브러리 구축\n• 반복 작업 자동화\n• 팀 협업 전략\n• 비용 최적화 전략',
      practice: '1. 개인 프롬프트 라이브러리 20개 작성\n2. 일일 개발 루틴 설계\n3. 팀 CLAUDE.md 템플릿 작성\n4. 비용 대비 효율 분석',
      hours: '5h',
      difficulty: '★★★★☆',
      category: 'Workflow'
    },
    {
      day: 29, week: 4, phase: 'Mastery',
      title: '캡스톤 프로젝트 (1/2)',
      objective: '모든 학습 내용을 종합한 실전 프로젝트를 시작한다',
      topics: '• 프로젝트 기획 및 설계\n• 아키텍처 결정\n• 초기 세팅 (CLAUDE.md, Git, MCP)\n• 핵심 기능 구현\n• 테스트 전략 수립',
      practice: '1. SaaS 대시보드 앱 기획\n2. DB 스키마 + API 설계\n3. 핵심 백엔드 API 구현\n4. 프론트엔드 메인 페이지 구현',
      hours: '7h',
      difficulty: '★★★★★',
      category: 'Capstone'
    },
    {
      day: 30, week: 4, phase: 'Mastery',
      title: '캡스톤 프로젝트 (2/2) & 졸업',
      objective: '프로젝트를 완성하고, 1개월 학습을 정리하며, 향후 성장 로드맵을 수립한다',
      topics: '• 남은 기능 구현\n• 테스트 & QA\n• 문서화 완성\n• 배포\n• 1개월 회고 & 향후 계획',
      practice: '1. 캡스톤 프로젝트 완성 및 배포\n2. 전체 테스트 커버리지 확보\n3. README + API 문서 완성\n4. 1개월 학습 회고록 작성\n5. 향후 3개월 성장 로드맵 수립',
      hours: '7h',
      difficulty: '★★★★★',
      category: 'Capstone'
    },
  ];

  // =====================================================
  // SHEET 1: DASHBOARD (Overview)
  // =====================================================
  const dashboard = workbook.addWorksheet('Dashboard', {
    properties: { tabColor: { argb: colors.primary } },
    views: [{ showGridLines: false }]
  });

  // Column widths
  dashboard.columns = [
    { width: 3 },   // A spacer
    { width: 35 },  // B
    { width: 18 },  // C
    { width: 18 },  // D
    { width: 18 },  // E
    { width: 18 },  // F
    { width: 3 },   // G spacer
  ];

  // Title area
  dashboard.mergeCells('B2:F2');
  const titleCell = dashboard.getCell('B2');
  titleCell.value = 'CLAUDE CODE MASTERY';
  titleCell.font = { name: 'Segoe UI', size: 28, bold: true, color: { argb: colors.primary } };
  titleCell.alignment = { horizontal: 'left', vertical: 'middle' };

  dashboard.mergeCells('B3:F3');
  const subtitleCell = dashboard.getCell('B3');
  subtitleCell.value = '30-Day Intensive Curriculum  |  Beginner to Expert';
  subtitleCell.font = { name: 'Segoe UI', size: 12, color: { argb: colors.textMedium } };
  subtitleCell.alignment = { horizontal: 'left', vertical: 'middle' };

  dashboard.getRow(2).height = 45;
  dashboard.getRow(3).height = 25;
  dashboard.getRow(4).height = 15;

  // Stats boxes
  const statsRow = 5;
  const statsData = [
    { label: 'Total Days', value: '30', col: 'B' },
    { label: 'Total Hours', value: '160+', col: 'C' },
    { label: 'Practice Tasks', value: '120+', col: 'D' },
    { label: 'Phases', value: '4', col: 'E' },
    { label: 'Difficulty', value: '★ → ★★★★★', col: 'F' },
  ];

  dashboard.getRow(statsRow).height = 22;
  dashboard.getRow(statsRow + 1).height = 35;

  statsData.forEach((stat) => {
    const labelCell = dashboard.getCell(`${stat.col}${statsRow}`);
    labelCell.value = stat.label;
    labelCell.font = { name: 'Segoe UI', size: 9, color: { argb: colors.textLight }, bold: true };
    labelCell.alignment = { horizontal: 'center' };

    const valueCell = dashboard.getCell(`${stat.col}${statsRow + 1}`);
    valueCell.value = stat.value;
    valueCell.font = { name: 'Segoe UI', size: 18, bold: true, color: { argb: colors.primary } };
    valueCell.alignment = { horizontal: 'center', vertical: 'middle' };
    valueCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colors.lightGray } };
    valueCell.border = {
      top: { style: 'thin', color: { argb: colors.borderColor } },
      bottom: { style: 'thin', color: { argb: colors.borderColor } },
      left: { style: 'thin', color: { argb: colors.borderColor } },
      right: { style: 'thin', color: { argb: colors.borderColor } },
    };
  });

  // Phase Overview
  const phaseStartRow = 8;
  dashboard.getRow(phaseStartRow).height = 10;

  dashboard.mergeCells(`B${phaseStartRow + 1}:F${phaseStartRow + 1}`);
  const phaseTitle = dashboard.getCell(`B${phaseStartRow + 1}`);
  phaseTitle.value = 'LEARNING PHASES';
  phaseTitle.font = { name: 'Segoe UI', size: 14, bold: true, color: { argb: colors.primary } };
  dashboard.getRow(phaseStartRow + 1).height = 30;

  const phases = [
    { name: 'Week 1: Foundation', days: 'Day 1-7', desc: '환경 설정, CLI 기초, 프롬프트 기법, Git 연동, CLAUDE.md 설정', color: colors.weekAccent[0] },
    { name: 'Week 2: Core Skills', days: 'Day 8-14', desc: '코드 생성, 리팩토링, 테스트, 디버깅, API 개발', color: colors.weekAccent[1] },
    { name: 'Week 3: Advanced', days: 'Day 15-21', desc: '멀티파일 관리, MCP 서버, Hooks, 풀스택 개발', color: colors.weekAccent[2] },
    { name: 'Week 4: Mastery', days: 'Day 22-30', desc: 'Agent SDK, CI/CD, 보안, 성능 최적화, 캡스톤 프로젝트', color: colors.weekAccent[3] },
  ];

  let pRow = phaseStartRow + 2;
  phases.forEach((phase) => {
    dashboard.getRow(pRow).height = 45;

    // Color indicator
    const indicator = dashboard.getCell(`B${pRow}`);
    indicator.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: phase.color } };
    indicator.value = phase.name;
    indicator.font = { name: 'Segoe UI', size: 12, bold: true, color: { argb: colors.white } };
    indicator.alignment = { horizontal: 'center', vertical: 'middle' };
    indicator.border = {
      top: { style: 'thin', color: { argb: phase.color } },
      bottom: { style: 'thin', color: { argb: phase.color } },
    };

    const daysCell = dashboard.getCell(`C${pRow}`);
    daysCell.value = phase.days;
    daysCell.font = { name: 'Segoe UI', size: 11, bold: true, color: { argb: colors.textDark } };
    daysCell.alignment = { horizontal: 'center', vertical: 'middle' };
    daysCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colors.lightGray } };

    dashboard.mergeCells(`D${pRow}:F${pRow}`);
    const descCell = dashboard.getCell(`D${pRow}`);
    descCell.value = phase.desc;
    descCell.font = { name: 'Segoe UI', size: 10, color: { argb: colors.textMedium } };
    descCell.alignment = { horizontal: 'left', vertical: 'middle', wrapText: true };
    descCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colors.lightGray } };

    pRow++;
  });

  // Progress Legend
  pRow += 1;
  dashboard.mergeCells(`B${pRow}:F${pRow}`);
  const legendTitle = dashboard.getCell(`B${pRow}`);
  legendTitle.value = 'PROGRESS LEGEND';
  legendTitle.font = { name: 'Segoe UI', size: 14, bold: true, color: { argb: colors.primary } };
  dashboard.getRow(pRow).height = 30;

  pRow++;
  const legends = [
    { symbol: '✅', label: 'Completed (완료)', color: colors.completed },
    { symbol: '🔄', label: 'In Progress (진행중)', color: colors.inProgress },
    { symbol: '⬜', label: 'Not Started (미시작)', color: colors.notStarted },
  ];

  legends.forEach((leg) => {
    dashboard.getRow(pRow).height = 28;
    const symCell = dashboard.getCell(`B${pRow}`);
    symCell.value = `${leg.symbol}  ${leg.label}`;
    symCell.font = { name: 'Segoe UI', size: 11, color: { argb: colors.textDark } };
    symCell.alignment = { vertical: 'middle' };
    pRow++;
  });

  // =====================================================
  // SHEET 2: CURRICULUM (Main detailed schedule)
  // =====================================================
  const currSheet = workbook.addWorksheet('Curriculum', {
    properties: { tabColor: { argb: colors.weekAccent[0] } },
    views: [{ showGridLines: false, state: 'frozen', ySplit: 3 }]
  });

  currSheet.columns = [
    { width: 3 },    // A spacer
    { width: 6 },    // B Day
    { width: 8 },    // C Week
    { width: 12 },   // D Phase
    { width: 32 },   // E Title
    { width: 50 },   // F Learning Objective
    { width: 60 },   // G Topics (detailed)
    { width: 60 },   // H Practice Tasks
    { width: 8 },    // I Hours
    { width: 12 },   // J Difficulty
    { width: 12 },   // K Category
    { width: 15 },   // L Progress
    { width: 15 },   // M Date (to fill)
    { width: 20 },   // N Notes
    { width: 3 },    // O spacer
  ];

  // Title
  currSheet.mergeCells('B1:N1');
  const currTitle = currSheet.getCell('B1');
  currTitle.value = 'CLAUDE CODE 30-DAY CURRICULUM';
  currTitle.font = { name: 'Segoe UI', size: 20, bold: true, color: { argb: colors.primary } };
  currTitle.alignment = { horizontal: 'left', vertical: 'middle' };
  currSheet.getRow(1).height = 40;

  // Subtitle
  currSheet.mergeCells('B2:N2');
  const currSub = currSheet.getCell('B2');
  currSub.value = 'Daily 5+ Hours  |  Beginner → Expert  |  Track your progress with the Progress column';
  currSub.font = { name: 'Segoe UI', size: 10, color: { argb: colors.textLight } };
  currSheet.getRow(2).height = 22;

  // Headers
  const headers = ['', 'Day', 'Week', 'Phase', 'Title', 'Learning Objective', 'Topics & Key Concepts', 'Practice Tasks', 'Hours', 'Difficulty', 'Category', 'Progress', 'Date', 'Notes'];
  const headerRow = currSheet.getRow(3);
  headerRow.height = 32;

  headers.forEach((h, idx) => {
    const cell = headerRow.getCell(idx + 1);
    cell.value = h;
    cell.font = { name: 'Segoe UI', size: 10, bold: true, color: { argb: colors.headerText } };
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colors.headerBg } };
    cell.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
    cell.border = {
      bottom: { style: 'medium', color: { argb: colors.accent } },
    };
  });

  // Data rows
  curriculum.forEach((item, idx) => {
    const rowNum = idx + 4;
    const row = currSheet.getRow(rowNum);
    const weekIdx = item.week - 1;
    const bgColor = idx % 2 === 0 ? colors.weekBg[weekIdx] : colors.white;

    row.height = 110;

    // Spacer A
    row.getCell(1).value = '';

    // Day
    const dayCell = row.getCell(2);
    dayCell.value = item.day;
    dayCell.font = { name: 'Segoe UI', size: 14, bold: true, color: { argb: colors.weekAccent[weekIdx] } };
    dayCell.alignment = { horizontal: 'center', vertical: 'middle' };
    dayCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bgColor } };

    // Week
    const weekCell = row.getCell(3);
    weekCell.value = `W${item.week}`;
    weekCell.font = { name: 'Segoe UI', size: 10, bold: true, color: { argb: colors.weekAccent[weekIdx] } };
    weekCell.alignment = { horizontal: 'center', vertical: 'middle' };
    weekCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bgColor } };

    // Phase
    const phaseCell = row.getCell(4);
    phaseCell.value = item.phase;
    phaseCell.font = { name: 'Segoe UI', size: 9, bold: true, color: { argb: colors.white } };
    phaseCell.alignment = { horizontal: 'center', vertical: 'middle' };
    phaseCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colors.weekAccent[weekIdx] } };

    // Title
    const titleC = row.getCell(5);
    titleC.value = item.title;
    titleC.font = { name: 'Segoe UI', size: 11, bold: true, color: { argb: colors.textDark } };
    titleC.alignment = { horizontal: 'left', vertical: 'middle', wrapText: true };
    titleC.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bgColor } };

    // Objective
    const objCell = row.getCell(6);
    objCell.value = item.objective;
    objCell.font = { name: 'Segoe UI', size: 10, color: { argb: colors.textDark } };
    objCell.alignment = { horizontal: 'left', vertical: 'middle', wrapText: true };
    objCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bgColor } };

    // Topics
    const topicCell = row.getCell(7);
    topicCell.value = item.topics;
    topicCell.font = { name: 'Segoe UI', size: 9, color: { argb: colors.textMedium } };
    topicCell.alignment = { horizontal: 'left', vertical: 'top', wrapText: true };
    topicCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bgColor } };

    // Practice
    const practiceCell = row.getCell(8);
    practiceCell.value = item.practice;
    practiceCell.font = { name: 'Segoe UI', size: 9, color: { argb: colors.textMedium } };
    practiceCell.alignment = { horizontal: 'left', vertical: 'top', wrapText: true };
    practiceCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bgColor } };

    // Hours
    const hoursCell = row.getCell(9);
    hoursCell.value = item.hours;
    hoursCell.font = { name: 'Segoe UI', size: 10, bold: true, color: { argb: colors.textDark } };
    hoursCell.alignment = { horizontal: 'center', vertical: 'middle' };
    hoursCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bgColor } };

    // Difficulty
    const diffCell = row.getCell(10);
    diffCell.value = item.difficulty;
    diffCell.font = { name: 'Segoe UI', size: 10, color: { argb: colors.weekAccent[weekIdx] } };
    diffCell.alignment = { horizontal: 'center', vertical: 'middle' };
    diffCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bgColor } };

    // Category
    const catCell = row.getCell(11);
    catCell.value = item.category;
    catCell.font = { name: 'Segoe UI', size: 9, bold: true, color: { argb: colors.weekAccent[weekIdx] } };
    catCell.alignment = { horizontal: 'center', vertical: 'middle' };
    catCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bgColor } };

    // Progress - Dropdown
    const progressCell = row.getCell(12);
    progressCell.value = '⬜ Not Started';
    progressCell.font = { name: 'Segoe UI', size: 10, color: { argb: colors.textMedium } };
    progressCell.alignment = { horizontal: 'center', vertical: 'middle' };
    progressCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colors.lightGray } };
    progressCell.border = {
      top: { style: 'thin', color: { argb: colors.borderColor } },
      bottom: { style: 'thin', color: { argb: colors.borderColor } },
      left: { style: 'thin', color: { argb: colors.borderColor } },
      right: { style: 'thin', color: { argb: colors.borderColor } },
    };

    // Date
    const dateCell = row.getCell(13);
    dateCell.value = '';
    dateCell.font = { name: 'Segoe UI', size: 10, color: { argb: colors.textMedium } };
    dateCell.alignment = { horizontal: 'center', vertical: 'middle' };
    dateCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bgColor } };
    dateCell.border = {
      top: { style: 'thin', color: { argb: colors.borderColor } },
      bottom: { style: 'thin', color: { argb: colors.borderColor } },
      left: { style: 'thin', color: { argb: colors.borderColor } },
      right: { style: 'thin', color: { argb: colors.borderColor } },
    };

    // Notes
    const notesCell = row.getCell(14);
    notesCell.value = '';
    notesCell.font = { name: 'Segoe UI', size: 9, color: { argb: colors.textMedium } };
    notesCell.alignment = { horizontal: 'left', vertical: 'middle', wrapText: true };
    notesCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bgColor } };
    notesCell.border = {
      top: { style: 'thin', color: { argb: colors.borderColor } },
      bottom: { style: 'thin', color: { argb: colors.borderColor } },
      left: { style: 'thin', color: { argb: colors.borderColor } },
      right: { style: 'thin', color: { argb: colors.borderColor } },
    };

    // Bottom border for each row
    for (let c = 2; c <= 14; c++) {
      const cell = row.getCell(c);
      if (!cell.border) cell.border = {};
      cell.border.bottom = { style: 'thin', color: { argb: 'E0E0E0' } };
    }
  });

  // Add data validation (dropdown) for Progress column
  for (let r = 4; r <= 33; r++) {
    currSheet.getCell(`L${r}`).dataValidation = {
      type: 'list',
      allowBlank: true,
      formulae: ['"⬜ Not Started,🔄 In Progress,✅ Completed"'],
      showErrorMessage: true,
      errorTitle: 'Invalid Status',
      error: 'Please select from the dropdown list',
    };
  }

  // Add data validation for Date column (date format)
  for (let r = 4; r <= 33; r++) {
    currSheet.getCell(`M${r}`).numFmt = 'YYYY-MM-DD';
  }

  // Auto-filter
  currSheet.autoFilter = { from: 'B3', to: 'N33' };


  // =====================================================
  // SHEET 3: PROGRESS TRACKER
  // =====================================================
  const tracker = workbook.addWorksheet('Progress Tracker', {
    properties: { tabColor: { argb: colors.completed } },
    views: [{ showGridLines: false }]
  });

  tracker.columns = [
    { width: 3 },    // A
    { width: 8 },    // B Day
    { width: 30 },   // C Title
    { width: 15 },   // D Status
    { width: 12 },   // E Date Started
    { width: 12 },   // F Date Completed
    { width: 12 },   // G Self Rating
    { width: 35 },   // H Key Takeaways
    { width: 35 },   // I Challenges
    { width: 10 },   // J Time Spent
    { width: 3 },    // K
  ];

  // Title
  tracker.mergeCells('B1:J1');
  const trackerTitle = tracker.getCell('B1');
  trackerTitle.value = 'PROGRESS TRACKER';
  trackerTitle.font = { name: 'Segoe UI', size: 20, bold: true, color: { argb: colors.primary } };
  tracker.getRow(1).height = 40;

  tracker.mergeCells('B2:J2');
  const trackerSub = tracker.getCell('B2');
  trackerSub.value = 'Record your daily learning journey — track dates, self-ratings, key takeaways, and time spent';
  trackerSub.font = { name: 'Segoe UI', size: 10, color: { argb: colors.textLight } };
  tracker.getRow(2).height = 22;

  // Headers
  const trackerHeaders = ['', 'Day', 'Title', 'Status', 'Started', 'Completed', 'Rating (1-5)', 'Key Takeaways', 'Challenges & Notes', 'Time Spent'];
  const tHeaderRow = tracker.getRow(3);
  tHeaderRow.height = 30;

  trackerHeaders.forEach((h, idx) => {
    const cell = tHeaderRow.getCell(idx + 1);
    cell.value = h;
    cell.font = { name: 'Segoe UI', size: 10, bold: true, color: { argb: colors.headerText } };
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colors.secondary } };
    cell.alignment = { horizontal: 'center', vertical: 'middle' };
    cell.border = { bottom: { style: 'medium', color: { argb: colors.accent } } };
  });

  // Data rows
  curriculum.forEach((item, idx) => {
    const rowNum = idx + 4;
    const row = tracker.getRow(rowNum);
    const weekIdx = item.week - 1;
    const bgColor = idx % 2 === 0 ? 'F8FAF8' : colors.white;

    row.height = 35;

    row.getCell(1).value = '';

    const dayC = row.getCell(2);
    dayC.value = item.day;
    dayC.font = { name: 'Segoe UI', size: 12, bold: true, color: { argb: colors.weekAccent[weekIdx] } };
    dayC.alignment = { horizontal: 'center', vertical: 'middle' };
    dayC.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bgColor } };

    const titleC = row.getCell(3);
    titleC.value = item.title;
    titleC.font = { name: 'Segoe UI', size: 10, color: { argb: colors.textDark } };
    titleC.alignment = { horizontal: 'left', vertical: 'middle', wrapText: true };
    titleC.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bgColor } };

    const statusC = row.getCell(4);
    statusC.value = '⬜ Not Started';
    statusC.font = { name: 'Segoe UI', size: 10, color: { argb: colors.textMedium } };
    statusC.alignment = { horizontal: 'center', vertical: 'middle' };
    statusC.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colors.lightGray } };

    // Date Started
    const startC = row.getCell(5);
    startC.value = '';
    startC.numFmt = 'YYYY-MM-DD';
    startC.alignment = { horizontal: 'center', vertical: 'middle' };
    startC.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bgColor } };

    // Date Completed
    const endC = row.getCell(6);
    endC.value = '';
    endC.numFmt = 'YYYY-MM-DD';
    endC.alignment = { horizontal: 'center', vertical: 'middle' };
    endC.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bgColor } };

    // Self Rating
    const rateC = row.getCell(7);
    rateC.value = '';
    rateC.alignment = { horizontal: 'center', vertical: 'middle' };
    rateC.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bgColor } };

    // Key Takeaways
    const takeC = row.getCell(8);
    takeC.value = '';
    takeC.font = { name: 'Segoe UI', size: 9, color: { argb: colors.textMedium } };
    takeC.alignment = { horizontal: 'left', vertical: 'middle', wrapText: true };
    takeC.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bgColor } };

    // Challenges
    const chalC = row.getCell(9);
    chalC.value = '';
    chalC.font = { name: 'Segoe UI', size: 9, color: { argb: colors.textMedium } };
    chalC.alignment = { horizontal: 'left', vertical: 'middle', wrapText: true };
    chalC.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bgColor } };

    // Time Spent
    const timeC = row.getCell(10);
    timeC.value = '';
    timeC.alignment = { horizontal: 'center', vertical: 'middle' };
    timeC.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bgColor } };

    // Borders
    for (let c = 2; c <= 10; c++) {
      row.getCell(c).border = {
        bottom: { style: 'thin', color: { argb: 'E8E8E8' } },
        left: { style: 'thin', color: { argb: 'E8E8E8' } },
        right: { style: 'thin', color: { argb: 'E8E8E8' } },
      };
    }

    // Data validations
    statusC.dataValidation = {
      type: 'list',
      allowBlank: true,
      formulae: ['"⬜ Not Started,🔄 In Progress,✅ Completed"'],
    };

    rateC.dataValidation = {
      type: 'list',
      allowBlank: true,
      formulae: ['"1 - Poor,2 - Fair,3 - Good,4 - Great,5 - Excellent"'],
    };
  });

  // Summary section at bottom
  const sumRow = 35;
  tracker.mergeCells(`B${sumRow}:J${sumRow}`);
  tracker.getCell(`B${sumRow}`).value = '';
  tracker.getRow(sumRow).height = 15;

  tracker.mergeCells(`B${sumRow + 1}:C${sumRow + 1}`);
  const sumLabel = tracker.getCell(`B${sumRow + 1}`);
  sumLabel.value = 'COMPLETION SUMMARY';
  sumLabel.font = { name: 'Segoe UI', size: 14, bold: true, color: { argb: colors.primary } };
  tracker.getRow(sumRow + 1).height = 35;

  // Summary formulas
  const summaryItems = [
    { label: 'Completed', formula: `=COUNTIF(D4:D33,"✅ Completed")`, row: sumRow + 2 },
    { label: 'In Progress', formula: `=COUNTIF(D4:D33,"🔄 In Progress")`, row: sumRow + 3 },
    { label: 'Not Started', formula: `=COUNTIF(D4:D33,"⬜ Not Started")`, row: sumRow + 4 },
    { label: 'Completion %', formula: `=IF(COUNTIF(D4:D33,"✅ Completed")>0, TEXT(COUNTIF(D4:D33,"✅ Completed")/30*100,"0") & "%", "0%")`, row: sumRow + 5 },
  ];

  summaryItems.forEach((s) => {
    tracker.getRow(s.row).height = 28;

    const label = tracker.getCell(`B${s.row}`);
    label.value = s.label;
    label.font = { name: 'Segoe UI', size: 11, bold: true, color: { argb: colors.textDark } };
    label.alignment = { vertical: 'middle' };

    const val = tracker.getCell(`C${s.row}`);
    val.value = { formula: s.formula };
    val.font = { name: 'Segoe UI', size: 14, bold: true, color: { argb: colors.primary } };
    val.alignment = { horizontal: 'center', vertical: 'middle' };
    val.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colors.lightGray } };
    val.border = {
      top: { style: 'thin', color: { argb: colors.borderColor } },
      bottom: { style: 'thin', color: { argb: colors.borderColor } },
      left: { style: 'thin', color: { argb: colors.borderColor } },
      right: { style: 'thin', color: { argb: colors.borderColor } },
    };
  });


  // =====================================================
  // SHEET 4: WEEKLY SUMMARY
  // =====================================================
  const weekly = workbook.addWorksheet('Weekly Summary', {
    properties: { tabColor: { argb: colors.accent } },
    views: [{ showGridLines: false }]
  });

  weekly.columns = [
    { width: 3 },   // A
    { width: 18 },  // B
    { width: 40 },  // C
    { width: 40 },  // D
    { width: 25 },  // E
    { width: 25 },  // F
    { width: 3 },   // G
  ];

  weekly.mergeCells('B1:F1');
  const weeklyTitle = weekly.getCell('B1');
  weeklyTitle.value = 'WEEKLY REFLECTION & SUMMARY';
  weeklyTitle.font = { name: 'Segoe UI', size: 20, bold: true, color: { argb: colors.primary } };
  weekly.getRow(1).height = 40;

  weekly.mergeCells('B2:F2');
  weekly.getCell('B2').value = 'At the end of each week, reflect on your learning. Write freely about your experience.';
  weekly.getCell('B2').font = { name: 'Segoe UI', size: 10, color: { argb: colors.textLight } };
  weekly.getRow(2).height = 22;

  const weeklyReflections = [
    { week: 'Week 1', title: 'Foundation', color: colors.weekAccent[0] },
    { week: 'Week 2', title: 'Core Skills', color: colors.weekAccent[1] },
    { week: 'Week 3', title: 'Advanced', color: colors.weekAccent[2] },
    { week: 'Week 4', title: 'Mastery', color: colors.weekAccent[3] },
  ];

  let wRow = 4;
  weeklyReflections.forEach((wr) => {
    // Week header
    weekly.mergeCells(`B${wRow}:F${wRow}`);
    const wHeader = weekly.getCell(`B${wRow}`);
    wHeader.value = `${wr.week}: ${wr.title}`;
    wHeader.font = { name: 'Segoe UI', size: 14, bold: true, color: { argb: colors.white } };
    wHeader.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: wr.color } };
    wHeader.alignment = { horizontal: 'left', vertical: 'middle' };
    weekly.getRow(wRow).height = 35;
    wRow++;

    // Questions
    const questions = [
      { q: 'What did I learn?', desc: '이번 주에 배운 가장 중요한 것들은?' },
      { q: 'What was challenging?', desc: '가장 어려웠던 부분과 해결 방법은?' },
      { q: 'What will I improve?', desc: '다음 주에 개선할 점은?' },
      { q: 'Confidence Level (1-10)', desc: 'Claude Code 활용 자신감 점수' },
    ];

    questions.forEach((question) => {
      weekly.getRow(wRow).height = 50;

      const qCell = weekly.getCell(`B${wRow}`);
      qCell.value = question.q;
      qCell.font = { name: 'Segoe UI', size: 10, bold: true, color: { argb: colors.textDark } };
      qCell.alignment = { vertical: 'top', wrapText: true };
      qCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colors.lightGray } };

      weekly.mergeCells(`C${wRow}:D${wRow}`);
      const descCell = weekly.getCell(`C${wRow}`);
      descCell.value = question.desc;
      descCell.font = { name: 'Segoe UI', size: 9, italic: true, color: { argb: colors.textLight } };
      descCell.alignment = { vertical: 'top', wrapText: true };

      weekly.mergeCells(`E${wRow}:F${wRow}`);
      const ansCell = weekly.getCell(`E${wRow}`);
      ansCell.value = '';
      ansCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFEF7' } };
      ansCell.border = {
        top: { style: 'thin', color: { argb: colors.borderColor } },
        bottom: { style: 'thin', color: { argb: colors.borderColor } },
        left: { style: 'thin', color: { argb: colors.borderColor } },
        right: { style: 'thin', color: { argb: colors.borderColor } },
      };

      wRow++;
    });

    wRow++; // spacing between weeks
  });


  // =====================================================
  // SHEET 5: RESOURCES (with clickable hyperlinks)
  // =====================================================
  const resources = workbook.addWorksheet('Resources', {
    properties: { tabColor: { argb: colors.textMedium } },
    views: [{ showGridLines: false }]
  });

  resources.columns = [
    { width: 3 },   // A
    { width: 12 },  // B Category
    { width: 35 },  // C Resource Name (hyperlink)
    { width: 55 },  // D Description
    { width: 14 },  // E Type
    { width: 12 },  // F Related Day
    { width: 3 },   // G
  ];

  resources.mergeCells('B1:F1');
  const resTitle = resources.getCell('B1');
  resTitle.value = 'LEARNING RESOURCES & DOCUMENTATION';
  resTitle.font = { name: 'Segoe UI', size: 20, bold: true, color: { argb: colors.primary } };
  resources.getRow(1).height = 40;

  resources.mergeCells('B2:F2');
  resources.getCell('B2').value = 'Click on any resource name to open the official page directly — all links verified';
  resources.getCell('B2').font = { name: 'Segoe UI', size: 10, color: { argb: colors.textLight } };
  resources.getRow(2).height = 22;

  const resHeaders = ['', 'Category', 'Resource (Click to Open)', 'Description', 'Type', 'Related Day'];
  const resHeaderRow = resources.getRow(3);
  resHeaderRow.height = 30;

  resHeaders.forEach((h, idx) => {
    const cell = resHeaderRow.getCell(idx + 1);
    cell.value = h;
    cell.font = { name: 'Segoe UI', size: 10, bold: true, color: { argb: colors.headerText } };
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colors.primary } };
    cell.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
    cell.border = { bottom: { style: 'medium', color: { argb: colors.accent } } };
  });

  const resourceData = [
    // === CLAUDE CODE OFFICIAL ===
    { cat: 'Claude Code', name: 'Claude Code Overview', url: 'https://docs.anthropic.com/en/docs/claude-code/overview', desc: 'Anthropic 공식 Claude Code 문서 — 설치, 설정, 전체 기능 가이드', type: 'Official Docs', day: 'Day 1-2' },
    { cat: 'Claude Code', name: 'Claude Code GitHub', url: 'https://github.com/anthropics/claude-code', desc: 'Claude Code 오픈소스 저장소 — 소스 코드, 이슈 트래커, 릴리즈 노트', type: 'GitHub', day: 'Day 1' },
    { cat: 'Claude Code', name: 'CLAUDE.md (Memory) Docs', url: 'https://docs.anthropic.com/en/docs/claude-code/memory', desc: 'CLAUDE.md 파일 작성법 — 프로젝트별 설정, auto-memory, 계층 구조', type: 'Official Docs', day: 'Day 6' },
    { cat: 'Claude Code', name: 'MCP Server Docs', url: 'https://docs.anthropic.com/en/docs/claude-code/mcp', desc: 'Model Context Protocol 서버 설정 — 외부 도구 연동, 커스텀 MCP 구축', type: 'Official Docs', day: 'Day 16' },
    { cat: 'Claude Code', name: 'Hooks Reference', url: 'https://docs.anthropic.com/en/docs/claude-code/hooks', desc: 'Hook 시스템 — PreTool, PostTool 등 자동화 이벤트 핸들링', type: 'Official Docs', day: 'Day 17' },
    { cat: 'Claude Code', name: 'Agent SDK Docs', url: 'https://docs.anthropic.com/en/docs/claude-code/sdk', desc: 'Claude Agent SDK — 커스텀 에이전트 구축, 도구 정의, 오케스트레이션', type: 'Official Docs', day: 'Day 22' },
    { cat: 'Claude Code', name: 'Anthropic API Reference', url: 'https://docs.anthropic.com/en/api/getting-started', desc: 'Anthropic API 전체 레퍼런스 — 모델 사양, 요금, 사용 제한', type: 'API Docs', day: 'Day 1' },

    // === PROMPT ENGINEERING ===
    { cat: 'Prompting', name: 'Prompt Engineering Guide', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview', desc: 'Anthropic 공식 프롬프트 엔지니어링 가이드 — 최적 프롬프트 작성법', type: 'Official Guide', day: 'Day 4' },
    { cat: 'Prompting', name: 'Interactive Prompt Tutorial', url: 'https://github.com/anthropics/prompt-eng-interactive-tutorial', desc: 'Anthropic 대화형 프롬프트 튜토리얼 — Jupyter 노트북 기반 실습', type: 'GitHub', day: 'Day 4' },
    { cat: 'Prompting', name: 'Anthropic Courses', url: 'https://github.com/anthropics/courses', desc: 'Anthropic 전체 교육 과정 — 프롬프트, 도구 사용, 에이전트 구축', type: 'GitHub', day: 'Day 4' },

    // === DEVELOPMENT TOOLS ===
    { cat: 'Dev Tools', name: 'Node.js Documentation', url: 'https://nodejs.org/docs/latest/api/', desc: 'Node.js 공식 API 문서 — 런타임 환경, 내장 모듈 레퍼런스', type: 'Official Docs', day: 'Day 1, 8' },
    { cat: 'Dev Tools', name: 'Git Documentation', url: 'https://git-scm.com/docs', desc: 'Git 공식 문서 — 모든 명령어 레퍼런스, Pro Git 전자책 포함', type: 'Official Docs', day: 'Day 5' },
    { cat: 'Dev Tools', name: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/', desc: 'TypeScript 공식 핸드북 — 타입 시스템, 제네릭, 유틸리티 타입', type: 'Official Docs', day: 'Day 8-9, 25' },
    { cat: 'Dev Tools', name: 'VS Code Download', url: 'https://code.visualstudio.com/download', desc: 'Visual Studio Code 다운로드 — Claude Code와 함께 사용할 에디터', type: 'Download', day: 'Day 1' },
    { cat: 'Dev Tools', name: 'ESLint Documentation', url: 'https://eslint.org/docs/latest/', desc: 'ESLint 설정 및 규칙 — 코드 품질, 커스텀 룰 작성', type: 'Official Docs', day: 'Day 24' },

    // === FRAMEWORKS ===
    { cat: 'Framework', name: 'Express.js', url: 'https://expressjs.com/', desc: 'Express.js 공식 사이트 — 라우팅, 미들웨어, API 가이드', type: 'Official Docs', day: 'Day 13' },
    { cat: 'Framework', name: 'React Documentation', url: 'https://react.dev/', desc: 'React 공식 문서 — 컴포넌트, Hooks, 상태 관리, 튜토리얼', type: 'Official Docs', day: 'Day 19' },
    { cat: 'Framework', name: 'Tailwind CSS', url: 'https://tailwindcss.com/docs/installation', desc: 'Tailwind CSS 설치 및 유틸리티 클래스 — 반응형 디자인 가이드', type: 'Official Docs', day: 'Day 19' },
    { cat: 'Framework', name: 'Jest Testing', url: 'https://jestjs.io/', desc: 'Jest 공식 문서 — 매처, Mock, 비동기 테스트, 설정 가이드', type: 'Official Docs', day: 'Day 11' },
    { cat: 'Framework', name: 'Prisma ORM', url: 'https://www.prisma.io/docs', desc: 'Prisma 공식 문서 — 스키마 설계, 마이그레이션, 쿼리 빌더', type: 'Official Docs', day: 'Day 18' },

    // === DEVOPS ===
    { cat: 'DevOps', name: 'Docker Documentation', url: 'https://docs.docker.com/', desc: 'Docker 공식 문서 — 컨테이너, Dockerfile, Docker Compose', type: 'Official Docs', day: 'Day 23' },
    { cat: 'DevOps', name: 'GitHub Actions', url: 'https://docs.github.com/en/actions', desc: 'GitHub Actions 가이드 — 워크플로우, 트리거, CI/CD 파이프라인', type: 'Official Docs', day: 'Day 23' },

    // === PRACTICE ===
    { cat: 'Practice', name: 'LeetCode', url: 'https://leetcode.com/', desc: '알고리즘/자료구조 문제 풀이 — Claude Code로 함께 풀어보기', type: 'Practice', day: 'All' },
    { cat: 'Practice', name: 'HackerRank', url: 'https://www.hackerrank.com/', desc: '코딩 챌린지 플랫폼 — 언어별, 난이도별 문제 풀이', type: 'Practice', day: 'All' },

    // === LEARNING COURSE ===
    { cat: 'Course', name: 'DeepLearning.AI Claude Code', url: 'https://learn.deeplearning.ai/courses/claude-code-a-highly-agentic-coding-assistant/lesson/66b35/introduction', desc: 'Anthropic + DeepLearning.AI 공식 무료 강좌 — Claude Code 실전 활용', type: 'Free Course', day: 'Day 1-7' },
  ];

  resourceData.forEach((res, idx) => {
    const rowNum = idx + 4;
    const row = resources.getRow(rowNum);
    const bgColor = idx % 2 === 0 ? colors.lightGray : colors.white;
    row.height = 32;

    row.getCell(1).value = '';

    // Category
    const catColors = { 'Claude Code': '4285F4', 'Prompting': '34A853', 'Dev Tools': 'FB8C00', 'Framework': 'E91E63', 'DevOps': '7C4DFF', 'Practice': '00BCD4', 'Course': 'FF5722' };
    const catCell = row.getCell(2);
    catCell.value = res.cat;
    catCell.font = { name: 'Segoe UI', size: 9, bold: true, color: { argb: catColors[res.cat] || colors.textDark } };
    catCell.alignment = { horizontal: 'center', vertical: 'middle' };
    catCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bgColor } };

    // Resource Name with HYPERLINK
    const nameCell = row.getCell(3);
    nameCell.value = { text: res.name, hyperlink: res.url, tooltip: res.url };
    nameCell.font = { name: 'Segoe UI', size: 10, bold: true, color: { argb: '1155CC' }, underline: true };
    nameCell.alignment = { vertical: 'middle' };
    nameCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bgColor } };

    // Description
    const descCell = row.getCell(4);
    descCell.value = res.desc;
    descCell.font = { name: 'Segoe UI', size: 9, color: { argb: colors.textMedium } };
    descCell.alignment = { vertical: 'middle', wrapText: true };
    descCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bgColor } };

    // Type
    const typeCell = row.getCell(5);
    typeCell.value = res.type;
    typeCell.font = { name: 'Segoe UI', size: 9, bold: true, color: { argb: colors.textLight } };
    typeCell.alignment = { horizontal: 'center', vertical: 'middle' };
    typeCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bgColor } };

    // Related Day
    const dayCell = row.getCell(6);
    dayCell.value = res.day;
    dayCell.font = { name: 'Segoe UI', size: 9, color: { argb: colors.textMedium } };
    dayCell.alignment = { horizontal: 'center', vertical: 'middle' };
    dayCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bgColor } };

    // Borders
    for (let c = 2; c <= 6; c++) {
      row.getCell(c).border = {
        bottom: { style: 'thin', color: { argb: 'E0E0E0' } },
      };
    }
  });

  // =====================================================
  // SHEET 6: YOUTUBE RESOURCES
  // =====================================================
  const ytSheet = workbook.addWorksheet('YouTube Learning', {
    properties: { tabColor: { argb: 'FF0000' } },
    views: [{ showGridLines: false, state: 'frozen', ySplit: 4 }]
  });

  ytSheet.columns = [
    { width: 3 },   // A spacer
    { width: 6 },   // B #
    { width: 16 },  // C Category
    { width: 38 },  // D Video Title (hyperlink)
    { width: 20 },  // E Channel
    { width: 55 },  // F Description
    { width: 12 },  // G Related Day
    { width: 12 },  // H Duration
    { width: 12 },  // I Language
    { width: 3 },   // J spacer
  ];

  // Title
  ytSheet.mergeCells('B1:I1');
  const ytTitle = ytSheet.getCell('B1');
  ytTitle.value = 'YOUTUBE LEARNING RESOURCES';
  ytTitle.font = { name: 'Segoe UI', size: 20, bold: true, color: { argb: 'FF0000' } };
  ytTitle.alignment = { horizontal: 'left', vertical: 'middle' };
  ytSheet.getRow(1).height = 40;

  // Subtitle
  ytSheet.mergeCells('B2:I2');
  const ytSub = ytSheet.getCell('B2');
  ytSub.value = 'Curated YouTube videos for each curriculum topic — Click video titles to watch directly';
  ytSub.font = { name: 'Segoe UI', size: 10, color: { argb: colors.textLight } };
  ytSheet.getRow(2).height = 22;

  // Tip row
  ytSheet.mergeCells('B3:I3');
  const ytTip = ytSheet.getCell('B3');
  ytTip.value = 'TIP: Videos are ordered by curriculum day. Watch them alongside or before each day\'s lesson for maximum learning.';
  ytTip.font = { name: 'Segoe UI', size: 9, italic: true, color: { argb: colors.textLight } };
  ytSheet.getRow(3).height = 20;

  // Headers
  const ytHeaders = ['', '#', 'Category', 'Video Title (Click to Watch)', 'Channel', 'Description', 'Related Day', 'Duration', 'Language'];
  const ytHeaderRow = ytSheet.getRow(4);
  ytHeaderRow.height = 32;

  ytHeaders.forEach((h, idx) => {
    const cell = ytHeaderRow.getCell(idx + 1);
    cell.value = h;
    cell.font = { name: 'Segoe UI', size: 10, bold: true, color: { argb: colors.white } };
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'CC0000' } };
    cell.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
    cell.border = { bottom: { style: 'medium', color: { argb: 'FF4444' } } };
  });

  const ytData = [
    // === CLAUDE CODE ===
    { cat: 'Claude Code', title: 'Claude Code: Agentic Coding Assistant (Full Course)', channel: 'DeepLearning.AI', url: 'https://learn.deeplearning.ai/courses/claude-code-a-highly-agentic-coding-assistant/lesson/66b35/introduction', desc: 'Anthropic 공식 무료 강좌 — 설치, CLAUDE.md, MCP, 서브에이전트, GitHub 연동까지 전체 커버', day: 'Day 1-7', duration: '~2h', lang: 'EN' },
    { cat: 'Claude Code', title: 'Claude Code Beginner Tutorial: Build a Movie App', channel: 'Peter Yang', url: 'https://youtu.be/GepHGs_CZdk', desc: 'Claude Code로 15분 만에 영화 앱 만들기 — 설치부터 CLAUDE.md 설정, Plan 모드 활용까지', day: 'Day 1-2', duration: '17min', lang: 'EN' },

    // === MCP ===
    { cat: 'MCP Protocol', title: 'Model Context Protocol Explained', channel: 'Fireship', url: 'https://www.youtube.com/watch?v=HyzlYwjoXOQ', desc: 'MCP 개념 설명 — AI 도구 통합 표준 프로토콜, 직접 MCP 서버 구축 데모 포함', day: 'Day 16', duration: '~10min', lang: 'EN' },

    // === GIT ===
    { cat: 'Git & GitHub', title: 'Git and GitHub for Beginners - Full Course', channel: 'freeCodeCamp', url: 'https://www.youtube.com/watch?v=RGOj5yH7evk', desc: 'Git 완전 기초 — add, commit, branch, merge, pull request, rebase 전부 다루는 무료 풀코스', day: 'Day 5', duration: '1h+', lang: 'EN' },

    // === NODE.JS ===
    { cat: 'Node.js', title: 'Node.js Crash Course 2024', channel: 'Traversy Media', url: 'https://youtu.be/32M1al-Y6Ag', desc: 'Node.js 핵심 모듈 — HTTP, File System, Path, OS, Crypto 등 프레임워크 없이 순수 Node 학습', day: 'Day 8', duration: '2h+', lang: 'EN' },

    // === TYPESCRIPT ===
    { cat: 'TypeScript', title: 'TypeScript in 100 Seconds', channel: 'Fireship', url: 'https://www.youtube.com/watch?v=zQnBQ4tB3ZA', desc: 'TypeScript 핵심 개념 빠른 요약 — 타입, 인터페이스, 제네릭을 100초에 이해', day: 'Day 8-9', duration: '2min', lang: 'EN' },

    // === EXPRESS.JS ===
    { cat: 'Express.js', title: 'Express.js Crash Course 2024', channel: 'Traversy Media', url: 'https://youtu.be/CnH3kAXSrmU', desc: 'Express.js 핵심 — 라우팅, 미들웨어, CRUD API 구축, EJS 템플릿까지', day: 'Day 13', duration: '1.5h', lang: 'EN' },

    // === TESTING ===
    { cat: 'Testing', title: 'Jest Testing Framework Basics', channel: 'Traversy Media', url: 'https://youtu.be/7r4xVDI2vho', desc: 'Jest 기초 — 매처, 비동기 테스트, beforeEach/afterEach, 실전 유닛 테스트 작성', day: 'Day 11', duration: '1h', lang: 'EN' },

    // === REACT ===
    { cat: 'React', title: 'React Crash Course 2024', channel: 'Traversy Media', url: 'https://youtu.be/LDB4uaJ87e0', desc: 'React 핵심 — 컴포넌트, Props, State, Hooks, React Router, 데이터 페칭, 프로젝트 구현', day: 'Day 19', duration: '3h', lang: 'EN' },

    // === TAILWIND CSS ===
    { cat: 'Tailwind CSS', title: 'Tailwind CSS Tutorial (Full Playlist)', channel: 'Net Ninja', url: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9gpXORlEHjc5bgnIi5HEGhw', desc: 'Tailwind CSS 전체 시리즈 — 설정, 유틸리티 클래스, Flexbox, Grid, 반응형, 다크모드', day: 'Day 19', duration: 'Series', lang: 'EN' },

    // === PRISMA ===
    { cat: 'Prisma ORM', title: 'Prisma Crash Course', channel: 'Traversy Media', url: 'https://youtu.be/CYH04BJzamo', desc: 'Prisma ORM 집중 학습 — 스키마 설계, 마이그레이션, Prisma Client CRUD 쿼리 실전', day: 'Day 18', duration: '37min', lang: 'EN' },

    // === DOCKER ===
    { cat: 'Docker', title: 'Docker Tutorial for Beginners - Full Course', channel: 'TechWorld with Nana', url: 'https://www.youtube.com/watch?v=3c-iBn73dDE', desc: 'Docker 완전 기초 — 컨테이너, 이미지, Dockerfile, Docker Compose, 볼륨, 배포까지', day: 'Day 23', duration: '3h', lang: 'EN' },

    // === CI/CD ===
    { cat: 'CI/CD', title: 'GitHub Actions Full Tutorial', channel: 'Fireship', url: 'https://youtu.be/eB0nUzAI7M8', desc: 'GitHub Actions 워크플로우 실전 — 트리거 설정, 자동 테스트, 배포 파이프라인 구축', day: 'Day 23', duration: '~12min', lang: 'EN' },
    { cat: 'CI/CD', title: '100 Seconds of CI/CD', channel: 'Fireship', url: 'https://youtu.be/scEDHsr3APg', desc: 'CI/CD 핵심 개념을 100초에 이해 — Continuous Integration & Delivery 빠른 요약', day: 'Day 23', duration: '2min', lang: 'EN' },

    // === PROMPT ENGINEERING ===
    { cat: 'Prompt Eng.', title: 'Anthropic Interactive Prompt Tutorial', channel: 'Anthropic (GitHub)', url: 'https://github.com/anthropics/prompt-eng-interactive-tutorial', desc: 'Anthropic 공식 대화형 프롬프트 튜토리얼 — XML 태그, Few-shot, CoT 기법 실습', day: 'Day 4', duration: 'Self-paced', lang: 'EN' },
  ];

  ytData.forEach((vid, idx) => {
    const rowNum = idx + 5;
    const row = ytSheet.getRow(rowNum);
    const bgColor = idx % 2 === 0 ? 'FFF8F8' : colors.white;
    row.height = 45;

    row.getCell(1).value = '';

    // #
    const numCell = row.getCell(2);
    numCell.value = idx + 1;
    numCell.font = { name: 'Segoe UI', size: 11, bold: true, color: { argb: 'CC0000' } };
    numCell.alignment = { horizontal: 'center', vertical: 'middle' };
    numCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bgColor } };

    // Category
    const catColors2 = { 'Claude Code': 'FF6F00', 'MCP Protocol': '7C4DFF', 'Git & GitHub': '34A853', 'Node.js': '43A047', 'TypeScript': '1976D2', 'Express.js': '424242', 'Testing': 'E65100', 'React': '00BCD4', 'Tailwind CSS': '0097A7', 'Prisma ORM': '2E7D32', 'Docker': '1565C0', 'CI/CD': 'AD1457', 'Prompt Eng.': 'F57C00' };
    const catCell = row.getCell(3);
    catCell.value = vid.cat;
    catCell.font = { name: 'Segoe UI', size: 9, bold: true, color: { argb: catColors2[vid.cat] || colors.textDark } };
    catCell.alignment = { horizontal: 'center', vertical: 'middle' };
    catCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bgColor } };

    // Video Title with HYPERLINK
    const titleCell = row.getCell(4);
    titleCell.value = { text: vid.title, hyperlink: vid.url, tooltip: `Watch: ${vid.url}` };
    titleCell.font = { name: 'Segoe UI', size: 10, bold: true, color: { argb: 'CC0000' }, underline: true };
    titleCell.alignment = { vertical: 'middle', wrapText: true };
    titleCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bgColor } };

    // Channel
    const chCell = row.getCell(5);
    chCell.value = vid.channel;
    chCell.font = { name: 'Segoe UI', size: 10, bold: true, color: { argb: colors.textDark } };
    chCell.alignment = { horizontal: 'center', vertical: 'middle' };
    chCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bgColor } };

    // Description
    const descCell = row.getCell(6);
    descCell.value = vid.desc;
    descCell.font = { name: 'Segoe UI', size: 9, color: { argb: colors.textMedium } };
    descCell.alignment = { vertical: 'middle', wrapText: true };
    descCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bgColor } };

    // Related Day
    const dayCell = row.getCell(7);
    dayCell.value = vid.day;
    dayCell.font = { name: 'Segoe UI', size: 9, bold: true, color: { argb: '4285F4' } };
    dayCell.alignment = { horizontal: 'center', vertical: 'middle' };
    dayCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bgColor } };

    // Duration
    const durCell = row.getCell(8);
    durCell.value = vid.duration;
    durCell.font = { name: 'Segoe UI', size: 9, color: { argb: colors.textMedium } };
    durCell.alignment = { horizontal: 'center', vertical: 'middle' };
    durCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bgColor } };

    // Language
    const langCell = row.getCell(9);
    langCell.value = vid.lang;
    langCell.font = { name: 'Segoe UI', size: 9, color: { argb: colors.textLight } };
    langCell.alignment = { horizontal: 'center', vertical: 'middle' };
    langCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bgColor } };

    // Borders
    for (let c = 2; c <= 9; c++) {
      row.getCell(c).border = {
        bottom: { style: 'thin', color: { argb: 'F0D0D0' } },
      };
    }
  });

  // Recommended Channels section
  const chStartRow = ytData.length + 6;
  ytSheet.getRow(chStartRow).height = 15;

  ytSheet.mergeCells(`B${chStartRow + 1}:I${chStartRow + 1}`);
  const chTitle = ytSheet.getCell(`B${chStartRow + 1}`);
  chTitle.value = 'RECOMMENDED YOUTUBE CHANNELS';
  chTitle.font = { name: 'Segoe UI', size: 16, bold: true, color: { argb: 'CC0000' } };
  ytSheet.getRow(chStartRow + 1).height = 35;

  ytSheet.mergeCells(`B${chStartRow + 2}:I${chStartRow + 2}`);
  ytSheet.getCell(`B${chStartRow + 2}`).value = 'Subscribe to these channels for ongoing learning beyond the 30-day curriculum';
  ytSheet.getCell(`B${chStartRow + 2}`).font = { name: 'Segoe UI', size: 10, color: { argb: colors.textLight } };
  ytSheet.getRow(chStartRow + 2).height = 22;

  // Channel headers
  const chHeaders = ['', '', 'Channel', 'Channel (Click to Subscribe)', '', 'Focus Area', '', '', ''];
  const chHeaderRow = ytSheet.getRow(chStartRow + 3);
  chHeaderRow.height = 28;
  chHeaders.forEach((h, idx) => {
    const cell = chHeaderRow.getCell(idx + 1);
    cell.value = h;
    cell.font = { name: 'Segoe UI', size: 10, bold: true, color: { argb: colors.white } };
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '424242' } };
    cell.alignment = { horizontal: 'center', vertical: 'middle' };
  });

  const channels = [
    { name: 'Fireship', url: 'https://www.youtube.com/@Fireship', focus: 'Quick explainers (100 seconds), modern dev tools, frameworks, AI coding' },
    { name: 'Traversy Media', url: 'https://www.youtube.com/@TraversyMedia', focus: 'Full-stack crash courses, React, Node.js, Express, testing, Prisma' },
    { name: 'freeCodeCamp', url: 'https://www.youtube.com/@freecodecamp', focus: 'Free 3-10hr full courses, Git, algorithms, web development' },
    { name: 'TechWorld with Nana', url: 'https://www.youtube.com/@TechWorldwithNana', focus: 'DevOps, Docker, Kubernetes, CI/CD pipelines, cloud deployment' },
    { name: 'Net Ninja', url: 'https://www.youtube.com/@NetNinja', focus: 'Frontend frameworks, Tailwind CSS, TypeScript, Vue, React series' },
    { name: 'Programming with Mosh', url: 'https://www.youtube.com/@programmingwithmosh', focus: 'TypeScript, React, Node.js, Python — beginner-friendly courses' },
  ];

  channels.forEach((ch, idx) => {
    const rowNum = chStartRow + 4 + idx;
    const row = ytSheet.getRow(rowNum);
    const bgColor = idx % 2 === 0 ? 'F5F5F5' : colors.white;
    row.height = 32;

    row.getCell(2).value = idx + 1;
    row.getCell(2).font = { name: 'Segoe UI', size: 10, bold: true, color: { argb: '424242' } };
    row.getCell(2).alignment = { horizontal: 'center', vertical: 'middle' };
    row.getCell(2).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bgColor } };

    row.getCell(3).value = ch.name;
    row.getCell(3).font = { name: 'Segoe UI', size: 11, bold: true, color: { argb: colors.textDark } };
    row.getCell(3).alignment = { horizontal: 'center', vertical: 'middle' };
    row.getCell(3).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bgColor } };

    // Channel link
    ytSheet.mergeCells(`D${rowNum}:E${rowNum}`);
    const linkCell = row.getCell(4);
    linkCell.value = { text: ch.url, hyperlink: ch.url, tooltip: `Visit ${ch.name} Channel` };
    linkCell.font = { name: 'Segoe UI', size: 9, color: { argb: 'CC0000' }, underline: true };
    linkCell.alignment = { vertical: 'middle' };
    linkCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bgColor } };

    // Focus
    ytSheet.mergeCells(`F${rowNum}:I${rowNum}`);
    const focusCell = row.getCell(6);
    focusCell.value = ch.focus;
    focusCell.font = { name: 'Segoe UI', size: 9, color: { argb: colors.textMedium } };
    focusCell.alignment = { vertical: 'middle', wrapText: true };
    focusCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bgColor } };

    for (let c = 2; c <= 9; c++) {
      row.getCell(c).border = { bottom: { style: 'thin', color: { argb: 'E0E0E0' } } };
    }
  });


  // =====================================================
  // Conditional Formatting for Progress columns
  // =====================================================
  // Curriculum sheet
  currSheet.addConditionalFormatting({
    ref: 'L4:L33',
    rules: [
      {
        type: 'containsText',
        operator: 'containsText',
        text: 'Completed',
        style: {
          fill: { type: 'pattern', pattern: 'solid', bgColor: { argb: 'C8E6C9' } },
          font: { color: { argb: '2E7D32' }, bold: true },
        },
      },
      {
        type: 'containsText',
        operator: 'containsText',
        text: 'In Progress',
        style: {
          fill: { type: 'pattern', pattern: 'solid', bgColor: { argb: 'FFE0B2' } },
          font: { color: { argb: 'E65100' }, bold: true },
        },
      },
      {
        type: 'containsText',
        operator: 'containsText',
        text: 'Not Started',
        style: {
          fill: { type: 'pattern', pattern: 'solid', bgColor: { argb: 'F5F5F5' } },
          font: { color: { argb: '9E9E9E' } },
        },
      },
    ],
  });

  // Progress Tracker sheet
  tracker.addConditionalFormatting({
    ref: 'D4:D33',
    rules: [
      {
        type: 'containsText',
        operator: 'containsText',
        text: 'Completed',
        style: {
          fill: { type: 'pattern', pattern: 'solid', bgColor: { argb: 'C8E6C9' } },
          font: { color: { argb: '2E7D32' }, bold: true },
        },
      },
      {
        type: 'containsText',
        operator: 'containsText',
        text: 'In Progress',
        style: {
          fill: { type: 'pattern', pattern: 'solid', bgColor: { argb: 'FFE0B2' } },
          font: { color: { argb: 'E65100' }, bold: true },
        },
      },
    ],
  });


  // =====================================================
  // PRINT SETTINGS
  // =====================================================
  [currSheet, tracker, weekly, resources, ytSheet].forEach((ws) => {
    ws.pageSetup = {
      orientation: 'landscape',
      fitToPage: true,
      fitToWidth: 1,
      fitToHeight: 0,
      paperSize: 9, // A4
      margins: { left: 0.3, right: 0.3, top: 0.5, bottom: 0.5, header: 0.3, footer: 0.3 },
    };
  });


  // =====================================================
  // SAVE
  // =====================================================
  const outputPath = path.join(__dirname, 'Claude_Code_30Day_Curriculum.xlsx');
  await workbook.xlsx.writeFile(outputPath);
  console.log(`✅ Curriculum generated successfully!`);
  console.log(`📁 File: ${outputPath}`);
}

generateCurriculum().catch(console.error);
