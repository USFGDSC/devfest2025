import { SVGProps } from "react";

interface HashIconProps extends SVGProps<SVGSVGElement> {
  /** Classes CSS adicionais */
  className?: string;
}

export function HashIcon({ className = "", ...props }: HashIconProps) {
  return (
    <svg
      width="73"
      height="97"
      viewBox="0 0 73 97"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M28.606 1L16.1011 96.3502"
        stroke="black"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <path
        d="M56.0213 1L43.5164 96.3502"
        stroke="black"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <path
        d="M3.57568 32.5856H72.7051"
        stroke="black"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <path
        d="M0 64.7671H69.1295"
        stroke="black"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default HashIcon;
