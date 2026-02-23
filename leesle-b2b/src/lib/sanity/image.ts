import { urlFor } from "./client";
import type { SanityImageSource } from "@sanity/image-url";

/**
 * Generate optimized image URL from Sanity image source.
 * Uses Sanity's built-in CDN for automatic WebP/AVIF conversion and resizing.
 */
export function getSanityImageUrl(
  source: SanityImageSource,
  options?: {
    width?: number;
    height?: number;
    quality?: number;
  }
) {
  let builder = urlFor(source).auto("format");

  if (options?.width) {
    builder = builder.width(options.width);
  }
  if (options?.height) {
    builder = builder.height(options.height);
  }
  if (options?.quality) {
    builder = builder.quality(options.quality);
  }

  return builder.url();
}
