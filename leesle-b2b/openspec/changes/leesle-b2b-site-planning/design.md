## Context

LEESLE B2B 전용 웹사이트를 신규 구축한다. 기존 코드베이스 없는 그린필드 프로젝트이며, 핵심 목표는 **메인페이지에서 B2B 콜라보·납품 레퍼런스를 전면에 내세워** 기업 고객의 신뢰를 즉각 확보하고 견적 문의로 전환하는 것이다.

타겟 사용자는 기업 마케팅/구매 담당자(30-50대, 데스크톱 중심)이며, 삼성·올리브영·기아·이랜드·미슐랭 식당 등 대기업 협업 이력이 핵심 차별점이다. 단순 카탈로그가 아닌, "검증된 파트너"임을 1스크롤 안에 인지시키는 영업 채널을 만든다.

기술 권장 스택: Next.js (App Router) + Tailwind CSS + Sanity CMS + Vercel 배포.

## Goals / Non-Goals

**Goals:**

- 메인페이지 첫 뷰포트에서 대기업 협업 레퍼런스가 즉시 보이는 "신뢰 우선" 구조 설계
- 모든 페이지에서 2클릭 이내 견적 문의 도달 가능한 CTA 아키텍처
- CMS 기반으로 비개발자가 상품·콜라보 사례·콘텐츠를 직접 관리
- LCP 2.5초 이내, 모바일 PageSpeed 90점 이상의 성능
- 한/영 다국어 대응 구조
- WCAG 2.1 AA 접근성 준수

**Non-Goals:**

- 결제/장바구니 기능 (B2B 특성상 견적 기반 거래)
- 회원가입/로그인 시스템 (MVP 범위 외, Phase 4에서 VIP 기업용으로 확장)
- 실시간 채팅 상담 (카카오톡 외부 링크로 대체)
- 블로그/뉴스 섹션 (향후 확장 예정)
- 자동 견적 계산기 (MVP에서는 수동 견적서 발송)

## Decisions

### D1. 프레임워크 — Next.js 15 App Router

**선택:** Next.js 15 (App Router, RSC 기반)
**대안:** Nuxt 3, Remix, Astro

**근거:**
- SSR/SSG 하이브리드로 SEO와 성능 모두 확보
- Sanity CMS와의 검증된 통합 생태계 (next-sanity, @sanity/image-url)
- Vercel 원클릭 배포 + Edge CDN으로 글로벌 성능 보장
- React Server Components로 CMS 데이터 서버 사이드 페칭 → 클라이언트 번들 최소화
- App Router의 `generateStaticParams`로 상품/사례 페이지 ISR 적용

### D2. CMS — Sanity v3

**선택:** Sanity v3 (호스팅 CMS)
**대안:** Strapi (셀프호스팅), Contentful, Payload CMS

**근거:**
- GROQ 쿼리 언어로 유연한 콘텐츠 조회 (카테고리 필터링, 관계형 데이터에 강점)
- 실시간 프리뷰 + Visual Editing으로 비개발자 편집 경험 우수
- Free tier로 MVP 운영 충분 (월 100K API CDN 요청)
- 이미지 CDN 내장 (자동 리사이즈, WebP 변환, 크롭)
- Strapi 대비 서버 관리 불필요, Contentful 대비 가격 경쟁력

### D3. 메인페이지 콜라보 쇼케이스 전략 — 3중 신뢰 레이어

메인페이지의 핵심은 B2B 협업 레퍼런스를 **3가지 레이어**로 반복 노출하여 신뢰를 쌓는 것이다:

**Layer 1 — 히어로 직하 로고 배너 (즉각 인지)**
- 협업 브랜드 로고 무한 슬라이더 (삼성, 올리브영, 기아, 이랜드, 미슐랭 ...)
- 첫 뷰포트 내 배치하여 스크롤 없이 "대기업이 선택한 브랜드" 인지
- Sanity에서 로고 이미지 + 링크를 관리, 순서·활성화 제어 가능

**Layer 2 — 대표 사례 미리보기 카드 (스토리 전달)**
- 대표 협업 3건을 카드 형태로 노출 (기업명, 대표 이미지, 한줄 요약)
- 클릭 시 상세 사례 페이지로 이동
- CMS에서 "메인 노출" 플래그로 관리

**Layer 3 — 실적 숫자 카운터 (정량적 신뢰)**
- 스크롤 시 카운트업 애니메이션: "협업 브랜드 50+" / "제작 아이템 200+" / "고객 만족도 98%"
- CMS에서 숫자값 관리 가능 (실적 업데이트 용이)

### D4. 메인페이지 섹션 구조 및 컴포넌트 아키텍처

```
┌────────────────────────────────────────────────┐
│  Header (sticky, 투명→불투명 전환)              │
├────────────────────────────────────────────────┤
│  HeroSection                                    │
│  - 풀스크린 비주얼 (next/image, priority)       │
│  - 헤드라인 + 서브카피 오버레이                  │
│  - CTA 듀얼 버튼: [맞춤 견적] [카탈로그 보기]   │
├────────────────────────────────────────────────┤
│  TrustLogoBanner ← Layer 1                      │
│  - 로고 무한 슬라이더 (CSS animation 기반)      │
│  - "삼성, 기아, 올리브영이 선택한 파트너"       │
├────────────────────────────────────────────────┤
│  CategoryQuickLinks                             │
│  - 인기 카테고리 카드 3-4개                      │
│  - 기업선물 | 판촉굿즈 | 커스텀 액세서리 | 시즌 │
├────────────────────────────────────────────────┤
│  FeaturedCases ← Layer 2                        │
│  - 대표 협업 사례 카드 2-3개                     │
│  - 기업명, 대표 이미지, 한줄 요약               │
├────────────────────────────────────────────────┤
│  StatsCounter ← Layer 3                         │
│  - 협업 브랜드 50+ | 아이템 200+ | 만족도 98%   │
│  - Intersection Observer 기반 카운트업          │
├────────────────────────────────────────────────┤
│  BottomCTA                                      │
│  - "지금 상담 시작하기" 풀폭 CTA                │
├────────────────────────────────────────────────┤
│  Footer                                         │
│  - 회사 정보, 빠른 링크, 견적 문의 링크         │
└────────────────────────────────────────────────┘
```

**컴포넌트 트리:**
```
app/
├── (site)/
│   ├── layout.tsx          ← Header + Footer 공통 쉘
│   ├── page.tsx            ← 메인페이지 (RSC, CMS 데이터 서버 페칭)
│   ├── products/
│   │   ├── page.tsx        ← 카탈로그 목록
│   │   └── [slug]/page.tsx ← 상품 상세
│   ├── cases/
│   │   ├── page.tsx        ← 협업 사례 목록
│   │   └── [slug]/page.tsx ← 사례 상세
│   ├── brand/page.tsx      ← 브랜드 스토리
│   ├── custom/page.tsx     ← 맞춤 제작 안내
│   ├── quote/page.tsx      ← 견적 문의
│   ├── resources/page.tsx  ← 자료실
│   └── faq/page.tsx        ← FAQ
├── api/
│   ├── quote/route.ts      ← 견적 폼 제출 API
│   ├── lead/route.ts       ← 리드 수집 API
│   └── revalidate/route.ts ← Sanity webhook → ISR 재검증
├── components/
│   ├── layout/             ← Header, Footer, Navigation
│   ├── home/               ← HeroSection, TrustLogoBanner, CategoryQuickLinks,
│   │                          FeaturedCases, StatsCounter, BottomCTA
│   ├── products/           ← ProductCard, ProductGrid, ProductFilter
│   ├── cases/              ← CaseCard, CaseDetail
│   ├── quote/              ← QuoteForm, QuoteConfirmation
│   └── ui/                 ← Button, Card, Modal 등 공통 UI
├── lib/
│   ├── sanity/
│   │   ├── client.ts       ← Sanity 클라이언트 설정
│   │   ├── queries.ts      ← GROQ 쿼리 모음
│   │   └── image.ts        ← 이미지 URL 빌더
│   ├── email.ts            ← Resend/SendGrid 연동
│   └── notifications.ts    ← 슬랙/카카오 알림
└── messages/
    ├── ko.json             ← 한국어
    └── en.json             ← 영어
```

### D5. CMS 스키마 설계 (Sanity)

```
Product {
  title: string (ko, en)
  slug: slug
  description: text (ko, en)
  category: reference → Category
  images: array<image>
  specs: { material, size, color options }
  moq: number
  customizable: boolean
  productionDays: number
  featured: boolean       ← 메인 노출 여부
}

Category {
  title: string (ko, en)
  slug: slug
  icon: image
  order: number
}

CollaborationCase {
  title: string (ko, en)
  slug: slug
  client: string          ← "삼성", "기아" 등
  clientLogo: image
  coverImage: image
  gallery: array<image>
  summary: text (ko, en)
  fullStory: portableText (ko, en)
  testimonial: { quote, author, role }
  featuredOnHome: boolean ← 메인페이지 노출 플래그
  order: number
}

PartnerLogo {
  name: string
  logo: image
  url: string (optional)
  active: boolean
  order: number
}

SiteStats {
  partnerCount: number    ← "50+"
  itemCount: number       ← "200+"
  satisfactionRate: number ← "98%"
}

HeroContent {
  backgroundImage: image
  headline: string (ko, en)
  subheadline: string (ko, en)
  ctaPrimary: { label, url }
  ctaSecondary: { label, url }
}

Resource {
  title: string (ko, en)
  type: 'catalog' | 'brandbook' | 'lookbook'
  file: file (PDF)
  thumbnail: image
  gated: boolean          ← 이메일 입력 필요 여부
}
```

### D6. 스타일링 — Tailwind CSS + 브랜드 디자인 토큰

**선택:** Tailwind CSS v4 + CSS 커스텀 프로퍼티
**대안:** styled-components, CSS Modules

**디자인 토큰:**
```
colors:
  brand-cream:    #F5F0EB    ← 메인 배경
  brand-beige:    #E8DFD5    ← 섹션 구분 배경
  brand-gold:     #C4A265    ← 포인트 (CTA, 강조)
  brand-dark:     #2C2C2C    ← 텍스트
  brand-gray:     #8C8C8C    ← 서브 텍스트
  brand-white:    #FFFFFF    ← 카드 배경

typography:
  heading: Pretendard (한글) + Inter (영문)
  body: Pretendard / Inter
  accent: 필요시 세리프 폰트 (한국적 감성 강조용)

spacing:
  section-gap: 80px (desktop) / 48px (mobile)
  container-max: 1280px
  content-padding: 24px (mobile) / 0 (desktop)
```

### D7. 이미지 최적화 전략

- Sanity Image CDN 활용: 자동 WebP/AVIF 변환, 디바이스별 리사이즈
- 히어로 이미지: `next/image`의 `priority` + `sizes` 속성으로 LCP 최적화
- 로고 슬라이더: SVG 우선, 래스터일 경우 48px 높이 고정으로 최소 로드
- 상품 이미지: lazy loading + blur placeholder (LQIP)
- OG 이미지: 동적 생성 (`next/og`) 또는 Sanity 이미지 URL 직접 사용

### D8. 다국어 처리 — next-intl

**선택:** next-intl
**대안:** next-i18next, 자체 구현

**근거:**
- App Router 네이티브 지원
- 서버 컴포넌트에서 직접 번역 함수 사용 가능
- URL 기반 로케일 (`/ko/...`, `/en/...`) 또는 쿠키 기반 선택 가능
- CMS 콘텐츠는 Sanity 필드 수준에서 ko/en 분리, UI 텍스트는 JSON 파일로 관리

### D9. 견적 문의 시스템 흐름

```
[사용자] 폼 작성 → POST /api/quote
  → 서버: 폼 검증 (zod)
  → 서버: Sanity에 문의 데이터 저장
  → 비동기 병렬:
     ├── Resend API → 관리자 이메일 알림
     ├── Slack Webhook → #b2b-inquiries 채널
     └── 카카오톡 알림 API → 담당자 알림
  → 응답: 확인 페이지 표시
  → 후속: 24시간 내 담당자 1차 회신
  → 후속: 견적서 PDF 수동 발송 (MVP)
```

### D10. 배포 및 인프라

- **호스팅:** Vercel (Pro 이상 권장 — 팀 액세스, 분석)
- **도메인:** 커스텀 도메인 연결 (예: b2b.leesle.com)
- **CDN:** Vercel Edge Network (글로벌 자동 배포)
- **환경 변수:** Sanity 프로젝트 ID/토큰, Resend API 키, Slack Webhook URL, GA4 ID 등
- **CI/CD:** GitHub main 브랜치 push → Vercel 자동 배포
- **ISR:** 상품/사례 페이지는 ISR (revalidate: 60초) + Sanity Webhook으로 온디맨드 재검증

## User Flow & CTA Architecture

### 핵심 전환 플로우 (검색 유입 → 견적 문의)

```
[구글 검색]
  → / (홈)
     ├── HeroSection [맞춤 견적 받기] ─→ /quote
     ├── TrustLogoBanner (스크롤 중 신뢰 구축)
     ├── FeaturedCases 카드 클릭 ─→ /cases/{slug}
     │    └── CaseDetail [견적 문의] ─→ /quote
     ├── CategoryQuickLinks 클릭 ─→ /products?category=X
     │    └── ProductDetail [견적 문의하기] ─→ /quote?product=Y
     └── BottomCTA [지금 상담 시작하기] ─→ /quote
```

### CTA 도달 경로 (모든 페이지 → /quote)

```
┌────────────────────────────────────┐
│ 어떤 페이지든 (Header)             │
│  → [견적 문의] 버튼 ────→ /quote  │  ← 1클릭 (항상 가능)
├────────────────────────────────────┤
│ / (홈)                            │
│  → 히어로 [맞춤 견적 받기] ─→     │  ← 1클릭
│  → 하단 CTA [상담 시작] ──→       │  ← 1클릭
├────────────────────────────────────┤
│ /products/[slug] (상품 상세)       │
│  → [견적 문의하기] ───────→       │  ← 1클릭 (카테고리+상품명 프리필)
├────────────────────────────────────┤
│ /cases/[slug] (사례 상세)          │
│  → 페이지 내 CTA ────────→       │  ← 1클릭
├────────────────────────────────────┤
│ /custom (맞춤 제작)               │
│  → 각 섹션 CTA ─────────→       │  ← 1클릭
└────────────────────────────────────┘
  모든 경로: 최대 2클릭 이내 /quote 도달
```

### 리드 수집 플로우 (카탈로그 다운로드)

```
/ (홈) → [카탈로그 보기]
  → /resources
     → 카탈로그 클릭 → 이메일 입력 모달
       → POST /api/lead (이메일 저장 + 뉴스레터 연동)
       → PDF 다운로드 시작
       → (후속) 뉴스레터 → 재방문 → 견적 문의
```


## Risks / Trade-offs

- **[CMS 의존성]** Sanity Free tier 한도 초과 시 유료 전환 필요 → 초기 트래픽으로는 충분. 월 100K CDN 요청 모니터링 후 필요시 Pro 전환
- **[이미지 용량]** 제품 사진·콜라보 사례 이미지가 많아 로딩 성능 저하 가능 → Sanity Image CDN 자동 최적화 + lazy loading + LQIP로 대응
- **[다국어 콘텐츠 관리]** 한/영 이중 관리 부담 → Sanity 필드 수준 i18n으로 같은 에디터 화면에서 병행 관리, 번역 미완료 시 한국어 폴백
- **[슬랙/카카오 알림 실패]** 외부 API 장애 시 문의 누락 가능 → 이메일을 Primary로, 슬랙/카카오는 best-effort. Sanity에 문의 데이터 저장하여 알림 실패해도 데이터 보존
- **[MVP 범위 증가]** 9개 capability 전체 구현 시 4-6주 초과 가능 → Phase 2(MVP)에서는 홈·카탈로그·협업사례·견적문의 4개 핵심 페이지에 집중. 나머지는 Phase 4에서 확장

## Open Questions

- Sanity vs Strapi 최종 선택 — 팀의 CMS 사용 경험 및 셀프호스팅 선호도에 따라 결정 필요
- 카카오톡 알림 API — 카카오 비즈니스 채널 보유 여부 및 알림톡 템플릿 승인 절차 확인 필요
- 브랜드 컬러 정확한 값 — LEESLE 공식 브랜드 가이드에서 정확한 HEX 값 확인 필요 (현재 D6의 값은 "한국 전통 감성 + 모던 미니멀" 톤 기반 추정)
- 도메인 구조 — b2b.leesle.com (서브도메인) vs leesle.com/b2b (서브경로) vs 독립 도메인
- GA4/Pixel ID — 기존 LEESLE 마케팅 팀에서 사용 중인 계정 연동 여부
