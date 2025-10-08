"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { AsteriskIcon, HashIcon, CurvedArrowIcon } from "@/ui/doodles";
import { Button } from "@/ui";
import { X } from "lucide-react";
import { createPortal } from "react-dom";

interface FAQItem {
  id: string;
  question: string;
  answer: string | React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    id: "when-where-devfest",
    question: "When & Where is DevFest?",
    answer:
      "DevFest will be held on Saturday, November 15th, 2025 from 9:00 AM – 5:00 PM at the University of South Florida (USF) – Engineering II Building.",
  },
  {
    id: "why-attend-devfest",
    question: "Why Should You Attend DevFest?",
    answer:
      "DevFest offers Career Talks & AI Insights with honest perspectives and advice from experienced industry professionals, networking opportunities to connect with research labs, start-ups, and student clubs across business and technology, plus start-up inspiration to explore new ideas, ask questions, and get inspired to launch your own venture.",
  },
  {
    id: "who-can-attend",
    question: "Who Can Attend?",
    answer:
      "DevFest is open to all USF students! Register on BullsConnect to secure your spot, enjoy a catered lunch, and receive an exclusive participant kit.",
  },
  {
    id: "what-is-devfest",
    question: "What is DevFest?",
    answer:
      "DevFest is a community-led developer event hosted by Google Developer Groups (GDGs) around the world. It's a conference featuring technical talks, hands-on workshops, and networking opportunities focused on Google's latest technologies and developer tools.",
  },
  {
    id: "devfest-2024-stats",
    question: "How Successful Was DevFest 2024?",
    answer: (
      <>
        DevFest 2024 was a tremendous success! We had{" "}
        <strong>213 total event registrations</strong> with{" "}
        <strong>169 checked-in attendees</strong>, representing{" "}
        <strong>13+ different majors</strong> across campus. The event saw{" "}
        <strong>24% registration growth</strong> compared to 2023, with{" "}
        <strong>161 undergraduate students</strong> participating. Juniors led
        attendance with <strong>48 participants</strong>, showcasing strong
        engagement across all class years. These numbers reflect the
        event&apos;s growing scale, diversity, and impact in the USF community.
      </>
    ),
  },
];

interface FAQItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItemComponent({ item, isOpen, onToggle }: FAQItemProps) {
  return (
    <motion.div
      className="border-b border-gray-300 last:border-b-0"
      initial={false}
    >
      <button
        className="w-full py-8 px-8 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
      >
        <h3 className="text-lg md:text-xl font-medium text-gray-900 font-product-sans pr-6">
          {item.question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-shrink-0"
        >
          <CurvedArrowIcon className="w-8 h-5 text-gray-600" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${item.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8">
              <p className="text-gray-700 leading-relaxed font-product-sans">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [showContactModal, setShowContactModal] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Garantir que o componente está montado no cliente
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <>
      <section
        id="faq"
        className="relative pt-12 md:pt-16 pb-20 md:pb-28 overflow-hidden"
        style={{ backgroundColor: "#F5F5F5" }}
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top left asterisk */}
          <motion.div
            className="absolute top-20 left-20 opacity-20"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <AsteriskIcon className="w-12 h-12 text-gray-400" />
          </motion.div>

          {/* Top right hash */}
          <motion.div
            className="absolute top-32 right-32 opacity-20"
            animate={{
              rotate: [0, -360],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <HashIcon className="w-16 h-16 text-gray-400" />
          </motion.div>

          {/* Bottom left hash */}
          <motion.div
            className="absolute bottom-40 left-16 opacity-20"
            animate={{
              rotate: [0, 360],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <HashIcon className="w-10 h-10 text-gray-400" />
          </motion.div>

          {/* Bottom right asterisk */}
          <motion.div
            className="absolute bottom-20 right-20 opacity-20"
            animate={{
              rotate: [0, -360],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <AsteriskIcon className="w-14 h-14 text-gray-400" />
          </motion.div>
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              className="flex items-center justify-center gap-4 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <AsteriskIcon className="w-8 h-8 text-blue-600" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-product-sans">
                FAQ
              </h1>
              <AsteriskIcon className="w-8 h-8 text-green-500" />
            </motion.div>
          </div>

          {/* FAQ Items */}
          <motion.div
            className="max-w-4xl mx-auto bg-white rounded-2xl border-2 border-black overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="divide-y divide-gray-200">
              {faqData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <FAQItemComponent
                    item={item}
                    isOpen={openItems.has(item.id)}
                    onToggle={() => toggleItem(item.id)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Still have questions CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-base md:text-lg text-gray-700 font-product-sans mb-6">
              Still have questions?
            </p>
            <Button variant="primary" onClick={() => setShowContactModal(true)}>
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Modal - Portal */}
      {isMounted &&
        showContactModal &&
        createPortal(
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4"
            onClick={() => setShowContactModal(false)}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowContactModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-product-sans">
                  Contact Us
                </h3>
                <p className="text-gray-600 mb-6 font-product-sans">
                  Have questions about DevFest USF 2025? We&apos;re here to
                  help!
                </p>

                <div className="bg-gray-50 rounded-xl p-4 mb-6 border-2 border-gray-200">
                  <p className="text-sm text-gray-500 mb-2 font-product-sans">
                    Reach out to us at:
                  </p>
                  <a
                    href="mailto:mariajulia57@usf.edu?subject=DevFest%20USF%202025%20-%20Question&body=Hello%2C%0A%0AI%20have%20a%20question%20about%20DevFest%20USF%202025.%0A%0A"
                    className="text-blue-600 hover:text-blue-700 font-semibold text-lg break-all font-product-sans transition-colors"
                  >
                    mariajulia57@usf.edu
                  </a>
                </div>

                <p className="text-xs text-gray-500 font-product-sans">
                  Click the email above to open your email client with a
                  pre-filled message
                </p>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default FAQSection;
