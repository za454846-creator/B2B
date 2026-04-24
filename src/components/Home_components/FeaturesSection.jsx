import React from 'react';
import '../../assets/css/Home.css';
import '../../assets/css/Style.css';

const FeaturesSection = () => {
  const features = [
    {
      title: "Project Radar",
      desc: "AI scans 500+ sources daily and surfaces only projects matching your exact trade, location, and size preferences.",
       icon: "bi-shield-check"
    },
    {
      title: "Smart Bid Packages",
      desc: "Auto-generate bid packages with scope, drawings, specs, and sub-tier requirements — ready to send in minutes.",
      icon: "bi-file-earmark-text"
    },
    {
      title: "Digital Takeoff",
      desc: "Measure areas, lengths, and counts directly on PDF plans. Automatic quantity calculations with material databases.",
      icon: "bi-pencil-square",
      highlight: true // Teesra card highlighted hai image mein
    },
    {
      title: "Sub Network",
      desc: "Access a vetted network of 200,000+ subcontractors. Invite subs to bid, compare pricing, and build your crew.",
      icon: "bi-people"
    },
    {
      title: "Compliance Checker",
      desc: "Auto-verify your bid meets all requirements — bonds, insurance, licenses, certifications — before you submit.",
      icon: "bi-shield-check"
    },
    {
      title: "Win/Loss Analytics",
      desc: "Deep analytics on your bidding history. Understand why you win, why you lose, and where to focus your efforts.",
      icon: "bi-graph-up-arrow"
    }
  ];

  return (
    <section className="features-wrapper py-5">
      <div className="container text-center mb-5">
        <span className="badge-features mb-3">FEATURES</span>
        <h2 className=" fw-bold text-white mt-2">
          Built for How You <span className="text-orange">Actually Work</span>
        </h2>
        <p className="text-secondary mx-auto mt-3" style={{ maxWidth: '600px' }}>
          Not another generic tool. Every feature designed by people who've swung hammers and submitted bids.
        </p>
      </div>

      <div className="container">
        <div className="row g-4">
          {features.map((f, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div className={`feature-card ${f.highlight ? 'feature-highlight' : ''}`}>
                <div className="feature-icon-box mb-3">
                  <i className={`bi ${f.icon} ${f.highlight ? 'text-orange' : 'text-white'}`}></i>
                </div>
                <h5 className="text-white fw-bold mb-3">{f.title}</h5>
                <p className="feature-desc">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;