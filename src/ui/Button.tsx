import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", children, ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed px-9 py-4 text-2xl";

    const variantClasses = {
      primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
      secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
      outline: "bg-white text-black hover:bg-gray-50 focus:ring-gray-500",
    };

    const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

    return (
      <button
        ref={ref}
        className={classes}
        style={{
          fontFamily: "Product Sans",
          fontSize: "24px",
          fontWeight: "400",
          border: "1.5px solid black",
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
