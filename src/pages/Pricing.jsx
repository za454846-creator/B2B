import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import CTASection from "../components/Home_components/CTASection";
import FaqComponent from "../components/Home_components/FaqComponent";

// home.css is required: FaqComponent and CTASection are styled there.
// pricing.css goes last so it can override.
import "../assets/css/style.css";
import "../assets/css/home.css";
import "../assets/css/pricing.css";

// No brand in the title — App.js's titleTemplate already appends it.
const PAGE_URL = 'https://www.bidconnectors.com/pricing';
const PAGE_TITLE = 'Pricing Plans';
const PAGE_DESCRIPTION =
  'Simple, transparent pricing for Bid Connectors. Choose a flexible monthly or yearly plan for individuals, growing businesses, or enterprises.';
// There was no image meta, so shared links previewed empty.
const PAGE_IMAGE = 'https://www.bidconnectors.com/og/pricing.jpg';

const REGISTER_URL = 'https://bidconnectors.com/bidconnectors/register';
const SALES_URL = '/contact-us';

const plans = [
  {
    name: "Starter",
    desc: "For a single estimator testing the platform",
    monthlyPrice: "0",
    yearlyPrice: "0",
    yearlyPerMonth: null,
    priceNote: "Free indefinitely. No trial clock, no credit card.",
    btnText: "Start Free",
    btnStyle: "plan-btn-outline",
    btnLink: REGISTER_URL,
    external: true,
    popular: false,
    features: [
      { text: "30 project views/month", active: true },
      { text: "Basic trade & location filters", active: true },
      { text: "Weekly email alerts", active: true },
      { text: "Bid package assembly", active: false },
      { text: "Trade partner directory", active: false },
    ],
  },
  {
    name: "Growth",
    desc: "For active subcontractors and small GCs",
    monthlyPrice: "149",
    yearlyPrice: "1,490",
    yearlyPerMonth: "124",
    priceNote: "Save $298/year (about 17%) versus paying monthly.",
    btnText: "Get Started",
    btnStyle: "plan-btn-primary",
    btnLink: REGISTER_URL,
    external: true,
    popular: true,
    features: [
      { text: "Unlimited project views", active: true },
      { text: "Advanced filters + saved searches", active: true },
      { text: "Bid package assembly", active: true },
      { text: "Takeoff Studio (300 pages/mo)", active: true },
      { text: "Trade partner directory access", active: true },
      { text: "Bid readiness check", active: true },
    ],
  },
  {
    name: "Enterprise",
    desc: "For general contractors and multi-office firms",
    monthlyPrice: null,
    yearlyPrice: null,
    yearlyPerMonth: null,
    priceNote: "Priced by team size and usage. Talk to sales.",
    btnText: "Contact Sales",
    btnStyle: "plan-btn-outline",
    btnLink: SALES_URL,
    external: false,
    popular: false,
    features: [
      { text: "Everything in Growth", active: true },
      { text: "Unlimited takeoff pages", active: true },
      { text: "Team seats (10+)", active: true },
      { text: "API access & integrations", active: true },
      { text: "Dedicated account manager", active: true },
      { text: "Custom reporting", active: true },
    ],
  },
];

const faqs = [
  {
    question: "Why is Starter free, and what's the catch?",
    answer: "There isn't one. Starter is capped at 30 project views a month and doesn't include bid package assembly or the trade partner directory, so it's genuinely limited, not a disguised trial. Plenty of solo estimators use it as their only plan.",
  },
  {
    question: "What happens if I go over my Takeoff Studio page limit?",
    answer: "Growth accounts include 300 takeoff pages a month. Extra pages are billed at $0.35 each for the rest of that cycle, or you can move to Enterprise for unlimited pages if that becomes a regular pattern.",
  },
  {
    question: "Is the yearly plan actually cheaper, or just deferred billing?",
    answer: "It's a real discount, not just prepayment. Growth billed yearly works out to $124 a month instead of $149, close to two months free compared with paying monthly all year.",
  },
  {
    question: "Can I switch from monthly to yearly in the middle of a subscription?",
    answer: "Yes. Switching applies the yearly rate starting on your next billing date and prorates any remaining time on your current monthly cycle, so you're not charged twice for the same period.",
  },
  {
    question: "Do nonprofits, schools, or government agencies get a different rate?",
    answer: "There's no published nonprofit or agency discount today, but if you're a public agency evaluating the platform for internal use rather than bidding, reach out and we'll see what makes sense.",
  },
];

const pricingSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Bid Connectors Subscription Plans',
  description: PAGE_DESCRIPTION,
  brand: { '@type': 'Brand', name: 'Bid Connectors' },
  offers: plans
    .filter((p) => p.monthlyPrice !== null)
    .map((p) => ({
      '@type': 'Offer',
      name: p.name,
      description: p.desc,
      price: p.monthlyPrice.replace(/,/g, ''),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: PAGE_URL,
    })),
};

function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <>
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <link rel="canonical" href={PAGE_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={PAGE_IMAGE} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={PAGE_IMAGE} />

        {/* Structured data: pricing plans */}
        <script type="application/ld+json">
          {JSON.stringify(pricingSchema)}
        </script>
      </Helmet>

      {/* Keep className="pricing-page": pricing.css is scoped to it. */}
      <main className="pricing-page">

        {/* ================= BANNER ================= */}
        <section className="pricing-banner" aria-labelledby="pricing-heading">
          <div className="container">
            <div className="banner-content">

              <span className="pricing-eyebrow">Pricing</span>

              <h1 id="pricing-heading">
                Pay Only for the Bids <span>You're Actually Chasing</span>
              </h1>

              <p>
                No lead quotas, no per-project fees, and no charge for
                browsing. Every plan scales with how much of the platform
                your team actually uses, not how many projects happen to
                exist in your area that month.
              </p>

              {/* Both buttons opened the register page in a new tab, even
                  though the labels promised the plans grid and sales. */}
              <div className="banner-cta-group">
                <a href="#plans" className="banner-btn">
                  See Full Feature Breakdown
                </a>
                <Link to={SALES_URL} className="banner-btn banner-btn-outline">
                  Talk to Sales
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ================= PRICING ================= */}
        <section className="pricing-section" id="plans" aria-label="Pricing plans">
          <div className="container">

            <div className="pricing-top">

              <h2 className="pricing_heading">
                Two Ways to Pay On The Same Platform
              </h2>

              <p className="pricing-sub">
                Pay month-to-month for flexibility, or pay yearly and knock
                about two months off the annual cost. Nothing about the
                product changes either way.
              </p>

              {/* The switch used to be a third control for the same state,
                  on top of these two buttons. It's decorative now. */}
              <div className="toggle-wrap" role="group" aria-label="Billing period">

                <button
                  type="button"
                  className={`toggle-label ${!isYearly ? "active" : ""}`}
                  onClick={() => setIsYearly(false)}
                  aria-pressed={!isYearly}
                >
                  <i className="bi bi-calendar3 toggle-icon" aria-hidden="true"></i>
                  Monthly
                </button>

                <span className={`toggle-switch ${isYearly ? "is-yearly" : ""}`} aria-hidden="true">
                  <span className="toggle-thumb"></span>
                </span>

                <button
                  type="button"
                  className={`toggle-label ${isYearly ? "active" : ""}`}
                  onClick={() => setIsYearly(true)}
                  aria-pressed={isYearly}
                >
                  <i className="bi bi-award toggle-icon" aria-hidden="true"></i>
                  Yearly
                </button>

              </div>
            </div>

            {/* ================= CARDS ================= */}
            <div className="pricing-grid">
              {plans.map((plan, i) => (
                <div
                  key={plan.name}
                  className={`pricing-plan-card ${plan.popular ? "popular" : ""}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >

                  {plan.popular && (
                    <div className="popular-badge">Most Popular</div>
                  )}

                  <h3>{plan.name}</h3>
                  <p className="card-desc">{plan.desc}</p>

                  <div className="card-price">
                    {plan.monthlyPrice !== null ? (
                      <>
                        <span className="price-amount">
                          ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                        </span>
                        <span className="price-period">
                          {isYearly ? "/year" : "/month"}
                          {isYearly && plan.yearlyPerMonth && ` ($${plan.yearlyPerMonth}/mo)`}
                        </span>
                      </>
                    ) : (
                      <span className="price-custom">Custom</span>
                    )}
                  </div>

                  {plan.priceNote && (
                    <p className="price-note">{plan.priceNote}</p>
                  )}

                  {/* These were <button type="button"> with no handler,
                      so none of them did anything when clicked. */}
                  {plan.external ? (
                    <a
                      href={plan.btnLink}
                      className={`plan-btn ${plan.btnStyle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {plan.btnText}
                    </a>
                  ) : (
                    <Link to={plan.btnLink} className={`plan-btn ${plan.btnStyle}`}>
                      {plan.btnText}
                    </Link>
                  )}

                  <div className="divider"></div>

                  <ul className="features-list">
                    {plan.features.map((f) => (
                      <li key={f.text} className={!f.active ? "disabled" : ""}>
                        <span
                          className={`feat-icon ${f.active ? "feat-icon-yes" : "feat-icon-no"}`}
                          aria-hidden="true"
                        >
                          {f.active ? '✓' : '✕'}
                        </span>
                        {f.text}
                        <span className="visually-hidden">
                          {f.active ? ' (included)' : ' (not included)'}
                        </span>
                      </li>
                    ))}
                  </ul>

                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ================= FAQ ================= */}
        <FaqComponent
          title="Pricing Questions"
          highlight="Answered Plainly"
          description="Straightforward answers about billing, limits, and switching plans."
          faqs={faqs}
        />

        {/* ================= CTA ================= */}
        <CTASection
          titleLine1="Your Plan Should Cost Less"
          titleHighlight="Than One Bid You Win"
          subText="Start free, upgrade when Starter's limits start getting in your way and not before."
          primaryBtnText="Start Free"
          primaryBtnLink={REGISTER_URL}
          primaryBtnNewTab={true}
          secondaryBtnText="Talk to Sales"
          secondaryBtnLink={SALES_URL}
          noteText="No credit card · Free forever plan · Cancel anytime · Prices shown in USD"
        />
      </main>
    </>
  );
}

export default Pricing;