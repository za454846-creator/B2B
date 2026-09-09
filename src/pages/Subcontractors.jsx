import React from "react";
import { Helmet } from "react-helmet-async";
import StatsSection from "../components/Home_components/StatsSection";
import FaqComponent from "../components/Home_components/FaqComponent";
import CTASection from "../components/Home_components/CTASection";
import "../assets/css/solutions.css";
import "../assets/css/style.css";
import findImg from "../assets/Images/subimg1.webp";
import organizeImg from "../assets/Images/subimg2.webp";
import platformImg from "../assets/Images/subimg3.webp";
import opportunitiesImg from "../assets/Images/subimg4.webp";



const PAGE_URL = 'https://www.bidconnectors.com/solutions/subcontractors';
const PAGE_TITLE = 'Subcontractors | Find Every Open Bid in Your Trade';
const PAGE_DESCRIPTION =
  'Stop jumping between sites to find work. Bid Connectors puts every active construction project in your trade in front of you, so you spend less time searching and more time bidding.';

// TODO: upload a real 1200x630 share image and point this at it.
const OG_IMAGE = 'https://www.bidconnectors.com/og/subcontractors.jpg';

// NEW: the workflow as a scannable grid.
const steps = [
  {
    icon: "bi-tools",
    title: "Set Your Trade",
    desc: "Tell us what you do and the service area you actually cover.",
  },
  {
    icon: "bi-list-check",
    title: "Review Matches",
    desc: "Every open bid in your trade lands in one feed, not ten different sites.",
  },
  {
    icon: "bi-file-earmark-text",
    title: "Check The Details",
    desc: "Scope, budget range, timeline, and deadline before you commit hours.",
  },
  {
    icon: "bi-graph-up-arrow",
    title: "Submit And Track",
    desc: "Follow each bid from first view through to the final decision.",
  },
];

const faqs = [
  {
    question: "How do you find open construction projects for me?",
    answer:
      "We continuously find open construction projects across your trade and region, then organise them into one feed. This helps you to explore every potential bid opportunity without searching various sites yourself."
  },
  {
    question: "How is Bid Connectors different from other companies?",
    answer:
      "Unlike scattered listing sites, Bid Connectors offers you a centralized list including all the open projects and allows you to filter jobs related to your location and trade."
  },
  {
    question: "What trades and locations does Bid Connectors cover?",
    answer:
      "We track open construction projects across multiple trades, including electrical, plumbing, HVAC, concrete, roofing, and more. Moreover, we offer our services in all states of the US, so you can find the job that perfectly matches your trades and service area."
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
const LOGIN_URL = "https://bidconnectors.com/bidconnectors/login";

function Subcontractors() {
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

        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main className="sub-page">

        {/* ================= BANNER ================= */}
        <section className="about-banner" aria-label="Page introduction">
          <div className="container">
            <div className="banner-content">
              <h1>
                One Place to Find <span>Every Open Bid</span>
              </h1>
              <p>
                Stop jumping to ten different sites to find work. Bid Connectors
                puts every active construction project in your trade in front of
                you, so you waste less time searching and more time bidding.
              </p>
              <a
                href={REGISTER_URL}
                className="banner-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore More! <i className="bi bi-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </section>

        {/* ================= FEATURES ================= */}
        <section className="fs-section" aria-label="Platform features">
          <div className="fs-container">

            {/* YOUR JOB PARTNER */}
            <div className="fs-row">
              <div className="fs-text-col">
                <span className="fs-label">YOUR JOB PARTNER</span>
                <h2 className="fs-heading">
                  Built for the Way Subcontractors Actually Work
                </h2>
                <p className="fs-description">
                  Winning consistent work is not about finding a good job; it is
                  about seeing every opportunity before your competitors do. Bid
                  Connectors gives you an organized view of all open jobs related
                  to your field so you can bid 2.4x faster and grow your pipeline
                  value without the guesswork.
                </p>

                <div className="fs-actions">
                  <a href={REGISTER_URL} className="fs-btn-primary" target="_blank" rel="noopener noreferrer">
                    Book a Demo
                  </a>
                  <a href={LOGIN_URL} className="fs-btn-link" target="_blank" rel="noopener noreferrer">
                    Learn More <span className="fs-arrow" aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>

              <div className="fs-visual-col">
                <div className="fs-mock">
                  <img
                    src={findImg}
                    alt="BidConnectors helping subcontractors discover relevant construction job opportunities and bid faster"
                    className="fs-img"
                  />
                </div>
              </div>
            </div>

            {/* TRUST / STATS */}
            <div className="trust_sec">
              <h2>Trusted by Subcontractors Across Industry</h2>
              <p>
                Since our establishment, we have been helping subcontractors win
                more bids without juggling different platforms, every single day.
              </p>
            </div>

            <StatsSection
              stats={[
                { value: '125,600+', label: 'ACTIVE PROJECTS' },
                { value: '90-Day', label: 'CLIENT RETENTION RATE' },
                { value: '9-Hours', label: 'SAVED PER PROJECT BID' },
                { value: '2.4x', label: 'MORE BIDS SUBMITTED' },
              ]}
            />

            {/* ONE-STOP SOLUTION */}
            <div className="fs-row fs-row-reverse">
              <div className="fs-text-col">
                <span className="fs-label">ONE-STOP SOLUTION</span>
                <h2 className="fs-heading">
                  The Right Project, In the Right Place, Every Time
                </h2>
                <p className="fs-description">
                  Bidding on the wrong project wastes your time and money that you
                  never get back. Bid Connectors is a one-stop solution with a huge
                  network of 5,000+ general contractors. So, you get the right job
                  matched with your speciality within a fraction of the time.
                </p>

                <ul className="fs-points">
                  <li>Track every bid's status from first view to final decision</li>
                  <li>Focus your team's time on bids you're actually qualified to win</li>
                </ul>

                <div className="fs-actions">
                  <a href={REGISTER_URL} className="fs-btn-primary" target="_blank" rel="noopener noreferrer">
                    Book a Demo
                  </a>
                  <a href={LOGIN_URL} className="fs-btn-link" target="_blank" rel="noopener noreferrer">
                    Learn More <span className="fs-arrow" aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>

              <div className="fs-visual-col">
                <div className="fs-mock">
                  <img
                    src={organizeImg}
                    alt="BidConnectors matching subcontractors with qualified construction projects and tracking bid opportunities"
                    className="fs-img"
                  />
                </div>
              </div>
            </div>

            {/* A TRUSTED PLATFORM */}
            <div className="fs-row">
              <div className="fs-text-col">
                <span className="fs-label">A TRUSTED PLATFORM</span>
                <h2 className="fs-heading">
                  Finding Work Should Not Feel Like a Full-Time Job
                </h2>
                <p className="fs-description">
                  Scrolling through the irrelevant job openings is the fastest way
                  to miss potential opportunities. Our smart filters allow you to
                  narrow projects by trade, budget range, location, and timeline in
                  seconds. When you get the open construction projects related to
                  your field in seconds, you can focus on the bidding process that
                  is actually worth your time.
                </p>

                <div className="fs-actions">
                  <a href={REGISTER_URL} className="fs-btn-primary" target="_blank" rel="noopener noreferrer">
                    Book a Demo
                  </a>
                  <a href={LOGIN_URL} className="fs-btn-link" target="_blank" rel="noopener noreferrer">
                    Learn More <span className="fs-arrow" aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>

              <div className="fs-visual-col">
                <div className="fs-mock">
                  <img
                    src={platformImg}
                    alt="BidConnectors smart filters helping subcontractors find relevant construction projects by trade, budget, location, and timeline"
                    className="fs-img"
                  />
                </div>
              </div>
            </div>

            {/* GROW YOUR BUSINESS WITH US */}
            <div className="fs-row fs-row-reverse">
              <div className="fs-text-col">
                <span className="fs-label">GROW YOUR BUSINESS WITH US</span>
                <h2 className="fs-heading">
                  Your Next Contract Is Already Out There
                </h2>
                <p className="fs-description">
                  Every day you spend finding a job is a day your competitor spends
                  bidding. But not anymore. Bid Connectors keeps you plugged in to
                  a constant stream of new opportunities, with more than 125,600
                  open projects listed on our dashboard, so you never rely on
                  word-of-mouth to find a new job. Get steady and qualified work
                  whenever you are ready.
                </p>

                <div className="fs-actions">
                  <a href={REGISTER_URL} className="fs-btn-primary" target="_blank" rel="noopener noreferrer">
                    Book a Demo
                  </a>
                  <a href={LOGIN_URL} className="fs-btn-link" target="_blank" rel="noopener noreferrer">
                    Learn More <span className="fs-arrow" aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>

              <div className="fs-visual-col">
                <div className="fs-mock">
                  <img
                    src={opportunitiesImg}
                    alt="BidConnectors helping contractors discover a steady stream of qualified construction project opportunities"
                    className="fs-img"
                  />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ================= HOW IT WORKS ================= */}
        <section className="sub-steps" aria-label="How it works">
          <div className="container">
            <div className="sub-steps-header">
              <span className="badge-features">HOW IT WORKS</span>
              <h2 className="sub-steps-title">From Search To Submitted Bid</h2>
              <p className="sub-steps-subtitle">
                No more checking ten agency sites every morning. Set it up once
                and the work comes to you.
              </p>
            </div>

            <div className="sub-steps-grid">
              {steps.map((step, index) => (
                <div
                  className="sub-step-card"
                  key={step.title}
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="sub-step-icon">
                    <i className={`bi ${step.icon}`} aria-hidden="true"></i>
                  </div>
                  <h3 className="sub-step-title">{step.title}</h3>
                  <p className="sub-step-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <FaqComponent
          title="Frequently Asked Questions"
          highlight="to know."
          description="Explore our quick answer book to know how we help subcontractors in finding potential projects."
          faqs={faqs}
        />

        {/* ================= CTA ================= */}
        <CTASection
          titleLine1="Ready to"
          titleHighlight="Bid Smarter?"
          subText="Subcontractors using Bid Connectors submit 2.4x more bids and save 9 hours per project. Start building your pipeline today."
          primaryBtnText="Start Finding Projects"
          primaryBtnLink={REGISTER_URL}
          primaryBtnNewTab={true}
          secondaryBtnText="Talk to Sales"
          secondaryBtnLink={LOGIN_URL}
          secondaryBtnNewTab={true}
          noteText="No credit card · Free forever plan · Cancel anytime"
        />

      </main>
    </>
  );
}

export default Subcontractors;