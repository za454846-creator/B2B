import React, { useEffect, useRef } from 'react';
import '../../assets/css/Home.css';
import '../../assets/css/Style.css';

const feedItems = [
  { badge: 'WIN RATE', badgeColor: '#22c55e', time: '12s ago', title: 'Radial — $8.2M Electrical', sub: 'Pctric · Phoenix, AZ', stat: '+5.1% vs last month' },
  { badge: 'BID SENT', badgeColor: '#6366f1', time: '38s ago', title: 'Skyline Tower Phase II — $28.7M', sub: 'Apex HVAC · Miami, FL' },
  { badge: 'NEW MATCH', badgeColor: '#f59e0b', time: '45s ago', title: 'NovaTech Manufacturing — $67M', sub: 'AI Score: 87% match · Phoenix, AZ' },
  { badge: 'ESTIMATING', badgeColor: '#8b5cf6', time: '1m ago', title: 'Lincoln Elementary — Takeoff 73% done', sub: 'Patterson Building · Denver, CO' },
  { badge: 'ADDENDUM', badgeColor: '#ec4899', time: '2m ago', title: 'Mercy Hospital — Addendum #3 posted', sub: 'Scope change: MEP updates · Chicago, IL' },
];

const pipelineStats = [
  { num: '247', label: 'LEADS', color: '#fff' },
  { num: '89', label: 'BIDS', color: '#fff' },
  { num: '34', label: 'SHORTLISTED', color: '#ffffff' },
  { num: '31', label: 'WON ✓', color: '#ffffff' },
];

const avatarColors = ['#555', '#666', '#777', '#888'];

const HeroSection = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    let pos = 0;
    let animFrame;
    const animate = () => {
      pos += 0.5;
      if (pos >= el.scrollHeight / 2) pos = 0;
      el.scrollTop = pos;
      animFrame = requestAnimationFrame(animate);
    };
    animFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* LEFT */}
          <div className="col-lg-6">

            <div className="hero-live-badge mb-4">
              <span className="hero-live-dot" />
              2,847 projects added this week
              <span className="hero-live-tag">LIVE</span>
            </div>

            <h1 className="hero-heading mb-4">
              <span className="hero-strike">Stop Chasing.</span><br />
              Start <span className="hero-orange-italic">Winning</span><br />
              Projects.
            </h1>

            <p className="hero-subtext mb-4">
              The only preconstruction platform with <strong>real-time leads</strong>,{' '}
              <strong>AI-powered bids</strong>, and <strong>smart estimating</strong> —
              win more commercial projects with less hustle.
            </p>

            <div className="d-flex align-items-center gap-3 flex-wrap mb-4">
              <button className="hero-btn-primary">Find Projects Now</button>
              <span className="hero-or">or</span>
              <button className="hero-btn-secondary">Watch Demo</button>
            </div>

            <div className="d-flex align-items-center gap-3 flex-wrap">
              <div className="hero-avatars">
                {avatarColors.map((bg, i) => (
                  <div key={i} className="hero-avatar" style={{ background: bg }} />
                ))}
                <span className="hero-avatar-count">+9K</span>
              </div>
              <div>
                <div className="hero-proof-bold">9,200+</div>
                <div className="hero-proof-orange">active contractors</div>
              </div>
              <div className="hero-divider-v" />
              <span className="hero-proof-gray">4.9/5 from 1,400+ reviews</span>
              <div className="hero-soc-badge">
                <span className="hero-soc-green">SOC 2</span>
                <span className="hero-proof-gray">Certified</span>
              </div>
            </div>

          </div>

          {/* RIGHT */}
          <div className="col-lg-6">
            <div className="feed-card">

              <div className="feed-card-header d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                  <span className="feed-dot" />
                  <span className="feed-card-title">Live Activity Feed</span>
                </div>
                <span className="feed-card-time">Just now <span className="text-success">•</span></span>
              </div>

              <div className="feed-scroll" ref={scrollRef}>
                {[...feedItems, ...feedItems].map((item, i) => (
                  <div className="feed-item" key={i}>
                    <div className="feed-avatar" />
                    <div className="feed-content">
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
                      {item.stat && <div className="feed-stat">{item.stat}</div>}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pipeline">
                <div className="pipeline-label">YOUR WIN PIPELINE — THIS MONTH</div>
                <div className="d-flex justify-content-between mb-2">
                  {pipelineStats.map((s, i) => (
                    <div key={i} className="text-center">
                      <div className="pipeline-num" style={{ color: s.color }}>{s.num}</div>
                      <div className="pipeline-sub">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="pipeline-meta">
                  Conversion <span style={{ color: '#E86129' }}>34.8%</span>
                  &nbsp;•&nbsp;
                  Value <span className="text-white">$48.2M</span>
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