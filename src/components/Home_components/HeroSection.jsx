import React, { useEffect, useRef } from 'react';
import '../../assets/css/home.css';
import '../../assets/css/style.css';
import heroBg from '../../assets/Images/hero-bgs.webp';
/* =========================
   FEED DATA
========================= */
const feedItems = [
  {
    badge: 'WIN RATE',
    badgeColor: '#22c55e',
    time: '12s ago',
    title: 'Radial — $8.2M Electrical',
    sub: 'Pctric · Phoenix, AZ',
  },
  {
    badge: 'BID SENT',
    badgeColor: '#6366f1',
    time: '38s ago',
    title: 'Skyline Tower Phase II — $28.7M',
    sub: 'Apex HVAC · Miami, FL',
  },
  {
    badge: 'NEW MATCH',
    badgeColor: '#f59e0b',
    time: '45s ago',
    title: 'NovaTech Manufacturing — $67M',
    sub: 'AI Score: 87% match · Phoenix, AZ',
  },
  {
    badge: 'ESTIMATING',
    badgeColor: '#8b5cf6',
    time: '1m ago',
    title: 'Lincoln Elementary — Takeoff 73% done',
    sub: 'Patterson Building · Denver, CO',
  },
  {
    badge: 'ADDENDUM',
    badgeColor: '#ec4899',
    time: '2m ago',
    title: 'Mercy Hospital — Addendum #3 posted',
    sub: 'Scope change: MEP updates · Chicago, IL',
  },
];

/* =========================
   PIPELINE DATA (updated: Monthly Performance Overview)
========================= */
const pipelineStats = [
  { num: '183', label: 'Active Leads' },
  { num: '62', label: 'Bids Submitted' },
  { num: '22', label: 'Shortlisted Opportunities' },
];

/* =========================
   ICON MAP (SMART AVATAR)
========================= */
const getIcon = (badge) => {
  switch (badge) {
    case 'WIN RATE':
      return 'bi-trophy-fill';
    case 'BID SENT':
      return 'bi-send-fill';
    case 'NEW MATCH':
      return 'bi-stars';
    case 'ESTIMATING':
      return 'bi-calculator';
    case 'ADDENDUM':
      return 'bi-file-earmark-text';
    default:
      return 'bi-person-circle';
  }
};

/* =========================
   COMPONENT
========================= */
const HeroSection = () => {
  const scrollRef = useRef(null);

  /* AUTO SCROLL */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let pos = 0;
    let frame;

    const animate = () => {
      pos += 0.5;

      if (pos >= el.scrollHeight / 2) {
        pos = 0;
      }

      el.scrollTop = pos;
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section  className="hero-section"style={{ backgroundImage: `url(${heroBg})` }}>

      <div className="container">
        <div className="row align-items-center g-5">

          {/* ================= LEFT ================= */}
          <div className="col-lg-6">

            <div className="hero-live-badge mb-4">
              <span className="hero-live-dot"></span>
              <span>1000+ New Opportunities Every Week</span>
            </div>

            <h1 className="hero-heading mb-4">
              Every Bid Starts With Finding<br />
              the <span className="hero-orange-italic">Right Job</span>.
            </h1>

            <p className="hero-subtext mb-4">
              Bid Connectors tracks commercial and public construction
              opportunities across the U.S. and matches them to your trade,
              service area, and typical contract size. Find projects
              effortlessly, track your bids, and win commercial projects faster!
            </p>

            <div className="d-flex gap-3 mb-4 flex-wrap position-relative z-1">
              <a href="https://bidconnectors.com/bidconnectors/register" target="_blank"><button className="hero-btn-primary">
                Browse Open Projects
              </button></a>
              <a href="https://bidconnectors.com/bidconnectors/register" target="_blank"><button className="hero-btn-secondary">
                Help Me Bid
              </button></a>
            </div>

          </div>

          {/* ================= RIGHT ================= */}
          <div className="col-lg-6">

            <div className="feed-card">

              {/* HEADER */}
              <div className="feed-card-header d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                  <span className="feed-dot"></span>
                  <span className="feed-card-title">Live Activity Feed</span>
                </div>
                <span className="feed-card-time">Just now</span>
              </div>

              {/* FEED */}
              <div className="feed-scroll" ref={scrollRef}>

                {[...feedItems, ...feedItems].map((item, i) => (
                  <div className="feed-item" key={i}>

                    {/* ✅ ICON AVATAR (FIXED) */}
                    <div className="feed-avatar d-flex align-items-center justify-content-center">
                      <i className={`bi ${getIcon(item.badge)}`}></i>
                    </div>

                    <div>

                      <div className="d-flex align-items-center gap-2 mb-1">

                        <span
                          className="feed-badge"
                          style={{
                            background: item.badgeColor + '22',
                            color: item.badgeColor,
                            border: `1px solid ${item.badgeColor}44`,
                          }}
                        >
                          {item.badge}
                        </span>

                        <span className="feed-time">{item.time}</span>

                      </div>

                      <div className="feed-title">{item.title}</div>
                      <div className="feed-sub">{item.sub}</div>

                    </div>

                  </div>
                ))}

              </div>

              {/* PIPELINE */}
              <div className="pipeline">

                <div className="pipeline-label">
                  Monthly Performance Overview
                </div>

                <div className="d-flex justify-content-between mb-2">

                  {pipelineStats.map((item, i) => (
                    <div key={i} className="text-center">
                      <div className="pipeline-num">{item.num}</div>
                      <div className="pipeline-sub">{item.label}</div>
                    </div>
                  ))}

                </div>

                <div className="pipeline-meta">
                  Success Rate <span style={{ color: '#E86129' }}>27.3%</span>
                  &nbsp;•&nbsp;
                  Pipeline Value <span className="text-white">$31.2M</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default HeroSection;