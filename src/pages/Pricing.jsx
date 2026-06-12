import React, { useState } from "react";
import CTASection from "../components/Home_components/CTASection";
import FaqComponent from  '../components/Home_components/FaqComponent';
import "../assets/css/Pricing.css";

function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      desc: "Perfect for individuals exploring bidding opportunities.",
      monthlyPrice: "2,999",
      yearlyPrice: "1,999",
      btnText: "Get Started",
      btnClass: "btn-outline",
      popular: false,
      features: [
        { text: "50 bid notifications/month", active: true },
        { text: "Basic search filters", active: true },
        { text: "Email alerts", active: true },
        { text: "5 bid submissions/month", active: true },
        { text: "AI bid assistance", active: false },
        { text: "Priority support", active: false },
        { text: "Analytics dashboard", active: false },
      ],
    },
    {
      name: "Professional",
      desc: "For growing businesses winning more bids.",
      monthlyPrice: "7,999",
      yearlyPrice: "5,999",
      btnText: "Get Started",
      btnClass: "btn-card",
      popular: true,
      features: [
        { text: "Unlimited bid notifications", active: true },
        { text: "Advanced search & filters", active: true },
        { text: "Email + SMS alerts", active: true },
        { text: "50 bid submissions/month", active: true },
        { text: "AI bid assistance", active: true },
        { text: "Priority support", active: true },
        { text: "Custom analytics", active: true },
      ],
    },
    {
      name: "Enterprise",
      desc: "Built for organizations with custom needs organizations.",
      monthlyPrice: null,
      yearlyPrice: null,
      btnText: "Contact Sales",
      btnClass: "btn-outline",
      popular: false,
      features: [
        { text: "Everything in Professional", active: true },
        { text: "Unlimited submissions", active: true },
        { text: "Dedicated account manager", active: true },
        { text: "Custom analytics & reports", active: true },
        { text: "API access", active: true },
        { text: "White-label options", active: true },
        { text: "SLA guarantee", active: true },
      ],
    },
  ];

  return (
    <>
      {/* ================= BANNER ================= */}
      <section className="pricing-banner">
        <div className="container">
          <div className="banner-content">
            <h1>
              Our <span>Pricing</span>
            </h1>

            <p>
              Choose a flexible pricing plan for startups and enterprises.
            </p>

            <button className="banner-btn">Learn More</button>
          </div>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section className="pricing-section section">
        <div className="container">

          <div className="pricing-top">

            <h2 className="pricing_heading">
              Simple & Transparent Pricing
            </h2>

            <p className="pricing-sub">
              Scale your business with flexible pricing.
            </p>

            {/* ================= TOGGLE ================= */}
            <div className="toggle-wrap">

              <span
                className={`toggle-label ${!isYearly ? "active" : ""}`}
                onClick={() => setIsYearly(false)}
              >
                <span className="toggle-icon">📅</span>
                Monthly
              </span>

              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={isYearly}
                  onChange={(e) => setIsYearly(e.target.checked)}
                />
                <div className="toggle-track"></div>
                <div className="toggle-thumb"></div>
              </label>

              <span
                className={`toggle-label ${isYearly ? "active" : ""}`}
                onClick={() => setIsYearly(true)}
              >
                <span className="toggle-icon">🏆</span>
                Yearly
              </span>

            </div>
          </div>

          {/* ================= CARDS ================= */}
          <div className="pricing-grid">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`pricing_card ${plan.popular ? "popular" : ""}`}
              >

                {plan.popular && (
                  <div className="popular-badge">
                    MOST POPULAR
                  </div>
                )}

                <h3>{plan.name}</h3>

                <p className="card-desc">{plan.desc}</p>

                {/* PRICE */}
                <div className="card-price">
                  {plan.monthlyPrice ? (
                    <>
                      <div className="price-amount">
                        ₨ {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </div>
                      <span className="price-period">
                        {isYearly ? "/year" : "/month"}
                      </span>
                    </>
                  ) : (
                    <>
                      <div className="price-custom">Custom</div>
                      <div className="price-note">
                        Tailored for your business
                      </div>
                    </>
                  )}
                </div>

                <button className={`btn-card ${plan.btnClass}`}>
                  {plan.btnText}
                </button>

                <div className="divider"></div>

                <ul className="features-list">
                  {plan.features.map((f, i) => (
                    <li key={i} className={!f.active ? "disabled" : ""}>
                      <span className="check">✓</span>
                      {f.text}
                    </li>
                  ))}
                </ul>

              </div>
            ))}
          </div>

        </div>
      </section>
  {/* ================= FAQ (NEW FIXED SECTION) ================= */}
         <FaqComponent
  title="About Our Company"
  highlight="to know."
  description="Simple answers about setup, billing, security and integrations."
  faqs={[
    {
      question: "How quickly can I get started?",
      answer: "You can start within minutes with onboarding."
    },
    {
      question: "Is it free to use?",
      answer: "Yes, there is a free plan available."
    },
  ]}
/>
<CTASection
  titleLine1="Pricing for Your Next $5M Project"
  titleHighlight="Is Already Here."
  subText="Join 9,200+ contractors who stopped guessing and started winning. Free to start — no credit card needed."
  primaryBtnText="Start Finding Projects"
  primaryBtnLink="/projects"
  secondaryBtnText="Schedule a Demo"
  secondaryBtnLink="/demo"
  noteText="No credit card · Free forever plan · Cancel anytime"
/>    </>
  );
}

export default Pricing;