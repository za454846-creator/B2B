import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

// home.css for shared tokens/components, contact.css last so it can override.
import '../assets/css/style.css';
import '../assets/css/home.css';
import '../assets/css/contact.css';

// No brand in the title — App.js's titleTemplate already appends it.
const PAGE_URL = 'https://www.bidconnectors.com/contact-us';
const PAGE_TITLE = 'Contact Us';
const PAGE_DESCRIPTION =
  'Bid Connectors team is available 24/7 to support customers, answer their questions, and help them find the best trade-specific projects. Fill out the form and get insights from experts.';
const PAGE_IMAGE = 'https://www.bidconnectors.com/og/contact.jpg';

// TODO: set this (Formspree, Netlify Forms, or your own /api/contact).
// Left blank, the form shows an error instead of a fake success message.
const FORM_ENDPOINT = '';

// Single source for contact details — schema, cards and map all read from here.
// TODO: the 555 prefix is reserved for fiction; swap in the real numbers.
const CONTACT = {
  phones: ['+1 (614) 555-0142', '+1 (614) 555-0188'],
  emails: ['hello@bidconnectors.com', 'support@bidconnectors.com'],
  address: {
    street: '250 East Broad Street',
    locality: 'Columbus',
    region: 'OH',
    postalCode: '43215',
    country: 'US',
  },
};

const addressLine = `${CONTACT.address.street}, ${CONTACT.address.locality}, ${CONTACT.address.region} ${CONTACT.address.postalCode}`;

// Map is derived from the address so the two can't drift apart.
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(addressLine)}&output=embed`;

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: PAGE_TITLE,
  url: PAGE_URL,
  about: {
    '@type': 'Organization',
    name: 'Bid Connectors',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: CONTACT.phones[0],
        contactType: 'customer service',
        email: CONTACT.emails[0],
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT.address.street,
      addressLocality: CONTACT.address.locality,
      addressRegion: CONTACT.address.region,
      postalCode: CONTACT.address.postalCode,
      addressCountry: CONTACT.address.country,
    },
  },
};

const EMPTY_FORM = { name: '', email: '', phone: '', message: '' };

const ContactUs = () => {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Was a setTimeout that showed "Message Sent!" without sending anything.
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      if (!FORM_ENDPOINT) {
        throw new Error('FORM_ENDPOINT is not configured');
      }

      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      setFormData(EMPTY_FORM);
      setStatus('sent');
    } catch (err) {
      console.error('Contact form submission failed:', err);
      setStatus('error');
    }
  };

  const sending = status === 'sending';

  return (
    <>
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <link rel="canonical" href={PAGE_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={PAGE_IMAGE} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={PAGE_IMAGE} />

        {/* Structured data: contact info */}
        <script type="application/ld+json">
          {JSON.stringify(contactSchema)}
        </script>
      </Helmet>

      {/* Keep className="contact-page": contact.css is scoped to it. */}
      <main className="contact-page">

        {/* ================= BANNER ================= */}
        <section className="contact-banner" aria-labelledby="contact-heading">
          <div className="container">
            <div className="banner-inner">

              <span className="contact-eyebrow">Get In Touch</span>

              <h1 id="contact-heading">
                Talk to a Person, <span>Not a Bot</span>
              </h1>

              <p>
                Whether you're comparing plans, checking coverage in your
                service area, or just want to see the platform before setting
                up an account, someone on our team can walk you through it.
              </p>

              {/* Said "Browse Open Projects" and opened the register page,
                  while the copy above pointed at the form. */}
              <a href="#contact-form" className="banner-btn">
                Send Us a Message <i className="bi bi-arrow-down" aria-hidden="true"></i>
              </a>

            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section className="contact-section" aria-label="Contact information and form">
          <div className="container">

            {/* ---------- Info cards ---------- */}
            <div className="cards-grid">

              <div className="contact-card">
                <i className="bi bi-telephone-fill" aria-hidden="true"></i>
                <h2>Phone</h2>
                <p>
                  {CONTACT.phones.map((phone) => (
                    <React.Fragment key={phone}>
                      <a href={`tel:${phone.replace(/[^+\d]/g, '')}`}>{phone}</a>
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>

              <div className="contact-card">
                <i className="bi bi-envelope-fill" aria-hidden="true"></i>
                <h2>Email</h2>
                <p>
                  {CONTACT.emails.map((email) => (
                    <React.Fragment key={email}>
                      <a href={`mailto:${email}`}>{email}</a>
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>

              <div className="contact-card">
                <i className="bi bi-geo-alt-fill" aria-hidden="true"></i>
                <h2>Address</h2>
                <p>
                  {CONTACT.address.street}
                  <br />
                  {CONTACT.address.locality}, {CONTACT.address.region}{' '}
                  {CONTACT.address.postalCode}
                </p>
              </div>

            </div>

            {/* ---------- Form + map ---------- */}
            <div className="contact-grid">

              <div className="form-wrapper" id="contact-form">
                <h2>Send a Message</h2>
                <p className="form-intro">
                  Fill out the form and we'll get back to you within one
                  business day.
                </p>

                {/* aria-live so the status change is announced. */}
                <div aria-live="polite">
                  {status === 'sent' ? (
                    <div className="form-status form-status-success">
                      <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
                      <h3>Message sent</h3>
                      <p>Thanks for reaching out. We'll respond shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate>

                      {status === 'error' && (
                        <p className="form-error">
                          <i className="bi bi-exclamation-triangle-fill" aria-hidden="true"></i>
                          <span>
                            That didn't send. Try again, or email us directly at{' '}
                            <a href={`mailto:${CONTACT.emails[0]}`}>
                              {CONTACT.emails[0]}
                            </a>
                            .
                          </span>
                        </p>
                      )}

                      <div className="form-group">
                        <label htmlFor="contact-name" className="visually-hidden">
                          Your name
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          autoComplete="name"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="contact-email" className="visually-hidden">
                          Email address
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email address"
                          autoComplete="email"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="contact-phone" className="visually-hidden">
                          Phone number
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone number (optional)"
                          autoComplete="tel"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="contact-message" className="visually-hidden">
                          Your message
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="What can we help with?"
                          required
                        />
                      </div>

                      <button type="submit" className="submit-btn" disabled={sending}>
                        {sending ? (
                          <>
                            <span className="spinner" aria-hidden="true"></span>
                            Sending
                          </>
                        ) : (
                          <>
                            <i className="bi bi-send-fill" aria-hidden="true"></i>
                            Send message
                          </>
                        )}
                      </button>

                    </form>
                  )}
                </div>
              </div>

              <div className="map-wrapper">
                <iframe
                  title={`Bid Connectors office in ${CONTACT.address.locality}, ${CONTACT.address.region}`}
                  src={MAP_SRC}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactUs;