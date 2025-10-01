"use client";

import { useState, useEffect } from "react";
import { BraceIcon, GoogleIcon } from "@/ui/svgs";

interface AnimatedBracesProps {
  /** Duração total da animação em segundos */
  duration?: number;
  /** Delay antes de iniciar a animação */
  delay?: number;
  /** Callback quando a animação terminar */
  onAnimationComplete?: () => void;
}

export default function AnimatedBraces({
  duration = 4,
  delay = 0.5,
  onAnimationComplete,
}: AnimatedBracesProps) {
  const [animationState, setAnimationState] = useState<
    "initial" | "closing" | "opening" | "complete"
  >("initial");

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setAnimationState("closing");
    }, delay * 1000);

    const timer2 = setTimeout(() => {
      setAnimationState("opening");
    }, (delay + duration * 0.3) * 1000);

    const timer3 = setTimeout(() => {
      setAnimationState("complete");
      onAnimationComplete?.();
    }, (delay + duration) * 1000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [delay, duration, onAnimationComplete]);

  const getLeftBraceStyles = () => {
    switch (animationState) {
      case "initial":
        return {
          transform: "translateX(-200px) rotate(-10deg)",
          opacity: 1,
          filter: "hue-rotate(0deg) brightness(1)",
        };
      case "closing":
        return {
          transform: "translateX(0px) rotate(0deg)",
          opacity: 1,
          filter: "hue-rotate(60deg) brightness(1.1)",
        };
      case "opening":
        return {
          transform: "translateX(-30px) translateY(-5px) rotate(-3deg)",
          opacity: 1,
          filter: "hue-rotate(120deg) brightness(1.2)",
        };
      case "complete":
        return {
          transform: "translateX(-20px) translateY(2px) rotate(-1deg)",
          opacity: 1,
          filter: "hue-rotate(180deg) brightness(1.3)",
        };
    }
  };

  const getRightBraceStyles = () => {
    switch (animationState) {
      case "initial":
        return {
          transform: "translateX(200px) rotate(10deg)",
          opacity: 1,
          filter: "hue-rotate(0deg) brightness(1)",
        };
      case "closing":
        return {
          transform: "translateX(0px) rotate(0deg)",
          opacity: 1,
          filter: "hue-rotate(60deg) brightness(1.1)",
        };
      case "opening":
        return {
          transform: "translateX(30px) translateY(-5px) rotate(3deg)",
          opacity: 1,
          filter: "hue-rotate(120deg) brightness(1.2)",
        };
      case "complete":
        return {
          transform: "translateX(20px) translateY(2px) rotate(1deg)",
          opacity: 1,
          filter: "hue-rotate(180deg) brightness(1.3)",
        };
    }
  };

  const getTextOpacity = () => {
    switch (animationState) {
      case "initial":
      case "closing":
        return 0;
      case "opening":
        return 0.5;
      case "complete":
        return 1;
    }
  };

  const getContainerScale = () => {
    switch (animationState) {
      case "initial":
        return "scale(0.8)";
      case "closing":
        return "scale(0.9)";
      case "opening":
        return "scale(1.05)";
      case "complete":
        return "scale(1)";
    }
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-white overflow-hidden"
      style={{
        transform: getContainerScale(),
        transition: "transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      }}
    >
      {/* Chave esquerda */}
      <div
        className="absolute z-10"
        style={{
          ...getLeftBraceStyles(),
          transition: "all 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          transformOrigin: "center",
        }}
      >
        <BraceIcon className="text-green-500 w-16 h-32 md:w-20 md:h-40 lg:w-24 lg:h-48 filter drop-shadow-lg" />
      </div>

      {/* Texto central */}
      <div
        className="z-20 text-center px-8"
        style={{
          opacity: getTextOpacity(),
          transition: "opacity 1s ease-in-out",
        }}
      >
        <h1 className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 font-product-sans">
          <span
            className="inline-block"
            style={{
              animation:
                animationState === "opening" || animationState === "complete"
                  ? "fadeInUp 1s ease-out"
                  : "none",
            }}
          >
            DevFest
          </span>
          <GoogleIcon
            size={40}
            className="text-blue-600 w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 flex-shrink-0"
            style={{
              animation:
                animationState === "opening" || animationState === "complete"
                  ? "fadeInUp 1s ease-out 0.2s both"
                  : "none",
            }}
          />
          <span
            className="inline-block font-normal"
            style={{
              animation:
                animationState === "opening" || animationState === "complete"
                  ? "fadeInUp 1s ease-out 0.4s both"
                  : "none",
            }}
          >
            USF
          </span>
        </h1>
      </div>

      {/* Chave direita */}
      <div
        className="absolute z-10"
        style={{
          ...getRightBraceStyles(),
          transition: "all 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          transformOrigin: "center",
        }}
      >
        <BraceIcon
          flipped
          className="text-green-500 w-16 h-32 md:w-20 md:h-40 lg:w-24 lg:h-48 filter drop-shadow-lg"
        />
      </div>

      {/* Efeito de inércia - partículas flutuantes */}
      {animationState !== "initial" && (
        <>
          {[...Array(8)].map((_, i) => {
            const colors = ["#C3ECF6", "#CCF6C5", "#FFE7A5", "#F8D8D8"];
            const color = colors[i % colors.length];
            return (
              <div
                key={i}
                className="absolute w-3 h-3 rounded-full opacity-60"
                style={{
                  backgroundColor: color,
                  left: `${15 + i * 10}%`,
                  top: `${25 + (i % 4) * 15}%`,
                  animation: `float ${2 + i * 0.3}s ease-in-out infinite`,
                  animationDelay: `${i * 0.15}s`,
                }}
              />
            );
          })}
        </>
      )}

      {/* Definição das animações CSS */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-10px) translateX(5px);
          }
          50% {
            transform: translateY(-5px) translateX(-3px);
          }
          75% {
            transform: translateY(-15px) translateX(8px);
          }
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .floating-brace {
          animation: bounce 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
