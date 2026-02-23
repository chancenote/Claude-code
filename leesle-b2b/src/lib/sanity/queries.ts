// GROQ queries for Sanity CMS data fetching
// i18n pattern: Use coalesce(field[$locale], field.ko) for locale-aware field selection
// Pass { locale } as query params when fetching

export const homePageQuery = `{
  "hero": *[_type == "heroContent"][0] {
    backgroundImage,
    "headline": coalesce(headline[$locale], headline.ko),
    "subheadline": coalesce(subheadline[$locale], subheadline.ko),
    ctaPrimary,
    ctaSecondary
  },
  "partnerLogos": *[_type == "partnerLogo" && active == true] | order(order asc) {
    _id,
    name,
    logo,
    url
  },
  "categories": *[_type == "category"] | order(order asc) {
    _id,
    "title": coalesce(title[$locale], title.ko),
    slug,
    icon
  },
  "featuredCases": *[_type == "collaborationCase" && featuredOnHome == true] | order(order asc) [0...3] {
    _id,
    "title": coalesce(title[$locale], title.ko),
    slug,
    client,
    clientLogo,
    coverImage,
    "summary": coalesce(summary[$locale], summary.ko)
  },
  "stats": *[_type == "siteStats"][0] {
    partnerCount,
    itemCount,
    satisfactionRate
  }
}`;

export const allProductsQuery = `*[_type == "product"] | order(_createdAt desc) {
  _id,
  "title": coalesce(title[$locale], title.ko),
  slug,
  "description": coalesce(description[$locale], description.ko),
  category->{
    "title": coalesce(title[$locale], title.ko),
    slug
  },
  images,
  moq,
  customizable,
  featured
}`;

export const productBySlugQuery = `*[_type == "product" && slug.current == $slug][0] {
  _id,
  "title": coalesce(title[$locale], title.ko),
  slug,
  "description": coalesce(description[$locale], description.ko),
  category->{
    "title": coalesce(title[$locale], title.ko),
    slug
  },
  images,
  specs,
  moq,
  customizable,
  productionDays,
  featured,
  "relatedProducts": *[_type == "product" && category._ref == ^.category._ref && _id != ^._id][0...4] {
    _id,
    "title": coalesce(title[$locale], title.ko),
    slug,
    images,
    category->{
      "title": coalesce(title[$locale], title.ko),
      slug
    }
  }
}`;

export const allCasesQuery = `*[_type == "collaborationCase"] | order(order asc) {
  _id,
  "title": coalesce(title[$locale], title.ko),
  slug,
  client,
  clientLogo,
  coverImage,
  "summary": coalesce(summary[$locale], summary.ko)
}`;

export const caseBySlugQuery = `*[_type == "collaborationCase" && slug.current == $slug][0] {
  _id,
  "title": coalesce(title[$locale], title.ko),
  slug,
  client,
  clientLogo,
  coverImage,
  gallery,
  "summary": coalesce(summary[$locale], summary.ko),
  "fullStory": coalesce(fullStory[$locale], fullStory.ko),
  testimonial,
  "relatedProducts": *[_type == "product" && featured == true][0...3] {
    _id,
    "title": coalesce(title[$locale], title.ko),
    slug,
    images
  }
}`;

export const faqQuery = `*[_type == "faqItem"] | order(order asc) {
  _id,
  "question": coalesce(question[$locale], question.ko),
  "answer": coalesce(answer[$locale], answer.ko)
}`;

export const resourcesQuery = `*[_type == "resource"] | order(_createdAt desc) {
  _id,
  "title": coalesce(title[$locale], title.ko),
  type,
  file,
  thumbnail,
  gated
}`;

export const categoriesQuery = `*[_type == "category"] | order(order asc) {
  _id,
  "title": coalesce(title[$locale], title.ko),
  slug,
  icon
}`;
