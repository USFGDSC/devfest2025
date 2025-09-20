import { SVGProps } from "react";

interface PixelIconProps extends SVGProps<SVGSVGElement> {
  /** Tamanho do ícone */
  size?: number;
  /** Classes CSS adicionais */
  className?: string;
}

export function PixelIcon({
  size = 24,
  className = "",
  ...props
}: PixelIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Simplified pixel/hashtag pattern */}
      <rect x="3" y="3" width="3" height="3" fill="currentColor" />
      <rect x="10" y="3" width="3" height="3" fill="currentColor" />
      <rect x="17" y="3" width="3" height="3" fill="currentColor" />

      <rect x="3" y="10" width="3" height="3" fill="currentColor" />
      <rect x="10" y="10" width="3" height="3" fill="currentColor" />
      <rect x="17" y="10" width="3" height="3" fill="currentColor" />

      <rect x="3" y="17" width="3" height="3" fill="currentColor" />
      <rect x="10" y="17" width="3" height="3" fill="currentColor" />
      <rect x="17" y="17" width="3" height="3" fill="currentColor" />
    </svg>
  );
}

export default PixelIcon;
