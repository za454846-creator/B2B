import React, { useState } from "react";
import "../../assets/css/home.css";
import projectImg1 from "../../assets/Images/workflow1.webp";
import projectImg2 from "../../assets/Images/workflow2.webp";
import projectImg3 from "../../assets/Images/workflow3.webp";
import projectImg4 from "../../assets/Images/workflow4.webp";


const PlatformSection = () => {
  const [activeTab, setActiveTab] = useState("projects");

  const tabData = {
    projects: {
      title: "New Projects, Delivered the Day They're Posted",
      desc: "Bid Connectors monitors thousands of public agency sites, private developer filings, and plan rooms every day, adding new commercial and public construction opportunities as they're published.",
      features: [
        "Custom trade and service-area filters",
        "Same-day email and SMS alerts",
        "Full project detail before you commit to a bid",
      ],
      img: projectImg1,
      alt: "BidConnectors construction professionals discussing project opportunities and bids",
    },
    bids: {
      title: "Assemble and Track Every Bid in One Place",
      desc: "Bid Connectors pulls plans, specs, and addenda into a ready-to-route bid package, then tracks each submission from draft to award so nothing slips past a deadline.",
      features: [
        "Auto-generated bid packages",
        "Deadline tracking with reminders",
        "Full submission history by project",
      ],
      img: projectImg2,
      alt: "BidConnectors bid management system organizing construction documents and tracking deadlines",
    },
    estimating: {
      title: "Measure and Price Without Leaving the Platform",
      desc: "Takeoff Studio lets you measure area, length, and count directly on uploaded plan sheets, with quantities that carry straight into a cost estimate.",
      features: [
        "On-screen takeoff measurement",
        "Material quantity calculations",
        "Cost breakdown by trade",
      ],
      img: projectImg3,
      alt: "BidConnectors construction estimator measuring digital plans and calculating material quantities and costs",
    },
    pipeline: {
      title: "See Which Opportunities Are Actually Worth Pursuing",
      desc: "Pipeline reporting tracks every opportunity from first view to bid outcome, highlighting which project types, regions, and price ranges convert into wins for your business.",
      features: [
        "Win and loss patterns by trade",
        "Pipeline value forecasting",
        "Weekly performance summary",
      ],
      img: projectImg4,
      alt: "BidConnectors pipeline analytics showing construction project opportunities, win rates, and bid performance",
    },
  };

  const current = tabData[activeTab];

  return (
    <section className="platform-section">
      <div className="container">

        {/* Header */}
        <div className="platform-header text-center">
<span class="badge-features mb-3">Our Work Flow</span>
          <h2 className="platform-title mt-3">
            One Workspace For Every Stage <span>of the Bid.</span>
          </h2>

          <p className="platform-desc">
            From the first time a project appears to the day the bid is due,
            every phase is tracked. Bid Connectors is one place to find it,
            price it, and track it.
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
              className={`platform-tab ${activeTab === "pipeline" ? "active" : ""}`}
              onClick={() => setActiveTab("pipeline")}
            >
              Pipeline's Insights
            </button>
          </div>
        </div>

        {/* Dynamic Content */}
        <div className="row align-items-center platform-content">

          {/* Left */}
          <div className="col-lg-6">
            <h3 className="platform-subtitle">{current.title}</h3>
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
              <img src={current.img} alt={current.alt} className="img-fluid" />

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