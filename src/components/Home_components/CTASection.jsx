import React from "react";
import "../../assets/css/Home.css";

const CTASection = () => {
  return (
    <section className="cta-section">

      {/* glow background */}
      <div className="cta-glow"></div>

      <div className="cta-container">

        {/* Heading */}
        <h2 className="cta-title">
          <span>Your Next $5M Project</span>
          <br />
          <span className="highlight">Is Already Here.</span>
        </h2>

        {/* Subtext */}
        <p className="cta-subtext">
          Join 9,200+ contractors who stopped guessing and started
          <br />
          winning. Free to start — no credit card needed.
        </p>

        {/* Buttons */}
        <div className="cta-buttons">

          <button className="btn-primary">
            Start Finding Projects <span>→</span>
          </button>

          <button className="btn-secondary">
            <span>☎</span> Schedule a Demo
          </button>

        </div>

        {/* footer note */}
        <p className="cta-note">
          No credit card · Free forever plan · Cancel anytime
        </p>

      </div>
    </section>
  );
};

export default CTASection;