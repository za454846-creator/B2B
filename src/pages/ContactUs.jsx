// ContactUs.jsx - Clean & Professional Contact Component
import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <>


      <style>{`
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .contact-page {
          font-family: 'Inter', sans-serif;
          background: #111111;
        }
        
        .container {
          max-width: 1250px;
          margin: 0 auto;
          padding: 0 16px;
        }
        
        /* Banner Section */
        .banner {
          background: linear-gradient(135deg, #111111 0%, #1a1a1a 100%);
          padding: 80px 0;
          text-align: center;
        }
        
        .banner h1 {
          font-size: 56px;
          font-weight: 800;
          color: white;
          margin-bottom: 16px;
        }
        
        .banner h1 span {
          color: #E86129;
        }
        
        .banner p {
          font-size: 18px;
          color: #9CA3AF;
          max-width: 600px;
          margin: 0 auto;
        }
        
        /* Contact Section */
        .contact-section {
          padding: 80px 0;
        }
        
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
        }
        
        /* Cards */
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 48px;
        }
        
        .contact-card {
    background: #050505;
    padding: 32px 24px;
    border-radius: 16px;
    text-align: center;
    transition: all 0.3s ease;
    box-shadow: 0 10px 35px 0px rgba(207, 69, 37, 0.3);
        }
        
        .contact-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
        }
        
        .contact-card i {
          font-size: 40px;
          color: #E86129;
          margin-bottom: 16px;
          display: inline-block;
        }
        
        .contact-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
        }
        
        .contact-card p {
          font-size: 14px;
          color: #fff;
          line-height: 1.6;
        }
        
        .contact-card a {
          color: #E86129;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
        }
        
        /* Form */
        .form-wrapper {
          background: #050505;
          padding: 40px;
          border-radius: 16px;
          box-shadow: 0 20px 25px -5px rgba(0,0,0,0.05);
        }
        
        .form-wrapper h2 {
          font-size: 28px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 8px;
        }
        
        .form-wrapper p {
          color: #ffffff;
          margin-bottom: 32px;
        }
        
        .form-group {
          margin-bottom: 24px;
        }
        
        .form-group input,
        .form-group textarea {
    width: 100%;
    padding: 14px 16px;
    border-bottom: 1px solid #E5E7EB;
    border-radius: 0;
    background: transparent;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    transition: all 0.3s ease;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
        }
                .form-group input,
        .form-group textarea ::placeholder{
        color:#ffffff;        }
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #E86129;
          box-shadow: 0 0 0 3px rgba(232,97,41,0.1);
        }
        
        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }
        
        .submit-btn {
          width: 100%;
          background: #E86129;
          color: white;
          padding: 14px;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        
        .submit-btn:hover:not(:disabled) {
          background: #d4561e;
          transform: translateY(-2px);
        }
        
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .spinner {
          width: 18px;
          height: 18px;
          border: 2px solid white;
          border-top-color: transparent;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        .success-message {
          background: #F0FDF4;
          border: 1px solid #BBF7D0;
          border-radius: 12px;
          padding: 20px;
          text-align: center;
        }
        
        .success-message i {
          font-size: 48px;
          color: #22C55E;
          margin-bottom: 12px;
        }
        
        .success-message h3 {
          color: #166534;
          margin-bottom: 4px;
        }
        
        /* Map */
        .map-wrapper {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 25px -5px rgba(0,0,0,0.05);
          height: 100%;
          min-height: 500px;
        }
        
        .map-wrapper iframe {
          width: 100%;
          height: 100%;
          border: none;
        }
        
        /* Responsive */
        @media (max-width: 1024px) {
          .banner h1 { font-size: 48px; }
        }
        
        @media (max-width: 768px) {
          .banner { padding: 60px 0; }
          .banner h1 { font-size: 36px; }
          .banner p { font-size: 16px; }
          .contact-section { padding: 60px 0; }
          .contact-grid { grid-template-columns: 1fr; gap: 32px; }
          .cards-grid { grid-template-columns: 1fr; gap: 16px; margin-bottom: 32px; }
          .form-wrapper { padding: 32px; }
          .form-wrapper h2 { font-size: 24px; }
        }
        
        @media (max-width: 480px) {
          .banner h1 { font-size: 28px; }
          .form-wrapper { padding: 24px; }
        }
      `}</style>

      <div className="contact-page">
        {/* Banner */}
        <div className="banner">
          <div className="container">
            <h1>Contact <span>Us</span></h1>
            <p>Get in touch with our team. We're here to help you with your construction projects.</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="contact-section">
          <div className="container">
            {/* 3 Cards */}
            <div className="cards-grid">
              <div className="contact-card">
                <i className="bi bi-telephone-fill"></i>
                <h3>Phone</h3>
                <p>+1 (555) 123-4567<br />+1 (555) 987-6543</p>
              </div>

              <div className="contact-card">
                <i className="bi bi-envelope-fill"></i>
                <h3>Email</h3>
                <p>hello@buildpulse.com<br />support@buildpulse.com</p>
              </div>

              <div className="contact-card">
                <i className="bi bi-geo-alt-fill"></i>
                <h3>Address</h3>
                <p>123 Construction Avenue<br />New York, NY 10001</p>
              </div>
            </div>

            {/* Form + Map */}
            <div className="contact-grid">
              {/* Form */}
              <div className="form-wrapper">
                <h2>Send a Message</h2>
                <p>Fill out the form and we'll get back to you within 24 hours.</p>

                {submitted ? (
                  <div className="success-message">
                    <i className="bi bi-check-circle-fill"></i>
                    <h3>Message Sent!</h3>
                    <p>Thanks for reaching out. We'll respond shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                      />
                    </div>

                    <div className="form-group">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        required
                      />
                    </div>

                    <button type="submit" className="submit-btn" disabled={loading}>
                      {loading ? (
                        <>
                          <span className="spinner"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-send-fill"></i>
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Map */}
              <div className="map-wrapper">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937932772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316bb7e0d5%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1644262071856!5m2!1sen!2sus"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;