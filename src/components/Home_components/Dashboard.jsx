// Dashboard.jsx - Cleaned version
import React, { useState } from 'react';
import '../../assets/css/Home.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    { label: 'ACTIVE LEADS', value: '1,247', change: '+23%', changeType: 'up' },
    { label: 'BIDS SUBMITTED', value: '89', change: '+12%', changeType: 'up' },
    { label: 'WIN RATE', value: '34.2%', change: '+5.1%', changeType: 'up' },
    { label: 'PIPELINE VALUE', value: '$48M', change: '+31%', changeType: 'up' }
  ];

  const projects = [
    { title: 'Mercy Hospital — East Wing', value: '$45.2M', days: '1DAY', location: 'Chicago, IL', category: 'Healthcare' },
    { title: 'Skyline Tower — Phase II', value: '$28.7M', days: '3DAYS', location: 'Miami, FL', category: 'Multi-Family' },
    { title: 'LogiTech Distribution Hub', value: '$5.2M', days: '7DAYS', location: 'Austin, TX', category: 'Industrial' }
  ];

  const bidsData = [
    { project: 'Greenfield School', value: '$12.3M', status: 'Pending', date: 'May 15, 2026' },
    { project: 'Downtown Plaza', value: '$8.7M', status: 'Submitted', date: 'May 10, 2026' },
    { project: 'Riverside Apartments', value: '$22.1M', status: 'Won', date: 'May 5, 2026' },
    { project: 'Tech Campus Building A', value: '$15.4M', status: 'Lost', date: 'Apr 28, 2026' }
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
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'bid-manager', label: 'Bid Manager', icon: '📋' },
    { id: 'estimating', label: 'Estimating', icon: '💰' },
    { id: 'analytics', label: 'Analytics', icon: '📈' }
  ];

  return (
    <div className="dashboard">
      <div className="container dashboard_content">
        <header className="dashboard_nav">
          <div className="project_finder">
            <h1 className="project_heading">ProjectFinder</h1>
            <span className="live-badge">LIVE</span>
          </div>
          <div className="header-actions">
            <button className="icon-btn">🔔</button>
            <button className="icon-btn">👤</button>
          </div>
        </header>

        <div className="main-layout">
          {/* Vertical Tabs Sidebar */}
          <div className="vertical-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`vertical-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="tab-icon">{tab.icon}</span>
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
                  <div className="summary-item"><span>Total Value:</span><strong>$58.5M</strong></div>
                </div>
              </div>
            )}

            {activeTab === 'estimating' && (
              <div className="estimating-tab">
                <div className="estimates-list">
                  <div className="estimate-item">
                    <div className="estimate-info"><h3>Mercy Hospital — East Wing</h3><p>Healthcare • Chicago, IL</p></div>
                    <div className="estimate-progress"><div className="progress-bar"><div className="progress-fill" style={{width: '85%'}}></div></div><span className="progress-percent">85%</span></div>
                    <div className="estimate-value">$45.2M</div>
                  </div>
                  <div className="estimate-item">
                    <div className="estimate-info"><h3>Skyline Tower — Phase II</h3><p>Multi-Family • Miami, FL</p></div>
                    <div className="estimate-progress"><div className="progress-bar"><div className="progress-fill" style={{width: '60%'}}></div></div><span className="progress-percent">60%</span></div>
                    <div className="estimate-value">$28.7M</div>
                  </div>
                  <div className="estimate-item">
                    <div className="estimate-info"><h3>LogiTech Distribution Hub</h3><p>Industrial • Austin, TX</p></div>
                    <div className="estimate-progress"><div className="progress-bar"><div className="progress-fill" style={{width: '30%'}}></div></div><span className="progress-percent">30%</span></div>
                    <div className="estimate-value">$5.2M</div>
                  </div>
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
                    <div className="metric-value">+5.1% <span className="metric-label">vs last month</span></div>
                  </div>
                  <div className="analytics-card">
                    <h3>Pipeline Value by Category</h3>
                    <div className="category-stats">
                      <div className="category-item"><span>Healthcare</span><span className="cat-value">$52M</span></div>
                      <div className="category-item"><span>Multi-Family</span><span className="cat-value">$38M</span></div>
                      <div className="category-item"><span>Industrial</span><span className="cat-value">$24M</span></div>
                      <div className="category-item"><span>Commercial</span><span className="cat-value">$31M</span></div>
                    </div>
                  </div>
                  <div className="analytics-card full-width">
                    <h3>Key Metrics</h3>
                    <div className="metrics-row">
                      <div className="metric-box"><div className="metric-num">89</div><div className="metric-desc">Total Bids</div></div>
                      <div className="metric-box"><div className="metric-num">$48M</div><div className="metric-desc">Pipeline Value</div></div>
                      <div className="metric-box"><div className="metric-num">1,247</div><div className="metric-desc">Active Leads</div></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;