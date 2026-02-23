interface JsonLdProps {
  data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint: JSON-LD must be set via dangerouslySetInnerHTML
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LEESLE",
  url: "https://b2b.leesle.com",
  logo: "https://b2b.leesle.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+82-2-1234-5678",
    contactType: "customer service",
    email: "b2b@leesle.com",
    availableLanguage: ["Korean", "English"],
  },
  sameAs: [],
};

export function buildProductJsonLd(product: {
  title: string;
  description: string;
  slug: string;
  moq: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    url: `https://b2b.leesle.com/ko/products/${product.slug}`,
    brand: {
      "@type": "Brand",
      name: "LEESLE",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "KRW",
      seller: {
        "@type": "Organization",
        name: "LEESLE",
      },
    },
  };
}
