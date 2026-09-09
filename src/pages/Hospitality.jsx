import React from "react";
import { Helmet } from "react-helmet-async";
import "../assets/css/solutions.css";

import FaqComponent from "../components/Home_components/FaqComponent";
import CTASection from "../components/Home_components/CTASection";
import StatsSection from "../components/Home_components/StatsSection";

import hospHero from "../assets/Images/hospitality_banner.webp";
import hospImage1 from "../assets/Images/hospImage1.webp";
import hospImage2 from "../assets/Images/hospImage2.webp";
import hospImage3 from "../assets/Images/hospImage3.webp";
import hospTestimonial from "../assets/Images/hospTest.webp";



const PAGE_URL = 'https://www.bidconnectors.com/solutions/hospitality';
const PAGE_TITLE = 'Hospitality | Fill Rooms With Nearby Construction Crews';
const PAGE_DESCRIPTION =
  'Construction crews need somewhere to stay for weeks, sometimes months. Bid Connectors shows you exactly what\u2019s being built near your property, with contacts to reach out to first.';

// TODO: upload a real 1200x630 share image and point this at it.
const OG_IMAGE = 'https://www.bidconnectors.com/og/hospitality.jpg';

const REGISTER_URL = "https://bidconnectors.com/bidconnectors/register";

const steps = [
  {
    icon: "bi-geo-alt",
    title: "Set Your Coverage",
    desc: "Mark the properties you manage and how far out to look.",
  },
  {
    icon: "bi-sort-down",
    title: "Sort by Fit",
    desc: "Rank results by crew size, project length, and booking potential.",
  },
  {
    icon: "bi-diagram-3",
    title: "Track What Matters",
    desc: "Follow specific projects as they move from planning to groundbreaking.",
  },
  {
    icon: "bi-bell",
    title: "Get Notified First",
    desc: "New matches land in your inbox before competitors even hear about them.",
  },
];

const withoutList = [
  "Wait for crews to find you online or by chance",
  "Cold outreach with no project details to back it up",
  "Compete with every nearby hotel for the same booking",
  "Find out about a project after it's already staffed up",
  "Rely on outdated directories and disconnected contacts",
];

const withList = [
  "Get matched to nearby construction projects as they are added",
  "Reach out with project scope, timeline, and contacts in hand",
  "Pitch your property before crews start comparing options",
  "Know about projects from planning stage, not after groundbreaking",
  "Work from verified, continuously updated contractor contacts",
];

const tools = [
  {
    title: "Project Timeline",
    desc: "Follow projects from groundbreaking to completion, so you know exactly when crews arrive and how long they'll likely stay.",
  },
  {
    title: "Contractor Activity",
    desc: "Keep tabs on general contractors and developers working repeatedly in your market, and build relationships that outlast a single booking.",
  },
  {
    title: "Contact Updates",
    desc: "Get refreshed contact details as project managers and site leads change, so your outreach always reaches the right person.",
  },
  {
    title: "Live Alerts",
    desc: "Receive instant notifications the moment a new project breaks ground near your property, so you're the first call, not the last resort.",
  },
];

const faqs = [
  {
    question: "Are these leads useful for long-term stays, or just single nights?",
    answer: "Most of these leads are for long-term stays because construction crews typically stay for weeks or months per project. Early access lets you offer weekly rates and multi-room blocks instead of chasing one-night bookings.",
  },
  {
    question: "Can I filter projects by distance, size, or duration?",
    answer: "Yes. Filter by radius from your property, project type, and expected duration, so you focus on jobs likely to bring crews who actually need extended lodging nearby.",
  },
  {
    question: "Will I get notified when a new project starts near my property?",
    answer: "Yes. Set a watch radius around your hotel and receive alerts whenever a new construction project is added nearby, so you can contact the crew early.",
  },
  {
    question: "Who are the typical contacts included with each hospitality project lead?",
    answer: "Each lead includes verified contacts like owners, developers, architects, interior designers, and general contractors, so your sales team can reach real decision-makers instead of guessing who to call.",
  },
  {
    question: "How often is hospitality project data updated?",
    answer: "Our research team verifies and refreshes hospitality listings continuously, with new projects and status changes added regularly, so you are always bidding on current opportunities, not outdated or stalled leads.",
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

const Hospitality = () => {
  return (
    <main className="hosp-page">

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
      <section className="hosp-banner" aria-label="Hospitality Introduction">
        <div className="container">
          <div className="row align-items-center g-4">

            <div className="col-lg-6">
              <span className="hosp-eyebrow">HOSPITALITY</span>
              <h1 className="hosp-banner-heading">
                Your Next Guests Are Already Breaking Ground
              </h1>
              <p className="hosp-banner-text">
                Construction crews need somewhere to stay for weeks, sometimes
                months. Bid Connectors shows you exactly what's being built near
                your property, with contacts to reach out to first. Start finding
                projects today.
              </p>
              <div className="hosp-banner-actions">
                <a href={REGISTER_URL} className="hosp-btn-primary" target="_blank" rel="noopener noreferrer">
                  Find Projects
                </a>
                <a href={REGISTER_URL} className="hosp-btn-outline" target="_blank" rel="noopener noreferrer">
                  Book a Demo
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hosp-banner-visual" aria-hidden="true">
                <div className="hosp-banner-photo">
                  <img
                    src={hospHero}
                    alt="Hotel property located near an active commercial construction site"
                    className="hosp-banner-img"
                  />
                </div>
              </div>
              <p className="hosp-banner-caption">
                <i className="bi bi-graph-up-arrow" aria-hidden="true"></i>
                Trusted by 400+ hotels and resorts to fill rooms with construction crew bookings
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <StatsSection
        stats={[
          { value: '212,400+', label: 'CONSTRUCTION PROJECTS TRACKED NEAR ACTIVE HOTEL PROPERTIES' },
          { value: '38,700+', label: 'GENERAL CONTRACTORS AND PROJECT MANAGERS WITH VERIFIED CONTACT INFO' },
          { value: '91,500+', label: 'LEAD ALERTS SENT TO HOTELS BEFORE CREWS STARTED BOOKING ROOMS' },
          { value: '87%', label: 'CONNECTED HOTELS REACH PROJECT CONTACTS BEFORE COMPETITORS DO' },
        ]}
      />

      {/* ================= FEATURE BLOCKS ================= */}
      <section className="hosp-features" aria-label="Platform capabilities">
        <div className="container">

          <article className="hosp-row">
            <div className="hosp-text-col">
              <span className="hosp-label">EXTENDED STAYS</span>
              <h2 className="hosp-heading">Long-Stay Guests Are Quietly Reshaping Hotel Revenue</h2>
              <p className="hosp-description">
                In April 2026, extended-stay occupancy outperformed comparable
                hotel classes by 11.9% points (The Highland Group). Construction
                crews are a major reason why. Out-of-town workers often stay for
                weeks or months, booking multiple rooms at once. One active
                project nearby can mean steady weekday occupancy for an entire
                season, if your hotel reaches them first.
              </p>
            </div>
            <div className="hosp-visual-col">
              <div className="hosp-mock">
                <img
                  src={hospImage1}
                  alt="Extended-stay reservation calendar showing weekday occupancy"
                  className="hosp-img"
                />
              </div>
            </div>
          </article>

          <article className="hosp-row hosp-row-reverse">
            <div className="hosp-text-col">
              <span className="hosp-label">REPEAT BUSINESS</span>
              <h2 className="hosp-heading">The Same Contractors Keep Building in Your Market</h2>
              <p className="hosp-description">
                Markets don't see one contractor once; they see the same names
                again and again. Bid Connectors helps you spot repeat builders
                early, so you can lock in group rates and stay their go-to
                property, project after project.
              </p>
            </div>
            <div className="hosp-visual-col">
              <div className="hosp-mock">
                <img
                  src={hospImage2}
                  alt="Repeat general contractor activity tracked across multiple projects"
                  className="hosp-img"
                />
              </div>
            </div>
          </article>

          <article className="hosp-row">
            <div className="hosp-text-col">
              <span className="hosp-label">EARLY VISIBILITY</span>
              <h2 className="hosp-heading">See the Project Before Every Other Hotel Does</h2>
              <p className="hosp-description">
                Most hotels hear about a construction project only after crews
                start calling around for rooms; by then, three other properties
                have already pitched them. Bid Connectors flags projects the
                moment they enter our database, often while they're still in
                planning, so you're reaching out before demand even builds. That
                head start turns a one-time booking into a standing relationship
                with contractors who return to your market project after project.
              </p>
              <ul className="hosp-points">
                <li>Get notified as soon as a new project near you is added</li>
                <li>Reach contractors before they start comparing nearby hotels</li>
                <li>Turn early outreach into repeat bookings across future projects</li>
              </ul>
            </div>
            <div className="hosp-visual-col">
              <div className="hosp-mock">
                <img
                  src={hospImage3}
                  alt="Live feed of newly added construction projects near a hotel property"
                  className="hosp-img"
                />
              </div>
            </div>
          </article>

        </div>
      </section>

      {/* ================= FIND CONSTRUCTION PROJECTS ================= */}
      <section className="hosp-steps" aria-label="How to find the right projects">
        <div className="container">
          <div className="hosp-steps-header">
            <span className="hosp-eyebrow">FIND CONSTRUCTION PROJECTS</span>
            <h2 className="hosp-steps-title">Know What's Being Built Near Every Property You Run</h2>
            <p className="hosp-steps-subtitle">
              A project ten miles away won't fill your rooms. Set your coverage
              area, narrow it down to what actually matters, and let new matches
              come to you.
            </p>
          </div>

          <div className="hosp-steps-grid">
            {steps.map((step, index) => (
              <div
                className="hosp-step-card"
                key={step.title}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="hosp-step-icon">
                  <i className={`bi ${step.icon}`} aria-hidden="true"></i>
                </div>
                <h3 className="hosp-step-title">{step.title}</h3>
                <p className="hosp-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY BID CONNECTORS ================= */}
      <section className="hosp-compare" aria-label="Comparison">
        <div className="container">
          <div className="hosp-compare-header">
            <span className="hosp-eyebrow">WHY BID CONNECTORS</span>
            <h2 className="hosp-compare-title">What Changes When You See Projects First</h2>
          </div>

          <div className="hosp-compare-grid">
            <div className="hosp-compare-col hosp-compare-without">
              <h3>WITHOUT BID CONNECTORS</h3>
              <ul>
                {withoutList.map((item, i) => (
                  <li key={i}>
                    <i className="bi bi-x-circle" aria-hidden="true"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="hosp-compare-col hosp-compare-with">
              <h3>WITH BID CONNECTORS</h3>
              <ul>
                {withList.map((item, i) => (
                  <li key={i}>
                    <i className="bi bi-check-circle" aria-hidden="true"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= NEVER MISS A BEAT ================= */}
      <section className="hosp-tools" aria-label="Platform tools">
        <div className="container">
          <div className="hosp-tools-header">
            <span className="hosp-eyebrow">NEVER MISS A BEAT</span>
            <h2 className="hosp-tools-title">Stay Ahead of Every Project Near Your Property</h2>
            <p className="hosp-tools-subtitle">
              Winning one crew's business is a good start. Keeping them, and the
              ones who follow, is where real occupancy growth happens. Bid
              Connectors keeps you plugged into every stage of construction
              activity around your hotel, so you're never caught off guard by a
              project that's already underway.
            </p>
          </div>

          <div className="hosp-tools-grid">
            {tools.map((tool, index) => (
              <div
                className="hosp-tool-card"
                key={tool.title}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <h3>{tool.title}</h3>
                <p>{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CUSTOMER STORY ================= */}
      <section className="hosp-story" aria-label="Customer story">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-6">
              <span className="hosp-eyebrow">WHAT THEY ARE SAYING</span>
              <blockquote className="hosp-quote">
                "Before this, we relied on walk-ins and luck. Now we spot
                construction projects weeks in advance and reach out before crews
                even start looking for rooms. Our extended-stay bookings jumped
                noticeably, and outreach finally feels proactive instead of
                reactive."
              </blockquote>
              <div className="hosp-story-author">
                <strong>Maria Torres</strong>
                <span>General Manager, Riverside Inn &amp; Suites</span>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hosp-video-thumb">
                <img
                  src={hospTestimonial}
                  alt="Maria Torres, General Manager at Riverside Inn and Suites"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <FaqComponent
        title="Frequently Asked"
        highlight="Questions"
        description="Let's explore the most asked questions that are being asked about our project intelligence related to hospitality."
        faqs={faqs}
      />

      {/* ================= CTA ================= */}
      <CTASection
        titleLine1="Turn Nearby Construction"
        titleHighlight="Projects into Booked Rooms!"
        subText="Get verified project leads and contractor contacts delivered to your inbox, so your hotel fills rooms before crews start searching elsewhere."
        primaryBtnText="Find Projects"
        primaryBtnLink={REGISTER_URL}
        primaryBtnNewTab={true}
        secondaryBtnText="Book a Demo"
        secondaryBtnLink={REGISTER_URL}
        secondaryBtnNewTab={true}
        noteText="No credit card · Free forever plan · Cancel anytime"
      />

    </main>
  );
};

export default Hospitality;