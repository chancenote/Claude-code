## 1. Project Setup

- [x] 1.1 Initialize Next.js 15 project with App Router and TypeScript (`create-next-app`)
- [x] 1.2 Configure Tailwind CSS v4 with brand design tokens (colors, typography, spacing from D6)
- [x] 1.3 Install and configure Sanity v3 client (`next-sanity`, `@sanity/image-url`, GROQ client setup in `lib/sanity/client.ts`)
- [ ] 1.4 Set up Sanity Studio (embedded or separate) with project ID and dataset
- [x] 1.5 Configure environment variables (Sanity project ID/token, Resend API key, Slack webhook URL, GA4 ID, Meta Pixel ID, Hotjar ID)
- [ ] 1.6 Set up Vercel project with GitHub repo and auto-deploy from main branch
- [x] 1.7 Install core dependencies: `next-intl`, `zod`, `resend`, Pretendard/Inter fonts
- [x] 1.8 Configure `next.config.ts` with i18n locales (ko, en), image domains (Sanity CDN), and ISR settings

## 2. CMS Schema Definitions (Sanity)

- [x] 2.1 Define `HeroContent` schema (backgroundImage, headline ko/en, subheadline ko/en, ctaPrimary, ctaSecondary)
- [x] 2.2 Define `PartnerLogo` schema (name, logo image, url, active boolean, order number)
- [x] 2.3 Define `SiteStats` schema (partnerCount, itemCount, satisfactionRate) — singleton document
- [x] 2.4 Define `Category` schema (title ko/en, slug, icon image, order)
- [x] 2.5 Define `Product` schema (title ko/en, slug, description ko/en, category ref, images array, specs, moq, customizable, productionDays, featured)
- [x] 2.6 Define `CollaborationCase` schema (title ko/en, slug, client, clientLogo, coverImage, gallery, summary ko/en, fullStory portableText ko/en, testimonial, featuredOnHome, order)
- [x] 2.7 Define `Resource` schema (title ko/en, type enum, file PDF, thumbnail, gated boolean)
- [x] 2.8 Define `FaqItem` schema (question ko/en, answer ko/en, order)
- [x] 2.9 Define `QuoteInquiry` schema (companyName, contactName, contact, category, quantity, purpose, deadline, notes, submittedAt) — read-only for admin dashboard
- [ ] 2.10 Seed initial test data in Sanity (2-3 products, 2 cases, partner logos, hero content, stats)

## 3. Design System & Site Shell

- [x] 3.1 Create `tailwind.config.ts` with brand color tokens (cream, beige, gold, dark, gray, white) and font families (Pretendard, Inter)
- [x] 3.2 Create shared UI components in `components/ui/`: Button (primary/secondary/ghost variants), Card, Modal, Badge
- [x] 3.3 Create `components/layout/Header.tsx` — sticky header with transparency-to-opaque transition on homepage scroll
- [x] 3.4 Create `components/layout/Navigation.tsx` — desktop horizontal nav + mobile hamburger with slide-out menu, "견적 문의" gold CTA button
- [x] 3.5 Create `components/layout/Footer.tsx` — company info, quick links, social links, secondary quote CTA
- [x] 3.6 Create `app/(site)/layout.tsx` — global layout shell composing Header + Footer around `{children}`
- [x] 3.7 Implement scroll-triggered fade-in animation utility (Intersection Observer based, respects `prefers-reduced-motion`)
- [x] 3.8 Verify responsive behavior at desktop (1280px+), tablet (768px), mobile (375px) breakpoints

## 4. Homepage — Main Page (Priority: B2B Collab Showcase)

- [x] 4.1 Create `components/home/HeroSection.tsx` — fullscreen visual, headline/subheadline overlay, dual CTA buttons, `next/image` priority loading, CMS data from HeroContent
- [x] 4.2 Create `components/home/TrustLogoBanner.tsx` — infinite CSS-animation horizontal logo slider, "함께한 브랜드" label, fetches active PartnerLogos ordered by `order` field
- [x] 4.3 Create `components/home/CategoryQuickLinks.tsx` — 3-4 category cards fetched from Sanity Category schema, each linking to `/products?category={slug}`
- [x] 4.4 Create `components/home/FeaturedCases.tsx` — 2-3 collaboration case preview cards (client name, cover image, summary), filtered by `featuredOnHome=true`, links to `/cases/{slug}`
- [x] 4.5 Create `components/home/StatsCounter.tsx` — count-up animation (0→target) triggered by Intersection Observer, fires once per session, values from Sanity SiteStats
- [x] 4.6 Create `components/home/BottomCTA.tsx` — full-width gold CTA section "지금 상담 시작하기" linking to `/quote`
- [x] 4.7 Create `app/(site)/page.tsx` — compose all homepage sections as RSC, server-fetch all CMS data (hero, logos, categories, featured cases, stats) in single GROQ query
- [x] 4.8 Write GROQ queries in `lib/sanity/queries.ts` for homepage data (heroContent, partnerLogos, categories, featuredCases, siteStats)
- [ ] 4.9 Verify homepage LCP ≤ 2.5s with hero image priority loading and optimized Sanity image URLs

## 5. Collaboration Showcase

 [x] 5.1 Create `components/cases/CaseCard.tsx` — card with client name, logo, cover image, summary, link to detail
 [x] 5.2 Create `app/(site)/cases/page.tsx` — cases listing page, fetches all CollaborationCase docs ordered by `order`, renders CaseCard grid
 [x] 5.3 Create `app/(site)/cases/[slug]/page.tsx` — case detail page with `generateStaticParams` for ISR
 [x] 5.4 Create `components/cases/CaseDetail.tsx` — image gallery (cover + gallery images), full story (Portable Text renderer), client logo, related products
 [x] 5.5 Create `components/cases/Testimonial.tsx` — styled quote, author name, role with brand-gold accent; handles missing testimonial gracefully
 [x] 5.6 Create `components/cases/BeforeAfter.tsx` — side-by-side comparison layout for tagged before/after images; falls back to standard gallery
 [x] 5.7 Add quote inquiry CTA within case detail page linking to `/quote`

## 6. Quote Inquiry System

 [x] 6.1 Create `components/quote/QuoteForm.tsx` — form with 3 required fields (회사명, 담당자명, 연락처) + 5 optional fields (카테고리 multi-select, 수량 dropdown, 용도 dropdown, 희망납기 date picker, 추가요청 textarea)
 [x] 6.2 Define zod validation schema for quote form (연락처 accepts phone or email format)
 [x] 6.3 Create `app/api/quote/route.ts` — POST handler: zod validation → Sanity QuoteInquiry save → parallel notifications → 200 response
 [x] 6.4 Create `lib/email.ts` — Resend/SendGrid integration for admin email notification with all form data
 [x] 6.5 Create `lib/notifications.ts` — Slack webhook post to #b2b-inquiries + KakaoTalk alert API (best-effort, failures logged but not blocking)
 [x] 6.6 Create `components/quote/QuoteConfirmation.tsx` — success message, 24h response time notice, alternative contacts (KakaoTalk, phone), back-to-home link
 [x] 6.7 Create `app/(site)/quote/page.tsx` — renders QuoteForm, handles submission state, shows QuoteConfirmation on success
 [x] 6.8 Implement form pre-filling via URL params (product category and name from product detail pages)

## 7. Product Catalog

 [x] 7.1 Create `components/products/ProductCard.tsx` — image, name, category badge, customizable badge; hover reveals brief specs; click navigates to detail
 [x] 7.2 Create `components/products/ProductFilter.tsx` — filter controls for category (굿즈/액세서리/시즌한정), 용도, 가격대, 커스텀 가능 여부; URL query params based
 [x] 7.3 Create `components/products/ProductGrid.tsx` — responsive grid layout for product cards with loading state
 [x] 7.4 Create `app/(site)/products/page.tsx` — product listing with server-side category fetching, client-side filtering via URL params
 [x] 7.5 Create `app/(site)/products/[slug]/page.tsx` — product detail with `generateStaticParams` for ISR
 [x] 7.6 Create `components/products/ProductDetail.tsx` — image gallery with zoom, specs table (material, size, color), MOQ, production days, customizable indicator, [견적 문의하기] CTA
 [x] 7.7 Create `components/products/RelatedProducts.tsx` — related products section (same category) on detail page
 [x] 7.8 Write GROQ queries for product listing (with category filter), product detail (with related products by category)

## 8. Lead Capture & Resource Center

 [x] 8.1 Create `app/(site)/resources/page.tsx` — resource listing with type filter (catalog/brandbook/lookbook), thumbnails, type badges
 [x] 8.2 Create email gate modal component — email input + validation, on submit: save to Sanity Lead doc → trigger download
 [x] 8.3 Create `app/api/lead/route.ts` — POST handler: email validation → Sanity Lead save → increment download count → return download URL
 [ ] 8.4 Implement newsletter integration hook (email sync to newsletter service — Mailchimp/Stibee/etc.)
 [ ] 8.5 Create CMS resource management: upload PDF, set gated/ungated flag, assign type

## 9. Custom Production Guide

 [x] 9.1 Create `app/(site)/custom/page.tsx` — custom production guide page layout
 [x] 9.2 Create 5-step customization process infographic component (responsive, step number + title + description + icon)
 [x] 9.3 Create customization scope section (logo, color, packaging options with visual examples)
 [x] 9.4 Create MOQ and timeline information display section
 [x] 9.5 Add quote inquiry CTA in each section linking to `/quote`

## 10. Brand Story & FAQ

 [x] 10.1 Create `app/(site)/brand/page.tsx` — brand story page: LEESLE philosophy, design process, media/awards (Portable Text from Sanity)
 [x] 10.2 Create `app/(site)/faq/page.tsx` — FAQ page with expandable accordion items from Sanity FaqItem schema
 [x] 10.3 Create reusable Accordion component (smooth expand/collapse animation, keyboard accessible)

## 11. Internationalization (i18n)

 [x] 11.1 Configure `next-intl` with App Router middleware for `/ko/` and `/en/` URL routing
 [x] 11.2 Create `messages/ko.json` and `messages/en.json` for all UI text (nav items, buttons, labels, placeholders)
 [x] 11.3 Create language switcher component in header (KO/EN toggle, persists preference via cookie)
 [x] 11.4 Implement Sanity field-level i18n: GROQ queries select ko/en based on current locale, fallback to ko if en is missing
 [x] 11.5 Add `hreflang` alternate links in page head for each locale

## 12. SEO & Analytics Integration

 [x] 12.1 Implement `generateMetadata` in each page route for auto-generated meta title/description per page type
 [x] 12.2 Add OG tags (title, description, image, url, type, locale) to all pages via metadata API
 [x] 12.3 Add Schema.org JSON-LD: Product structured data on product detail pages, Organization on brand page
 [x] 12.4 Integrate Google Analytics 4: page views on all routes, generate_lead on quote submit, file_download on resource download
 [x] 12.5 Integrate Meta Pixel: PageView on all pages, Lead on quote submit, ViewContent on product detail
 [x] 12.6 Integrate Hotjar: async script loading (no LCP impact)
 [x] 12.7 Create `app/sitemap.ts` — auto-generated sitemap.xml with all public pages, updated on ISR revalidation
 [x] 12.8 Create `app/robots.ts` — allow all crawlers, disallow /api/*, reference sitemap URL
 [x] 12.9 Add canonical URLs and hreflang alternates in page head for all routes

## 13. ISR & CMS Webhook

 [x] 13.1 Create `app/api/revalidate/route.ts` — Sanity webhook handler for on-demand ISR revalidation (validates webhook secret, revalidates affected paths)
- [ ] 13.2 Configure Sanity webhook to POST to `/api/revalidate` on document publish/unpublish
 [x] 13.3 Set ISR `revalidate: 60` as fallback for product and case pages via `generateStaticParams`

## 14. Testing & Quality Assurance

- [ ] 14.1 Run Lighthouse audit on homepage — verify LCP ≤ 2.5s, PageSpeed ≥ 90 (mobile)
- [ ] 14.2 Test responsive layout at all breakpoints (375px, 768px, 1024px, 1280px+)
- [ ] 14.3 Verify WCAG 2.1 AA compliance: keyboard navigation, focus indicators, color contrast, alt texts, ARIA labels
- [ ] 14.4 Test quote form end-to-end: submission → Sanity save → email notification → Slack notification → confirmation page
- [ ] 14.5 Test CMS workflow: create/edit product in Sanity → verify ISR revalidation → content visible on site
- [ ] 14.6 Test i18n: KO/EN switching, fallback behavior, hreflang tags, locale persistence
- [ ] 14.7 Verify all meta/OG tags render correctly (Facebook Sharing Debugger, Twitter Card Validator)
- [ ] 14.8 Cross-browser testing: Chrome, Safari, Firefox, Edge (desktop + mobile)
- [ ] 14.9 Verify `prefers-reduced-motion` disables all animations
