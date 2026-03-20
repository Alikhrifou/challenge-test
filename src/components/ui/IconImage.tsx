interface IconImageProps {
  readonly src: string;
  readonly alt: string;
  readonly size?: "sm" | "md" | "lg";
  readonly className?: string;
}

const SIZES = {
  sm: "w-5 h-5",
  md: "w-6 h-6",
  lg: "w-8 h-8",
} as const;

export const IconImage = ({
  src,
  alt,
  size = "md",
  className = "",
}: IconImageProps) => (
  <img
    src={src}
    alt={alt}
    className={`${SIZES[size]} object-contain ${className}`}
    loading="lazy"
  />
);
