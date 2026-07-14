import type { SyntheticEvent } from "react";
import {
  type LocalImageRef,
  handleImageError,
} from "../config/images";

type SiteImageProps = {
  image: LocalImageRef;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
};

/** Shows your image first, falls back through extensions/variants if needed. */
export function SiteImage({ image, alt, className, loading }: SiteImageProps) {
  return (
    <img
      src={image.src}
      alt={alt}
      className={className}
      loading={loading}
      data-img-folder={image.folder}
      data-img-base={image.basename}
      data-ext-index={String(image.startExtIndex ?? 0)}
      onError={(e: SyntheticEvent<HTMLImageElement>) => handleImageError(e, image)}
    />
  );
}
