"use client";
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is the process of working with you?",
    answer: "We start with a discovery session to understand your needs, followed by a proposal. Once approved, we move to the design, development, and launch phases, with regular check-ins along the way."
  },
  {
    question: "How long does a typical project take?",
    answer: "The timeline varies depending on the project's scope and complexity. A simple website might take 4-6 weeks, while a more complex system could take several months."
  },
  {
    question: "What are your payment terms?",
    answer: "We typically require a 50% deposit to begin work, with the remaining balance due upon project completion."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-serif text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-rose-gold pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-xl font-serif text-charcoal">{faq.question}</h3>
                <span className="text-2xl text-rose-gold">{openIndex === index ? '-' : '+'}</span>
              </button>
              {openIndex === index && (
                <p className="mt-4 text-charcoal">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
