import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", children, ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 sm:px-6 sm:py-3 md:px-9 md:py-4 text-sm sm:text-base md:text-lg lg:text-xl";

    const variantClasses = {
      primary:
        "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 border-2 border-black",
      secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
      outline:
        "bg-white text-black hover:bg-gray-50 focus:ring-gray-500 border-2 border-black",
    };

    const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

    return (
      <button
        ref={ref}
        className={classes}
        style={{
          fontFamily: "Product Sans",
          fontWeight: "400",
          boxSizing: "border-box",
        }}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
