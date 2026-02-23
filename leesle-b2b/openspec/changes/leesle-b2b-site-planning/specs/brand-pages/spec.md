## ADDED Requirements

### Requirement: Homepage hero section with fullscreen visual
The homepage SHALL display a fullscreen hero section as the first visible content. The hero SHALL contain: a high-quality background image (LEESLE lifestyle/product visual), a headline overlay ("한국의 감성을 담은 기업 맞춤 굿즈"), a subheadline ("삼성, 기아, 올리브영이 선택한 브랜드 파트너"), and two CTA buttons — primary [맞춤 견적 받기] and secondary [카탈로그 보기]. The hero image SHALL be loaded with priority (no lazy loading) to optimize LCP. All hero content (image, headline, subheadline, CTAs) SHALL be CMS-managed via the HeroContent schema in Sanity.

#### Scenario: Hero displays on homepage load
- **WHEN** a user visits the homepage
- **THEN** the fullscreen hero image, headline, subheadline, and two CTA buttons are visible without scrolling

#### Scenario: Primary CTA navigates to quote page
- **WHEN** a user clicks the [맞춤 견적 받기] button on the hero
- **THEN** the user is navigated to the quote inquiry page (/quote)

#### Scenario: Secondary CTA navigates to catalog
- **WHEN** a user clicks the [카탈로그 보기] button on the hero
- **THEN** the user is navigated to the product catalog page (/products)

#### Scenario: Hero content is CMS-editable
- **WHEN** an admin updates the hero headline or background image in Sanity CMS
- **THEN** the homepage reflects the updated hero content after ISR revalidation

### Requirement: Trust logo banner with partner brand logos
Immediately below the hero section, the homepage SHALL display a trust logo banner showing collaboration partner brand logos (삼성, 올리브영, 기아자동차, 이랜드, 미슐랭 식당, etc.) in an infinite horizontal scrolling slider. The banner SHALL include a label such as "함께한 브랜드". The logos SHALL be managed in Sanity (PartnerLogo schema) with name, logo image, optional URL, active flag, and display order. Only logos with active=true SHALL be displayed.

#### Scenario: Logo banner displays on homepage
- **WHEN** a user views the homepage below the hero section
- **THEN** a continuously scrolling horizontal banner shows partner brand logos

#### Scenario: Logo slider scrolls infinitely
- **WHEN** the logo banner is visible
- **THEN** logos scroll continuously from right to left in an infinite loop (CSS animation based, no JavaScript dependency)

#### Scenario: Only active logos are shown
- **WHEN** an admin sets a partner logo's active flag to false in Sanity
- **THEN** that logo no longer appears in the trust logo banner

#### Scenario: Logo order is CMS-controlled
- **WHEN** an admin reorders partner logos via the order field in Sanity
- **THEN** the banner reflects the updated display order

### Requirement: Category quick links section
The homepage SHALL display a category quick links section showing 3-4 popular product category cards (기업선물, 판촉굿즈, 커스텀 액세서리, 시즌한정). Each card SHALL display a category icon/image, the category name, and link to the filtered product catalog page. Categories SHALL be fetched from the Sanity Category schema, ordered by the order field.

#### Scenario: Category cards display on homepage
- **WHEN** a user scrolls to the category section on the homepage
- **THEN** 3-4 category cards are displayed in a horizontal row (grid on mobile)

#### Scenario: Clicking a category navigates to filtered catalog
- **WHEN** a user clicks on a category card (e.g., "기업선물")
- **THEN** the user is navigated to /products?category=기업선물 with the corresponding filter pre-applied

### Requirement: Featured collaboration cases section
The homepage SHALL display 2-3 featured collaboration case preview cards. Each card SHALL show: the client company name, a representative cover image, and a one-line summary. Clicking a card SHALL navigate to the detailed case page. Cases displayed SHALL be those with featuredOnHome=true in the Sanity CollaborationCase schema, ordered by the order field.

#### Scenario: Featured cases display on homepage
- **WHEN** a user scrolls to the cases section on the homepage
- **THEN** 2-3 collaboration case cards are displayed with client name, image, and summary

#### Scenario: Only CMS-flagged cases appear
- **WHEN** an admin sets featuredOnHome=true on a collaboration case in Sanity
- **THEN** that case appears in the homepage featured section

#### Scenario: Clicking a case card navigates to detail
- **WHEN** a user clicks on a collaboration case card
- **THEN** the user is navigated to /cases/{slug} showing the full case study

### Requirement: Stats counter section with count-up animation
The homepage SHALL display a statistics section showing key metrics: "협업 브랜드 50+", "제작 아이템 200+", "고객 만족도 98%". The numbers SHALL animate with a count-up effect when the section scrolls into the viewport (triggered via Intersection Observer). The actual numeric values SHALL be managed in Sanity (SiteStats schema) so the team can update them without code changes.

#### Scenario: Stats counter animates on scroll
- **WHEN** the stats section enters the user's viewport during scrolling
- **THEN** each number animates from 0 to its target value with a smooth count-up effect (duration ~2 seconds)

#### Scenario: Count-up triggers only once
- **WHEN** the stats section has already animated once during the session
- **THEN** scrolling away and back does not re-trigger the animation (numbers remain at final values)

#### Scenario: Stats values are CMS-editable
- **WHEN** an admin updates the partnerCount from 50 to 60 in Sanity SiteStats
- **THEN** the homepage shows "협업 브랜드 60+" after ISR revalidation

### Requirement: Bottom CTA section
The homepage SHALL end with a full-width CTA section before the footer. The section SHALL display a compelling message (e.g., "지금 상담 시작하기") with a prominent button linking to the quote inquiry page. The background SHALL use the brand-gold color or a contrasting treatment to draw attention.

#### Scenario: Bottom CTA is visible before footer
- **WHEN** a user scrolls to the bottom of the homepage content
- **THEN** a full-width CTA section with a message and button is displayed above the footer

#### Scenario: Bottom CTA navigates to quote page
- **WHEN** a user clicks the bottom CTA button
- **THEN** the user is navigated to the quote inquiry page (/quote)

### Requirement: Brand story page
The site SHALL include a brand story page (/brand) presenting LEESLE's philosophy (한국적 감성, 전통의 재해석), design process introduction, and media exposure / award history. Content SHALL be CMS-managed via Sanity using Portable Text for rich formatting.

#### Scenario: Brand story page renders content
- **WHEN** a user navigates to /brand
- **THEN** the page displays LEESLE's brand philosophy, design process, and media/awards sections

### Requirement: FAQ and usage guide page
The site SHALL include an FAQ page (/faq) covering: order process, payment/shipping/returns guide, tax invoice issuance, and frequently asked questions. FAQ items SHALL be expandable accordion components. Content SHALL be CMS-managed in Sanity.

#### Scenario: FAQ items expand on click
- **WHEN** a user clicks on an FAQ question
- **THEN** the answer expands below the question with a smooth animation

#### Scenario: FAQ content is CMS-editable
- **WHEN** an admin adds a new FAQ item in Sanity
- **THEN** the new item appears on the FAQ page after ISR revalidation
