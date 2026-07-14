import { useEffect, useState } from "react";
import type { SyntheticEvent } from "react";
import {
  IMAGE_EXTENSIONS,
  type LocalImageRef,
  handleImageError,
  localImagePath,
} from "../config/images";

async function findLocalImage(image: LocalImageRef): Promise<string | null> {
  const variants = image.basenameVariants ?? [image.basename];
  const start = image.startExtIndex ?? 0;
  const extOrder = [
    ...IMAGE_EXTENSIONS.slice(start),
    ...IMAGE_EXTENSIONS.slice(0, start),
  ];

  for (const base of variants) {
    for (const ext of extOrder) {
      const extIndex = IMAGE_EXTENSIONS.indexOf(ext);
      const url = localImagePath(image.folder, base, extIndex);
      try {
        const res = await fetch(url, { method: "HEAD" });
        if (res.ok) return url;
      } catch {
        /* try next */
      }
    }
  }
  return null;
}

type SiteImageProps = {
  image: LocalImageRef;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
};

/** Shows stock fallback instantly, swaps to your file in public/images/ when present. */
export function SiteImage({ image, alt, className, loading }: SiteImageProps) {
  const [src, setSrc] = useState(image.fallback);

  useEffect(() => {
    let cancelled = false;
    findLocalImage(image).then((local) => {
      if (!cancelled && local) setSrc(local);
    });
    return () => {
      cancelled = true;
    };
  }, [image]);

  return (
    <img
      src={src}
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
