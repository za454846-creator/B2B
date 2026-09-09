// Dashboard.jsx - Cleaned version
import React, { useState } from 'react';
import '../../assets/css/style.css';
import '../../assets/css/home.css';


const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    { label: 'OPEN OPPORTUNITIES', value: '1,842', change: '+16%', changeType: 'up' },
    { label: 'BIDS IN PROGRESS', value: '62', change: '+8%', changeType: 'up' },
    { label: 'WIN RATE', value: '27.3%', change: '+2.1%', changeType: 'up' },
    { label: 'PIPELINE VALUE', value: '$31.2M', change: '+19%', changeType: 'up' }
  ];

  const projects = [
    { title: 'Lakeside Charter School Expansion', value: '$3.8M', days: 'DUE IN 2 DAYS', location: 'Columbus, OH', category: 'K-12 Education' },
    { title: 'Harbor View Apartments, Phase 3', value: '$19.4M', days: 'DUE IN 5 DAYS', location: 'Tampa, FL', category: 'Multifamily' },
    { title: 'Meridian Cold Storage Facility', value: '$9.1M', days: 'DUE IN 9 DAYS', location: 'Reno, NV', category: 'Industrial' }
  ];

  const bidsData = [
    { project: 'University Of Midtown', value: '$48.2M', status: 'Pending', date: 'June 14, 2025' },
    { project: 'NYC Plaza', value: '$15.7M', status: 'Submitted', date: 'May 10, 2026' },
    { project: 'High-Rise DC Apartments', value: '$22.1M', status: 'Won', date: 'Jan 10, 2026' },
    { project: 'Tech Campus Arizona', value: '$15.4M', status: 'Lost', date: 'Feb 1, 2025' }
  ];

  const estimates = [
    { title: 'Lakeside Charter School Expansion', sub: 'K-12 Education, Columbus, OH', percent: 85, value: '$3.8M' },
    { title: 'Harbor View Apartments, Phase 3', sub: 'Multi-Family, Tampa, FL', percent: 60, value: '$19.4M' },
    { title: 'Meridian Cold Storage Facility', sub: 'Industrial · Reno, NV', percent: 30, value: '$9.1M' },
  ];

  const getStatusClass = (status) => {
    switch(status.toLowerCase()) {
      case 'won': return 'status-won';
      case 'lost': return 'status-lost';
      case 'pending': return 'status-pending';
      default: return 'status-submitted';
    }
  };

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: 'bi-bar-chart-fill' },
    { id: 'bid-manager', label: 'Bid Manager', icon: 'bi-clipboard-check-fill' },
    { id: 'estimating', label: 'Estimating', icon: 'bi-calculator-fill' },
    { id: 'analytics', label: 'Analytics', icon: 'bi-graph-up-arrow' }
  ];

  return (
    <div className="dashboard">
      <div className="container">
        <div className="dashboard-demo text-center mb-5">

            <span class="badge-features mb-3">Project Finder Demo</span>
                  <h2 className="dashboard-demo-title">A Real-Time Demo Of Our Project Finder</h2>
                  <p> A smart platform that connects businesses with relevant opportunities and helps brands find the right projects.
 </p>
        </div>
          <div className="dashboard_content">
            <div className="dashboard_nav">
            <div className="project_finder">
              <h2 className="project_heading">ProjectFinder</h2>
              <span className="live-badge">LIVE</span>
            </div>
            <div className="dashboard-actions">
              <button className="icon-btn"><i className="bi bi-bell-fill"></i></button>
              <button className="icon-btn"><i className="bi bi-person-fill"></i></button>
            </div>
          </div>

          <div className="main-layout">
            {/* Vertical Tabs Sidebar */}
            <div className="vertical-tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`vertical-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="tab-icon"><i className={`bi ${tab.icon}`}></i></span>
                  <span className="tab-label">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="tab-content-area">
              {activeTab === 'dashboard' && (
                <div className="dashboard-tab">
                  <div className="stats-grid">
                    {stats.map((stat, idx) => (
                      <div key={idx} className="stat-card">
                        <div className="stat-label">{stat.label}</div>
                        <div className="stat-value">{stat.value}</div>
                        <div className={`stat-change ${stat.changeType}`}>{stat.change}</div>
                      </div>
                    ))}
                  </div>

                  <div className="projects-section">

                    <div className="projects-grid">
                      {projects.map((project, idx) => (
                        <div key={idx} className="project-card">
                          <div className="project-category">{project.category}</div>
                          <h3 className="project-title">{project.title}</h3>
                          <div className="project-value">{project.value}</div>
                          <div className="project-footer">
                            <span>{project.days}</span>
                            <span>{project.location}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'bid-manager' && (
                <div className="bid-manager-tab">
                  <div className="bids-table-container">
                    <table className="bids-table">
                      <thead>
                        <tr><th>Project Name</th><th>Bid Value</th><th>Status</th><th>Submission Date</th></tr>
                      </thead>
                      <tbody>
                        {bidsData.map((bid, idx) => (
                          <tr key={idx}>
                            <td>{bid.project}</td>
                            <td>{bid.value}</td>
                            <td><span className={`status-badge ${getStatusClass(bid.status)}`}>{bid.status}</span></td>
                            <td>{bid.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="bid-summary">
                    <div className="summary-item"><span>Total Bids:</span><strong>{bidsData.length}</strong></div>
                    <div className="summary-item"><span>Win Rate:</span><strong>34.2%</strong></div>
                    <div className="summary-item"><span>Total Value:</span><strong>$86.0M</strong></div>
                  </div>
                </div>
              )}

              {activeTab === 'estimating' && (
                <div className="estimating-tab">
                  <div className="estimates-list">
                    {estimates.map((est, idx) => (
                      <div className="estimate-item" key={idx}>
                        <div className="estimate-info"><h3>{est.title}</h3><p>{est.sub}</p></div>
                        <div className="estimate-progress">
                          <div className="progress-bar"><div className="progress-fill" style={{ width: `${est.percent}%` }}></div></div>
                          <span className="progress-percent">{est.percent}%</span>
                        </div>
                        <div className="estimate-value">{est.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'analytics' && (
                <div className="analytics-tab">
                  <div className="analytics-grid">
                    <div className="analytics-card">
                      <h3>Win Rate Trend</h3>
                      <div className="chart-bars">
                        <div className="chart-bar" style={{height: '60px'}}><span>Jan</span></div>
                        <div className="chart-bar" style={{height: '75px'}}><span>Feb</span></div>
                        <div className="chart-bar" style={{height: '68px'}}><span>Mar</span></div>
                        <div className="chart-bar" style={{height: '82px'}}><span>Apr</span></div>
                        <div className="chart-bar" style={{height: '78px'}}><span>May</span></div>
                      </div>
                      <div className="metric-value">+2.1% <span className="metric-label">vs last month</span></div>
                    </div>
                    <div className="analytics-card">
                      <h3>Pipeline Value by Category</h3>
                      <div className="category-stats">
                        <div className="category-item"><span>Healthcare</span><span className="cat-value">$19M</span></div>
                        <div className="category-item"><span>Multi-Family</span><span className="cat-value">$8M</span></div>
                        <div className="category-item"><span>Industrial</span><span className="cat-value">$12M</span></div>
                        <div className="category-item"><span>Commercial</span><span className="cat-value">$10M</span></div>
                      </div>
                    </div>
                    <div className="analytics-card full-width">
                      <h3>Key Metrics</h3>
                      <div className="metrics-row">
                        <div className="metric-box"><div className="metric-num">74</div><div className="metric-desc">Total Bids</div></div>
                        <div className="metric-box"><div className="metric-num">$31M</div><div className="metric-desc">Pipeline Value</div></div>
                        <div className="metric-box"><div className="metric-num">1012</div><div className="metric-desc">Active Leads</div></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;