"use client";

import { useState } from "react";
import AnimatedHeroIntro from "./AnimatedHeroIntro";
import HeroSectionWrapper from "./HeroSectionWrapper";

interface HeroWithIntroProps {
  /** Duração da animação inicial */
  introDuration?: number;
}

export default function HeroWithIntro({
  introDuration = 5,
}: HeroWithIntroProps) {
  const [showAnimation, setShowAnimation] = useState(true);

  const handleIntroComplete = () => {
    // Callback opcional para quando a animação chega na fase floating
    console.log("Animação chegou na fase floating");
    // Automaticamente esconde a animação após completar
    setTimeout(() => setShowAnimation(false), 1000);
  };

  const handleSkipAnimation = () => {
    console.log("Animação pulada pelo usuário");
    // Esconde imediatamente quando pulada
    setShowAnimation(false);
  };

  return (
    <section id="hero" className="relative">
      {/* Animação condicional */}
      {showAnimation && (
        <AnimatedHeroIntro
          duration={introDuration}
          onAnimationComplete={handleIntroComplete}
          onSkip={handleSkipAnimation}
          autoPlay={true}
          allowSkip={true}
        />
      )}

      {/* Conteúdo principal com transição suave */}
      {!showAnimation && (
        <div
          className="animate-in fade-in duration-500"
          style={{
            animation: "fadeInContent 0.6s ease-out both",
          }}
        >
          <HeroSectionWrapper />
        </div>
      )}

      {/* Estilos CSS para transição */}
      <style jsx global>{`
        @keyframes fadeInContent {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
