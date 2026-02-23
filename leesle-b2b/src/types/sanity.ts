// =============================================================================
// Sanity CMS TypeScript Type Definitions
// These types represent the data structures returned by GROQ queries.
// They are NOT Sanity Studio schema definitions.
// =============================================================================

// -----------------------------------------------------------------------------
// Helper / Primitive Types
// -----------------------------------------------------------------------------

/** Localized string with Korean (required) and English (optional) */
export interface LocaleString {
  ko: string;
  en?: string;
}

/** Sanity image asset reference */
export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

/** Sanity file asset reference */
export interface SanityFile {
  _type: 'file';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

/** Portable Text block — minimal representation for GROQ results */
export interface PortableTextBlock {
  _type: 'block';
  _key: string;
  style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
  children: PortableTextSpan[];
  markDefs?: PortableTextMarkDef[];
  listItem?: 'bullet' | 'number';
  level?: number;
}

export interface PortableTextSpan {
  _type: 'span';
  _key: string;
  text: string;
  marks?: string[];
}

export interface PortableTextMarkDef {
  _type: string;
  _key: string;
  href?: string;
}

/** Localized Portable Text content (ko required, en optional) */
export interface LocalePortableText {
  ko: PortableTextBlock[];
  en?: PortableTextBlock[];
}

// -----------------------------------------------------------------------------
// CTA (Call to Action) shared type
// -----------------------------------------------------------------------------

export interface CTAButton {
  label: string;
  url: string;
}

// -----------------------------------------------------------------------------
// Document Types
// -----------------------------------------------------------------------------

/**
 * Hero Content — Homepage hero section (singleton)
 * Controls the main banner area of the landing page.
 */
export interface HeroContent {
  _id: string;
  _type: 'heroContent';
  backgroundImage: SanityImage;
  headline: LocaleString;
  subheadline: LocaleString;
  ctaPrimary: CTAButton;
  ctaSecondary: CTAButton;
}

/**
 * Partner Logo — Logos displayed in the partners/clients section
 */
export interface PartnerLogo {
  _id: string;
  _type: 'partnerLogo';
  name: string;
  logo: SanityImage;
  url?: string;
  active: boolean;
  order: number;
}

/**
 * Site Stats — Key metrics displayed on the site (singleton)
 * e.g. "500+ Partners", "10,000+ Items", "98% Satisfaction"
 */
export interface SiteStats {
  _id: string;
  _type: 'siteStats';
  partnerCount: number;
  itemCount: number;
  satisfactionRate: number;
}

/**
 * Category — Product categories
 */
export interface Category {
  _id: string;
  _type: 'category';
  title: LocaleString;
  slug: {
    _type: 'slug';
    current: string;
  };
  icon: SanityImage;
  order: number;
}

/**
 * Product — Individual product listings
 */
export interface Product {
  _id: string;
  _type: 'product';
  title: LocaleString;
  slug: {
    _type: 'slug';
    current: string;
  };
  description: LocaleString;
  category: CategoryReference;
  images: SanityImage[];
  specs: ProductSpecs;
  moq: number;
  customizable: boolean;
  productionDays: number;
  featured: boolean;
}

/** Product specification details */
export interface ProductSpecs {
  material?: string;
  size?: string;
  colorOptions?: string[];
}

/** Reference to a Category document (before expansion) */
export interface CategoryReference {
  _type: 'reference';
  _ref: string;
}

/** Product with expanded category (after GROQ dereference) */
export interface ProductExpanded extends Omit<Product, 'category'> {
  category: Category;
}

/**
 * Collaboration Case — Portfolio case studies
 */
export interface CollaborationCase {
  _id: string;
  _type: 'collaborationCase';
  title: LocaleString;
  slug: {
    _type: 'slug';
    current: string;
  };
  client: string;
  clientLogo: SanityImage;
  coverImage: SanityImage;
  gallery: SanityImage[];
  summary: LocaleString;
  fullStory: LocalePortableText;
  testimonial?: Testimonial;
  featuredOnHome: boolean;
  order: number;
}

/** Client testimonial quote */
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

/**
 * Resource — Downloadable files (catalogs, brandbooks, lookbooks)
 */
export interface Resource {
  _id: string;
  _type: 'resource';
  title: LocaleString;
  type: 'catalog' | 'brandbook' | 'lookbook';
  file: SanityFile;
  thumbnail: SanityImage;
  gated: boolean;
}

/**
 * FAQ Item — Frequently asked questions
 */
export interface FaqItem {
  _id: string;
  _type: 'faqItem';
  question: LocaleString;
  answer: LocaleString;
  order: number;
}

/**
 * Quote Inquiry — Form submissions from potential partners
 */
export interface QuoteInquiry {
  _id: string;
  _type: 'quoteInquiry';
  companyName: string;
  contactName: string;
  contact: string;
  category: string[];
  quantity: string;
  purpose: string;
  deadline: string;
  notes: string;
  submittedAt: string;
}

// -----------------------------------------------------------------------------
// Utility Types for GROQ Query Results
// -----------------------------------------------------------------------------

/** Sanity document base fields present on all documents */
export interface SanityDocument {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
}

/** All Sanity document types in this project */
export type SanityDocumentType =
  | HeroContent
  | PartnerLogo
  | SiteStats
  | Category
  | Product
  | CollaborationCase
  | Resource
  | FaqItem
  | QuoteInquiry;
