## ADDED Requirements

### Requirement: Quote inquiry form with required and optional fields
The site SHALL provide a quote inquiry page (/quote) with a form containing: 3 required fields — 회사명 (company name, text), 담당자명 (contact name, text), 연락처 (contact info, phone or email) — and 5 optional fields — 관심 상품 카테고리 (multi-select dropdown), 예상 수량 (dropdown: 100개 미만/100-500/500-1,000/1,000+), 용도 (dropdown: 기업선물/판촉물/리셀/기타), 희망 납기 (date picker), 추가 요청사항 (textarea). The form SHALL minimize required fields to maximize conversion rate.

#### Scenario: Form renders with all fields
- **WHEN** a user navigates to /quote
- **THEN** the form displays 3 required fields (marked with *) and 5 optional fields

#### Scenario: Form validates required fields
- **WHEN** a user submits the form without filling 회사명
- **THEN** an inline validation error is shown on the 회사명 field and submission is blocked

#### Scenario: Contact field accepts phone or email
- **WHEN** a user enters a valid phone number (010-xxxx-xxxx) or email in the 연락처 field
- **THEN** the field validates successfully for either format

#### Scenario: Successful form submission
- **WHEN** a user fills all required fields and submits the form
- **THEN** the form data is sent via POST /api/quote, and a confirmation page is displayed

### Requirement: Form submission server-side processing
Upon form submission, the server (POST /api/quote) SHALL: validate all fields using zod schema, save the inquiry data to Sanity as a QuoteInquiry document, and trigger notifications in parallel. The API SHALL return a success response to show the confirmation page, regardless of notification delivery status.

#### Scenario: Server validates and saves inquiry
- **WHEN** the server receives a valid POST /api/quote request
- **THEN** the data is validated via zod, saved to Sanity, and a 200 response is returned

#### Scenario: Server rejects invalid data
- **WHEN** the server receives a POST /api/quote with missing required fields
- **THEN** a 400 response with validation error details is returned

### Requirement: Admin notification on form submission
Upon successful form submission, the system SHALL send notifications to administrators via three channels in parallel: (1) email via Resend/SendGrid API containing all form data, (2) Slack message via webhook to the #b2b-inquiries channel, (3) KakaoTalk alert to the designated contact (if KakaoTalk Business channel is configured). Email SHALL be the primary channel; Slack and KakaoTalk are best-effort (failures SHALL NOT block the user-facing response).

#### Scenario: Email notification sent on submission
- **WHEN** a quote inquiry is successfully saved
- **THEN** an email containing all form data is sent to the admin email address via Resend/SendGrid

#### Scenario: Slack notification sent on submission
- **WHEN** a quote inquiry is successfully saved
- **THEN** a Slack message with inquiry summary is posted to #b2b-inquiries via webhook

#### Scenario: Notification failure does not affect user experience
- **WHEN** the Slack webhook fails during notification
- **THEN** the user still sees the confirmation page, and the inquiry data remains safely stored in Sanity

### Requirement: Confirmation page after submission
After successful form submission, the system SHALL display a confirmation page with: a success message ("문의가 정상적으로 접수되었습니다"), expected response time ("24시간 내 담당자가 회신드립니다"), alternative contact options (KakaoTalk channel link, phone number), and a link to return to the homepage or browse products.

#### Scenario: Confirmation page displays after submission
- **WHEN** a user successfully submits the quote inquiry form
- **THEN** the confirmation page is shown with success message, response time, and alternative contacts

### Requirement: Quote inquiry CTA on every page
Every page on the site SHALL include at least one visible call-to-action element linking to the quote inquiry page. This SHALL be achieved via: the header "견적 문의" button (always visible), page-specific CTA sections, and the bottom CTA on the homepage.

#### Scenario: Product detail page has quote CTA
- **WHEN** a user views a product detail page
- **THEN** a [견적 문의하기] button is visible that links to /quote with the product name pre-filled

#### Scenario: Collaboration case page has quote CTA
- **WHEN** a user views a collaboration case detail page
- **THEN** a CTA linking to /quote is visible within the page content

### Requirement: Form data pre-filling from product pages
When a user navigates to the quote inquiry page from a specific product page, the form SHALL pre-fill the "관심 상품 카테고리" field with the product's category and include the product name in the "추가 요청사항" field.

#### Scenario: Product context carried to quote form
- **WHEN** a user clicks [견적 문의하기] on a product detail page for a product in the "기업선물" category
- **THEN** the quote form opens with "기업선물" pre-selected in the category dropdown and the product name pre-filled in the additional notes
