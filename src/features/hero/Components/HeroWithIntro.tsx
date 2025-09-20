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
  };

  const handleSkipAnimation = () => {
    console.log("Animação pulada pelo usuário");
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

      {/* Conteúdo principal */}
      {!showAnimation && <HeroSectionWrapper />}
    </section>
  );
}
