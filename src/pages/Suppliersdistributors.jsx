import React from "react";
import { Helmet } from "react-helmet-async";
import "../assets/css/solutions.css";

import FaqComponent from "../components/Home_components/FaqComponent";
import CTASection from "../components/Home_components/CTASection";
import StatsSection from "../components/Home_components/StatsSection";

import supplierHero from "../assets/Images/bpm_banner.webp";
import supplierImage2 from "../assets/Images/bpm1.webp";
import supplierImage3 from "../assets/Images/bpm2.webp";
import supplierImage4 from "../assets/Images/bpm3.webp";
import supplierImage5 from "../assets/Images/bpm4.webp";
import supplierTestimonial from "../assets/Images/testimonial.webp";

const PAGE_URL = 'https://www.bidconnectors.com/solutions/suppliers-and-distributors-solutions';
const PAGE_TITLE = 'Suppliers & Distributors | Get Specified, Stay Specified';
const PAGE_DESCRIPTION =
  'Get specified, stay specified, and win more sales. Bid Connectors helps suppliers and distributors track projects and reach buyers early.';

// TODO: upload a real 1200x630 share image and point this at it.
const OG_IMAGE = 'https://www.bidconnectors.com/og/suppliers-distributors.jpg';

const featureBlocks = [
  {
    label: "RELIABLE PLATFORM",
    heading: "Smarter Decisions, Backed by Real Project Data",
    description:
      "Guessing which projects to chase wastes time you don't have. Bid Connectors gives suppliers and distributors the project intelligence needed to make faster, sharper decisions at every stage.",
    points: [
      "See which projects are actively sourcing your product category.",
      "Track where your specifications stand as projects move toward construction.",
      "Identify substitution risk before it costs you the sale.",
    ],
    image: supplierHero,
    imgAlt: "Suppliers and Distributors project alert",
  },
  {
    label: "CONNECT WITH US",
    heading: "Get More Leads, Save Time, Grow Your Business",
    description:
      "It happens quietly. An architect writes your product into the spec. Months later, a contractor swaps it for an equivalent at buyout, and nobody tells you until the order never comes.",
    points: [
      "See where your products are specified, project by project.",
      "Get flagged the moment a project nears bid or buyout.",
      "Reach the buyer directly, before someone else does.",
    ],
    image: supplierImage2,
    imgAlt: "Suppliers and Distributors order share comparison",
  },
  {
    label: "CHOOSE US",
    heading: "The Earlier You're In, the Harder You Are to Replace",
    description:
      "Products specified late get swapped. Products specified early become the standard everyone else has to beat. Bid Connectors surface projects while they are still in design.",
    points: [
      "Reach projects at design stage, not just bid stage.",
      "Influence the spec before a competitor gets the chance.",
    ],
    image: supplierImage3,
    imgAlt: "Suppliers and Distributors construction sector forecast",
  },
  {
    label: "KNOW MORE",
    heading: "From Specifying to Selling, What We Do?",
    description:
      "Being specified once is not the finish line; it is the start of a window that closes fast. Bid Connectors tracks your products through that window and puts you back in front of the decision-maker at the exact moment it matters.",
    points: [
      "List your products by category, material, and application.",
      "Get matched to live projects where your product is already in play.",
      "Receive alerts before buyout, when substitution risk is highest.",
    ],
    image: supplierImage4,
    imgAlt: "Suppliers and Distributors project stage tracker",
  },
  {
    label: "SUCCESS PARTNER",
    heading: "See the Deal Before It's Gone.",
    description:
      "Most suppliers only find out they lost a job after it is built. We show you which projects are actively sourcing your category, so you can move before the decision gets made without you in the room.",
    points: [
      "See which projects are actively sourcing your category.",
      "See who else is circling the same job.",
      "Move before the decision gets made without you in the room.",
    ],
    image: supplierImage5,
    imgAlt: "Suppliers and Distributors CRM integration",
  },
];

// NEW: the specification-protection workflow as a scannable grid.
const steps = [
  {
    icon: "bi-box-seam",
    title: "List Your Products",
    desc: "Add your catalogue by category, material, and application.",
  },
  {
    icon: "bi-search",
    title: "Match Live Projects",
    desc: "See the projects actively sourcing what you sell, by trade and region.",
  },
  {
    icon: "bi-file-earmark-check",
    title: "Track The Spec",
    desc: "Follow your products through design as projects move toward buyout.",
  },
  {
    icon: "bi-exclamation-triangle",
    title: "Catch Substitutions",
    desc: "Get flagged before buyout, when the risk of being swapped is highest.",
  },
];

const faqs = [
  {
    question: "How does Bid Connectors help me get my products specified?",
    answer:
      "We analyse projects at the design and planning stage, so you can connect with architects and general contractors before specifications are finalized. This way, we give suppliers and distributors a real chance to get their products selected early.",
  },
  {
    question: "Can I find out which projects are actively sourcing my product type?",
    answer:
      "Yes. You can search and filter projects by material type, trade, and location to find active opportunities matching what you sell. This ensures that you are not wasting time chasing jobs that were never a fit.",
  },
  {
    question: "Do I get contact information for decision-makers on a project?",
    answer:
      "Absolutely. There are verified contact details for architects, engineers, general contractors, and subcontractors who are involved in each project on our website. This information helps you to reach out directly instead of guessing who to call.",
  },
  {
    question: "Is Bid Connectors only for bidding, or can I respond to material requests too?",
    answer:
      "Both. Submit material estimates directly to GCs and subcontractors, respond to inbound requests, and manage your entire sales pipeline from one dashboard built for suppliers and distributors.",
  },
  {
    question: "How is this different from a standard bid management platform?",
    answer:
      "Most platforms focus only on subcontractor bidding. Bid Connectors gives suppliers and distributors direct visibility into projects and specification stages, helping you sell and grow market share, not just bid.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

const Suppliersdistributors = () => {
  return (
    <main className="sd-page">

      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={OG_IMAGE} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* ================= BANNER ================= */}
      <section className="sd-banner" aria-label="Suppliers and Distributors Introduction">
        <div className="container">
          <div className="row align-items-center g-4">

            <div className="col-lg-6">
              <span className="sd-eyebrow">SUPPLIERS &amp; DISTRIBUTORS</span>
              <h1 className="sd-banner-heading">The Intelligence Behind Every Smart Sale</h1>
              <p className="sd-banner-text">
                Connect with architects, engineers, and contractors sourcing your
                products and protect your spot before value engineering swaps you out.
              </p>
              <div className="sd-banner-actions">
                <a
                  href="https://bidconnectors.com/bidconnectors/register"
                  className="sd-btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore More!
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="sd-banner-visual" aria-hidden="true">
                <div className="sd-banner-photo">
                  <img
                    src={supplierHero}
                    alt="Suppliers and Distributors"
                    className="sd-banner-img"
                  />
                </div>
              </div>
              <p className="sd-banner-caption">
                <i className="bi bi-graph-up-arrow" aria-hidden="true"></i>
                Suppliers and distributors trust us to get specified early and stay ahead of the competition
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <StatsSection
        stats={[
          { value: "425,100+", label: "PROJECTS TRACKED FROM DESIGN STAGE THROUGH CONSTRUCTION" },
          { value: "106,300+", label: "ARCHITECTS, ENGINEERS, AND GCS ACTIVELY SOURCING PRODUCTS RIGHT NOW" },
          { value: "545,021+", label: "SPECIFICATION ALERTS SENT TO SUPPLIERS BEFORE BID DAY LAST YEAR" },
          { value: "92%", label: "CONNECTED SUPPLIERS REACH DECISION-MAKERS BEFORE THE SPEC IS LOCKED" },
        ]}
      />

      {/* ================= FEATURE BLOCKS ================= */}
      <section className="sd-features" aria-label="Platform capabilities">
        <div className="container">
          {featureBlocks.map((block, index) => (
            <article
              className={index % 2 === 1 ? "sd-row sd-row-reverse" : "sd-row"}
              key={block.label}
            >
              <div className="sd-text-col">
                <span className="sd-label">{block.label}</span>
                <h2 className="sd-heading">{block.heading}</h2>
                <p className="sd-description">{block.description}</p>
                <ul className="sd-points">
                  {block.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="sd-visual-col">
                <div className="sd-mock">
                  <img src={block.image} alt={block.imgAlt} className="sd-img" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="sd-steps" aria-label="How specification tracking works">
        <div className="container">
          <div className="sd-steps-header">
            <span className="sd-eyebrow">HOW IT WORKS</span>
            <h2 className="sd-steps-title">From Product Catalogue To Protected Spec</h2>
            <p className="sd-steps-subtitle">
              Getting specified is step one. Staying specified through buyout is
              where the order is actually won or lost.
            </p>
          </div>

          <div className="sd-steps-grid">
            {steps.map((step, index) => (
              <div
                className="sd-step-card"
                key={step.title}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="sd-step-icon">
                  <i className={`bi ${step.icon}`} aria-hidden="true"></i>
                </div>
                <h3 className="sd-step-title">{step.title}</h3>
                <p className="sd-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CUSTOMER STORY ================= */}
      <section className="sd-story" aria-label="Customer story">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-6">
              <span className="sd-eyebrow">WHAT THEY ARE SAYING</span>
              <blockquote className="sd-quote">
                "We quoted a job in March, then found out in June it had already
                been specified with a competitor's product. That doesn't happen
                anymore. Bid Connectors flagged the project at the design stage,
                and we closed it instead."
              </blockquote>
              <div className="sd-story-author">
                <strong>Dana Reyes</strong>
                <span>Vice President of Sales</span>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="sd-video-thumb">
                <img
                  src={supplierTestimonial}
                  alt="Suppliers and Distributors Customer Testimonial"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <FaqComponent
        title="Frequently Asked"
        highlight="Questions."
        description="Below are the most common questions asked about how distributors and suppliers get help from our platform."
        faqs={faqs}
      />

      {/* ================= CTA ================= */}
      <CTASection
        titleLine1="Grow Your"
        titleHighlight="Specification Rate, Not Just Your Lead List!"
        subText="Join Bid Connectors and start connecting with contractors ready to specify and buy your products."
        primaryBtnText="Explore Products!"
        primaryBtnLink="https://bidconnectors.com/bidconnectors/register"
        primaryBtnNewTab={true}
        secondaryBtnText="Call Now!"
        secondaryBtnLink="https://bidconnectors.com/bidconnectors/register"
        secondaryBtnNewTab={true}
        noteText="No credit card · Free forever plan · Cancel anytime"
      />

    </main>
  );
};

export default Suppliersdistributors;