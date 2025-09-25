import { SVGProps } from "react";

interface InvertedWavesIconProps extends SVGProps<SVGSVGElement> {
  /** Classes CSS adicionais */
  className?: string;
}

export function InvertedWavesIcon({
  className = "",
  ...props
}: InvertedWavesIconProps) {
  return (
    <svg
      width="226"
      height="53"
      viewBox="0 0 226 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g clipPath="url(#clip0_126_458)">
        <path
          d="M3.7666 -0.00820885C3.7666 11.9168 4.46074 23.6348 10.3583 33.1171C16.3152 42.6948 22.0312 47.9322 31.0749 47.6921C39.7914 47.4607 44.9826 42.1899 50.8499 33.1171C56.9627 23.6648 58.3833 11.925 58.3833 -0.00820885"
          stroke="#1E1E1E"
          strokeWidth="3"
        />
        <path
          d="M58.3833 -0.00820885C58.3833 11.9168 59.0775 23.6348 64.975 33.1171C70.932 42.6948 76.6479 47.9322 85.6916 47.6921C94.4081 47.4607 99.5993 42.1899 105.467 33.1171C111.579 23.6648 113 11.925 113 -0.00820885"
          stroke="#1E1E1E"
          strokeWidth="3"
        />
        <path
          d="M113 -0.00820885C113 11.9168 113.694 23.6348 119.592 33.1171C125.549 42.6948 131.265 47.9322 140.308 47.6921C149.025 47.4607 154.216 42.1899 160.083 33.1171C166.196 23.6648 167.617 11.925 167.617 -0.00820885"
          stroke="#1E1E1E"
          strokeWidth="3"
        />
        <path
          d="M167.617 -0.00820885C167.617 11.9168 168.311 23.6348 174.208 33.1171C180.165 42.6948 185.881 47.9322 194.925 47.6921C203.641 47.4607 208.833 42.1899 214.7 33.1171C220.813 23.6648 222.233 11.925 222.233 -0.00820885"
          stroke="#1E1E1E"
          strokeWidth="3"
        />
      </g>
      <defs>
        <clipPath id="clip0_126_458">
          <rect
            width="226"
            height="53"
            fill="white"
            transform="matrix(1 0 0 -1 0 53)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default InvertedWavesIcon;
