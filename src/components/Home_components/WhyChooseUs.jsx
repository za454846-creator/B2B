import React from "react";
import "../../assets/css/home.css";

const WhyChooseUs = () => {
  return (
    <section className="whychoose-section">
      <div className="container">

        {/* Header */}
        <div className="why_choose_content text-center mb-5">
            <span class="badge-features mb-3">WHY CHOOSE US</span>
          <h2 className="mt-3">What Changes When You Stop Searching Manually</h2>
          <p className="opacity-75">
            Figures reported by active Bid Connectors accounts over the trailing 12 months.
          </p>
        </div>

        {/* Grid */}
        <div className="row g-4">

          <div className="col-lg-4 col-md-6">
            <div className="whychoose-card">
              <div className="d-flex align-items-center gap-3 mb-2">
                <i className="bi bi-diagram-3 whychoose-icon"></i>
                <h3 className="whychoose-number mb-0">2.4x</h3>
              </div>
              <h3 className="whychoose-title mt-3 mt-3">More Qualified Bids Submitted</h3>
              <p>Accounts using saved trade and location searches submit bids on a larger share of projects that fit their business.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="whychoose-card">
              <div className="d-flex align-items-center gap-2 mb-2">
                <i className="bi bi-clock whychoose-icon"></i>
                <h3 className="whychoose-number mb-0">9 hrs</h3>
              </div>
              <h3 className="whychoose-title mt-3">Saved Per Bid Package</h3>
              <p>Average time saved per bid compared with manually sourcing plans, specs, and sub-trade pricing.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="whychoose-card">
              <div className="d-flex align-items-center gap-2 mb-2">
                <i className="bi bi-cash-stack whychoose-icon"></i>
                <h3 className="whychoose-number mb-0">$610K</h3>
              </div>
              <h3 className="whychoose-title mt-3">Avg. Added Pipeline Value</h3>
              <p>Average increase in tracked pipeline value reported by accounts in their first 12 months.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="whychoose-card">
              <div className="d-flex align-items-center gap-2 mb-2">
                <i className="bi bi-check-circle whychoose-icon"></i>
                <h3 className="whychoose-number mb-0">91%</h3>
              </div>
              <h3 className="whychoose-title mt-3">Bids Submitted On Time</h3>
              <p>Share of bids submitted before the stated deadline, based on in-platform activity.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="whychoose-card">
              <div className="d-flex align-items-center gap-2 mb-2">
                <i className="bi bi-people whychoose-icon"></i>
                <h3 className="whychoose-number mb-0">89%</h3>
              </div>
              <h3 className="whychoose-title mt-3">90-Day Account Retention</h3>
              <p>Share of paid accounts still active 90 days after signing up.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="whychoose-card">
              <div className="d-flex align-items-center gap-2 mb-2">
                <i className="bi bi-shield-check whychoose-icon"></i>
                <h3 className="whychoose-number mb-0">0</h3>
              </div>
              <h3 className="whychoose-title mt-3">Confirmed Data Breaches</h3>
              <p>Bid Connectors has not reported a data security incident since launch.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;