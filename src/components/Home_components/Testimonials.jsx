import React from "react";
import "../../assets/css/home.css";
import avatar1 from "../../assets/Images/avatar1.webp";
import avatar2 from "../../assets/Images/avatar2.webp";
import avatar3 from "../../assets/Images/44.jpg";

const defaultTestimonials = [
  {
    quote: "We used to lose half a day every week hunting for jobs across five different agency sites. Now that list finds us before our competitors even see it posted.",
    name: "Danielle Ruiz",
    title: "Owner, Ruiz Mechanical Contracting",
    photo: avatar1,
  },
  {
    quote: "The readiness check flagged a bonding gap before we sank two days into a bid we'd have been disqualified from anyway. That alone paid for the subscription.",
    name: "Tom Okafor",
    title: "Chief Estimator, Crestline Building Group",
    photo: avatar2,
  },
  {
    quote: "Inviting our regular subs straight from the project page cut about two days off our typical bid turnaround on multifamily work.",
    name: "Priya Nandan",
    title: "VP Preconstruction, Nandan Commercial",
    photo: avatar3,
  },
];

const Testimonials = ({
  heading = "Words From Contractors",
  highlight = "on the Platform",
  subtitle = "Don't take our word for it — hear from the people in the trenches.",
  testimonials = defaultTestimonials,
}) => {
  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="testimonial_content text-center mb-5">
        <span class="badge-features mb-3">TESTIMONIALS</span>
          <h2 className="mt-3">{heading} <span>{highlight}</span></h2>
          <p className="testimonial-sub">{subtitle}</p>
        </div>

        <div className="row g-4">
          {testimonials.map((t, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p className="quote">"{t.quote}"</p>
                <div className="user">
                  <div className="avatar">
                    <img src={t.photo || avatar1} alt={t.name} />
                  </div>
                  <div>
                    <h3>{t.name}</h3>
                    <small>{t.title}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;