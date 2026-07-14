import { useState, useEffect } from "react";
import { logoImage } from "../config/images";
import { siteConfig } from "../config/siteConfig";
import { SiteImage } from "./SiteImage";

type BrandLogoProps = {
  className?: string;
  textClassName?: string;
  imgClassName?: string;
};

export function BrandLogo({ className = "", textClassName = "", imgClassName = "h-12 w-auto max-w-[200px] object-contain" }: BrandLogoProps) {
  const [useImage, setUseImage] = useState(false);

  useEffect(() => {
    // Check if logo exists by trying to load the primary src
    const img = new Image();
    img.onload = () => setUseImage(true);
    img.onerror = () => setUseImage(false);
    img.src = logoImage.src;
  }, []);

  if (useImage) {
    return (
      <SiteImage
        image={logoImage}
        alt={siteConfig.name}
        className={`${imgClassName} ${className}`}
      />
    );
  }

  return (
    <span className={`font-black tracking-[0.22em] ${textClassName} ${className}`} style={{ color: "#000000" }}>
      {siteConfig.shortName}
    </span>
  );
}
