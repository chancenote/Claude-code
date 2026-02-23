## ADDED Requirements

### Requirement: 5-Step Customization Process Infographic

The system SHALL display a visual infographic on the custom production guide page presenting the five steps of the customization process. Each step MUST include a step number, a title, a short description, and an illustrative icon or image. The infographic MUST be responsive and readable on mobile, tablet, and desktop viewports.

#### Scenario: User views the customization process infographic

- **WHEN** a user navigates to the custom production guide page
- **THEN** the system MUST render all five customization steps in sequential order, each displaying a step number, title, description, and icon

#### Scenario: Infographic renders correctly on mobile

- **WHEN** a user views the custom production guide page on a mobile viewport
- **THEN** the system MUST display the five-step infographic in a vertically stacked layout that remains fully readable without horizontal scrolling

---

### Requirement: Customization Scope Information

The system SHALL display detailed information about the available customization options including logo application, color selection, and packaging options. Each customization scope item MUST include a title, description, and at least one visual example image. The content MUST be managed via the CMS.

#### Scenario: User views logo customization options

- **WHEN** a user reads the customization scope section on the guide page
- **THEN** the system MUST display the logo customization options including supported application methods and placement areas, sourced from the CMS

#### Scenario: User views packaging options

- **WHEN** a user scrolls to the packaging options subsection
- **THEN** the system MUST display all available packaging customization choices with their corresponding visual example images sourced from the CMS

---

### Requirement: MOQ and Timeline Information Display

The system SHALL display minimum order quantity (MOQ) and estimated production timeline information on the custom production guide page. MOQ and timeline values MUST be sourced from the CMS and MUST be displayed in a clearly formatted, scannable layout. Different product categories MAY have different MOQ and timeline values, all of which MUST be displayed.

#### Scenario: User views MOQ information

- **WHEN** a user views the MOQ section of the custom production guide page
- **THEN** the system MUST display the minimum order quantities for each applicable product category as defined in the CMS

#### Scenario: User views production timeline

- **WHEN** a user views the timeline section of the custom production guide page
- **THEN** the system MUST display the estimated production days for each stage of the customization process as defined in the CMS

---

### Requirement: Visual Examples of Customized Products

The system SHALL display a gallery of visual examples showing finished customized products on the guide page. The gallery MUST contain a minimum of four example images. Each example MUST include a caption describing the customization applied. Images and captions MUST be managed via the CMS.

#### Scenario: User views the customized product examples gallery

- **WHEN** a user navigates to the visual examples section of the custom production guide page
- **THEN** the system MUST render a gallery of at least four customized product images, each accompanied by a caption sourced from the CMS

#### Scenario: Editor adds a new example image in CMS

- **WHEN** a content editor adds a new example image and caption to the custom production guide document in Sanity and publishes the change
- **THEN** the system MUST display the new example in the gallery on the next cache invalidation

---

### Requirement: CTA to Quote Inquiry from Each Section

The system SHALL render a call-to-action (CTA) button or link within each major section of the custom production guide page. Each CTA MUST navigate the user to the quote inquiry form or page. CTA label text MUST be configurable via the CMS per section.

#### Scenario: User clicks a CTA in the process infographic section

- **WHEN** a user clicks the CTA button within the customization process infographic section
- **THEN** the system MUST navigate the user to the quote inquiry form page or scroll to the inquiry form if it is on the same page

#### Scenario: User clicks a CTA in the MOQ and timeline section

- **WHEN** a user clicks the CTA button within the MOQ and timeline section
- **THEN** the system MUST navigate the user to the quote inquiry form and MUST pre-populate any available context such as the section origin if supported by the form

---

### Requirement: CMS-Managed Custom Production Content

The system SHALL source all content on the custom production guide page from the Sanity CMS. Content editors MUST be able to update step descriptions, customization scope details, MOQ values, timeline values, example images, and CTA labels without requiring a code deployment. Published changes MUST be reflected on the frontend within one cache invalidation cycle.

#### Scenario: Editor updates a step description

- **WHEN** a content editor modifies the description of one of the five customization steps in Sanity and publishes the change
- **THEN** the system MUST display the updated description on the custom production guide page within one cache invalidation cycle

#### Scenario: Editor updates MOQ constraints

- **WHEN** a content editor changes an MOQ value in the Sanity document for the custom production guide and publishes the change
- **THEN** the system MUST display the updated MOQ value on the frontend within one cache invalidation cycle and MUST NOT display the old value after the cache is invalidated
