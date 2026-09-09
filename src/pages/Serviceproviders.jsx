import React from "react";
import { Helmet } from "react-helmet-async";
import "../assets/css/solutions.css";

import FaqComponent from "../components/Home_components/FaqComponent";
import CTASection from "../components/Home_components/CTASection";
import StatsSection from "../components/Home_components/StatsSection";

import providerHero from "../assets/Images/bpm_banner.webp";
import providerImage2 from "../assets/Images/bpm1.webp";
import providerImage3 from "../assets/Images/bpm2.webp";
import providerImage4 from "../assets/Images/bpm3.webp";
import providerImage5 from "../assets/Images/bpm4.webp";
import providerTestimonial from "../assets/Images/testimonial.webp";



const PAGE_URL = 'https://www.bidconnectors.com/solutions/service-providers';
const PAGE_TITLE = 'Service Providers | Find Profitable Construction Leads Early';
const PAGE_DESCRIPTION =
  'Stop chasing dead leads and secure profitable commercial contracts early. Automate takeoffs and win high-paying building projects before competitors know.';

// TODO: upload a real 1200x630 share image and point this at it.
const OG_IMAGE = 'https://www.bidconnectors.com/og/service-providers.jpg';

const steps = [
  {
    icon: "bi-search",
    title: "Scan Active Leads",
    desc: "Filter regional commercial and industrial project listings instantly using custom geotechnical parameters.",
  },
  {
    icon: "bi-shield-check",
    title: "Verify Local Codes",
    desc: "Cross-reference local seismic standards, soil bearing capacities, and frost-line depths automatically.",
  },
  {
    icon: "bi-calculator",
    title: "Generate Estimates",
    desc: "Produce accurate material takeoffs that reflect current regional material cost drivers and local wage scales.",
  },
  {
    icon: "bi-send",
    title: "Submit Proposals",
    desc: "Dispatch comprehensive digital bids directly to project owners before the official vendor list opens.",
  },
];

const featureBlocks = [
  {
    label: "EARLY INTELLIGENCE",
    heading: "Monitor Public Records And Track Project Timings",
    description:
      "Monitor structural engineering reviews and local zoning permits early. Secure profitable mechanical bids before municipal document rooms fill up with competing contractors.",
    points: [
      "Track local planning board filings weeks before standard commercial publishing platforms list them online.",
      "Filter out low-profit projects using simple automated rules matched to your daily team capacity.",
      "Get instant alerts when structural engineering reviews clear local municipal permitting offices for new work.",
    ],
    image: providerHero,
    imgAlt: "Service Providers project alert",
  },
  {
    label: "COMPETITIVE GAP ANALYSIS",
    heading: "Track Competitor Market Share And Pricing Gaps",
    description:
      "Identify underserved market segments and optimize your active bids by analyzing localized competitor win rates and pricing gaps.",
    points: [
      "Map active competitor distribution across municipal zones to find unserved commercial niches.",
      "Track historical pricing trends to ensure your quotes remain competitive without eroding project profit margins.",
      "Expose hidden project bottlenecks caused by regional material shortages or strict local environmental reviews.",
    ],
    image: providerImage2,
    imgAlt: "Service Providers share comparison",
  },
  {
    label: "REGIONAL SECTOR GROWTH",
    heading: "Construction Sector Growth Breakdown And Filtering Updates",
    description:
      "Target high-growth commercial sectors while factoring in regional frost depths, seismic code mandates, and local labor constraints.",
    points: [
      "Focus bids on high-demand regional sectors backed by verified municipal data and recent zoning approvals.",
      "Filter out saturated project types using dynamic local parameters that account for regional supply chain costs.",
    ],
    image: providerImage3,
    imgAlt: "Service Providers construction sector forecast",
  },
  {
    label: "STRATEGIC EARLY QUOTING",
    heading: "Early Quoting Strategies That Dramatically Increase Win Rates",
    description:
      "Submit precise quotes during the initial design phase to secure preferred vendor status and bypass standard bidding wars.",
    points: [
      "Secure top-tier project placement by delivering accurate estimates while architects finalize structural drawings.",
      "Trigger instant stage-change alerts whenever project owners modify their initial engineering or material specifications.",
    ],
    image: providerImage4,
    imgAlt: "Service Providers project stage tracker",
  },
  {
    label: "CRM DATA SYNCHRONIZATION",
    heading: "Connect Your CRM For Instant Deal Updates",
    description:
      "Sync project data directly into your existing sales pipelines to eliminate manual data entry and accelerate follow-ups.",
    points: [
      "Automate pipeline updates to ensure your team pursues qualified bids the moment status changes occur.",
      "Eliminate manual data entry errors by syncing real-time project metrics directly into active CRM deals.",
    ],
    image: providerImage5,
    imgAlt: "Service Providers CRM integration",
  },
];

const faqs = [
  {
    question: "How do early alerts protect profit margins?",
    answer:
      "Early notifications give your team time to review site-specific soil conditions and local permitting fees before submitting final pricing.",
  },
  {
    question: "Can the platform track local zoning changes?",
    answer:
      "Yes, automated scrapers monitor regional municipal boards daily to capture public notices and new commercial filings instantly.",
  },
  {
    question: "How does the system handle CRM data?",
    answer:
      "Direct API integrations push verified project updates, contact details, and document links straight into your existing pipeline software.",
  },
  {
    question: "What metrics define active market share?",
    answer:
      "The platform tracks historical award data, regional contractor density, and active vendor lists to highlight underserved commercial segments.",
  },
  {
    question: "Are material cost drivers updated regularly?",
    answer:
      "Regional material pricing indices refresh weekly to account for local tariff adjustments, supply chain shifts, and local labor rates.",
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

const REGISTER_URL = "https://bidconnectors.com/bidconnectors/register";

const ServiceProviders = () => {
  return (
    <main className="svp-page">

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
      <section className="svp-banner" aria-label="Service Providers Introduction">
        <div className="container">
          <div className="row align-items-center g-4">

            <div className="col-lg-6">
              <span className="svp-eyebrow">SPOT THE PLAN, QUOTE THE SCOPE, WIN THE BID</span>
              <h1 className="svp-banner-heading">
                Find Profitable Projects Before Your Competitors Even Know They Exist
              </h1>
              <p className="svp-banner-text">
                Accelerate your daily workflow with real-time project tracking,
                automated material takeoffs, and precise lead generation designed
                for regional contractors. According to the AGC Construction
                Outlook Survey, 61% of firms are expanding technology investments
                to overcome skilled labor shortages and improve estimate accuracy.
              </p>
              <div className="svp-banner-actions">
                <a href={REGISTER_URL} className="svp-btn-primary" target="_blank" rel="noopener noreferrer">
                  Browse Open Projects
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="svp-banner-visual" aria-hidden="true">
                <div className="svp-banner-photo">
                  <img src={providerHero} alt="Service Providers" className="svp-banner-img" />
                </div>
              </div>
              <p className="svp-banner-caption">
                <i className="bi bi-graph-up-arrow" aria-hidden="true"></i>
                Trusted by 300+ service providers to fill their project calendar
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <StatsSection
        stats={[
          { value: "$1.78T", label: "TOTAL U.S. CONSTRUCTION STARTS RATE IN MAY 2026 (DODGE CONSTRUCTION NETWORK)" },
          { value: "57%", label: "DATA CENTER SECTOR NET EXPANSION OPTIMISM IN 2026 (AGC & SAGE, 2026)" },
          { value: "61%", label: "CONTRACTORS DEPLOYING AUTOMATED PRECONSTRUCTION TOOLS TODAY (AGC & SAGE, 2026)" },
          { value: "349K", label: "NET NEW SKILLED WORKERS NEEDED ACROSS REGIONAL MARKETS (ABC REPORT, 2026)" },
        ]}
      />

      {/* ================= FEATURE BLOCKS ================= */}
      <section className="svp-features" aria-label="Platform capabilities">
        <div className="container">
          {featureBlocks.map((block, index) => (
            <article
              className={index % 2 === 1 ? "svp-row svp-row-reverse" : "svp-row"}
              key={block.label}
            >
              <div className="svp-text-col">
                <span className="svp-label">{block.label}</span>
                <h2 className="svp-heading">{block.heading}</h2>
                <p className="svp-description">{block.description}</p>
                <ul className="svp-points">
                  {block.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="svp-visual-col">
                <div className="svp-mock">
                  <img src={block.image} alt={block.imgAlt} className="svp-img" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="svp-steps" aria-label="How it works">
        <div className="container">
          <div className="svp-steps-header">
            <span className="svp-steps-eyebrow">STREAMLINED PROJECT WORKFLOWS</span>
            <h2 className="svp-steps-title">
              Automated Preconstruction Workflows Built For Strict Building Compliance
            </h2>
            <p className="svp-steps-subtitle">
              Streamline daily operations by matching active construction documents
              with local seismic codes, frost depth rules, and regional environmental standards.
            </p>
          </div>

          <div className="svp-steps-grid">
            {steps.map((step, index) => (
              <div
                className="svp-step-card"
                key={step.title}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="svp-step-number">
                  <i className={`bi ${step.icon}`} aria-hidden="true"></i>
                </div>
                <h3 className="svp-step-title">{step.title}</h3>
                <p className="svp-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CUSTOMER STORY ================= */}
      <section className="svp-story" aria-label="Customer story">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-6">
              <span className="svp-eyebrow">CONTRACTOR SUCCESS STORIES</span>
              <blockquote className="svp-quote">
                "We used to miss bids after rivals booked takeoffs. Now we spot
                cleared permits early and lock down profitable HVAC piping
                contracts before anyone else applies."
              </blockquote>
              <div className="svp-story-author">
                <strong>Mark Vance</strong>
                <span>Mechanical HVAC</span>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="svp-video-thumb">
                <img src={providerTestimonial} alt="Service Providers Customer Testimonial" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <FaqComponent
        title="Frequently Asked"
        highlight="Questions."
        description="Get clear, direct insights into how our platform protects your data and streamlines your daily preconstruction workflow."
        faqs={faqs}
      />

      {/* ================= CTA ================= */}
      <CTASection
        titleLine1="Stop Chasing Crowded Public Vendor Lists And"
        titleHighlight="Secure Profitable Projects Today"
        subText="Claim your local market advantage now and start filling your project calendar with high-margin bids before competitors notice."
        primaryBtnText="Browse Open Projects"
        primaryBtnLink={REGISTER_URL}
        primaryBtnNewTab={true}
        secondaryBtnText="Talk to Sales"
        secondaryBtnLink={REGISTER_URL}
        secondaryBtnNewTab={true}
        noteText="No credit card · Free forever plan · Cancel anytime"
      />

    </main>
  );
};

export default ServiceProviders;