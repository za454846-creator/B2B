import { useState } from "react";
import '../../assets/css/Home.css';
import '../../assets/css/Style.css';
export default function Pricing() {
  const [hovered, setHovered] = useState(null);

  const plans = [
    {
      name: "Starter",
      desc: "For solo contractors getting started",
      price: "$0",
      period: "/month",
      btnLabel: "Start Free",
      btnStyle: "outline",
      features: [
        { label: "50 project views/month", included: true },
        { label: "Basic project filters", included: true },
        { label: "Email alerts", included: true },
        { label: "Bid management", included: false },
        { label: "AI insights", included: false },
      ],
    },
    {
      name: "Pro",
      desc: "For growing subcontractors",
      price: "$199",
      period: "/month",
      highlight: true,
      badge: "Most Popular",
      btnLabel: "Start 14-Day Trial",
      btnStyle: "filled",
      features: [
        { label: "Unlimited project views", included: true },
        { label: "Advanced filters + AI matching", included: true },
        { label: "Bid management", included: true },
        { label: "Digital takeoff (500 pg/mo)", included: true },
        { label: "AI win prediction", included: true },
        { label: "Sub network access", included: true },
      ],
    },
    {
      name: "Enterprise",
      desc: "For GCs & large contractors",
      price: "Custom",
      btnLabel: "Talk to Sales",
      btnStyle: "outline",
      features: [
        { label: "Everything in Pro", included: true },
        { label: "Unlimited takeoff pages", included: true },
        { label: "Team management (10+ seats)", included: true },
        { label: "API access & integrations", included: true },
        { label: "Dedicated success manager", included: true },
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
          <span className="badge">Pricing</span>
          <h2>
            Simple Pricing <span>No Surprises</span>
          </h2>
          <p>Start free. Upgrade when you're ready.</p>
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