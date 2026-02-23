## ADDED Requirements

### Requirement: Language Switcher Component

The system SHALL provide a language switcher component accessible from every page of the site. The switcher MUST allow users to toggle between Korean (KO) and English (EN). The currently active locale MUST be visually indicated in the switcher. Switching locale MUST navigate the user to the equivalent page in the selected locale without losing their current page context.

#### Scenario: User switches from Korean to English

- **WHEN** a user on a Korean locale page clicks the EN option in the language switcher
- **THEN** the system MUST navigate the user to the English locale equivalent of the current page and MUST update the switcher to indicate EN as the active locale

#### Scenario: User switches from English to Korean

- **WHEN** a user on an English locale page clicks the KO option in the language switcher
- **THEN** the system MUST navigate the user to the Korean locale equivalent of the current page and MUST update the switcher to indicate KO as the active locale

---

### Requirement: URL-Based Locale Routing

The system SHALL implement URL-based locale routing using the path prefixes /ko/ for Korean and /en/ for English. All pages MUST be accessible under both locale prefixes. The root URL (/) MUST redirect to the user's preferred locale or to /ko/ as the default. URLs without a locale prefix MUST NOT serve content directly but MUST redirect to the appropriate locale-prefixed URL.

#### Scenario: User accesses the root URL

- **WHEN** a user navigates to the root URL (/)
- **THEN** the system MUST redirect the user to /ko/ if no locale preference is stored, or to the stored locale prefix if a preference exists

#### Scenario: User accesses a page with the /en/ prefix

- **WHEN** a user navigates to a URL with the /en/ prefix such as /en/products
- **THEN** the system MUST render the page content in English and MUST set the HTML lang attribute to "en"

#### Scenario: User accesses a URL without a locale prefix

- **WHEN** a user navigates to a URL that lacks a locale prefix such as /products
- **THEN** the system MUST redirect the user to the locale-prefixed equivalent URL based on their stored preference or the default locale /ko/

---

### Requirement: CMS Content Internationalization

The system SHALL support field-level bilingual content in Sanity CMS. Every content field that appears on the frontend MUST have a Korean (ko) and an English (en) variant defined in the Sanity schema. Content editors MUST be able to enter translations for both locales within a single document. The frontend MUST query and render the field value matching the active locale.

#### Scenario: Editor enters translations for a product name

- **WHEN** a content editor fills in both the ko and en name fields on a product document in Sanity and publishes
- **THEN** the system MUST display the Korean name when the active locale is /ko/ and the English name when the active locale is /en/

#### Scenario: Frontend queries locale-specific field

- **WHEN** the frontend renders a page in the /en/ locale
- **THEN** the system MUST query and display the en field variant for all CMS-sourced text content on that page

---

### Requirement: UI Text Internationalization

The system SHALL manage all static UI text strings (labels, buttons, navigation items, error messages, placeholders) in locale-specific JSON message files. A JSON file MUST exist for each supported locale (ko.json and en.json). All UI text MUST be rendered by referencing message keys from the active locale's JSON file. Hard-coded UI strings MUST NOT appear in component source code.

#### Scenario: UI renders button label in Korean

- **WHEN** the active locale is /ko/ and a component renders a download button
- **THEN** the system MUST display the button label sourced from the ko.json message file for the corresponding message key

#### Scenario: UI renders navigation items in English

- **WHEN** the active locale is /en/ and the navigation component renders
- **THEN** the system MUST display all navigation item labels sourced from the en.json message file

---

### Requirement: Fallback to Korean for Missing Translations

The system SHALL fall back to the Korean content when an English translation is missing. If an en field variant in Sanity is empty or undefined, the system MUST render the ko field variant instead. If an en key is missing from en.json, the system MUST render the ko.json value for that key. The fallback MUST NOT cause a runtime error or display an empty string.

#### Scenario: English CMS field is empty

- **WHEN** the active locale is /en/ and a product's en name field is empty in Sanity
- **THEN** the system MUST display the product's ko name field value instead of an empty string

#### Scenario: English UI message key is missing

- **WHEN** the active locale is /en/ and a message key is present in ko.json but absent from en.json
- **THEN** the system MUST render the Korean string from ko.json for that key and MUST NOT throw a runtime error

---

### Requirement: SEO hreflang Tags

The system SHALL render hreflang link tags in the HTML head of every page for each supported locale. Each page MUST include an hreflang="ko" tag pointing to the /ko/ URL and an hreflang="en" tag pointing to the /en/ URL. An x-default hreflang tag MUST also be included pointing to the /ko/ URL.

#### Scenario: Product detail page includes hreflang tags

- **WHEN** a search engine crawler requests a product detail page in any locale
- **THEN** the system MUST include hreflang link tags in the HTML head for both /ko/ and /en/ variants of that page, plus an x-default tag pointing to the /ko/ variant

#### Scenario: Homepage includes hreflang tags

- **WHEN** a search engine crawler requests the homepage
- **THEN** the system MUST include hreflang="ko", hreflang="en", and hreflang="x-default" link tags in the HTML head, all with correct absolute URLs

---

### Requirement: Locale Persistence

The system SHALL persist the user's locale preference across sessions. When a user explicitly switches locale using the language switcher, the selected locale MUST be stored in a browser cookie or localStorage. On subsequent visits, the system MUST redirect the user to their stored locale preference at the root URL. The stored preference MUST be respected over browser language detection.

#### Scenario: User's locale preference is persisted after switching

- **WHEN** a user switches to English using the language switcher and then closes and reopens the browser
- **THEN** the system MUST redirect the user to the /en/ locale on their next visit to the root URL

#### Scenario: Stored preference overrides browser language

- **WHEN** a user has stored a KO locale preference but their browser's Accept-Language header indicates English
- **THEN** the system MUST redirect the user to /ko/ based on the stored preference and MUST NOT override it with the browser language setting
