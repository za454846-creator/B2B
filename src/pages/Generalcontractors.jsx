import React from "react";
import { Helmet } from "react-helmet-async";
import "../assets/css/solutions.css";

import FaqComponent from "../components/Home_components/FaqComponent";
import CTASection from "../components/Home_components/CTASection";
import StatsSection from "../components/Home_components/StatsSection";

import generalContractorsHero from "../assets/Images/Hero_gen contractors.webp";
import generalContractorsImage2 from "../assets/Images/General_Contractor_find.webp";
import generalContractorsImage3 from "../assets/Images/buiding.webp";
import generalContractorsImage4 from "../assets/Images/building4.webp";
import generalContractorsTestimonial from "../assets/Images/testimonial.webp";


const PAGE_URL = 'https://www.bidconnectors.com/solutions/general-contractors';
const PAGE_TITLE = 'General Contractors | Build Your Bidder List Faster';
const PAGE_DESCRIPTION =
  'Bid Connectors helps general contractors build bidder lists, send bulk invitations to bid, and track subcontractor responses in real time. No sales calls, free to start.';

// TODO: upload a real 1200x630 share image and point this at it.
const OG_IMAGE = 'https://www.bidconnectors.com/og/general-contractors.jpg';

const featureBlocks = [
  {
    label: "ONE STOP SOLUTION",
    heading: "Preconstruction Shouldn't Feel Like A Second Job",
    description:
      "Chasing subcontractors by phone and email eats hours you don't have before bid day. Bid Connectors gives general contractors a faster way to find, invite, and manage subcontractors across every trade, all from one organized dashboard.",
    points: [
      "Build bidder lists by trade, location, and availability.",
      "Send bulk invitations to bid in a single click.",
      "Track responses and follow up without lifting a phone.",
    ],
    image: generalContractorsHero,
    imgAlt: "General contractor bidder list dashboard",
  },
  {
    label: "SPEED UP YOUR BIDDING",
    heading: "Skip The Sales Calls And Just Start Bidding",
    description:
      "Most bid management platforms make you sit through demos, sales pitches, and long-term contracts before you send a single invitation. Bid Connectors skips all that: sign up, post your project, and start connecting with subcontractors the same day, no enterprise sales process required. And when you do need help, you're talking to a real person, not a support ticket queue.",
    points: [
      "Simple onboarding with no demo required to get started.",
      "Transparent pricing with no long-term contract to sign.",
      "Human support when it matters, not a ticket queue.",
    ],
    image: generalContractorsImage2,
    imgAlt: "Fast onboarding for general contractors",
  },
  {
    label: "GROW YOUR BUSINESS",
    heading: "Expand Your Network With Bid Connectors",
    description:
      "Your next great subcontractor shouldn't be a stranger you find by luck. Bid Connectors puts you in front of verified subs across every trade and region, so your bidder list keeps growing project after project.",
    points: [
      "Connect with new subcontractors in every trade and market you work in.",
      "Grow a reliable bidder list that gets stronger with every project.",
    ],
    image: generalContractorsImage3,
    imgAlt: "Growing network of verified subcontractors",
  },
  {
    label: "OUR STREAMLINED PROCESS",
    heading: "From Post To Bid In Three Simple Steps",
    description:
      "Finding the right subcontractors shouldn't take days. Post your project details, select the trades you need covered, and Bid Connectors instantly matches you with qualified subs ready to bid.",
    points: [
      "Add scope, trades, and timeline in minutes.",
      "Connect with verified subcontractors by trade and location.",
      "Send bid invitations and monitor responses in real time.",
    ],
    image: generalContractorsImage4,
    imgAlt: "Three-step process from posting a project to receiving bids",
  },
];

// NEW: the workflow as a scannable grid instead of a paragraph.
const steps = [
  {
    icon: "bi-file-earmark-plus",
    title: "Post The Project",
    desc: "Add scope, trades, and timeline. Takes minutes, not an onboarding call.",
  },
  {
    icon: "bi-funnel",
    title: "Build The Bidder List",
    desc: "Filter verified subcontractors by trade, location, and availability.",
  },
  {
    icon: "bi-send",
    title: "Send Invitations",
    desc: "Bulk invitations to bid go out in a single click, to your list and ours.",
  },
  {
    icon: "bi-clipboard-check",
    title: "Track Coverage",
    desc: "See who opened, who bid, and which trades still have gaps to close.",
  },
];

const faqs = [
  {
    question: "Is Bid Connectors free to use for general contractors?",
    answer:
      "Yes, getting started is free for general contractors. They can create projects, build bidder lists, and send invitations to bid at no cost. Optional premium features scale with their business as project volume and coverage needs grow.",
  },
  {
    question: "How many subcontractors can I reach through Bid Connectors?",
    answer:
      "There is no fixed cap. You get access to a growing network of verified subcontractors across trades and regions, and you can combine that network with your own trusted contacts to close bid coverage gaps faster on every project.",
  },
  {
    question: "Will my project details stay private?",
    answer:
      "Yes. Every project you create is private by default. Only the subcontractors you choose to invite can view plans and bid details, and you control visibility from start to finish.",
  },
  {
    question: "Is there a limit to how many projects or invitations I can send?",
    answer:
      "No limits. Create as many projects as you need and send unlimited bid invitations, whether you're running one job or fifty.",
  },
  {
    question: "How is Bid Connectors different from other bid management platforms?",
    answer:
      "Unlike generic directories, Bid Connectors focuses on speed and simplicity: build a project, invite subs, and track responses in minutes, without the learning curve of enterprise-heavy competitor platforms.",
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

const Generalcontractors = () => {
  return (
    <main className="gc-page">

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
      <section className="gc-banner" aria-label="General Contractors Introduction">
        <div className="container">
          <div className="row align-items-center g-4">

            <div className="col-lg-6">
              <span className="gc-eyebrow">#1 PLATFORM TO CONNECT WITH SUBCONTRACTORS</span>
              <h1 className="gc-banner-heading">Stop Chasing Bids. Start Winning Them.</h1>
              <p className="gc-banner-text">
                Get matched with responsive subcontractors, streamline your bid
                invitations, and close coverage gaps faster than ever before,
                guaranteed.
              </p>
              <div className="gc-banner-actions">
                <a
                  href="https://bidconnectors.com/bidconnectors/register"
                  className="gc-btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect With Them!
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="gc-banner-visual" aria-hidden="true">
                <div className="gc-banner-photo">
                  <img
                    src={generalContractorsHero}
                    alt="General Contractors"
                    className="gc-banner-img"
                  />
                </div>
              </div>
              <p className="gc-banner-caption">
                <i className="bi bi-graph-up-arrow" aria-hidden="true"></i>
                Trusted by general contractors to turn bid invitations into responses that count
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <StatsSection
        stats={[
          { value: "625,200+", label: "ACTIVE COMMERCIAL PROJECTS OPEN FOR BIDDING RIGHT NOW" },
          { value: "566,000+", label: "VERIFIED SUBCONTRACTORS READY TO BID ACROSS EVERY TRADE" },
          { value: "123,091+", label: "INVITATIONS TO BID SENT THROUGH THE PLATFORM LAST YEAR" },
          { value: "89%", label: "AVERAGE SUBCONTRACTOR RESPONSE RATE FOR GCS USING BID CONNECTORS" },
        ]}
      />

      {/* ================= FEATURE BLOCKS ================= */}
      <section className="gc-features" aria-label="Platform capabilities">
        <div className="container">
          {featureBlocks.map((block, index) => (
            <article
              className={index % 2 === 1 ? "gc-row gc-row-reverse" : "gc-row"}
              key={block.label}
            >
              <div className="gc-text-col">
                <span className="gc-label">{block.label}</span>
                <h2 className="gc-heading">{block.heading}</h2>
                <p className="gc-description">{block.description}</p>
                <ul className="gc-points">
                  {block.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="gc-visual-col">
                <div className="gc-mock">
                  <img src={block.image} alt={block.imgAlt} className="gc-img" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="gc-steps" aria-label="How it works">
        <div className="container">
          <div className="gc-steps-header">
            <span className="gc-eyebrow">HOW IT WORKS</span>
            <h2 className="gc-steps-title">From Project Post To Full Bid Coverage</h2>
            <p className="gc-steps-subtitle">
              No demo, no contract, no waiting on a sales rep. Post the job in
              the morning and watch responses come in the same week.
            </p>
          </div>

          <div className="gc-steps-grid">
            {steps.map((step, index) => (
              <div
                className="gc-step-card"
                key={step.title}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="gc-step-icon">
                  <i className={`bi ${step.icon}`} aria-hidden="true"></i>
                </div>
                <h3 className="gc-step-title">{step.title}</h3>
                <p className="gc-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY THEY TRUST US ================= */}
      <section className="gc-whyus" aria-label="Why general contractors trust us">
        <div className="container">
          <div className="gc-whyus-inner">
            <span className="gc-whyus-eyebrow">WHY THEY TRUST US</span>
            <h2 className="gc-whyus-title">Built For General Contractors, Not Everyone Else.</h2>
            <p className="gc-whyus-text">
              Unlike generic directories, Bid Connectors is designed around what
              general contractors actually require: fast bidder lists, real trade
              matching, and zero clutter. With just a few clicks, you're connected
              with subcontractors. No noise, just qualified subs, ready to bid.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CUSTOMER STORY ================= */}
      <section className="gc-story" aria-label="Customer story">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-6">
              <span className="gc-eyebrow">REAL STORY, REAL EXPERIENCE</span>
              <blockquote className="gc-quote">
                "Last March, we had three trades unfilled two days before the bid
                deadline on a mid-rise project. Posted it on Bid Connectors that
                afternoon and had five qualified responses by the next morning.
                This company saved us from a scramble."
              </blockquote>
              <div className="gc-story-author">
                <strong>Mark T.</strong>
                <span>Project Manager</span>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="gc-video-thumb">
                <img
                  src={generalContractorsTestimonial}
                  alt="General Contractors Customer Testimonial"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <FaqComponent
        title="Frequently Asked Questions"
        highlight="About General Contractors"
        description="Explore our quick answer book to get to know all about how general contractors get our support."
        faqs={faqs}
      />

      {/* ================= CTA ================= */}
      <CTASection
        titleLine1="Your Next Project"
        titleHighlight="Deserves The Right Bid Team!"
        subText="Build your bidder list, send invitations, and track responses, all from one simple dashboard."
        primaryBtnText="Browse List!"
        primaryBtnLink="https://bidconnectors.com/bidconnectors/register"
        primaryBtnNewTab={true}
        secondaryBtnText="Contact Us!"
        secondaryBtnLink="https://bidconnectors.com/bidconnectors/register"
        secondaryBtnNewTab={true}
        noteText="No credit card · Free forever plan · Cancel anytime"
      />

    </main>
  );
};

export default Generalcontractors;