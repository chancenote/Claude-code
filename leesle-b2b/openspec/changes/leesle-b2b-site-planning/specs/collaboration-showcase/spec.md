## ADDED Requirements

### Requirement: Collaboration cases listing page
The site SHALL provide a collaboration cases listing page (/cases) displaying all enterprise collaboration case studies. Each case SHALL be shown as a card with: client company name, client logo, cover image, and a one-line summary. Cases SHALL be ordered by the order field from Sanity CollaborationCase schema.

#### Scenario: Cases listing page renders all cases
- **WHEN** a user navigates to /cases
- **THEN** all collaboration cases from Sanity are displayed as cards with client name, logo, cover image, and summary

#### Scenario: Cases are ordered by CMS order field
- **WHEN** an admin reorders cases via the order field in Sanity
- **THEN** the listing page reflects the updated display order

### Requirement: Collaboration case detail page
The site SHALL provide a detail page for each collaboration case (/cases/{slug}). The page SHALL display: client company name and logo, a full image gallery (cover image + additional gallery images), the complete collaboration story (Portable Text from Sanity), and a client testimonial section (quote, author name, author role). The page SHALL also show related products used in the collaboration.

#### Scenario: Case detail page renders full content
- **WHEN** a user navigates to /cases/{slug}
- **THEN** the page displays the client name, logo, image gallery, full story, testimonial, and related products

#### Scenario: Image gallery supports multiple images
- **WHEN** a case has 5 gallery images in Sanity
- **THEN** the detail page displays all 5 images in a navigable gallery format

### Requirement: Client logo slider component
The system SHALL provide a reusable client logo slider component that displays partner brand logos in an infinite horizontal scroll. This component SHALL be used on the homepage (trust logo banner) and MAY be reused on other pages. The slider SHALL use CSS-based animation (not JavaScript intervals) for smooth, performant scrolling. Logos SHALL be fetched from the PartnerLogo schema in Sanity.

#### Scenario: Logo slider renders with CSS animation
- **WHEN** the logo slider component is mounted
- **THEN** partner logos scroll horizontally in an infinite loop using CSS animation

#### Scenario: Logo slider is performant
- **WHEN** the logo slider is rendered on any page
- **THEN** the animation does not cause jank or layout shift (no JavaScript-driven scroll)

### Requirement: Client testimonial display
Each collaboration case detail page SHALL include a testimonial section displaying: a quote from the client's contact person, the person's name, and their role/title at the company. The testimonial SHALL be visually distinct (e.g., larger text, quotation marks, brand-gold accent).

#### Scenario: Testimonial renders on case detail
- **WHEN** a collaboration case has a testimonial object in Sanity (quote, author, role)
- **THEN** the case detail page displays the testimonial with styled quote, author name, and role

#### Scenario: Missing testimonial is handled gracefully
- **WHEN** a collaboration case does not have a testimonial in Sanity
- **THEN** the testimonial section is not rendered (no empty space or error)

### Requirement: Collaboration case CMS management
Collaboration cases SHALL be fully manageable via Sanity CMS. An admin SHALL be able to: create new cases, edit existing cases, upload/reorder gallery images, write the full story using rich text (Portable Text), set the featuredOnHome flag, and control display order. Changes SHALL be reflected on the site after ISR revalidation or Sanity webhook trigger.

#### Scenario: Admin creates a new collaboration case
- **WHEN** an admin creates a new CollaborationCase document in Sanity with all required fields
- **THEN** the new case appears on the /cases listing page and optionally on the homepage (if featuredOnHome=true) after revalidation

#### Scenario: Admin updates case gallery
- **WHEN** an admin adds or removes images from a case's gallery in Sanity
- **THEN** the case detail page reflects the updated gallery after revalidation

### Requirement: Before/after visual comparison
Collaboration case detail pages SHALL support before/after visual comparison when applicable. The CMS SHALL allow marking specific gallery images as "before" or "after" to enable side-by-side display.

#### Scenario: Before/after images display side by side
- **WHEN** a collaboration case has images tagged as before and after in Sanity
- **THEN** the case detail page shows them in a side-by-side visual comparison layout

#### Scenario: Standard gallery when no before/after tags
- **WHEN** a collaboration case has no before/after tagged images
- **THEN** all gallery images display in the standard gallery format
