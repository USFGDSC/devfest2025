"use client";

import { useEffect, useState } from "react";

// Matrix text effect component with absolute positioning
function MatrixText({
  text,
  startIndex,
  totalLength,
  iteration,
}: {
  text: string;
  startIndex: number;
  totalLength: number;
  iteration: number;
}) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*";
  const totalDuration = 60; // Total animation duration in iterations
  const glitchFrames = 8; // Number of frames each character glitches before revealing

  return (
    <>
      {text.split("").map((char, localIndex) => {
        // Calculate the absolute index in the full text
        const absoluteIndex = startIndex + localIndex;

        // If it's a space, keep it as space
        if (char === " ") return <span key={localIndex}> </span>;

        // Calculate when this character starts animating (left to right wave)
        const startIteration =
          (absoluteIndex / totalLength) * (totalDuration - glitchFrames);
        const endIteration = startIteration + glitchFrames;

        let displayChar = char;
        let isGlitch = false;

        // Character hasn't started yet - show nothing (transparent)
        if (iteration < startIteration) {
          displayChar = "\u00A0"; // non-breaking space to maintain layout
        }
        // Character is currently glitching - green color
        else if (iteration >= startIteration && iteration < endIteration) {
          displayChar = chars[Math.floor(Math.random() * chars.length)];
          isGlitch = true;
        }
        // Character is revealed - normal color
        else {
          displayChar = char;
        }

        return (
          <span key={localIndex} className={isGlitch ? "text-green-500" : ""}>
            {displayChar}
          </span>
        );
      })}
    </>
  );
}

export function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [iteration, setIteration] = useState(0);
  const [atBottom, setAtBottom] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  // Calculate text segments and their positions
  const segments = [
    { text: "By ", length: 3 },
    { text: "Gabriel Fagundes", length: 16 },
    { text: " on behalf of ", length: 14 },
    { text: "GDG USF ♥️", length: 10 },
  ];

  const totalTextLength = segments.reduce((sum, seg) => sum + seg.length, 0);

  // Animation loop
  useEffect(() => {
    if (!isExpanded) {
      setIteration(0);
      return;
    }

    const interval = setInterval(() => {
      setIteration((prev) => {
        if (prev >= 60) {
          clearInterval(interval);
          return 60;
        }
        return prev + 1;
      });
    }, 35);

    return () => clearInterval(interval);
  }, [isExpanded]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    let checkIntervalId: NodeJS.Timeout | null = null;

    const checkPosition = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const threshold = 5;

      const isAtBottom = scrollPosition >= documentHeight - threshold;

      setAtBottom(isAtBottom);

      // Reset quando não estiver mais no fundo (importante para quando o conteúdo muda)
      if (!isAtBottom && (showFooter || isVisible)) {
        setIsVisible(false);
        setShowFooter(false);
        setIsExpanded(false);

        if (timeoutId) {
          clearTimeout(timeoutId);
          timeoutId = null;
        }
      }

      return isAtBottom;
    };

    const handleScroll = () => {
      const isAtBottom = checkPosition();

      // Limpar timeout anterior
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }

      // Se chegou ao fundo, mostrar o footer (sempre que chegar no final)
      if (isAtBottom) {
        // Esperar 800ms antes de mostrar
        timeoutId = setTimeout(() => {
          setShowFooter(true);
          setIsVisible(true);
        }, 800);
      }
    };

    // Verificar posição continuamente quando o footer está visível
    // Isso detecta mudanças no tamanho da página (como FAQ expandindo)
    if (showFooter || isVisible) {
      checkIntervalId = setInterval(checkPosition, 100);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (checkIntervalId) {
        clearInterval(checkIntervalId);
      }
    };
  }, [atBottom, showFooter, isVisible]);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  // Calculate start indices for each segment
  let currentIndex = 0;
  const segmentPositions = segments.map((seg) => {
    const startIndex = currentIndex;
    currentIndex += seg.length;
    return startIndex;
  });

  return (
    <footer
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <div className="relative group">
        {/* Glow effect */}
        <div
          className={`absolute -inset-1 rounded-full blur-sm transition-all duration-500 ${
            isExpanded
              ? "bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 opacity-30 group-hover:opacity-50"
              : "bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 opacity-40 group-hover:opacity-60"
          }`}
        ></div>

        {/* Main container - transitions between circle and pill */}
        <button
          onClick={handleClick}
          className={`relative bg-white/90 backdrop-blur-md rounded-full border border-gray-200/50 transition-all duration-500 ease-out ${
            isExpanded
              ? "px-6 py-3 shadow-xl"
              : "w-12 h-12 flex items-center justify-center hover:scale-110"
          }`}
        >
          {isExpanded ? (
            <p className="text-[10px] sm:text-xs text-gray-600 whitespace-nowrap">
              <MatrixText
                text={segments[0].text}
                startIndex={segmentPositions[0]}
                totalLength={totalTextLength}
                iteration={iteration}
              />
              <a
                href="https://www.linkedin.com/in/gabrielft-me/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <MatrixText
                  text={segments[1].text}
                  startIndex={segmentPositions[1]}
                  totalLength={totalTextLength}
                  iteration={iteration}
                />
              </a>
              <MatrixText
                text={segments[2].text}
                startIndex={segmentPositions[2]}
                totalLength={totalTextLength}
                iteration={iteration}
              />
              <span className="font-medium text-gray-700">
                <MatrixText
                  text={segments[3].text}
                  startIndex={segmentPositions[3]}
                  totalLength={totalTextLength}
                  iteration={iteration}
                />
              </span>
            </p>
          ) : (
            <span className="text-gray-600 text-lg font-medium">?</span>
          )}
        </button>
      </div>
    </footer>
  );
}
