import React from "react";
import "../../assets/css/Home.css";
const WhyChooseUs = () => {
  return (
    <section className="whychoose-section">
      <div className="container">

        {/* Header */}
        <div className="text-center mb-5">
          <span className="whychoose-badge">WHY CHOOSE US</span>
          <h2 className="mt-2">The Numbers Don’t Lie</h2>
          <p className="text-light opacity-75">
            Real results from real contractors using BuildPulse daily.
          </p>
        </div>

        {/* Grid */}
        <div className="row g-4">

          <div className="col-lg-4 col-md-6">
            <div className="whychoose-card">
              <div className="d-flex align-items-center gap-2 mb-2">
                <i className="bi bi-diagram-3 whychoose-icon"></i>
                <h3 className="mb-0">3.2x</h3>
              </div>
              <h5>More Projects Won</h5>
              <p>Average user wins 3.2x more projects within 6 months.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="whychoose-card">
              <div className="d-flex align-items-center gap-2 mb-2">
                <i className="bi bi-clock whychoose-icon"></i>
                <h3 className="mb-0">12 hrs</h3>
              </div>
              <h5>Saved Per Bid</h5>
              <p>Users save an average of 12 hours per bid.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="whychoose-card">
              <div className="d-flex align-items-center gap-2 mb-2">
                <i className="bi bi-cash-stack whychoose-icon"></i>
                <h3 className="mb-0">$840K</h3>
              </div>
              <h5>Avg Revenue Increase</h5>
              <p>Average annual revenue increase for contractors.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="whychoose-card">
              <div className="d-flex align-items-center gap-2 mb-2">
                <i className="bi bi-check-circle whychoose-icon"></i>
                <h3 className="mb-0">94%</h3>
              </div>
              <h5>On-Time Bids</h5>
              <p>Users submit bids before deadline vs industry average.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="whychoose-card">
              <div className="d-flex align-items-center gap-2 mb-2">
                <i className="bi bi-people whychoose-icon"></i>
                <h3 className="mb-0">96%</h3>
              </div>
              <h5>Retention Rate</h5>
              <p>Users stay active after 30 days of usage.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="whychoose-card">
              <div className="d-flex align-items-center gap-2 mb-2">
                <i className="bi bi-shield-check whychoose-icon"></i>
                <h3 className="mb-0">0</h3>
              </div>
              <h5>Data Breaches</h5>
              <p>SOC 2 certified. Zero breaches since founding.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;