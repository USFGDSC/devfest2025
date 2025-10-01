"use client";

import { useState, useEffect, useCallback } from "react";
import { BraceIcon, GoogleIcon } from "@/ui/svgs";

interface AnimatedHeroIntroProps {
  /** Duração total da animação em segundos */
  duration?: number;
  /** Callback quando a animação terminar */
  onAnimationComplete?: () => void;
  /** Se true, mostra a animação automaticamente */
  autoPlay?: boolean;
  /** Se true, permite pular a animação clicando */
  allowSkip?: boolean;
  /** Callback quando a animação for pulada */
  onSkip?: () => void;
}

export default function AnimatedHeroIntro({
  onAnimationComplete,
  autoPlay = true,
  allowSkip = true,
  onSkip,
}: AnimatedHeroIntroProps) {
  const [currentPhase, setCurrentPhase] = useState<
    "white" | "approaching" | "closed" | "opening" | "floating"
  >("white");
  const [showContent, setShowContent] = useState(false);
  const [showParticles] = useState(true);
  const [isSkipped, setIsSkipped] = useState(false);

  const handleSkip = useCallback(() => {
    if (!allowSkip || isSkipped) return;
    setIsSkipped(true);
    // Chama o callback de skip para fechar a animação
    onSkip?.();
  }, [allowSkip, isSkipped, onSkip]);

  // Adicionar listener para scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        // Skip se rolar mais de 10px
        handleSkip();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " ") {
        // ESC ou SPACE para skip
        e.preventDefault();
        handleSkip();
      }
    };

    // Adicionar event listeners
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleSkip]);

  useEffect(() => {
    if (!autoPlay || isSkipped) return;

    const phases = [
      { phase: "approaching", delay: 500 }, // 0.5s - chaves começam a se aproximar
      { phase: "closed", delay: 1000 }, // 1s - chaves se fecham
      { phase: "opening", delay: 1600 }, // 1.6s - chaves começam a abrir
      { phase: "floating", delay: 2600 }, // 2.6s - efeito de flutuação
    ];

    const timers = phases.map(({ phase, delay }) =>
      setTimeout(() => {
        if (isSkipped) return; // Não continua se foi pulado
        console.log(`Animação entrando na fase: ${phase}`);
        setCurrentPhase(
          phase as "white" | "approaching" | "closed" | "opening" | "floating"
        );
        if (phase === "opening") {
          setShowContent(true);
        }
        if (phase === "floating") {
          // Preload de outros componentes pode ser feito aqui
          onAnimationComplete?.();
        }
      }, delay)
    );

    return () => timers.forEach(clearTimeout);
  }, [autoPlay, onAnimationComplete, isSkipped]);

  // Preload de recursos críticos
  useEffect(() => {
    // Preload da imagem principal do hero
    const img = new Image();
    img.src = "/Images/Hero-group.png";

    // Preload de outras imagens críticas
    const galleryImages = [
      "/Images/gallery/Group 11.png",
      "/Images/gallery/Group 12.png",
      "/Images/gallery/Group 13.png",
      "/Images/gallery/Group 14.png",
    ];

    galleryImages.forEach((src) => {
      const galleryImg = new Image();
      galleryImg.src = src;
    });
  }, []);

  const getBraceStyles = (isLeft: boolean) => {
    const baseSize = "w-20 h-40 md:w-24 md:h-48 lg:w-28 lg:h-56";

    switch (currentPhase) {
      case "white":
        return {
          className: `${baseSize} text-green-500 opacity-0`,
          style: {
            transform: isLeft
              ? "translateX(-300px) rotate(-15deg)"
              : "translateX(300px) rotate(15deg)",
            filter: "hue-rotate(0deg) brightness(1) saturate(1)",
          },
        };

      case "approaching":
        return {
          className: `${baseSize} text-green-500 opacity-100`,
          style: {
            transform: isLeft
              ? "translateX(-100px) rotate(-8deg)"
              : "translateX(100px) rotate(8deg)",
            filter: "hue-rotate(20deg) brightness(1.1) saturate(1.1)",
            transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
          },
        };

      case "closed":
        return {
          className: `${baseSize} text-green-500 opacity-100`,
          style: {
            transform: isLeft
              ? "translateX(-50px) rotate(-1deg)"
              : "translateX(50px) rotate(1deg)",
            filter: "hue-rotate(60deg) brightness(1.2) saturate(1.3)",
            transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          },
        };

      case "opening":
        return {
          className: `${baseSize} text-green-400 opacity-100`,
          style: {
            transform: isLeft
              ? "translateX(-300px) translateY(-8px) rotate(-5deg)"
              : "translateX(300px) translateY(-8px) rotate(5deg)",
            filter: "hue-rotate(120deg) brightness(1.3) saturate(1.4)",
            transition: "all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          },
        };

      case "floating":
        return {
          className: `${baseSize} text-green-300 opacity-100`,
          style: {
            transform: isLeft
              ? "translateX(-300px) translateY(-8px) rotate(-5deg)"
              : "translateX(300px) translateY(-8px) rotate(5deg)",
            filter: "hue-rotate(120deg) brightness(1.3) saturate(1.4)",
            transition: "all 0s ease-in-out",
            animation: isLeft
              ? "floatLeft 4s ease-in-out infinite"
              : "floatRight 4s ease-in-out infinite",
          },
        };
    }
  };

  const getContainerStyles = () => {
    // Frame sempre fullscreen, apenas controla opacidade se necessário
    return {
      opacity: 1,
    };
  };

  const leftBraceStyles = getBraceStyles(true);
  const rightBraceStyles = getBraceStyles(false);

  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-white overflow-hidden ${
          allowSkip ? "cursor-pointer" : ""
        }`}
        style={{
          ...getContainerStyles(),
          width: "100vw",
          height: "100vh",
          top: 0,
          left: 0,
          position: "fixed",
        }}
        onClick={handleSkip}
      >
        {/* Chave esquerda */}
        <div className="absolute z-10" style={leftBraceStyles.style}>
          <BraceIcon
            className={`filter drop-shadow-xl ${leftBraceStyles.className}`}
          />
        </div>

        {/* Conteúdo central */}
        <div
          className={`z-20 text-center px-8 transition-all duration-1000 ${
            showContent
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 font-product-sans">
            <span
              className={`inline-block transition-all duration-700 ${
                currentPhase === "opening" || currentPhase === "floating"
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "0.2s" }}
            >
              DevFest
            </span>
            <GoogleIcon
              size={40}
              className={`text-blue-600 w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 flex-shrink-0 transition-all duration-700 ${
                currentPhase === "opening" || currentPhase === "floating"
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-4 scale-75"
              }`}
              style={{ transitionDelay: "0.4s" }}
            />
            <span
              className={`inline-block font-normal transition-all duration-700 ${
                currentPhase === "opening" || currentPhase === "floating"
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "0.6s" }}
            >
              USF
            </span>
          </h1>
        </div>

        {/* Chave direita */}
        <div className="absolute z-10" style={rightBraceStyles.style}>
          <BraceIcon
            flipped
            className={`filter drop-shadow-xl ${rightBraceStyles.className}`}
          />
        </div>

        {/* Partículas flutuantes de inércia */}
        {showParticles && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              animation: "fadeInParticles 0.5s ease-in-out both",
            }}
          >
            {[...Array(12)].map((_, i) => {
              const colors = ["#C3ECF6", "#CCF6C5", "#FFE7A5", "#F8D8D8"];
              const color = colors[i % colors.length];
              return (
                <div
                  key={i}
                  className="absolute w-3 h-3 rounded-full opacity-60"
                  style={{
                    backgroundColor: color,
                    left: `${10 + i * 7}%`,
                    top: `${20 + (i % 5) * 12}%`,
                    animation: `floatParticle ${
                      3 + i * 0.3
                    }s ease-in-out infinite`,
                    animationDelay: `${i * 0.15}s`,
                  }}
                />
              );
            })}
          </div>
        )}

        {/* Efeito de brilho suave no fundo */}
        {currentPhase !== "white" && (
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at center, rgba(34, 197, 94, 0.1) 0%, transparent 60%)",
            }}
          />
        )}

        {/* Efeito de ondas concêntricas durante abertura */}
        {(currentPhase === "opening" || currentPhase === "floating") && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute border border-green-200 rounded-full opacity-20"
                style={{
                  width: `${200 + i * 100}px`,
                  height: `${200 + i * 100}px`,
                  animation: `ripple ${2 + i * 0.5}s ease-out infinite`,
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}
          </div>
        )}

        {/* Indicação para pular (visível desde o início) */}
        {allowSkip && (
          <div
            className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 text-xs sm:text-sm font-medium pointer-events-none px-4"
            style={{
              animation: "fadeInSkip 0.3s ease-in-out both",
              opacity: 0.8,
            }}
          >
            <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg border border-gray-200 max-w-[280px] sm:max-w-none">
              <span className="flex items-center justify-center gap-1 sm:gap-2 text-center">
                <span className="whitespace-nowrap">Click to skip</span>
                <span className="text-[10px] sm:text-xs text-gray-400 hidden xs:inline">
                  • Scroll • ESC
                </span>
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Estilos CSS para as animações */}
      <style jsx global>{`
        @keyframes gentleFloat {
          0%,
          100% {
            transform: translateX(var(--base-x, 0)) translateY(var(--base-y, 0))
              rotate(var(--base-rotate, 0deg));
          }
          25% {
            transform: translateX(calc(var(--base-x, 0) + 5px))
              translateY(calc(var(--base-y, 0) - 8px))
              rotate(calc(var(--base-rotate, 0deg) + 1deg));
          }
          50% {
            transform: translateX(calc(var(--base-x, 0) - 3px))
              translateY(calc(var(--base-y, 0) - 12px))
              rotate(calc(var(--base-rotate, 0deg) - 1deg));
          }
          75% {
            transform: translateX(calc(var(--base-x, 0) + 8px))
              translateY(calc(var(--base-y, 0) - 6px))
              rotate(calc(var(--base-rotate, 0deg) + 2deg));
          }
        }

        @keyframes subtleFloat {
          0%,
          100% {
            transform: translateX(var(--base-x, 0)) translateY(var(--base-y, 0))
              rotate(var(--base-rotate, 0deg));
          }
          50% {
            transform: translateX(calc(var(--base-x, 0) + 3px))
              translateY(calc(var(--base-y, 0) - 5px))
              rotate(calc(var(--base-rotate, 0deg) + 1deg));
          }
        }

        @keyframes floatLeft {
          0% {
            transform: translateX(-300px) translateY(-8px) rotate(-5deg);
          }
          25% {
            transform: translateX(-292px) translateY(-12px) rotate(-4deg);
          }
          50% {
            transform: translateX(-308px) translateY(-16px) rotate(-6deg);
          }
          75% {
            transform: translateX(-295px) translateY(-10px) rotate(-4deg);
          }
          100% {
            transform: translateX(-300px) translateY(-8px) rotate(-5deg);
          }
        }

        @keyframes floatRight {
          0% {
            transform: translateX(300px) translateY(-8px) rotate(5deg);
          }
          25% {
            transform: translateX(292px) translateY(-12px) rotate(4deg);
          }
          50% {
            transform: translateX(308px) translateY(-16px) rotate(6deg);
          }
          75% {
            transform: translateX(295px) translateY(-10px) rotate(4deg);
          }
          100% {
            transform: translateX(300px) translateY(-8px) rotate(5deg);
          }
        }

        @keyframes floatParticle {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.4;
          }
          25% {
            transform: translateY(-15px) translateX(8px) scale(1.1);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-8px) translateX(-5px) scale(0.9);
            opacity: 0.3;
          }
          75% {
            transform: translateY(-20px) translateX(12px) scale(1.2);
            opacity: 0.5;
          }
        }

        @keyframes ripple {
          0% {
            transform: scale(0.3);
            opacity: 0.8;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes fadeInSkip {
          from {
            opacity: 0;
            transform: translate(-50%, 10px);
          }
          to {
            opacity: 0.6;
            transform: translate(-50%, 0);
          }
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </>
  );
}
