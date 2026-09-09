import { useState } from "react";
import '../../assets/css/home.css';
import '../../assets/css/style.css';


export default function Pricing() {
  const [hovered, setHovered] = useState(null);

  const plans = [
    {
      name: "Starter",
      desc: "For a single estimator testing the platform",
      price: "$0",
      period: "/month",
      btnLabel: "Start Free",
      btnStyle: "outline",
      features: [
        { label: "30 project views/month", included: true },
        { label: "Basic trade & location filters", included: true },
        { label: "Weekly email alerts", included: true },
        { label: "Bid package assembly", included: false },
        { label: "Trade partner directory", included: false },
      ],
    },
    {
      name: "Growth",
      desc: "For active subcontractors and small GCs",
      price: "$149",
      period: "/month",
      highlight: true,
      badge: "Most Popular",
      btnLabel: "Start 14-Day Trial",
      btnStyle: "filled",
      features: [
        { label: "Unlimited project views", included: true },
        { label: "Advanced filters + saved searches", included: true },
        { label: "Bid package assembly", included: true },
        { label: "Takeoff Studio (300 pages/mo)", included: true },
        { label: "Trade partner directory access", included: true },
        { label: "Bid readiness check", included: true },
      ],
    },
    {
      name: "Enterprise",
      desc: "For general contractors and multi-office firms",
      price: "Custom",
      btnLabel: "Talk to Sales",
      btnStyle: "outline",
      features: [
        { label: "Everything in Growth", included: true },
        { label: "Unlimited takeoff pages", included: true },
        { label: "Team seats (10+)", included: true },
        { label: "API access & integrations", included: true },
        { label: "Dedicated account manager", included: true },
        { label: "Custom reporting", included: true },
      ],
    },
  ];

  const CheckIcon = () => (
    <svg width="16" height="16">
      <path d="M3 8l3.5 3.5L13 4.5" stroke="#e8763a" strokeWidth="2"/>
    </svg>
  );

  const XIcon = () => (
    <svg width="16" height="16">
      <path d="M4.5 4.5l7 7M11.5 4.5l-7 7" stroke="#555" strokeWidth="1.8"/>
    </svg>
  );

  return (
    <div className="pricing">
      <div className="container">

        {/* HEADER */}
        <div className="pricing-header">
          {/* <span className="badge">Pricing</span> */}

            <div className="hero-live-badge mb-4">
              <span className="hero-live-dot"></span>
              <span>Pricing</span>
            </div>
          <h2 className="mt-3">
            Plans Built Around <span>How Many Projects You Chase</span>
          </h2>
          <p>Start free! Upgrade when you need more views, more filters, or a bigger team.</p>
        </div>

        {/* pricing_cardS */}
        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <div key={i} className={`pricing_card ${plan.highlight ? "highlight" : ""}`}>

              {plan.badge && <div className="pricing_card-badge">{plan.badge}</div>}

              <h3>{plan.name}</h3>
              <p className="desc">{plan.desc}</p>

              <div className="price">
                <span>{plan.price}</span>
                {plan.period && <small>{plan.period}</small>}
              </div>

              <ul>
                {plan.features.map((f, j) => (
                  <li key={j}>
                    {f.included ? <CheckIcon /> : <XIcon />}
                    <span className={f.included ? "" : "disabled"}>
                      {f.label}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`${plan.btnStyle} ${hovered === i ? "hover" : ""}`}
              >
                {plan.btnLabel}
              </button>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}