import { useEffect, useState } from "react";
import { logoImage } from "../config/images";
import { siteConfig } from "../config/siteConfig";

type BrandLogoProps = {
  className?: string;
  textClassName?: string;
  imgClassName?: string;
};

export function BrandLogo({ className = "", textClassName = "", imgClassName = "h-12 w-auto max-w-[200px] object-contain" }: BrandLogoProps) {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const exts = ["png", "jpg", "jpeg", "webp"];
    const base = import.meta.env.BASE_URL;
    (async () => {
      for (const ext of exts) {
        const url = `${base}images/logo/logo.${ext}`;
        try {
          const res = await fetch(url, { method: "HEAD" });
          if (res.ok) {
            setSrc(url);
            return;
          }
        } catch {
          /* try next */
        }
      }
    })();
  }, []);

  if (src) {
    return <img src={src} alt={siteConfig.name} className={`${imgClassName} ${className}`} />;
  }

  return (
    <span className={`font-black tracking-[0.22em] ${textClassName} ${className}`} style={{ color: "#000000" }}>
      {siteConfig.shortName}
    </span>
  );
}
