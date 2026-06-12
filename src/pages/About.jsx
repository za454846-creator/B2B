import React from "react";

import StatsSection from "../components/Home_components/StatsSection";
import Testimonials from "../components/Home_components/Testimonials";
import CTASection from "../components/Home_components/CTASection";
import FaqComponent from "../components/Home_components/FaqComponent";

import "../assets/css/About.css";
import "../assets/css/Style.css";

import storyImg from "../assets/Images/about_pageimage.jpg";
import saraImg from "../assets/Images/44.jpg";

function About() {
  return (
    <>
      {/* ================= BANNER SECTION ================= */}
      <section className="about-banner">
        <div className="container">
          <div className="banner-content">

            <h1>
              We Build What Others <span>Only Imagine</span>
            </h1>

            <p>
              We're a team of strategists, designers, and engineers obsessed
              with creating digital experiences that drive real business results.
            </p>

            <button className="banner-btn">
              Learn More <i className="bi bi-arrow-right"></i>
            </button>

          </div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <StatsSection />

      {/* ================= OUR STORY SECTION ================= */}
      <section className="our-story-sec">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6 col-md-6 col-12 mb-4 mb-md-0">
              <div className="left_content">

                <h2>Started with a Simple Belief</h2>

                <p>We started WinPro with one conviction: great design must serve business outcomes.</p>
                <p>Every pixel, every interaction, every line of code is built for measurable results.</p>
                <p>Our goal is simple — design that converts, not just looks good.</p>

                <button className="banner-btn">
                  Learn More <i className="bi bi-arrow-up-right"></i>
                </button>

              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-12">
              <div className="right_col">

                <img src={storyImg} alt="Our Story" />

                <div className="stats-wrapper">

                  <div className="stat-box">
                    <p>FOUNDED</p>
                    <h3>2019</h3>
                  </div>

                  <div className="divider"></div>

                  <div className="stat-box">
                    <p>HQ</p>
                    <h3>Remote</h3>
                  </div>

                  <div className="divider"></div>

                  <div className="stat-box">
                    <p>CLIENTS</p>
                    <h3 className="highlight">150+</h3>
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

          <div className="mission-vision-header text-center">
            <span className="about-badge">Purpose</span>
            <h2 className="mission-vision-title">Mission & Vision</h2>
          </div>

          <div className="row g-4 mission-vision-grid">

            <div className="col-lg-6 col-md-6">
              <div className="mission-vision-card h-100">
                <div className="mission-vision-icon-wrap">
                  <i className="bi bi-bullseye"></i>
                </div>
                <h3>Our Mission</h3>
                <p>To empower businesses with digital products that perform and drive real growth.</p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="mission-vision-card h-100">
                <div className="mission-vision-icon-wrap">
                  <i className="bi bi-eye"></i>
                </div>
                <h3>Our Vision</h3>
                <p>A world where every digital product delivers measurable business results.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="core-values-section">
        <div className="container">

          <div className="text-center mb-5">
            <span className="about-badge">WHAT DRIVES US</span>
            <h2 className="values-title">Our Core Values</h2>
            <p className="values-subtitle">
              These aren't just words on a wall — they guide every decision we make.
            </p>
          </div>

          <div className="row g-4">

            <div className="col-lg-4 col-md-6">
              <div className="value-card">
                <h3>Results Over Vanity</h3>
                <p>We focus on real business growth.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="value-card">
                <h3>Transparency</h3>
                <p>No hidden costs or surprises.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="value-card">
                <h3>Quality First</h3>
                <p>We focus on performance and detail.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= PROCESS (FIXED - ORIGINAL DESIGN SAME) ================= */}
      <section className="process-section">
        <div className="container">

          <div className="text-center">
            <span className="about-badge">WHAT DRIVES US</span>
            <h2 className="section-title">Our Process</h2>
            <p className="section-desc">
              Here's how we work with our clients to deliver exceptional results.
            </p>
          </div>

          <div className="row process-grid">

            {[
              { id: 1, title: "Discovery", desc: "We start by understanding your business goals and challenges." },
              { id: 2, title: "Planning", desc: "We create a roadmap tailored to your needs." },
              { id: 3, title: "Execution", desc: "We implement strategies with precision." },
              { id: 4, title: "Delivery", desc: "We ensure quality results and satisfaction." }
            ].map((item) => (
              <div key={item.id} className="col-lg-3 col-md-6 col-sm-12">
                <div className="process-step">
                  <span>{item.id}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= TEAM (FIXED - ORIGINAL DESIGN SAME) ================= */}
      <section className="team-section">
        <div className="container">

          <h2 className="section-title">Our Team</h2>

          <div className="team-grid">

            <div className="team-card">
              <img src={saraImg} alt="Ali Khan" className="team-img" />
              <h3>Ali Khan</h3>
              <p className="role">Frontend Developer</p>
            </div>

            <div className="team-card">
              <img src={saraImg} alt="Sara Ahmed" className="team-img" />
              <h3>Sara Ahmed</h3>
              <p className="role">UI/UX Designer</p>
            </div>

            <div className="team-card">
              <img src={saraImg} alt="Usman Tariq" className="team-img" />
              <h3>Usman Tariq</h3>
              <p className="role">Backend Developer</p>
            </div>

            <div className="team-card">
              <img src={saraImg} alt="Ayesha Malik" className="team-img" />
              <h3>Ayesha Malik</h3>
              <p className="role">Project Manager</p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <Testimonials />

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

      {/* ================= CTA ================= */}
<CTASection
  titleLine1="Your Next $5M Project"
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

export default About;