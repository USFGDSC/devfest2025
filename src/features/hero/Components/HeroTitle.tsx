"use client";

import { ReactNode } from "react";
import { BraceIcon, GoogleIcon } from "@/ui/svgs";

type AnimationType = "fade" | "bounce" | "slide" | "pulse" | "rotate";

interface HeroTitleProps {
  /** Texto principal do título (sem as chaves) */
  children: ReactNode;
  /** Tipo de animação para as chaves */
  animation?: AnimationType;
  /** Classes CSS adicionais para o container */
  className?: string;
  /** Classes CSS para o texto principal */
  textClassName?: string;
  /** Classes CSS para as chaves */
  bracesClassName?: string;
  /** Duração da animação em segundos */
  animationDuration?: number;
  /** Delay da animação em segundos */
  animationDelay?: number;
}

const animationClasses: Record<AnimationType, string> = {
  fade: "animate-fade-in-out",
  bounce: "animate-bounce-gentle",
  slide: "animate-slide-x",
  pulse: "animate-pulse-scale",
  rotate: "animate-rotate-gentle",
};

export default function HeroTitle({
  children,
  animation = "bounce",
  className = "",
  textClassName = "",
  bracesClassName = "",
  animationDuration = 2,
  animationDelay = 0,
}: HeroTitleProps) {
  const animationClass = animationClasses[animation];

  return (
    <h1
      className={`
        flex items-center justify-center gap-2 md:gap-4
        text-4xl md:text-6xl lg:text-7xl xl:text-8xl
        font-bold tracking-tight
        font-product-sans
        ${className}
      `}
    >
      {/* Chave esquerda */}
      <BraceIcon
        className={`
          text-green-500 dark:text-green-400
          w-8 h-20 md:w-12 md:h-28 lg:w-16 lg:h-36
          ${animationClass}
          ${bracesClassName}
        `}
        style={{
          animationDuration: `${animationDuration}s`,
          animationDelay: `${animationDelay}s`,
          animationIterationCount: "infinite",
        }}
        aria-hidden="true"
      />

      {/* Texto principal */}
      <span
        className={`
          text-gray-900 dark:text-white
          ${textClassName}
        `}
      >
        {children}
      </span>

      {/* Chave direita */}
      <BraceIcon
        flipped
        className={`
          text-green-500 dark:text-green-400
          w-8 h-20 md:w-12 md:h-28 lg:w-16 lg:h-36
          ${animationClass}
          ${bracesClassName}
        `}
        style={{
          animationDuration: `${animationDuration}s`,
          animationDelay: `${animationDelay + 0.5}s`, // Delay ligeiramente diferente para criar efeito
          animationIterationCount: "infinite",
        }}
        aria-hidden="true"
      />
    </h1>
  );
}

// Componente específico para DevFest @ USF
export function DevFestHeroTitle({
  animation = "bounce",
  className = "",
  animationDuration = 2,
}: Pick<HeroTitleProps, "animation" | "className" | "animationDuration">) {
  return (
    <HeroTitle
      animation={animation}
      className={className}
      animationDuration={animationDuration}
    >
      <span className="flex flex-col md:flex-row items-center gap-2 md:gap-4 font-product-sans">
        <span>DevFest</span>
        <GoogleIcon 
          size={32}
          className="w-8 h-auto md:w-12 lg:w-16 xl:w-20 text-blue-600 dark:text-blue-400"
        />
        <span>USF</span>
      </span>
    </HeroTitle>
  );
}
