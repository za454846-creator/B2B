import React, { useState } from "react";
import "../../assets/css/Home.css";

/**
 * FAQ list shown on the homepage.
 * - Simple, accessible markup (buttons for toggles)
 * - Styling is provided via `src/assets/css/Home.css`
 * - State is local to this component (which item is open)
 */

// Static list of Q&A entries. Replace or fetch as needed.
const faqItems = [
  {
    question: "How quickly can I get started?",
    answer:
      "You can get set up quickly with a guided onboarding flow and clear documentation. The platform is designed to work from day one — no steep learning curve.",
  },
  {
    question: "What payment and billing options are available?",
    answer:
      "We offer monthly and annual subscriptions with simple billing and transparent pricing. You can manage payment details directly from your dashboard.",
  },
  {
    question: "How is my data protected?",
    answer:
      "Your data is protected with standard security controls, encrypted storage, and regular audits. We keep your information secure and private.",
  },
  {
    question: "Can I integrate this with other tools?",
    answer:
      "Yes. The platform supports integrations and APIs so you can connect the tools you already use.",
  },
];

/**
 * Small chevron icon used to indicate open/closed state.
 * We use `currentColor` so CSS can control the color.
 */
const ChevronIcon = ({ open }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
      transition: "transform 0.28s ease",
      flexShrink: 0,
    }}
    aria-hidden="true"
  >
    <path
      d="M5 7.5L10 12.5L15 7.5"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * `FaqComponent` - simple, commented and easy-to-read structure.
 * Accessibility: each toggle is a button with an associated content region.
 */
const FaqComponent = () => {
  // Index of the currently open FAQ item (null if none)
  const [openIndex, setOpenIndex] = useState(0);

  // Toggle open/closed state for an item by index
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="faq-section" aria-label="Frequently Asked Questions">
      <div className="faq-wrapper">

        {/* Heading: centered by external CSS */}
        <div className="faq-headline">
          <h2>
            Everything you need
            <br />
            <em>to know.</em>
          </h2>
          <p>
            Simple answers to the most common questions about setup, billing,
            security and integrations.
          </p>
        </div>

        {/* Accordion list: visual state is controlled by adding/removing the `open` class */}
        <div className="faq-card">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            const contentId = `faq-content-${i}`;

            return (
              <div key={i} className={`faq-item${isOpen ? " open" : ""}`}>
                {/* Decorative accent line (CSS-controlled) */}
                <div className="faq-accent-line" />

                {/*
                  Button toggles the answer. Use aria-expanded and aria-controls
                  so screen readers understand the relationship.
                */}
                <button
                  type="button"
                  className="faq-item-header"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggle(i)}
                >
                  <span className={`faq-number${isOpen ? " active" : ""}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className={`faq-question${isOpen ? " active" : ""}`}>
                    {item.question}
                  </span>

                  <span className={`faq-icon${isOpen ? " active" : ""}`}>
                    <ChevronIcon open={isOpen} />
                  </span>
                </button>

                {/* Answer region. Visibility and animation via CSS */}
                <div id={contentId} className="faq-body" role="region" aria-labelledby={contentId + "-label"}>
                  <div className="faq-body-inner">{item.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqComponent;