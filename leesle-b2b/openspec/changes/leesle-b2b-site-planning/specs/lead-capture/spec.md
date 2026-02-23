## ADDED Requirements

### Requirement: Resource Listing Page

The system SHALL provide a resource listing page that displays all available resources including catalogs, brand books, and lookbooks. Each resource MUST be presented with its thumbnail, title, type badge, and a download or preview action. The page MUST support filtering by resource type.

#### Scenario: User views the resource listing page

- **WHEN** a user navigates to the resource center page
- **THEN** the system MUST display all published resources with their thumbnails, titles, and type badges (catalog, brand book, or lookbook)

#### Scenario: User filters resources by type

- **WHEN** a user selects a specific resource type filter such as lookbook
- **THEN** the system MUST display only resources matching the selected type and MUST hide all resources of other types

---

### Requirement: Email-Gated Download

The system SHALL require users to submit a valid email address before downloading any resource marked as gated. The download MUST NOT initiate until the email is successfully validated and stored. Ungated resources MUST be downloadable without email submission.

#### Scenario: User attempts to download a gated resource

- **WHEN** a user clicks the download button on a gated resource
- **THEN** the system MUST display an email capture modal or inline form and MUST NOT initiate the file download until the user submits a valid email address

#### Scenario: User downloads an ungated resource

- **WHEN** a user clicks the download button on a resource marked as ungated in the CMS
- **THEN** the system MUST immediately initiate the PDF download without prompting for an email address

#### Scenario: User submits email and download begins

- **WHEN** a user submits a valid email address in the email capture form for a gated resource
- **THEN** the system MUST store the email, increment the download count for that resource, and MUST trigger the PDF download

---

### Requirement: Email Validation and Storage

The system SHALL validate all submitted email addresses against RFC 5322 format before acceptance. Valid emails MUST be stored as lead documents in Sanity with a timestamp, the associated resource reference, and the user's locale. Duplicate emails for the same resource MUST be accepted but MUST NOT create duplicate lead documents.

#### Scenario: User submits a valid email address

- **WHEN** a user submits an email address that conforms to RFC 5322 format
- **THEN** the system MUST store a lead document in Sanity containing the email, submission timestamp, and a reference to the downloaded resource

#### Scenario: User submits an invalid email address

- **WHEN** a user submits an email address that does not conform to RFC 5322 format
- **THEN** the system MUST display an inline validation error message and MUST NOT store the email or initiate the download

#### Scenario: Duplicate email submission for the same resource

- **WHEN** a user submits an email address that already exists as a lead for the same resource
- **THEN** the system MUST allow the download to proceed and MUST NOT create a duplicate lead document in Sanity

---

### Requirement: Newsletter Integration

The system SHALL sync all collected lead emails to the configured newsletter service. Syncing MUST occur automatically upon successful email storage. Users MUST be presented with an opt-in checkbox; only emails where opt-in is checked MUST be synced to the newsletter service.

#### Scenario: User opts in to newsletter during download

- **WHEN** a user submits their email with the newsletter opt-in checkbox checked
- **THEN** the system MUST add the email to the newsletter service subscriber list after storing the lead in Sanity

#### Scenario: User does not opt in to newsletter

- **WHEN** a user submits their email with the newsletter opt-in checkbox unchecked
- **THEN** the system MUST store the lead in Sanity but MUST NOT add the email to the newsletter service subscriber list

---

### Requirement: Download Tracking

The system SHALL track the number of downloads per resource. The download count MUST increment by one each time a user successfully completes the email gate or downloads an ungated resource. Download counts MUST be readable by content editors in the Sanity studio.

#### Scenario: Download count increments on successful download

- **WHEN** a user successfully downloads a resource (either gated after email submission or ungated directly)
- **THEN** the system MUST increment the download count field on the corresponding resource document in Sanity by exactly one

#### Scenario: Editor views download count in CMS

- **WHEN** a content editor opens a resource document in the Sanity studio
- **THEN** the system MUST display the current download count as a read-only field on the document

---

### Requirement: Resource Thumbnails and Type Badges

The system SHALL display a thumbnail image and a type badge for each resource on the listing page and in any resource card component. The type badge MUST visually distinguish between catalog, brand book, and lookbook resource types. Thumbnails MUST be sourced from the CMS.

#### Scenario: Resource card displays thumbnail and badge

- **WHEN** a resource card is rendered on the listing page
- **THEN** the system MUST display the CMS-uploaded thumbnail image and a type badge reflecting the resource type assigned in the CMS

#### Scenario: Resource without thumbnail displays placeholder

- **WHEN** a resource document in Sanity has no thumbnail image assigned
- **THEN** the system MUST display a branded placeholder image in place of the thumbnail and MUST still render the type badge

---

### Requirement: CMS Resource Management

The system SHALL enable content editors to manage resources via the Sanity CMS studio. Editors MUST be able to upload PDF files, set the gated or ungated flag, assign a resource type, upload a thumbnail, and publish or unpublish resources. Unpublished resources MUST NOT appear on the frontend.

#### Scenario: Editor uploads a new gated resource

- **WHEN** a content editor creates a new resource document in Sanity, uploads a PDF, sets the gated flag to true, assigns a type, and publishes the document
- **THEN** the system MUST display the resource on the frontend listing page with the email gate active on the download action

#### Scenario: Editor unpublishes a resource

- **WHEN** a content editor sets a resource document to unpublished in Sanity
- **THEN** the system MUST remove the resource from the frontend listing page within one cache invalidation cycle and MUST NOT serve the PDF to any new download requests
