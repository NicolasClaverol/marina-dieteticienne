"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/constants";

function FAQItem({
  question,
  reponse,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  reponse: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const id = `faq-${index}`;

  return (
    <div className="border-b border-gris last:border-0">
      <button
        type="button"
        className="w-full flex items-center justify-between py-5 text-left gap-4 hover:text-sage transition-colors"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={id}
      >
        <span className="font-medium text-texte text-base pr-4">{question}</span>
        <span
          className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border-2 transition-all ${
            isOpen
              ? "border-sage bg-sage text-white rotate-45"
              : "border-texte/30 text-texte/40"
          }`}
          aria-hidden="true"
        >
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div id={id} className="pb-6">
          <p className="text-texte/65 leading-relaxed text-sm">{reponse}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-gris">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sage text-sm font-semibold tracking-widest uppercase mb-3">
            Questions fréquentes
          </p>
          <h2 className="font-title text-4xl md:text-5xl text-texte font-semibold">
            Vous avez des questions ?
          </h2>
        </div>

        <div className="bg-fond rounded-2xl p-6 md:p-10 shadow-sm">
          {FAQ_ITEMS.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              reponse={item.reponse}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
