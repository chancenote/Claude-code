## ADDED Requirements

### Requirement: AITA 퍼널 단계별 진단 체크리스트

시스템은 현재 랜딩 페이지를 AITA 퍼널(Attention → Interest → Trust → Action) 4단계로 진단하는 체크리스트를 제공하여야 한다(SHALL). 각 단계에는 평가 기준 항목이 명시되고, 항목별로 현재 상태(Pass/Fail/Partial)와 근거를 기록하여야 한다(MUST).

#### Scenario: Attention 단계 진단

- **WHEN** Hero 섹션을 Attention 단계 기준으로 진단할 때
- **THEN** 다음 항목을 평가하여야 한다: (1) 헤드라인이 타겟 고객의 핵심 니즈를 3초 내 전달하는가, (2) 서브 헤드라인이 차별화 포인트를 명확히 하는가, (3) 히어로 비주얼이 서비스 본질과 일치하는가, (4) 배지/태그라인이 전문성을 즉시 인지시키는가

#### Scenario: Interest 단계 진단

- **WHEN** Pain Points와 Services 섹션을 Interest 단계 기준으로 진단할 때
- **THEN** 다음 항목을 평가하여야 한다: (1) 고객 고민이 타겟의 실제 페인포인트와 일치하는가, (2) 서비스가 고민에 대한 해결책으로 명확히 연결되는가, (3) Phase 1-2-3 구조가 고객 의사결정 흐름과 일치하는가, (4) 각 서비스의 구체적 결과물(deliverable)이 명시되어 있는가

#### Scenario: Trust 단계 진단

- **WHEN** Why Us, Credibility, FAQ 섹션을 Trust 단계 기준으로 진단할 때
- **THEN** 다음 항목을 평가하여야 한다: (1) 실적 수치가 구체적이고 검증 가능한가, (2) 고객 후기가 결과 중심(수치/기간)으로 작성되어 있는가, (3) 비교표가 공정하고 신뢰를 훼손하지 않는가, (4) 기관 로고가 실제 로고 이미지인가(현재는 텍스트 박스), (5) FAQ가 구매 결정의 핵심 불안을 해소하는가

#### Scenario: Action 단계 진단

- **WHEN** CTA 요소와 Contact 섹션을 Action 단계 기준으로 진단할 때
- **THEN** 다음 항목을 평가하여야 한다: (1) CTA 문구가 행동 유도적이고 일관적인가, (2) 폼 필드 수가 최소화되어 있는가, (3) 폼이 실제로 작동하는가(name 속성, 엔드포인트), (4) 연락처 정보가 실제 값인가(플레이스홀더 아닌지), (5) 폼 제출 후 다음 단계가 명확한가

### Requirement: 섹션-퍼널 매핑

시스템은 페이지의 각 섹션을 AITA 퍼널 단계에 매핑하여야 한다(SHALL). 하나의 섹션이 여러 퍼널 단계에 기여할 수 있으며, 각 매핑에는 기여 강도(Primary/Secondary)를 표시하여야 한다(MUST).

#### Scenario: 현재 페이지 섹션 매핑

- **WHEN** NextCowork 랜딩 페이지의 8개 섹션을 퍼널에 매핑할 때
- **THEN** 다음 매핑을 기준으로 진단하여야 한다: Hero=Attention(Primary), Pain Points=Interest(Primary), Services=Interest(Primary), Why Us=Trust(Primary), Process=Interest(Secondary)+Trust(Secondary), Credibility=Trust(Primary), FAQ=Trust(Secondary)+Action(Secondary), Contact=Action(Primary)

### Requirement: 진단 결과 요약 형식

시스템은 퍼널 진단 결과를 단계별 건강도 점수(0-100)와 함께 요약하여야 한다(SHALL). 요약에는 각 단계의 가장 심각한 문제(Critical Issue) 1개와 가장 쉬운 개선 기회(Quick Win) 1개를 포함하여야 한다(MUST).

#### Scenario: 진단 요약 출력

- **WHEN** 4단계 퍼널 진단이 모두 완료되었을 때
- **THEN** 각 단계별로 (1) 건강도 점수(통과 항목 비율 기반), (2) Critical Issue(전환에 가장 큰 영향을 주는 미통과 항목), (3) Quick Win(최소 노력으로 해결 가능한 미통과 항목)을 포함한 요약을 출력하여야 한다
