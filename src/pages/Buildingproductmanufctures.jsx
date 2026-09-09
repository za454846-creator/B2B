import React from 'react';
import { Helmet } from 'react-helmet-async';
import "../assets/css/solutions.css";
import FaqComponent from "../components/Home_components/FaqComponent";
import CTASection from "../components/Home_components/CTASection";
import StatsSection from "../components/Home_components/StatsSection";
import bannerImg from "../assets/Images/bpm_banner.webp";
import featureImg1 from "../assets/Images/bpm1.webp";
import featureImg2 from "../assets/Images/bpm2.webp";
import featureImg3 from "../assets/Images/bpm3.webp";
import featureImg4 from "../assets/Images/bpm4.webp";
import featureImg5 from "../assets/Images/building5.webp";
import testimonialImg from "../assets/Images/sub_testimonial.webp";



const featureBlocks = [
  {
    label: 'DISCOVER',
    heading: 'When Does A Building Product Actually Get Specified?',
    description:
      'Specification is the point in design when an architect or engineer names an exact product, model, or manufacturer inside the construction documents.',
    points: [
      'Public records are checked daily, so a project surfaces as soon as it becomes public, not after it appears on a planholder list.',
      'Every alert is tagged by CSI MasterFormat division and section, so a manufacturer sees only the projects that match its product category.',
      'Design-firm and specifier contact details are attached to each project, so outreach goes to the person writing the spec, not a general project inbox.',
    ],
    image: featureImg1,
    imgAlt: 'BidConnectors building product specification projects',
  },
  {
    label: 'COMPARE',
    heading: "How Can A Manufacturer See Who Already Specified A Competitor's Product?",
    description:
      "Specification share is the percentage of matching projects in a market where a manufacturer's product (rather than a competitor's) appears in the construction documents. Bid Connectors calculates specification share by MasterFormat code, region, and building type, and updates it as new project records are added.",
    points: [
      'Share is broken down by MasterFormat division, so Division 07 (Thermal & Moisture Protection) tracks separately from Division 09 (Finishes).',
      'Competitor activity is shown by design firm, not just by project, so a sales team can prioritize the firms most likely to switch.',
      'Regional gaps are flagged automatically, showing counties where a competitor holds share without a comparable local project.',
    ],
    image: featureImg2,
    imgAlt: 'BidConnectors competitor specification share analysis',
  },
  {
    label: 'FORECAST',
    heading: 'Which Construction Sectors Are Growing Fastest In 2026?',
    description:
      'Total U.S. construction starts are forecast to grow 4% in 2026, reaching $1.26 trillion (Dodge Construction Network, 2026). Data center construction is forecast to outpace the broader market, up 7% to $195 billion in the same year (Dodge Construction Network, 2026).',
    points: [
      'Projects are grouped by sector (data centers, healthcare, manufacturing, multifamily, and more) so filtering matches where 2026 demand is concentrated.',
      'Sector filters update as new Dodge and AGC reports are published, so forecasts reflect the current year, not a static report.',
    ],
    image: featureImg3,
    imgAlt: 'BidConnectors construction sector growth forecast',
  },
  {
    label: 'WIN EARLY',
    heading: "Bidding Early Actually Changes A Manufacturer's Win Rate!",
    description:
      'A commercial project typically draws five to eight competing bidders once it reaches public bid (Takeoff Convert bid-tracking data, 2025). At the design stage, before a project is public, that number sits at or near zero.',
    points: [
      'Every project record shows its current stage (design, permitting, or public bid) so a sales team knows how much competitive runway remains.',
      'Stage-change alerts fire the moment a tracked project moves from design into public bid.',
    ],
    image: featureImg4,
    imgAlt: 'BidConnectors helping manufacturers discover construction projects before public bidding',
  },
  {
    label: 'CONNECT',
    heading: "Project Alerts Flow Directly Into A Manufacturer's CRM",
    description:
      'Bid Connectors pushes new and updated project records into Salesforce and HubSpot as they are published, matched automatically to a manufacturer\u2019s existing accounts and contacts. A sales rep opens a CRM opportunity and sees the project\u2019s stage, specifier, MasterFormat division, and location without leaving the CRM.',
    points: [
      'New project matches create a CRM opportunity automatically, tagged with the correct MasterFormat division.',
      'Existing opportunities update in place when a project changes stage, so pipeline reporting stays accurate without manual edits.',
    ],
    image: featureImg5,
    imgAlt: 'BidConnectors syncing construction project records into a CRM opportunity',
  },
];

// NEW: short, scannable overview of the workflow the feature rows describe
// at length. Every other solution page now carries the same section.
const steps = [
  {
    icon: 'bi-ui-checks-grid',
    title: 'Match Your Divisions',
    desc: 'Tell us which CSI MasterFormat divisions and sections your products fall under.',
  },
  {
    icon: 'bi-geo-alt',
    title: 'Set Your Territory',
    desc: 'Choose the regions, counties, and building types your sales team actually covers.',
  },
  {
    icon: 'bi-bell',
    title: 'Get Design-Stage Alerts',
    desc: 'Projects reach you while the specification is still being written, not after bid day.',
  },
  {
    icon: 'bi-arrow-left-right',
    title: 'Push To Your CRM',
    desc: 'Matches land in Salesforce or HubSpot as tagged opportunities, ready for outreach.',
  },
];

const faqs = [
  {
    question: "How does Bid Connectors find projects before they reach public bid?",
    answer: "Bid Connectors checks permit filings, planning-commission records, and pre-bid design documents as they are published, then matches each project to a MasterFormat division and building type. A manufacturer sees the project during design or permitting, before a general contractor opens it to public bid."
  },
  {
    question: "What is specification share, and how is it calculated?",
    answer: "Specification share is the percentage of matching construction documents in a market where a manufacturer's product is named, rather than a competitor's. Bid Connectors calculates this figure by MasterFormat code, region, and building type, and updates it as new project records are added."
  },
  {
    question: "Does Bid Connectors work for subcontractors and general contractors too?",
    answer: "Yes. Bid Connectors serves developers, general contractors, and subcontractors in addition to building product manufacturers, using the same underlying project records filtered to each business type's relevant stage of the bid process."
  },
  {
    question: "Which CRMs does Bid Connectors integrate with?",
    answer: "Bid Connectors integrates with Salesforce and HubSpot, matching new project records to existing accounts and contacts and creating opportunities automatically."
  },
  {
    question: "How current is the construction-starts and market data inside Bid Connectors?",
    answer: "Sector and regional forecasts inside Bid Connectors are refreshed as new Dodge Construction Network and AGC reports are published, including the 2026 figures cited on this page, so filtering reflects the current year rather than a static annual report."
  },
];

const PAGE_URL = 'https://www.bidconnectors.com/solutions/building-product-manufacturers';
const PAGE_TITLE = 'Building Product Manufacturers | Get Specified Before the Bid List Fills Up';
const PAGE_DESCRIPTION =
  'Bid Connectors surfaces commercial construction projects at the design and permitting stage, before a general contractor finalizes subcontractors or the specification is locked.';

// TODO: upload a real 1200x630 share image and point this at it. The old
// value was `${PAGE_URL}/og-image.jpg`, which resolves to a path under the
// page URL that does not exist — social shares fell back to no image.
const OG_IMAGE = 'https://www.bidconnectors.com/og/building-product-manufacturers.jpg';

const testimonialSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  reviewBody:
    'Finding construction projects to bid for was becoming difficult for me due to the extremely saturated industry of construction estimates. While I was skeptical at first about Bid Connectors, they proved to be perfect to find construction projects before anyone else.',
  author: {
    '@type': 'Person',
    name: 'Customer',
    jobTitle: 'Building Product Manufacturer',
  },
  itemReviewed: {
    '@type': 'Organization',
    name: 'Bid Connectors',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

const Buildingproductmanufctures = () => {
  return (
    <>
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

        <script type="application/ld+json">{JSON.stringify(testimonialSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main className="bpm-page">

        {/* ================= BANNER ================= */}
        <section className="bpm-banner" aria-label="Introduction">
          <div className="container">
            <div className="row align-items-center g-4">
              <div className="col-lg-6">
                <span className="bpm-eyebrow">BUILDING PRODUCT MANUFACTURERS</span>
                <h1 className="bpm-banner-heading">
                  Get Specified Before The Bid List Fills Up
                </h1>
                <p className="bpm-banner-text">
                  Bid Connectors surfaces commercial construction projects at the
                  design and permitting stage, before a general contractor
                  finalizes subcontractors or the specification is locked.
                </p>
                <div className="bpm-banner-actions">
                  <a
                    href="https://bidconnectors.com/bidconnectors/register"
                    className="bpm-btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Browse Open Projects
                  </a>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="bpm-banner-visual" aria-hidden="true">
                  <div className="bpm-banner-photo">
                    <img
                      src={bannerImg}
                      alt="BidConnectors building product manufacturers"
                      className="bpm-banner-img"
                    />
                  </div>
                </div>
                <p className="bpm-banner-caption">
                  <i className="bi bi-graph-up-arrow" aria-hidden="true"></i>
                  Trusted by 500+ building product manufacturers to grow their specification share
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= STATS ================= */}
        <StatsSection
          stats={[
            { value: '$1.26T', label: 'TOTAL U.S. CONSTRUCTION STARTS FORECAST FOR 2026 (DODGE CONSTRUCTION NETWORK, 2026)' },
            { value: '12/17', label: 'MARKET SEGMENTS WITH A POSITIVE BIDDING-VOLUME OUTLOOK FOR 2026 (AGC & SAGE, 2026)' },
            { value: '5\u20138', label: 'AVERAGE COMPETING BIDDERS ONCE A COMMERCIAL PROJECT REACHES PUBLIC BID (TAKEOFF CONVERT BID DATA, 2025)' },
            { value: '63%', label: 'CONTRACTORS PLANNING TO EXPAND CREWS IN 2026 (AGC, 2026)' },
          ]}
        />

        {/* ================= FEATURE BLOCKS ================= */}
        <section className="bpm-features" aria-label="Platform capabilities">
          <div className="container">
            {featureBlocks.map((block, index) => (
              <article
                className={`bpm-row ${index % 2 === 1 ? 'bpm-row-reverse' : ''}`}
                key={block.label}
              >
                <div className="bpm-text-col">
                  <span className="bpm-label">{block.label}</span>
                  <h2 className="bpm-heading">{block.heading}</h2>
                  <p className="bpm-description">{block.description}</p>
                  <ul className="bpm-points">
                    {block.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="bpm-visual-col">
                  <div className="bpm-mock">
                    <img src={block.image} alt={block.imgAlt} className="bpm-img" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= HOW IT WORKS ================= */}
        <section className="bpm-steps" aria-label="How specification tracking works">
          <div className="container">
            <div className="bpm-steps-header">
              <span className="bpm-eyebrow">HOW IT WORKS</span>
              <h2 className="bpm-steps-title">From MasterFormat Division To CRM Opportunity</h2>
              <p className="bpm-steps-subtitle">
                Four steps between telling us what you make and a sales rep
                opening a project the specifier has not finished writing yet.
              </p>
            </div>

            <div className="bpm-steps-grid">
              {steps.map((step, index) => (
                <div
                  className="bpm-step-card"
                  key={step.title}
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="bpm-step-icon">
                    <i className={`bi ${step.icon}`} aria-hidden="true"></i>
                  </div>
                  <h3 className="bpm-step-title">{step.title}</h3>
                  <p className="bpm-step-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CUSTOMER STORY ================= */}
        <section className="bpm-story" aria-label="Customer story">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <span className="bpm-eyebrow">CUSTOMER STORIES</span>
                <blockquote className="bpm-quote">
                  "Finding construction projects to bid for was becoming difficult
                  for me due to the extremely saturated industry of construction
                  estimates. While I was skeptical at first about Bid Connectors,
                  they proved to be perfect to find construction projects before
                  anyone else."
                </blockquote>
                <figcaption className="bpm-story-author">
                  <strong>Customer</strong>
                  <span>Building Product Manufacturer</span>
                </figcaption>
              </div>

              <div className="col-lg-6">
                <div className="bpm-video-thumb testimonialImg">
                  <img
                    src={testimonialImg}
                    alt="BidConnectors customer testimonial featuring a building product manufacturer"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <FaqComponent
          title="Building Product Manufacturer"
          highlight="questions."
          description="Direct answers about design-stage project data, specification share, and CRM integration."
          faqs={faqs}
        />

        {/* ================= CTA ================= */}
        <CTASection
          titleLine1="Your Next Project"
          titleHighlight="Is Listed In Our Database!"
          subText="See the design-stage projects that match your MasterFormat divisions, region, and building types today."
          primaryBtnText="Browse Open Projects"
          primaryBtnLink="https://bidconnectors.com/bidconnectors/register"
          primaryBtnNewTab={true}
          secondaryBtnText="Talk to Sales"
          secondaryBtnLink="https://bidconnectors.com/bidconnectors/login"
          secondaryBtnNewTab={true}
          noteText="No credit card · Free forever plan · Cancel anytime"
        />

      </main>
    </>
  );
};

export default Buildingproductmanufctures;