"use client";

import { useState, useEffect } from "react";
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
  duration = 5,
  onAnimationComplete,
  autoPlay = true,
  allowSkip = true,
  onSkip,
}: AnimatedHeroIntroProps) {
  const [currentPhase, setCurrentPhase] = useState<
    "white" | "approaching" | "closed" | "opening" | "floating"
  >("white");
  const [showContent, setShowContent] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  const handleSkip = () => {
    if (!allowSkip) return;
    // Chama o callback de skip para fechar a animação
    onSkip?.();
  };

  useEffect(() => {
    if (!autoPlay) return;

    const phases = [
      { phase: "approaching", delay: 500 }, // 1s - chaves começam a se aproximar
      { phase: "closed", delay: 1000 }, // 2s - chaves se fecham
      { phase: "opening", delay: 1600 }, // 3.2s - chaves começam a abrir
      { phase: "floating", delay: 2600 }, // 4.5s - efeito de flutuação
    ];

    const timers = phases.map(({ phase, delay }) =>
      setTimeout(() => {
        console.log(`Animação entrando na fase: ${phase}`);
        setCurrentPhase(phase as any);
        if (phase === "opening") {
          setShowContent(true);
        }
        if (phase === "floating") {
          //console.log("Chaves devem estar em -300px e +300px agora");
          onAnimationComplete?.();
          // Mostra as partículas após 500ms de estar em floating
          setTimeout(() => {
            setShowParticles(true);
          }, 500);
        }
      }, delay)
    );

    return () => timers.forEach(clearTimeout);
  }, [autoPlay, onAnimationComplete]);

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
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-40"
                style={{
                  left: `${15 + i * 10}%`,
                  top: `${25 + (i % 4) * 15}%`,
                  animation: `floatParticle ${
                    3 + i * 0.5
                  }s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
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

        {/* Indicação para pular (aparece após 2 segundos) */}
        {allowSkip && currentPhase !== "white" && (
          <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 text-sm opacity-60 pointer-events-none"
            style={{
              animation: "fadeInSkip 0.5s ease-in-out 2s both",
            }}
          >
            Click to skip
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
