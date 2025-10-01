import { SVGProps } from "react";

interface CurvedArrowIconProps extends SVGProps<SVGSVGElement> {
  /** Classes CSS adicionais */
  className?: string;
}

export function CurvedArrowIcon({
  className = "",
  ...props
}: CurvedArrowIconProps) {
  return (
    <svg
      width="41"
      height="27"
      viewBox="0 0 41 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M20.9405 26.4382C20.6074 14.4815 28.7397 3.90328 40.4966 1"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <path
        d="M20.5561 26.4382C20.8891 14.4815 12.7569 3.90328 0.999958 1"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CurvedArrowIcon;
