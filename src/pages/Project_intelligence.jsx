import React from "react";
import { Helmet } from "react-helmet-async";
import "../assets/css/solutions.css";

import FaqComponent from "../components/Home_components/FaqComponent";
import CTASection from "../components/Home_components/CTASection";
import StatsSection from "../components/Home_components/StatsSection";

import piHero from "../assets/Images/bpm_banner.webp";
import piImage2 from "../assets/Images/bpm1.webp";
import piImage3 from "../assets/Images/bpm2.webp";
import piTestimonial from "../assets/Images/testimonial.webp";


const PAGE_URL = 'https://www.bidconnectors.com/solutions/project-intelligence';
const PAGE_TITLE = 'Project Intelligence | Track Projects From Permit to Completion';
const PAGE_DESCRIPTION =
  'Bid Connectors turns scattered construction news, permits, and public records into one tracked pipeline, so you always know what\u2019s being built, who\u2019s building it, and when to reach out.';

// TODO: upload a real 1200x630 share image and point this at it.
const OG_IMAGE = 'https://www.bidconnectors.com/og/project-intelligence.jpg';

const REGISTER_URL = "https://bidconnectors.com/bidconnectors/register";

const steps = [
  {
    icon: "bi-broadcast",
    title: "Detect",
    desc: "Our system scans permits, news, and public filings continuously to catch projects as early as possible.",
  },
  {
    icon: "bi-patch-check",
    title: "Verify",
    desc: "Every project and contact is checked against multiple sources before it lands in your feed.",
  },
  {
    icon: "bi-diagram-3",
    title: "Stage",
    desc: "Projects are tagged by phase, planning, design, bidding, or under construction, so context is built in.",
  },
  {
    icon: "bi-bell",
    title: "Alert",
    desc: "Save a search or watch a project, and get notified the moment something you care about changes.",
  },
];

const withoutList = [
  "Piece together leads from scattered news alerts",
  "Chase contacts whose roles changed months ago",
  "Find out a project already went out to bid",
  "Rebuild the same research every single week",
];

const withList = [
  "One tracked pipeline, updated every day",
  "Verified contacts tied to their current project",
  "See a project the moment it enters bidding",
  "A saved search that keeps working while you don't",
];

const tools = [
  {
    icon: "bi-collection",
    title: "Project Feed",
    desc: "A live, filterable feed of every tracked project, sorted by stage, size, or bid date.",
  },
  {
    icon: "bi-building",
    title: "Company Profiles",
    desc: "See who's active on a project and which companies keep showing up in your market.",
  },
  {
    icon: "bi-person-check",
    title: "Verified Contacts",
    desc: "Direct contact details for the people making decisions, checked and refreshed daily.",
  },
  {
    icon: "bi-bell",
    title: "Watch Lists & Alerts",
    desc: "Track specific projects or saved searches and get notified the instant something changes.",
  },
];

const faqs = [
  {
    question: "What counts as a tracked project?",
    answer: "Any commercial construction project our system identifies from permits, news, and public filings, then verifies and stages from planning through completion.",
  },
  {
    question: "How does Bid Connectors find projects before they\u2019re public knowledge?",
    answer: "We continuously scan thousands of sources, including permit filings, local news, and municipal records, and surface projects as soon as they\u2019re identified rather than waiting for a single announcement.",
  },
  {
    question: "Can I track projects at a specific stage?",
    answer: "Yes. Every project is tagged by stage, planning, design, bidding, or under construction, so you can filter to exactly where you want to engage.",
  },
  {
    question: "How current is the contact information?",
    answer: "Contact records are verified and refreshed daily, so you\u2019re reaching a person whose role and project assignment are still current.",
  },
  {
    question: "Can I get notified when something changes?",
    answer: "Yes. Watch lists send an alert the moment a tracked project changes stage, timeline, or contact, so you never work from stale information.",
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

const ProjectIntelligence = () => {
  return (
    <main className="pi-page">

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
      <section className="pi-banner" aria-label="Project Intelligence Introduction">
        <div className="container">
          <div className="row align-items-center g-4">

            <div className="col-lg-6">
              <span className="pi-eyebrow">PROJECT INTELLIGENCE</span>
              <h1 className="pi-banner-heading">
                Know What's Being Built Before Everyone Else Does
              </h1>
              <p className="pi-banner-text">
                Bid Connectors tracks construction projects from the first permit
                filing through completion, turning scattered public data into one
                verified pipeline you can search, filter, and act on.
              </p>
              <div className="pi-banner-actions">
                <a href={REGISTER_URL} className="pi-btn-primary" target="_blank" rel="noopener noreferrer">
                  Explore Projects
                </a>
                <a href={REGISTER_URL} className="pi-btn-outline" target="_blank" rel="noopener noreferrer">
                  Book a Demo
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="pi-feed-widget" aria-hidden="true">
                <div className="pi-feed-header">
                  <span className="pi-feed-dot"></span>
                  Live Project Feed
                </div>

                <div className="pi-feed-card pi-feed-card-1">
                  <div className="pi-feed-card-top">
                    <span className="pi-feed-tag pi-feed-tag-bidding">BIDDING</span>
                    <span className="pi-feed-time">2h ago</span>
                  </div>
                  <p className="pi-feed-title">Riverside Medical Office Park</p>
                  <p className="pi-feed-meta">$4.2M &middot; Austin, TX</p>
                </div>

                <div className="pi-feed-card pi-feed-card-2">
                  <div className="pi-feed-card-top">
                    <span className="pi-feed-tag pi-feed-tag-design">DESIGN</span>
                    <span className="pi-feed-time">5h ago</span>
                  </div>
                  <p className="pi-feed-title">Harbor Point Logistics Facility</p>
                  <p className="pi-feed-meta">$11.6M &middot; Charleston, SC</p>
                </div>

                <div className="pi-feed-card pi-feed-card-3">
                  <div className="pi-feed-card-top">
                    <span className="pi-feed-tag pi-feed-tag-planning">PLANNING</span>
                    <span className="pi-feed-time">Yesterday</span>
                  </div>
                  <p className="pi-feed-title">Northgate Mixed-Use Development</p>
                  <p className="pi-feed-meta">$28.4M &middot; Denver, CO</p>
                </div>
              </div>

              <p className="pi-banner-caption">
                <i className="bi bi-broadcast" aria-hidden="true"></i>
                New projects detected and verified every day, before they hit the wires
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <StatsSection
        stats={[
          { value: '48,600+', label: 'ACTIVE COMMERCIAL CONSTRUCTION PROJECTS TRACKED' },
          { value: '300+', label: 'NEW PROJECT UPDATES PUBLISHED DAILY' },
          { value: '7,400+', label: 'CONTRACTOR & GC CONTACTS WITH VERIFIED INFO' },
          { value: '50', label: 'STATES COVERED, COAST TO COAST' },
        ]}
      />

      {/* ================= FEATURE TIMELINE ================= */}
      <section className="pi-features" aria-label="Platform capabilities">
        <div className="container">
          <div className="pi-timeline">

            <article className="pi-timeline-item">
              <div className="pi-timeline-marker">
                <span className="pi-timeline-num">01</span>
                <span className="pi-timeline-line"></span>
              </div>
              <div className="pi-timeline-body">
                <div className="pi-timeline-text">
                  <span className="pi-label">EARLY DETECTION</span>
                  <h2 className="pi-heading">See Projects At The Earliest Public Signal</h2>
                  <p className="pi-description">
                    Most teams find out about a project once it's already out to
                    bid, when every competitor is looking at the same opportunity.
                    Bid Connectors surfaces projects at the planning and permit
                    stage, so you have weeks or months of lead time to build a
                    relationship before the bidding window even opens.
                  </p>
                </div>
                <div className="pi-timeline-visual">
                  <div className="pi-mock pi-mock-sm">
                    <img
                      src={piHero}
                      alt="Live feed of newly detected construction projects"
                      className="pi-img"
                    />
                  </div>
                </div>
              </div>
            </article>

            <article className="pi-timeline-item">
              <div className="pi-timeline-marker">
                <span className="pi-timeline-num">02</span>
                <span className="pi-timeline-line"></span>
              </div>
              <div className="pi-timeline-body">
                <div className="pi-timeline-text">
                  <span className="pi-label">VERIFIED DATA</span>
                  <h2 className="pi-heading">Every Record Checked, Not Just Scraped</h2>
                  <p className="pi-description">
                    Raw permit data is messy and contacts go stale fast. Every
                    project and contact in Bid Connectors is cross-checked against
                    multiple sources and refreshed daily, so what you see is what's
                    actually true today, not a snapshot from three months ago.
                  </p>
                </div>
                <div className="pi-timeline-visual">
                  <div className="pi-mock pi-mock-sm">
                    <img
                      src={piImage2}
                      alt="Verified project and contact record"
                      className="pi-img"
                    />
                  </div>
                </div>
              </div>
            </article>

            <article className="pi-timeline-item pi-timeline-item-last">
              <div className="pi-timeline-marker">
                <span className="pi-timeline-num">03</span>
              </div>
              <div className="pi-timeline-body">
                <div className="pi-timeline-text">
                  <span className="pi-label">ACTIONABLE INSIGHTS</span>
                  <h2 className="pi-heading">Turn Data Into A Working Pipeline</h2>
                  <p className="pi-description">
                    Tracking a project is only useful if it leads somewhere. Every
                    record comes with the stage, timeline, and decision-makers
                    attached, so your team can move straight from insight to
                    outreach without a separate research step.
                  </p>
                  <ul className="pi-points">
                    <li>Filter by project type, stage, size, and location</li>
                    <li>See the full history of a project as it evolves</li>
                    <li>Export or sync leads straight into your workflow</li>
                  </ul>
                </div>
                <div className="pi-timeline-visual">
                  <div className="pi-mock pi-mock-sm">
                    <img src={piImage3} alt="Project pipeline dashboard" className="pi-img" />
                  </div>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="pi-steps" aria-label="How Project Intelligence works">
        <div className="container">
          <div className="pi-steps-header">
            <span className="pi-eyebrow">HOW IT WORKS</span>
            <h2 className="pi-steps-title">From Public Record To Verified Lead</h2>
            <p className="pi-steps-subtitle">
              Project intelligence isn't a single database, it's a process that
              runs continuously so your pipeline never goes stale.
            </p>
          </div>

          <div className="pi-stepper">
            {steps.map((step, index) => (
              <React.Fragment key={step.title}>
                <div className="pi-step-card" style={{ animationDelay: `${index * 0.08}s` }}>
                  <div className="pi-step-icon">
                    <i className={`bi ${step.icon}`} aria-hidden="true"></i>
                  </div>
                  <h3 className="pi-step-title">{step.title}</h3>
                  <p className="pi-step-desc">{step.desc}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="pi-step-connector" aria-hidden="true">
                    <i className="bi bi-chevron-right"></i>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WITHOUT vs WITH ================= */}
      <section className="pi-compare" aria-label="Comparison">
        <div className="container">
          <div className="pi-compare-header">
            <span className="pi-eyebrow">WHY BID CONNECTORS</span>
            <h2 className="pi-compare-title">See The Difference Firsthand</h2>
          </div>

          <div className="pi-compare-grid">
            <div className="pi-compare-col pi-compare-without">
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

            <div className="pi-compare-col pi-compare-with">
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

      {/* ================= PLATFORM TOOLS ================= */}
      <section className="pi-tools" aria-label="Platform tools">
        <div className="container">
          <div className="pi-tools-header">
            <span className="pi-eyebrow">TRACK AND MONITOR</span>
            <h2 className="pi-tools-title">Everything You Need To Work A Market</h2>
            <p className="pi-tools-subtitle">
              See the full construction landscape in your territory, from early
              planning through active construction, and know exactly who to call
              and when.
            </p>
          </div>

          <div className="pi-tools-list">
            {tools.map((tool, index) => (
              <div
                className="pi-tool-row"
                key={tool.title}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="pi-tool-icon">
                  <i className={`bi ${tool.icon}`} aria-hidden="true"></i>
                </div>
                <div className="pi-tool-row-text">
                  <h3>{tool.title}</h3>
                  <p>{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CUSTOMER STORY ================= */}
      <section className="pi-story" aria-label="Customer story">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-6">
              <span className="pi-eyebrow">CUSTOMER STORIES</span>
              <blockquote className="pi-quote">
                "We used to spend hours a week just figuring out what was being
                built nearby. Now the pipeline builds itself, and we spend that
                time actually talking to the people who matter."
              </blockquote>
              <div className="pi-story-author">
                <strong>Customer</strong>
                <span>Business Development Manager</span>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="pi-video-thumb">
                <img src={piTestimonial} alt="Customer Testimonial" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <FaqComponent
        title="Project Intelligence"
        highlight="questions."
        description="Direct answers about detection, verification, and how the data stays current."
        faqs={faqs}
      />

      {/* ================= CTA ================= */}
      <CTASection
        titleLine1="Start Building Your"
        titleHighlight="Project Pipeline Today"
        subText="See the construction projects already tracked in your market, and reach the decision-makers first."
        primaryBtnText="Explore Projects"
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

export default ProjectIntelligence;