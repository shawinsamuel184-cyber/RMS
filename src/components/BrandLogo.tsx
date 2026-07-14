import { logoImage } from "../config/images";
import { siteConfig } from "../config/siteConfig";
import { SiteImage } from "./SiteImage";

type BrandLogoProps = {
  className?: string;
  textClassName?: string;
  imgClassName?: string;
};

export function BrandLogo({ className = "", textClassName = "", imgClassName = "h-12 w-auto max-w-[200px] object-contain" }: BrandLogoProps) {
  // Load the logo directly, no fallback checking to make it fast!
  return (
    <SiteImage
      image={logoImage}
      alt={siteConfig.name}
      className={`${imgClassName} ${className}`}
    />
  );
}
