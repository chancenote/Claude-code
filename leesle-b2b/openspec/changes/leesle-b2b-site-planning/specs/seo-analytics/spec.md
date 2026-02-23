## ADDED Requirements

### Requirement: Auto-Generated Meta Title and Description

The system SHALL automatically generate a unique meta title and meta description for every page. Meta titles MUST follow the pattern "{Page Title} | Leesle" and MUST NOT exceed 60 characters. Meta descriptions MUST be sourced from CMS-defined SEO fields where available, or generated from page content as a fallback, and MUST NOT exceed 160 characters.

#### Scenario: Product detail page generates meta title

- **WHEN** a search engine crawler or browser requests a product detail page
- **THEN** the system MUST render a meta title tag in the format "{Product Name} | Leesle" with a total length not exceeding 60 characters

#### Scenario: Page with CMS SEO description uses CMS value

- **WHEN** a page has a non-empty SEO description field defined in Sanity
- **THEN** the system MUST render that CMS value as the meta description tag, truncated to 160 characters if necessary

#### Scenario: Page without CMS SEO description falls back to content

- **WHEN** a page has no SEO description field defined in Sanity
- **THEN** the system MUST generate a meta description from the first 160 characters of the page's main text content and MUST NOT render an empty meta description tag

---

### Requirement: Open Graph Tags for Social Sharing

The system SHALL render Open Graph (OG) meta tags in the HTML head of every page. Each page MUST include og:title, og:description, and og:image tags. The og:image MUST reference an absolute URL to a valid image. Product pages MUST use the primary product image as og:image. Pages without a specific image MUST use the default Leesle brand OG image.

#### Scenario: Product page renders OG tags with product image

- **WHEN** a social media crawler requests a product detail page
- **THEN** the system MUST render og:title with the product name, og:description with the product SEO description, and og:image with an absolute URL to the primary product image

#### Scenario: Non-product page renders OG tags with brand image

- **WHEN** a social media crawler requests a page that has no specific OG image defined
- **THEN** the system MUST render og:image with the absolute URL of the default Leesle brand OG image and MUST render og:title and og:description with page-specific values

---

### Requirement: Schema.org Structured Data

The system SHALL embed Schema.org structured data as JSON-LD in the HTML head of relevant pages. Product detail pages MUST include a Product schema containing name, description, image, and offers fields. The homepage and about page MUST include an Organization schema containing name, url, logo, and contactPoint fields.

#### Scenario: Product detail page includes Product schema

- **WHEN** a search engine crawler requests a product detail page
- **THEN** the system MUST render a JSON-LD script tag in the HTML head containing a valid Schema.org Product object with name, description, image, and offers populated from CMS data

#### Scenario: Homepage includes Organization schema

- **WHEN** a search engine crawler requests the homepage
- **THEN** the system MUST render a JSON-LD script tag in the HTML head containing a valid Schema.org Organization object with name, url, logo, and contactPoint fields

---

### Requirement: Google Analytics 4 Integration

The system SHALL integrate Google Analytics 4 (GA4) on all pages. The GA4 measurement ID MUST be configurable via an environment variable. The system MUST track page view events automatically on every route change. The system MUST also fire custom events for key user interactions including product detail page views, resource downloads, and quote inquiry form submissions.

#### Scenario: GA4 tracks page view on route change

- **WHEN** a user navigates to any page on the site
- **THEN** the system MUST fire a GA4 page_view event containing the page path and page title

#### Scenario: GA4 tracks resource download event

- **WHEN** a user successfully downloads a resource
- **THEN** the system MUST fire a GA4 custom event named "resource_download" containing the resource title and resource type as event parameters

#### Scenario: GA4 tracks quote inquiry form submission

- **WHEN** a user successfully submits the quote inquiry form
- **THEN** the system MUST fire a GA4 custom event named "quote_inquiry_submit" containing the product or category context as an event parameter

---

### Requirement: Meta Pixel Integration

The system SHALL integrate the Meta Pixel on all pages. The Meta Pixel ID MUST be configurable via an environment variable. The system MUST fire the PageView standard event automatically on every route change. The system MUST also fire the Lead standard event when a user submits their email in the lead capture flow.

#### Scenario: Meta Pixel fires PageView on route change

- **WHEN** a user navigates to any page on the site
- **THEN** the system MUST fire the Meta Pixel PageView standard event for that page

#### Scenario: Meta Pixel fires Lead event on email submission

- **WHEN** a user successfully submits their email address in the resource download email gate
- **THEN** the system MUST fire the Meta Pixel Lead standard event

---

### Requirement: Hotjar Integration

The system SHALL integrate Hotjar on all pages for heatmap and session recording capabilities. The Hotjar site ID MUST be configurable via an environment variable. Hotjar MUST be initialized on the client side only and MUST NOT block server-side rendering. Hotjar MUST be loaded after the page becomes interactive to avoid impacting Core Web Vitals.

#### Scenario: Hotjar initializes on client after page load

- **WHEN** a user's browser finishes loading any page on the site
- **THEN** the system MUST initialize the Hotjar script on the client side after the page becomes interactive and MUST NOT block the initial page render

#### Scenario: Hotjar is not executed during server-side rendering

- **WHEN** the Next.js server renders a page
- **THEN** the system MUST NOT execute the Hotjar initialization script on the server and MUST NOT cause a server-side rendering error related to Hotjar

---

### Requirement: Sitemap.xml Auto-Generation

The system SHALL automatically generate a sitemap.xml file accessible at /sitemap.xml. The sitemap MUST include all published pages, category pages, and product detail pages. Each URL entry MUST include the loc, lastmod, and changefreq fields. The sitemap MUST be regenerated automatically when content is published or updated in Sanity.

#### Scenario: Sitemap includes all product detail pages

- **WHEN** a search engine crawler requests /sitemap.xml
- **THEN** the system MUST include a URL entry for every published product detail page, with correct loc, lastmod, and changefreq values

#### Scenario: Sitemap updates after new product is published

- **WHEN** a content editor publishes a new product in Sanity
- **THEN** the system MUST include the new product's URL in the sitemap.xml within one cache invalidation cycle

---

### Requirement: robots.txt Configuration

The system SHALL serve a robots.txt file at /robots.txt. The robots.txt MUST allow all crawlers to index all public pages. The robots.txt MUST disallow crawling of the /studio/ path used by the Sanity CMS studio. The robots.txt MUST include a Sitemap directive pointing to the absolute URL of /sitemap.xml.

#### Scenario: robots.txt disallows Sanity studio path

- **WHEN** a search engine crawler requests /robots.txt
- **THEN** the system MUST include a Disallow: /studio/ directive in the robots.txt response

#### Scenario: robots.txt includes sitemap directive

- **WHEN** a search engine crawler requests /robots.txt
- **THEN** the system MUST include a Sitemap directive with the absolute URL of the sitemap.xml file

---

### Requirement: Canonical URLs

The system SHALL render a canonical link tag in the HTML head of every page. The canonical URL MUST be the absolute URL of the current page in the active locale. Paginated pages MUST use the first page URL as the canonical. Filtered or sorted product listing pages MUST use the base category URL as the canonical to prevent duplicate content indexing.

#### Scenario: Product detail page renders canonical tag

- **WHEN** a search engine crawler requests a product detail page
- **THEN** the system MUST render a canonical link tag in the HTML head with the absolute URL of that product detail page in the active locale

#### Scenario: Filtered category page renders base category canonical

- **WHEN** a user applies filters on a category page and a search engine crawler indexes the resulting URL
- **THEN** the system MUST render a canonical link tag pointing to the base category URL without filter query parameters, preventing duplicate content indexing
