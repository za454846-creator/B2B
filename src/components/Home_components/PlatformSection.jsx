import React, { useState } from "react";
import "../../assets/css/Home.css";
import projectImg from "../../assets/Images/project.jpg";
import bidsimg from "../../assets/Images/bids.jpg";

const PlatformSection = () => {
  const [activeTab, setActiveTab] = useState("projects");

  const tabData = {
    projects: {
      title: "Real-Time Project Leads Delivered Daily",
      desc: "Access 60,000+ commercial construction projects updated in real-time. Filter by location, project type, value, stage, and more.",
      features: ["Smart Filters", "Instant Alerts", "Deep Project Data"],
      img: projectImg,
    },
    bids: {
      title: "Submit Winning Bids Easily",
      desc: "Create professional proposals, track bids, and increase your win rate with smart tools.",
      features: ["Proposal Templates", "Bid Tracking", "Auto Calculations"],
      img: bidsimg,
    },
    estimating: {
      title: "Accurate Estimation Tools",
      desc: "Estimate project costs with precision using built-in smart estimation tools.",
      features: ["Cost Breakdown", "Material Estimation", "Budget Planning"],
     img: projectImg,
    },
    ai: {
      title: "AI Insights for Better Decisions",
      desc: "Leverage AI-powered insights to make smarter project decisions.",
      features: ["Smart Suggestions", "Data Analysis", "Predictive Insights"],
      img: bidsimg,
    },
  };

  const current = tabData[activeTab];

  return (
    <section className="platform-section">
      <div className="container">

        {/* Header */}
        <div className="platform-header text-center">
          <span className="platform-badge">PLATFORM</span>

          <h2 className="platform-title">
            One Platform. <span>Endless Projects.</span>
          </h2>

          <p className="platform-desc">
            Everything you need in one powerful workspace.
          </p>

          {/* Tabs */}
          <div className="platform-tabs d-flex justify-content-center flex-wrap">
            <button
              className={`platform-tab ${activeTab === "projects" ? "active" : ""}`}
              onClick={() => setActiveTab("projects")}
            >
              Find Projects
            </button>

            <button
              className={`platform-tab ${activeTab === "bids" ? "active" : ""}`}
              onClick={() => setActiveTab("bids")}
            >
              Submit Bids
            </button>

            <button
              className={`platform-tab ${activeTab === "estimating" ? "active" : ""}`}
              onClick={() => setActiveTab("estimating")}
            >
              Estimating
            </button>

            <button
              className={`platform-tab ${activeTab === "ai" ? "active" : ""}`}
              onClick={() => setActiveTab("ai")}
            >
              AI Insights
            </button>
          </div>
        </div>

        {/* Dynamic Content */}
        <div className="row align-items-center platform-content">

          {/* Left */}
          <div className="col-lg-6">
            <h2 className="platform-subtitle">{current.title}</h2>
            <p className="platform-text">{current.desc}</p>

            <ul className="platform-features">
              {current.features.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className="col-lg-6">
            <div className="platform-image-wrapper">
              <img src={current.img} alt={current.title} className="img-fluid" />

              <div className="platform-notification">
                🔔 New Match Found!
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PlatformSection;