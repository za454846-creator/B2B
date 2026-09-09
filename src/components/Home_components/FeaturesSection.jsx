import React from 'react';
import '../../assets/css/home.css';
import '../../assets/css/style.css';



const FeaturesSection = () => {
  const features = [
    {
      title: "Opportunity Scanner",
      desc: "Continuously checks public bid boards, agency portals, and private-sector filings, then surfaces only the projects that match your trade, geography, and typical contract size.",
      icon: "bi-search"
    },
    {
      title: "Bid Package Assembler",
      desc: "Pulls plans, specs, addenda, and a sub-trade breakdown into one package, ready to route to your estimating team the same day a project is listed.",
      icon: "bi-file-earmark-text"
    },
    {
      title: "Takeoff Studio",
      desc: "Measure area, length, and count directly on uploaded plan sheets, with quantities that feed straight into your estimate. No separate software needed at all!",
      icon: "bi-pencil-square",
      highlight: true // Teesra card highlighted hai image mein
    },
    {
      title: "Trade Partner Directory",
      desc: "Search a directory of subcontractors and suppliers by trade and region, and send bid invitations without leaving the project page.",
      icon: "bi-people"
    },
    {
      title: "Bid Readiness Check",
      desc: "Compares your license, bonding, and insurance on file against a project's stated requirements before you commit hours to a bid.",
      icon: "bi-shield-check"
    },
    {
      title: "Pipeline Reporting",
      desc: "Tracks every opportunity from first view to bid outcome, so you can see which project types and regions are actually worth pursuing.",
      icon: "bi-graph-up-arrow"
    }
  ];

  return (
    <section className="features-wrapper py-5">
      <div className="container text-center mb-5">
        <span className="badge-features mb-3">FEATURES</span>
        <h2 className="fw-bold mt-3">
          Find A Job And <span className="text-orange">Sign Your Next Contract</span> With Us!
        </h2>
        <p className="text-secondary mx-auto mt-3" style={{ maxWidth: '600px' }}>
          Unlike other construction project databases, we do not stop at
          listing available projects. Here are the six accessible tools
          built around how preconstruction teams actually spend their week.
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
                <h3 className="fw-bold mb-3">{f.title}</h3>
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