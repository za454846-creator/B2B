import React from "react";
import "../../assets/css/Home.css";

const Testimonials = () => {
  return (
    <section className="testimonial-section">
      <div className="container">

        {/* Header */}
        <div className="text-center mb-5">
          <span className="testimonial-badge">TESTIMONIALS</span>
          <h2 className="mt-3">
            Contractors <span>Love Us</span>
          </h2>
          <p className="testimonial-sub">
            Don't take our word for it — hear from the people in the trenches.
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4">

          {/* Card 1 */}
          <div className="col-lg-4 col-md-6">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>

              <p className="quote">
                "We went from winning 1 in 10 bids to 1 in 3. The AI scoring told us which projects were actually worth our time. Game changer for our $8M electrical business."
              </p>

              <div className="user">
                <div className="avatar"></div>
                <div>
                  <h6>Mike Rodriguez</h6>
                  <small>President, Rodriguez Electric Co.</small>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-4 col-md-6">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>

              <p className="quote">
                "The digital takeoff alone saved us $40K in estimator time last year. Plus the material pricing database is always accurate."
              </p>

              <div className="user">
                <div className="avatar"></div>
                <div>
                  <h6>Sarah Chen</h6>
                  <small>VP of Precon, Apex HVAC Solutions</small>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-4 col-md-6">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>

              <p className="quote">
                "As a GC, managing subs used to be chaos. BuildPulse cut our precon time in half. We bid twice as many projects now."
              </p>

              <div className="user">
                <div className="avatar"></div>
                <div>
                  <h6>James Patterson</h6>
                  <small>CEO, Patterson Building Group</small>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;