import React from 'react';
import StatsSection from '../components/Home_components/StatsSection';
import "../assets/css/about.css";
import "../assets/css/Style.css";
import storyImg from "../assets/Images/about_pageimage.jpg";
function About() {
  return (
    <>
      <div className="about-banner">
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
              Learn More
            </button>
          </div>
        </div>
      </div>
      <StatsSection />
      <div className="our-story-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="left_content">
                <h2>Started with a Simple Belief</h2>
        <p>We started WinPro with one conviction: great design must serve business outcomes, not just aesthetics. Every pixel we place, every interaction we design, every line of code we write — it all traces back to a measurable result.</p>
<p>We started WinPro with one conviction: great design must serve business outcomes, not just aesthetics. Every pixel we place, every interaction we design, every line of code we write — it all traces back to a measurable result.</p>
<p>We started WinPro with one conviction: great design must serve business outcomes, not just aesthetics. Every pixel we place, every interaction we design, every line of code we write — it all traces back to a measurable result.</p>

           <button className="banner-btn">
              Learn More
            </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
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
      </div>


    </>
  );
}

export default About;