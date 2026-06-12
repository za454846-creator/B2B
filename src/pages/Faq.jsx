import React from "react";

import CTASection from "../components/Home_components/CTASection";
import FaqComponent from "../components/Home_components/FaqComponent";
import "../assets/css/Style.css";

/**
 * FAQ page
 * Renders a banner, FAQ list and a CTA section.
 * Notes:
 * - Banner styles are inlined here (scoped); consider moving them to `assets/css/Style.css`.
 * - FAQ data is defined inline for simplicity; extract to a data file if reused.
 * @returns {JSX.Element}
 */
function Faq() {
    return (
        <>
            {/* Inline banner styles (scoped to this component). Move to CSS for production. */}
            <style>
                {`
/* ================= BANNER ================= */
.faq-banner {
    padding: 120px 0;
    background: radial-gradient(ellipse at 50% 0%, rgba(249,115,22,0.12) 0%, transparent 60%);
    position: relative;
    overflow: hidden;
}
.faq-banner::before {
    content: "";
    position: absolute;
    width: 400px;
    height: 400px;
    background: rgba(249,115,22,0.2);
    filter: blur(120px);
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 0;
}
@media (max-width: 768px) {
    .faq-banner { padding: 80px 20px; }
}
                `}
            </style>

            {/* Banner section */}
            <section className="faq-banner">
                <div className="container">
                    <div className="banner-content">
                        {/* Heading */}
                        <h1>
                            We Build What Others <span>Only Imagine</span>
                        </h1>

                        {/* Short description */}
                        <p>
                            We're a team of strategists, designers, and engineers obsessed with
                            creating digital experiences that drive real business results.
                        </p>

                        {/* CTA button in the banner */}
                        <button className="banner-btn">
                            Learn More <i className="bi bi-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </section>

            {/* FAQ list (data provided as props) */}
            <FaqComponent
                title="About Our Company"
                highlight="to know."
                description="Simple answers about setup, billing, security and integrations."
                faqs={[
                    { question: "How quickly can I get started?", answer: "You can start within minutes with onboarding." },
                    { question: "How quickly can I get started?", answer: "You can start within minutes with onboarding." },
                    { question: "How quickly can I get started?", answer: "You can start within minutes with onboarding." },
                    { question: "How quickly can I get started?", answer: "You can start within minutes with onboarding." },
                    { question: "How quickly can I get started?", answer: "You can start within minutes with onboarding." },
                    { question: "Is it free to use?", answer: "Yes, there is a free plan available." },
                    { question: "Do you provide support?", answer: "Yes, 24/7 support is available." },
                    { question: "Can I request custom work?", answer: "Yes, custom development is available." },
                ]}
            />

            {/* Call-to-action section */}
            <CTASection
                titleLine1="Faq Next $5M Project"
                titleHighlight="Is Already Here."
                subText="Join 9,200+ contractors who stopped guessing and started winning. Free to start — no credit card needed."
                primaryBtnText="Start Finding Projects"
                primaryBtnLink="/projects"
                secondaryBtnText="Schedule a Demo"
                secondaryBtnLink="/demo"
                noteText="No credit card · Free forever plan · Cancel anytime"
            />
        </>
    );
}

export default Faq;