import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  /** Conteúdo do badge */
  children: ReactNode;
  /** Variante visual do badge */
  variant?:
    | "default"
    | "outline"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  /** Tamanho do badge */
  size?: "sm" | "md" | "lg";
  /** Classes CSS adicionais */
  className?: string;
  /** Ícone opcional à esquerda do texto */
  icon?: ReactNode;
}

const badgeVariants = {
  default: "bg-gray-100 text-gray-800 border-gray-200",
  outline: "bg-transparent text-gray-700 border-gray-300 border",
  secondary: "bg-blue-50 text-blue-700 border-blue-200",
  success: "bg-green-50 text-green-700 border-green-200",
  warning: "bg-yellow-50 text-yellow-700 border-yellow-200",
  danger: "bg-red-50 text-red-700 border-red-200",
};

const badgeSizes = {
  sm: "px-2 py-1 text-xs",
  md: "px-3 py-1.5 text-sm",
  lg: "px-4 py-2 text-base",
};

export function Badge({
  children,
  variant = "default",
  size = "md",
  className,
  icon,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-medium border transition-colors",
        badgeVariants[variant],
        badgeSizes[size],
        className
      )}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  );
}

export default Badge;
