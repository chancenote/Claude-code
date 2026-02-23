## ADDED Requirements

### Requirement: Category Browsing

The system SHALL provide a category browsing interface exposing the top-level categories 굿즈, 액세서리, and 시즌한정. The navigation MUST render all categories persistently in the header and as a dedicated category landing page. Each category MUST display a count of available products.

#### Scenario: User browses the 굿즈 category

- **WHEN** a user clicks the 굿즈 category link in the navigation
- **THEN** the system MUST navigate to the 굿즈 category page and display only products assigned to that category, with the active category visually highlighted

#### Scenario: User browses the 시즌한정 category

- **WHEN** a user navigates to the 시즌한정 category
- **THEN** the system MUST display only products flagged as seasonal-limited and MUST show a visual indicator communicating limited availability

---

### Requirement: Product Filtering

The system SHALL provide filter controls on category and search result pages allowing users to narrow products by 용도별 (use case), 가격대 (price range), and 커스텀 가능 여부 (customizable). Filters MUST be combinable and MUST update the product list without a full page reload.

#### Scenario: User filters by customizable products only

- **WHEN** a user selects the 커스텀 가능 filter option
- **THEN** the system MUST display only products where the customizable flag is true and MUST hide all non-customizable products from the result set

#### Scenario: User applies price range filter

- **WHEN** a user sets a minimum and maximum price range using the 가격대 filter
- **THEN** the system MUST display only products whose base price falls within the specified range and MUST update the visible product count accordingly

#### Scenario: User combines multiple filters

- **WHEN** a user selects both a 용도별 value and the 커스텀 가능 filter simultaneously
- **THEN** the system MUST apply both filters as an AND condition and MUST display only products satisfying all active filter criteria

---

### Requirement: Product Detail Page

The system SHALL render a dedicated product detail page for each product. The page MUST include an image gallery with zoom capability, a specifications table, MOQ (minimum order quantity), estimated production days, and a customizable badge when applicable.

#### Scenario: User views product image gallery

- **WHEN** a user lands on a product detail page
- **THEN** the system MUST display all product images in a gallery component and MUST allow the user to zoom into any image via click or hover interaction

#### Scenario: User views product specifications

- **WHEN** a user scrolls to the specifications section of a product detail page
- **THEN** the system MUST render a structured table containing all product attributes, MOQ, and production days sourced from the CMS

#### Scenario: Customizable product displays badge

- **WHEN** a product has the customizable flag set to true in the CMS
- **THEN** the system MUST display a prominent customizable badge on the detail page and MUST render a CTA linking to the custom production inquiry flow

---

### Requirement: Product Card Component

The system SHALL render a product card component used in category pages, search results, and the homepage. On hover, the card MUST reveal a brief specification summary. On click, the card MUST navigate the user to the corresponding product detail page.

#### Scenario: User hovers over a product card

- **WHEN** a user hovers the cursor over a product card
- **THEN** the system MUST display a brief overlay or tooltip containing key specifications such as MOQ and customizable status without navigating away from the current page

#### Scenario: User clicks a product card

- **WHEN** a user clicks anywhere on a product card
- **THEN** the system MUST navigate to the product detail page for that product using client-side routing

---

### Requirement: CMS Product CRUD

The system SHALL enable content editors to create, read, update, and delete products via the Sanity CMS studio. Editors MUST be able to upload multiple images per product, assign products to one or more categories, and set all product attributes including MOQ, production days, price, and customizable flag.

#### Scenario: Editor creates a new product with images

- **WHEN** a content editor creates a new product document in Sanity and uploads multiple images
- **THEN** the system MUST store all uploaded images in Sanity's asset pipeline and MUST associate them with the product document in the defined image array field

#### Scenario: Editor assigns a product to a category

- **WHEN** a content editor selects one or more categories from the category reference field on a product document
- **THEN** the system MUST persist the category references and MUST surface the product under all assigned categories on the frontend

#### Scenario: Editor deletes a product

- **WHEN** a content editor deletes a product document in Sanity
- **THEN** the system MUST remove the product from all category pages, search results, and related product recommendations within one cache invalidation cycle

---

### Requirement: Related Products Recommendation

The system SHALL display a related products section on each product detail page. The section MUST show a minimum of three and a maximum of six products sharing at least one category with the current product. The current product MUST NOT appear in its own related products list.

#### Scenario: Product detail page loads related products

- **WHEN** a user views a product detail page
- **THEN** the system MUST render a related products section containing between three and six products that share at least one category with the viewed product, excluding the viewed product itself

#### Scenario: Insufficient related products exist

- **WHEN** fewer than three products share a category with the current product
- **THEN** the system MUST fill the remaining slots with products from other categories to always display at least three related product cards

---

### Requirement: Featured Product Flag for Homepage

The system SHALL support a featured flag on product documents in Sanity. Products with the featured flag set to true MUST appear in the homepage featured products section. The homepage MUST display a maximum of eight featured products ordered by the CMS-defined sort order.

#### Scenario: Editor marks a product as featured

- **WHEN** a content editor sets the featured flag to true on a product document in Sanity
- **THEN** the system MUST include that product in the homepage featured products section on the next cache invalidation

#### Scenario: Homepage renders featured products in CMS order

- **WHEN** the homepage loads
- **THEN** the system MUST display featured products in the exact sort order defined by the content editor in Sanity and MUST display no more than eight featured products
