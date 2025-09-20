import { SVGProps } from "react";

interface ArrowIconProps extends SVGProps<SVGSVGElement> {
  /** Classes CSS adicionais */
  className?: string;
}

export function ArrowIcon({ className = "", ...props }: ArrowIconProps) {
  return (
    <svg
      width="100"
      height="78"
      viewBox="0 0 100 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M99.2508 38.6746C76.2164 39.3162 55.8375 23.6496 50.2444 1"
        stroke="black"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <path
        d="M1 39.3845L99.2509 38.6746"
        stroke="black"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <path
        d="M99.2508 39.4153C76.2164 38.7736 55.8375 54.4403 50.2444 77.0899"
        stroke="black"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ArrowIcon;
