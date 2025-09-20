import { SVGProps } from "react";

interface AsteriskIconProps extends SVGProps<SVGSVGElement> {
  /** Classes CSS adicionais */
  className?: string;
}

export function AsteriskIcon({ className = "", ...props }: AsteriskIconProps) {
  return (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M0 47.6693H95.3386"
        stroke="black"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <path
        d="M47.6694 0V95.3386"
        stroke="black"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <path
        d="M13.9622 13.962L81.3637 81.3636"
        stroke="black"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <path
        d="M81.3767 13.962L13.9751 81.3636"
        stroke="black"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default AsteriskIcon;
