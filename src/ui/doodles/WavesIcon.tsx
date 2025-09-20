import { SVGProps } from "react";

interface WavesIconProps extends SVGProps<SVGSVGElement> {
  /** Classes CSS adicionais */
  className?: string;
}

export function WavesIcon({ className = "", ...props }: WavesIconProps) {
  return (
    <svg
      width="176"
      height="30"
      viewBox="0 0 176 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g clipPath="url(#clip0_126_453)">
        <path
          d="M2.93335 29.3379C2.93335 22.7379 3.47392 16.2524 8.06668 11.0044C12.7057 5.70351 17.1571 2.80484 24.2 2.93772C30.988 3.06581 35.0308 5.98298 39.6 11.0044C44.3604 16.2359 45.4667 22.7334 45.4667 29.3379"
          stroke="#1E1E1E"
          strokeWidth="3.2"
        />
        <path
          d="M45.4666 29.3379C45.4666 22.7379 46.0072 16.2524 50.5999 11.0044C55.239 5.70351 59.6903 2.80484 66.7332 2.93772C73.5212 3.06581 77.564 5.98298 82.1332 11.0044C86.8936 16.2359 87.9999 22.7334 87.9999 29.3379"
          stroke="#1E1E1E"
          strokeWidth="3.2"
        />
        <path
          d="M88 29.3379C88 22.7379 88.5406 16.2524 93.1333 11.0044C97.7724 5.70351 102.224 2.80484 109.267 2.93772C116.055 3.06581 120.097 5.98298 124.667 11.0044C129.427 16.2359 130.533 22.7334 130.533 29.3379"
          stroke="#1E1E1E"
          strokeWidth="3.2"
        />
        <path
          d="M130.533 29.3379C130.533 22.7379 131.074 16.2524 135.667 11.0044C140.306 5.70351 144.757 2.80484 151.8 2.93772C158.588 3.06581 162.631 5.98298 167.2 11.0044C171.961 16.2359 173.067 22.7334 173.067 29.3379"
          stroke="#1E1E1E"
          strokeWidth="3.2"
        />
      </g>
      <defs>
        <clipPath id="clip0_126_453">
          <rect width="176" height="29.3333" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default WavesIcon;
