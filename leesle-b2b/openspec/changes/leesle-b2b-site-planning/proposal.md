## Why

LEESLE는 삼성, 올리브영, 기아자동차, 이랜드, 미슐랭 식당 등 대기업과의 B2B 굿즈/액세서리 협업을 진행해왔으나, 기업 고객이 자발적으로 찾아오는 전용 디지털 영업 채널이 없다. 현재 기업 문의는 오프라인·개인 네트워크에 의존하고 있어 리드 확보와 전환이 비효율적이다.

기업 고객 전용 B2B 웹사이트를 구축하여 (1) 브랜드의 한국적 감성과 대기업 협업 레퍼런스를 전면에 내세운 신뢰 기반 채널을 확보하고, (2) 견적 문의·카탈로그 다운로드 등 리드 생성을 자동화하며, (3) 상품 카탈로그와 맞춤 제작 안내를 통해 신규 판매를 촉진한다.

## What Changes

LEESLE B2B 전용 웹사이트를 그린필드로 신규 구축한다. Next.js 15 + Tailwind CSS + Sanity CMS + Vercel 기반으로, 기업 고객이 협업 사례를 확인하고 상품을 탐색한 뒤 견적 문의까지 2클릭 이내에 도달할 수 있는 신뢰 우선 영업 채널을 만든다. 홈페이지에 대기업 협업 레퍼런스를 3중 레이어(로고 배너 → 사례 카드 → 실적 카운터)로 배치하고, CMS 기반으로 비개발자가 상품·콘텐츠를 직접 관리한다. 한/영 다국어와 SEO 최적화를 통해 글로벌 B2B 리드를 확보한다.

## User Journey

### Flow 1: 검색 유입 → 견적 문의 (핵심 전환 플로우)

```
구글 "기업 굿즈 제작" 검색
  → 홈페이지 랜딩 (히어로 + 협업 로고 배너로 신뢰 확보)
  → 협업 사례 섹션에서 "삼성×LEESLE" 사례 클릭
  → 사례 상세: 스토리 + 후기 확인 → 관심 상품 탐색
  → 상품 상세 페이지 → [견적 문의하기] 클릭
  → 견적 폼 (상품 카테고리 프리필) → 제출 → 확인 페이지
```

### Flow 2: 카탈로그 다운로드 → 이메일 너처링 → 재방문

```
홈페이지 방문 → 히어로 [카탈로그 보기] 클릭
  → 자료실 페이지 → 카탈로그 PDF 다운로드 (이메일 입력 필수)
  → 이메일 수집 → 뉴스레터 자동 연동
  → (시간 경과) 뉴스레터로 시즌 신상품 안내 수신
  → 재방문 → 상품 탐색 → 견적 문의
```

### Flow 3: 소개받아 직접 방문 → 맞춤 제작 문의

```
기존 고객사 소개로 b2b.leesle.com 직접 접속
  → 홈 스크롤: 실적 카운터(50+ 브랜드)로 규모 확인
  → GNB에서 "맞춤 제작" 클릭
  → 5단계 프로세스 + 커스텀 가능 범위 확인
  → 페이지 내 [견적 문의] CTA 클릭 → 폼 제출
```

> 3가지 플로우 모두 **2클릭 이내에 견적 문의 도달**이 가능하도록 모든 페이지에 Header CTA + 페이지별 CTA를 배치한다.

## Capabilities

### New Capabilities

#### MVP (Phase 1) — 론칭 필수, 4-6주

- `site-shell` **(MVP)**: 글로벌 레이아웃, 네비게이션, 푸터, 반응형 쉘, 브랜드 디자인 시스템
  - **AC1**: 모든 페이지에서 sticky 헤더의 "견적 문의" CTA 버튼이 1클릭으로 /quote에 도달한다
  - **AC2**: 홈페이지에서 헤더가 투명→불투명으로 스크롤 전환된다; 그 외 페이지는 항상 불투명
  - **AC3**: 모바일(<768px)에서 햄버거 메뉴가 전체 네비를 슬라이드 아웃으로 표시한다
  - **AC4**: 디자인 토큰(brand-cream/beige/gold/dark, Pretendard/Inter)이 모든 페이지에 일관 적용된다
  - **AC5**: 섹션 진입 시 fade-in 애니메이션이 작동하며, `prefers-reduced-motion` 시 비활성화된다

- `brand-pages` **(MVP)**: 홈 히어로, 협업 로고 배너, 카테고리 퀵링크, 사례 미리보기, 실적 카운터, 하단 CTA, 브랜드 스토리, FAQ
  - **AC1**: 홈페이지 첫 뷰포트에 히어로(풀스크린 비주얼 + 헤드라인 + 듀얼 CTA)가 스크롤 없이 보인다
  - **AC2**: 히어로 직하에 협업 브랜드 로고가 무한 CSS 슬라이더로 자동 스크롤된다
  - **AC3**: 실적 카운터(50+/200+/98%)가 뷰포트 진입 시 0→목표값 카운트업 애니메이션을 1회 실행한다
  - **AC4**: 대표 사례 2-3개가 카드 형태로 노출되며, 클릭 시 /cases/{slug}로 이동한다
  - **AC5**: 히어로 이미지 LCP ≤ 2.5초 (next/image priority loading)

- `product-catalog` **(MVP)**: 상품 목록/카테고리/필터/상세 페이지, CMS 상품 관리
  - **AC1**: 카테고리(굿즈/액세서리/시즌한정) 필터가 URL 쿼리 파라미터로 동작한다
  - **AC2**: 상품 카드 hover 시 간략 스펙이 표시되고, 클릭 시 상세 페이지로 이동한다
  - **AC3**: 상세 페이지에 이미지 갤러리(줌), 스펙 테이블, MOQ, 제작기간, [견적 문의하기] CTA가 표시된다
  - **AC4**: Sanity CMS에서 상품 CRUD(등록/수정/삭제) 시 ISR 재검증 후 60초 이내 반영된다
  - **AC5**: 상세 페이지 하단에 동일 카테고리 관련 상품이 추천된다

- `quote-inquiry` **(MVP)**: 견적 문의 폼, 서버 처리, 다채널 알림, 확인 페이지
  - **AC1**: 필수 3필드(회사명, 담당자명, 연락처) 미입력 시 인라인 에러가 표시되며 제출이 차단된다
  - **AC2**: 폼 제출 후 3초 이내에 확인 페이지("문의가 정상적으로 접수되었습니다")가 표시된다
  - **AC3**: 제출 후 1분 이내에 관리자 이메일 알림이 도착한다 (Primary 채널)
  - **AC4**: 슬랙/카카오톡 알림은 이메일과 동시 발송(병렬)이며, 실패해도 사용자 응답과 Sanity 저장에 영향 없다
  - **AC5**: 상품 상세 페이지에서 [견적 문의하기] 클릭 시, 해당 상품 카테고리와 상품명이 폼에 프리필된다
  - **AC6**: 견적서 PDF는 MVP에서 관리자가 수동 발송한다 (자동화는 Phase 3)

- `collaboration-showcase` **(MVP)**: 기업별 협업 사례, 로고 슬라이더, 비포/애프터, 고객 후기
  - **AC1**: /cases 목록 페이지에 모든 사례가 카드(기업명, 로고, 커버이미지, 요약)로 표시된다
  - **AC2**: 사례 상세에 이미지 갤러리, 풀스토리(Portable Text), 고객 후기(인용문+이름+직책)가 렌더된다
  - **AC3**: 후기(testimonial)가 없는 사례에서는 해당 섹션이 빈 공간 없이 숨겨진다
  - **AC4**: CMS에서 `featuredOnHome=true` 설정 시 홈페이지 사례 섹션에 노출된다

#### Phase 2 — 론칭 후 2-4주 내 추가

- `lead-capture` **(P2)**: 이메일 게이트 리소스 다운로드, 뉴스레터 연동, 리드 수집
  - **AC1**: 게이트된 리소스 클릭 시 이메일 입력 모달이 표시되며, 유효한 이메일 입력 후 다운로드가 시작된다
  - **AC2**: 수집된 이메일이 Sanity에 저장되고, 뉴스레터 서비스(Mailchimp/Stibee)에 자동 동기화된다
  - **AC3**: 각 리소스의 다운로드 횟수가 Sanity에 기록되어 관리자가 확인 가능하다

- `custom-production` **(P2)**: 맞춤 제작 프로세스 안내, 커스텀 범위, MOQ/일정
  - **AC1**: 5단계 프로세스 인포그래픽이 모바일/데스크톱 모두에서 가독성 있게 렌더된다
  - **AC2**: 각 섹션(프로세스/범위/일정)에 /quote로 연결되는 CTA가 포함된다
  - **AC3**: 모든 콘텐츠가 Sanity CMS에서 수정 가능하다

- `seo-analytics` **(P2)**: 메타/OG 태그, Schema.org, GA4, Meta Pixel, Hotjar, sitemap
  - **AC1**: 모든 페이지에 고유한 meta title/description과 OG 태그가 자동 생성된다
  - **AC2**: 상품 페이지에 Schema.org Product JSON-LD가, 브랜드 페이지에 Organization JSON-LD가 포함된다
  - **AC3**: GA4에 page_view(전페이지), generate_lead(견적제출), file_download(리소스다운로드) 이벤트가 전송된다
  - **AC4**: /sitemap.xml에 모든 공개 페이지가 포함되며 ISR 재검증 시 자동 갱신된다

#### Phase 3 — 론칭 후 1-3개월 확장

- `i18n` **(P3)**: 한국어/영어 다국어 전환 구조, 콘텐츠 번역 관리
  - **AC1**: /ko/..., /en/... URL 기반 로케일 라우팅이 동작한다
  - **AC2**: 영어 번역이 없는 콘텐츠는 한국어로 폴백된다
  - **AC3**: 헤더의 KO/EN 토글 클릭 시 현재 페이지의 동일 콘텐츠가 대상 언어로 표시된다
  - **AC4**: 각 페이지에 hreflang 대체 링크가 포함된다

- `admin-dashboard` **(P3)**: 문의 현황, 트래픽, 다운로드 수 확인 (Sanity 기반)
- `vip-client-portal` **(P3)**: 로그인 후 기업 전용 가격/상품 노출
- `auto-quote-pdf` **(P3)**: 견적서 PDF 자동 생성 및 발송 (현재 수동)

### Modified Capabilities

_(해당 없음 — 그린필드 프로젝트로 기존 스펙 없음)_

## Data Model (CMS 콘텐츠 타입)

> 상세 필드 정의는 design.md의 D5 섹션 참조. 아래는 핵심 콘텐츠 타입 요약.

| 콘텐츠 타입 | 주요 필드 | 비고 |
|---|---|---|
| **Product** | title(ko/en), slug, category(ref), images[], description, specs(material/size/color), moq, customizable, productionDays, featured | 상품 CRUD |
| **Category** | title(ko/en), slug, icon, order | 굿즈/액세서리/시즌한정 |
| **CollaborationCase** | title(ko/en), slug, client, clientLogo, coverImage, gallery[], fullStory(portableText), testimonial{quote,author,role}, featuredOnHome, order | 협업 사례 |
| **PartnerLogo** | name, logo, url, active, order | 홈 로고 슬라이더 |
| **SiteStats** | partnerCount, itemCount, satisfactionRate | 싱글톤, 숫자 카운터용 |
| **HeroContent** | backgroundImage, headline(ko/en), subheadline(ko/en), ctaPrimary, ctaSecondary | 싱글톤, 홈 히어로 |
| **Resource** | title(ko/en), type(catalog/brandbook/lookbook), file(PDF), thumbnail, gated | 자료실 |
| **FaqItem** | question(ko/en), answer(ko/en), order | FAQ 아코디언 |
| **QuoteInquiry** | companyName, contactName, contact, category, quantity, purpose, deadline, notes, submittedAt | 읽기 전용 (폼 제출 데이터) |

## Impact

### 기술 영향

- **신규 코드베이스 전체 구축**: Next.js 15 (App Router) + Tailwind CSS v4 + Sanity v3 CMS
- **프론트엔드**: 페이지 8종(홈, 카탈로그, 사례, 브랜드, 맞춤제작, 견적문의, 자료실, FAQ), 컴포넌트 30+개
- **API 라우트**: POST /api/quote (견적 제출), POST /api/lead (리드 수집), POST /api/revalidate (ISR 웹훅)
- **외부 연동**: Resend/SendGrid (이메일), Slack Webhook, 카카오톡 알림 API, GA4, Meta Pixel, Hotjar
- **인프라**: Vercel 호스팅 + GitHub CI/CD + 글로벌 CDN

### 성능·접근성 기준

- LCP ≤ 2.5초, 모바일 PageSpeed ≥ 90점
- WCAG 2.1 AA 접근성 준수
- ISR 기반 정적 생성 + 온디맨드 재검증 (Sanity webhook)

### 운영 영향

- 비개발자(LEESLE 팀)가 Sanity CMS로 상품·사례·콘텐츠 직접 관리
- 타겟 사용자: 기업 마케팅/구매 담당자 (30-50대, 데스크톱 중심)

### KPI 목표 (론칭 3개월 기준)

| 지표 | 목표 | 의미 |
|---|---|---|
| 월간 견적 문의 | 30건+ | 핵심 전환 — 영업 파이프라인 |
| 카탈로그 다운로드 | 100건/월 | 리드 생성 — 잠재 고객 |
| 평균 체류 시간 | 3분+ | 콘텐츠 매력도 |
| 문의→계약 전환율 | 15%+ | 채널 품질 |
| 기업굿즈 키워드 검색 | 상위 10위 | SEO 유기 트래픽 |

### 리스크 및 제약 조건

| 리스크 | 영향 | 완화 방안 |
|---|---|---|
| **콘텐츠 미확보** — 협업 사례 이미지, 고객사 로고 사용 허가, 후기 텍스트는 LEESLE 팀이 사전 확보해야 함 | 콘텐츠 없으면 홈페이지 핵심 섹션(로고 배너, 사례 카드)이 비어 론칭 지연 | 개발과 콘텐츠 수집을 병행. Phase 1 시작 시 로고 5개+, 사례 2개+ 확보 필수 |
| **CMS 선택 미확정** — Sanity vs Strapi 최종 결정 필요 | 스키마 구조와 API 연동 방식이 달라짐 | design.md에서 Sanity v3 권장 (서버리스, Free tier 충분, 이미지 CDN 내장). 팀 확인 후 확정 |
| **카카오톡 알림 API** — 비즈니스 채널 개설 및 알림톡 템플릿 승인 절차 필요 | 승인 2-4주 소요, MVP 론칭 시 미적용 가능 | 이메일을 Primary, 카카오는 best-effort. MVP에서는 이메일+슬랙만으로 론칭 가능 |
| **다국어 콘텐츠** — 영어 번역 리소스(내부 vs 외주) 확보 여부 | i18n 기능은 있어도 영문 콘텐츠가 없으면 의미 없음 | i18n을 Phase 3으로 배치. 한국어 우선 론칭 후 영문 콘텐츠 확보 시 적용 |
| **MVP 범위 관리** — 9개 capability 전체 구현 시 4-6주 초과 가능 | 일정 지연 | Phase 1은 5개 MVP capability에 집중. 나머지는 론칭 후 순차 추가 |
| **Sanity Free tier 한도** — 월 100K API CDN 요청 | 트래픽 증가 시 유료 전환 필요 | 초기 트래픽에는 충분. 모니터링 후 Pro 전환 |
