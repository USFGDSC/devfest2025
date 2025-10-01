"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { AsteriskIcon, HashIcon, CurvedArrowIcon } from "@/ui/doodles";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "what-is-devfest",
    question: "What is DevFest",
    answer:
      "DevFest is a community-led developer event hosted by Google Developer Groups (GDGs) around the world. It's a multi-day conference featuring technical talks, hands-on workshops, and networking opportunities focused on Google's latest technologies and developer tools.",
  },
  {
    id: "what-is-devfest-2",
    question: "What is DevFest",
    answer:
      "DevFest brings together developers, designers, and tech enthusiasts to learn about cutting-edge technologies like AI/ML, Cloud Computing, Web Development, Mobile Development, and more. It's an opportunity to connect with industry experts and fellow developers.",
  },
  {
    id: "what-is-devfest-3",
    question: "What is DevFest",
    answer:
      "At DevFest, you'll experience inspiring keynotes, technical sessions, codelabs, and networking sessions. Whether you're a beginner or an experienced developer, there's something for everyone to learn and grow their skills.",
  },
  {
    id: "what-is-devfest-4",
    question: "What is DevFest",
    answer:
      "DevFest is free to attend and open to all skill levels. It's a great opportunity to learn from Google Developer Experts, connect with the local developer community, and discover new technologies that can advance your career.",
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
    <section
      className="relative min-h-screen py-16 md:py-24 overflow-hidden"
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

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-product-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Find answers to the most commonly asked questions about DevFest USF
          </motion.p>
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

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <p className="text-gray-600 mb-4 font-product-sans">
            Still have questions?
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default FAQSection;
