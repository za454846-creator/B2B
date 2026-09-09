import React from "react";
import { Helmet } from "react-helmet-async";

import StatsSection from "../components/Home_components/StatsSection";
import Testimonials from "../components/Home_components/Testimonials";
import CTASection from "../components/Home_components/CTASection";
import FaqComponent from "../components/Home_components/FaqComponent";

// home.css is required: the four components below are styled there.
// about.css goes last so it can override.
import "../assets/css/style.css";
import "../assets/css/home.css";
import "../assets/css/about.css";

import storyImg from "../assets/Images/about_pageimage.webp";
import teamImg1 from "../assets/Images/marcus.webp";
import teamImg2 from "../assets/Images/elena.webp";
import teamImg3 from "../assets/Images/jordan.webp";
import teamImg4 from "../assets/Images/nicholas.webp";

// No brand in the title — App.js's titleTemplate already appends it.
const PAGE_URL = 'https://www.bidconnectors.com/about';
const PAGE_TITLE = 'About Us';
const PAGE_DESCRIPTION =
  'Bid Connectors is a leading platform to explore construction projects in the US and bid on them before your competitors. We help contractors find projects effortlessly.';
// summary_large_image silently degrades without an image tag.
const PAGE_IMAGE = 'https://www.bidconnectors.com/og/about.jpg';

const aboutFaqs = [
  {
    question: "Is Bid Connectors a software company or a construction company?",
    answer: "Software, full stop. We don't bid on projects ourselves, hold any GC or subcontractor license, or compete with our own users for work.",
  },
  {
    question: "Where is the team based?",
    answer: "Fully remote, anchored around Columbus, Ohio, with people spread across six states — most of whom came from construction or a construction-adjacent career before this.",
  },
];

const aboutTestimonials = [
  {
    quote:
      "I called their support line at 7 AM before a bid was due, expecting a ticket number back. Got a guy who used to run field estimates himself, and he knew exactly what I was asking.",
    name: "Renee Castillo",
    title: "Owner, Castillo Concrete & Sitework",
  },
  {
    quote:
      "Most software built for contractors is made by people who've never set foot on a jobsite. Five minutes into using this one, you can tell that isn't true here.",
    name: "Marcus Delaney",
    title: "Preconstruction Manager, Delaney Bros. Construction",
  },
  {
    quote:
      "They told me flat out that a plan I wanted wouldn't help my trade. Cost them a sale that day. Earned my renewal every year since.",
    name: "Wendy Ip",
    title: "Principal, Ip Mechanical Group",
  },
];

const coreValues = [
  {
    icon: "bi bi-rocket-takeoff",
    title: "Ship the Useful Version First",
    desc: "A filter that works for 80% of trades today beats a perfect one that ships next quarter. We'd rather hear what's broken from real bidders.",
  },
  {
    icon: "bi bi-chat-square-text",
    title: "Say the Boring Part Out Loud",
    desc: "If a data source updates weekly instead of daily, we say so on the page. If a plan caps out at 300 takeoff pages a month, that's not a footnote.",
  },
  {
    icon: "bi bi-hard-hat",
    title: "No Decisions Without a Field Person in the Room",
    desc: "Every major feature gets reviewed by someone who has actually estimated a bid.",
  },
];

const processSteps = [
  { id: 1, title: "Capture", desc: "Scanners check agency portals, plan rooms, and developer filings every few hours, not once a week." },
  { id: 2, title: "Qualify", desc: "Each listing gets scored against your trade, location, and typical contract size before it ever reaches your account." },
  { id: 3, title: "Assemble", desc: "Plans, specs, and addenda get bundled into one package instead of five separate downloads." },
  { id: 4, title: "Deliver", desc: "It lands in your queue, usually the same day it's published, often before a competitor has even opened the agency's site." },
];

// TODO: replace the LinkedIn URLs with each person's real profile.
const teamMembers = [
  {
    img: teamImg1,
    name: "Marcus Webb",
    role: "Co-Founder, Head of Product — former Chief Estimator, 9 years",
    linkedin: "https://www.linkedin.com/company/bidconnectors",
    email: "marcus@bidconnectors.com",
  },
  {
    img: teamImg2,
    name: "Elena Torres",
    role: "Co-Founder, Engineering Lead",
    linkedin: "https://www.linkedin.com/company/bidconnectors",
    email: "elena@bidconnectors.com",
  },
  {
    img: teamImg3,
    name: "Jordan Pike",
    role: "Field Advisor — 15 years as a GC superintendent",
    linkedin: "https://www.linkedin.com/company/bidconnectors",
    email: "jordan@bidconnectors.com",
  },
  {
    img: teamImg4,
    name: "Nicholas A. Davis",
    role: "Customer Success Lead",
    linkedin: "https://www.linkedin.com/company/bidconnectors",
    email: "nicholas@bidconnectors.com",
  },
];

function About() {
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
      </Helmet>

      {/* Keep className="about-page": solutions.css defines the same
          banner class names for the Subcontractors page. */}
      <main className="about-page">

        {/* ================= BANNER ================= */}
        <section className="about-banner">
          <div className="container">
            <div className="banner-content">

              <h1>
                Built By People Who Used to <span>Chase Bids the Hard Way</span>
              </h1>

              <p>
                Three estimators, a shared spreadsheet, and about forty browser
                tabs a day, that's genuinely how this started, not in a pitch
                deck. We got sick of losing entire mornings to public bid
                boards that looked like they hadn't been touched since 2009,
                so we built the tool we wished someone else had already made.
              </p>

              {/* Was linking to the external register page despite the label. */}
              <a href="#team" className="banner-btn">
                Meet the Team <i className="bi bi-arrow-down"></i>
              </a>

            </div>
          </div>
        </section>

        {/* ================= STATS ================= */}
        <StatsSection
          stats={[
            { value: '2021', label: 'Year Bid Connectors Opened For Business' },
            { value: '41', label: 'Cities Our Founding Team Bid Work' },
            { value: '6.2 hrs', label: 'Avg. Weekly Search Time Cut For Early Users' },
            { value: '112', label: 'Data Sources Checked Each Morning' },
          ]}
        />

        {/* ================= OUR STORY ================= */}
        <section className="our-story-sec">
          <div className="container">
            <div className="row align-items-center">

              <div className="col-lg-6 col-md-6 col-12 mb-4 mb-md-0">
                <div className="left_content">

                  <h2>It Started With a Frustrated Estimator, Not a Business Plan</h2>

                  <p>
                    Marcus Webb spent nine years estimating electrical work
                    for a mid-size general contractor in Ohio. Twice a week,
                    more or less, he'd burn a whole morning cross-referencing
                    five county procurement sites, one state portal, and a
                    handful of private plan rooms just to land on three
                    projects actually worth bidding.
                  </p>
                  <p>
                    He wasn't the only one doing this. The first version of
                    Bid Connectors matched exactly one trade, in exactly one
                    state. It wasn't much to look at. Four contractors asked
                    to pay for it anyway, before there was even a pricing
                    page to send them.
                  </p>

                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-12">
                <div className="right_col">

                  <img
                    src={storyImg}
                    alt="BidConnectors founder story showing a construction estimator researching multiple project opportunities"
                  />

                  <div className="stats-wrapper">

                    {/* Was 2007, which contradicted the 2021 founding year
                        in the stats band above. */}
                    <div className="stat-box">
                      <p>Founded</p>
                      <h3>2021</h3>
                    </div>

                    <div className="divider"></div>

                    <div className="stat-box">
                      <p>Headquarters</p>
                      <h3>Columbus, OH</h3>
                    </div>

                    <div className="divider"></div>

                    <div className="stat-box">
                      <p>Accounts Served</p>
                      <h3 className="highlight">7,400+</h3>
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= MISSION & VISION ================= */}
        <section className="mission-vision-section">
          <div className="container">

            <div className="mission-vision-header">
              <span className="about-badge">Why We Exist</span>
              {/* Heading added: .mission-vision-title was styled but never rendered. */}
              <h2 className="mission-vision-title">
                What We're Actually Trying to <span>Do Here</span>
              </h2>
            </div>

            <div className="row g-4 mission-vision-grid">

              <div className="col-lg-6 col-md-6">
                <div className="mission-vision-card h-100">
                  <div className="mission-vision-icon-wrap">
                    <i className="bi bi-bullseye"></i>
                  </div>
                  <h3>Our Mission</h3>
                  <p>
                    Give a five-person electrical outfit the same first look
                    at a project that a 500-person national contractor gets,
                    before the deadline makes it irrelevant.
                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="mission-vision-card h-100">
                  <div className="mission-vision-icon-wrap">
                    <i className="bi bi-eye"></i>
                  </div>
                  <h3>Our Vision</h3>
                  <p>
                    A construction industry where finding a relevant project
                    takes minutes, not a decade of relationships and a
                    rolodex of city clerks.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ================= CORE VALUES ================= */}
        <section className="core-values-section">
          <div className="container">

            <div className="text-center mb-5">
              <span className="about-badge">Our Core Values</span>
              <h2 className="values-title">
                We Stand Out For <span>A Reason</span>
              </h2>
              <p className="values-subtitle">
                None of this is printed on a poster in some offices. We
                don't have an office. But every product decision gets run
                through these three filters.
              </p>
            </div>

            <div className="row g-4">
              {/* Icons added: .value-icon was styled but never rendered. */}
              {coreValues.map((value, i) => (
                <div className="col-lg-4 col-md-6" key={value.title}>
                  <div
                    className="value-card"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="value-icon">
                      <i className={value.icon}></i>
                    </div>
                    <h3>{value.title}</h3>
                    <p>{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ================= PROCESS ================= */}
        <section className="process-section">
          <div className="container">

            <div className="text-center">
              <span className="about-badge">Behind The Scenes</span>
              <h2 className="section-title">
                How a Notice Becomes a <span>Bid-Ready Package</span>
              </h2>
              <p className="section-desc">
                Four steps happen before a project ever lands in your feed.
              </p>
            </div>

            <div className="row g-4 process-grid">
              {processSteps.map((item, i) => (
                <div key={item.id} className="col-lg-3 col-md-6 col-sm-12">
                  <div
                    className="process-step"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <span>{String(item.id).padStart(2, '0')}</span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ================= TEAM ================= */}
        <section className="team-section" id="team">
          <div className="container">

            <h2 className="section-title">
              The Four People Most Likely to Answer Your Support Email
            </h2>

            <div className="team-grid">
              {/* Social links added: .social-icons was styled but never rendered.
                  Real anchors, not bare <i>, so they're keyboard reachable. */}
              {teamMembers.map((member, i) => (
                <div
                  className="team-card"
                  key={member.name}
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <img src={member.img} alt={member.name} className="team-img" />
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>

                  <div className="social-icons">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href={`mailto:${member.email}`} aria-label={`Email ${member.name}`}>
                      <i className="bi bi-envelope"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ================= TESTIMONIALS ================= */}
        <Testimonials
          badge="TESTIMONIALS"
          heading="Why Contractors Trust Us"
          highlight="With Their Morning Routine"
          subtitle="Real feedback from the people who use Bid Connectors every day."
          testimonials={aboutTestimonials}
        />

        {/* ================= FAQ ================= */}
        <FaqComponent
          title="Quick Answers"
          highlight="About Us"
          description="Before you ask — a few things worth knowing up front."
          faqs={aboutFaqs}
        />

        {/* ================= CTA ================= */}
        <CTASection
          titleLine1="We Built the Tool We Couldn't Find."
          titleHighlight="Try the One We Ended Up With."
          subText="No sales call required to see what's currently open in your trade and area."
          primaryBtnText="See Open Projects"
          primaryBtnLink="https://bidconnectors.com/bidconnectors/register"
          primaryBtnNewTab={true}
          secondaryBtnText="Talk to Sales"
          secondaryBtnLink="https://bidconnectors.com/bidconnectors/register"
          secondaryBtnNewTab={true}
          noteText="No credit card · Free forever plan · Cancel anytime"
        />
      </main>
    </>
  );
}

export default About;