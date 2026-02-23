## ADDED Requirements

### Requirement: Responsive site shell with header and footer
The system SHALL render a global layout shell on every page consisting of a sticky header and a footer. The layout SHALL be desktop-first responsive, adapting seamlessly to tablet (768px) and mobile (375px) breakpoints. The maximum content width SHALL be 1280px, centered horizontally.

#### Scenario: Desktop layout renders correctly
- **WHEN** a user visits any page on a viewport width ≥ 1024px
- **THEN** the page displays within a 1280px max-width container, with the sticky header at the top and footer at the bottom

#### Scenario: Mobile layout adapts
- **WHEN** a user visits any page on a viewport width < 768px
- **THEN** the layout switches to a mobile-optimized view with 24px horizontal content padding and a hamburger navigation menu

### Requirement: Sticky header with transparency transition
The header SHALL be sticky (fixed to the top on scroll). On the homepage, the header SHALL start transparent over the hero image and transition to an opaque background (brand-cream #F5F0EB) when the user scrolls past the hero viewport. On all other pages, the header SHALL always display with the opaque background.

#### Scenario: Homepage header transparency
- **WHEN** a user is at the top of the homepage (scroll position 0)
- **THEN** the header background is transparent with white text/logo

#### Scenario: Homepage header becomes opaque on scroll
- **WHEN** a user scrolls past the hero section on the homepage
- **THEN** the header transitions smoothly to opaque brand-cream background with dark text/logo

#### Scenario: Non-homepage header is always opaque
- **WHEN** a user visits any page other than the homepage
- **THEN** the header displays with opaque brand-cream background from the start

### Requirement: Main navigation menu
The header SHALL contain a navigation menu with links to: 상품 카탈로그, 협업 사례, 맞춤 제작, 브랜드 스토리, 자료실, FAQ. The navigation SHALL also include a prominent "견적 문의" CTA button styled with the brand-gold (#C4A265) color. A language toggle (KO/EN) SHALL be placed in the header.

#### Scenario: Desktop navigation displays all links
- **WHEN** a user views the header on desktop (≥ 1024px)
- **THEN** all navigation links are visible as horizontal text links, with the "견적 문의" button visually distinct (gold background), and the language toggle on the right

#### Scenario: Mobile navigation uses hamburger menu
- **WHEN** a user views the header on mobile (< 768px)
- **THEN** navigation links are hidden behind a hamburger icon that opens a full-screen slide-out menu, with "견적 문의" button prominently placed at the top of the menu

### Requirement: Footer with company info and quick links
The footer SHALL display: LEESLE company information (address, business registration, contact), quick navigation links mirroring the header menu, social media links, and a secondary "견적 문의" CTA link. The footer SHALL be consistent across all pages.

#### Scenario: Footer renders on every page
- **WHEN** a user scrolls to the bottom of any page
- **THEN** the footer displays company info, quick links, social links, and a quote inquiry link

### Requirement: Global quote CTA accessibility
Every page SHALL provide a path to the quote inquiry page within 2 clicks. This SHALL be achieved via the header "견적 문의" button (always visible) and page-specific CTA sections.

#### Scenario: Quote inquiry reachable in 2 clicks
- **WHEN** a user is on any page of the site
- **THEN** the user can reach the quote inquiry form within at most 2 clicks (1 click via header CTA button)

### Requirement: Brand design system tokens
The site SHALL apply a consistent design system based on: colors (brand-cream #F5F0EB, brand-beige #E8DFD5, brand-gold #C4A265, brand-dark #2C2C2C, brand-gray #8C8C8C, brand-white #FFFFFF), typography (Pretendard for Korean, Inter for English), and spacing (80px section gaps on desktop, 48px on mobile). The overall tone SHALL be "한국 전통 감성 + 모던 미니멀" — generous whitespace, restrained color palette, premium feel.

#### Scenario: Design tokens applied consistently
- **WHEN** any page is rendered
- **THEN** the page uses only the defined brand color palette, Pretendard/Inter font stack, and specified spacing values

### Requirement: Page transition animations
The site SHALL apply subtle micro-interactions: smooth page transitions and scroll-triggered fade-in animations for content sections. Animations MUST NOT be excessive — they SHALL enhance the premium feel without delaying content visibility.

#### Scenario: Scroll animations on content sections
- **WHEN** a content section enters the viewport during scrolling
- **THEN** the section fades in with a subtle upward motion (duration ≤ 500ms)

#### Scenario: Animations respect reduced motion preference
- **WHEN** the user has `prefers-reduced-motion: reduce` set
- **THEN** all animations are disabled and content is shown immediately
