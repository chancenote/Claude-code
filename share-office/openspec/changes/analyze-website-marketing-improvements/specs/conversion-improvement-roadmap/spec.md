## ADDED Requirements

### Requirement: Impact-Effort 매트릭스 기반 개선 항목 분류

시스템은 퍼널 진단에서 도출된 모든 개선 항목을 Impact(High/Medium/Low) × Effort(Low/Medium/High) 2축 매트릭스로 분류하여야 한다(SHALL). 각 항목에는 해당 퍼널 단계, 관련 섹션, 변경 대상 파일을 명시하여야 한다(MUST).

#### Scenario: Quick Win 식별

- **WHEN** 개선 항목을 매트릭스에 배치할 때
- **THEN** Impact=High + Effort=Low인 항목을 "Quick Win"으로 태그하고 실행 1순위로 배치하여야 한다

#### Scenario: 매트릭스 분류 기준

- **WHEN** 각 항목의 Impact와 Effort를 판단할 때
- **THEN** Impact는 퍼널 단계별 전환 기여도(Action 직접 영향=High, Trust 간접 영향=Medium, Interest/Attention 인지 영향=Low)로, Effort는 변경 범위(단일 텍스트 수정=Low, 섹션 구조 변경=Medium, 크로스커팅 변경=High)로 판단하여야 한다

### Requirement: 섹션 단위 개선안 명세

시스템은 각 섹션(Hero, Pain Points, Services, Why Us, Process, Credibility, FAQ, Contact)별로 구체적 개선안을 명세하여야 한다(SHALL). 각 개선안에는 현재 상태(AS-IS), 개선 후 상태(TO-BE), 변경 근거를 포함하여야 한다(MUST).

#### Scenario: Hero 섹션 개선안

- **WHEN** Hero 섹션의 개선안을 작성할 때
- **THEN** 최소 다음 항목을 포함하여야 한다: (1) 헤드라인 카피 개선(타겟 니즈 직결), (2) 서브카피 간결화, (3) CTA 문구 액션 지향적 개선, (4) 통계 수치 신뢰도 강화(출처/기준 명시)

#### Scenario: Contact 섹션 개선안

- **WHEN** Contact 섹션의 개선안을 작성할 때
- **THEN** 최소 다음 항목을 포함하여야 한다: (1) 폼 input에 name 속성 추가, (2) 불필요 필드 제거 또는 선택 처리, (3) 플레이스홀더 연락처를 실제 값으로 교체(운영자 확인 필요 태그), (4) 폼 제출 피드백 개선

### Requirement: 크로스커팅 개선안 명세

시스템은 전체 페이지에 걸치는 크로스커팅 개선안을 섹션 개선과 분리하여 명세하여야 한다(SHALL).

#### Scenario: CTA 일관성 개선안

- **WHEN** 페이지 전체의 CTA를 분석할 때
- **THEN** 모든 CTA(nav 버튼, Hero 버튼 2개, 서비스 배너 링크, Contact 폼 제출)의 문구, 색상, 크기를 통일하는 개선안을 제시하고, Primary CTA와 Secondary CTA의 시각적 위계를 정의하여야 한다

#### Scenario: 모바일 전환 UX 개선안

- **WHEN** 모바일 환경에서의 전환 흐름을 분석할 때
- **THEN** 모바일에서 CTA 접근성(thumb zone), 폼 입력 편의성, 전화 연결 원터치 가능 여부를 평가하고 개선안을 제시하여야 한다

### Requirement: 단계별 실행 로드맵

시스템은 개선 항목을 3단계 실행 계획으로 구성하여야 한다(SHALL): Phase 1(Quick Win, 1주 내), Phase 2(구조 개선, 2-4주), Phase 3(측정 체계 구축, 4-8주).

#### Scenario: Phase 1 Quick Win 목록

- **WHEN** Phase 1 실행 계획을 수립할 때
- **THEN** HTML 텍스트 수정, name 속성 추가, 플레이스홀더 교체 등 코드 변경이 최소이면서 전환에 직접 영향을 주는 항목을 배치하여야 한다

#### Scenario: Phase 간 의존성

- **WHEN** Phase 2와 Phase 3 항목을 배치할 때
- **THEN** Phase 1 완료를 전제로 하는 항목(예: 폼 정상화 후 전환율 측정)은 반드시 후속 Phase에 배치하고, 의존 관계를 명시하여야 한다
