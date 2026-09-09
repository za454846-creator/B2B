import React from "react";
import "../../assets/css/home.css";

const CTASection = ({
  titleLine1,
  titleHighlight,
  subText,
  primaryBtnText,
  primaryBtnLink,
  primaryBtnNewTab = false,
  secondaryBtnText,
  secondaryBtnLink,
  secondaryBtnNewTab = true,
  noteText,
}) => {
  return (
    <section className="cta-section">
      <div className="cta-glow"></div>

      <div className="cta-container">

        {/* Heading */}
        <h2 className="cta-title">
          <span>{titleLine1}</span>
          <br />
          <span className="highlight">{titleHighlight}</span>
        </h2>

        {/* Subtext */}
        <p className="cta-subtext">{subText}</p>

        {/* Buttons */}
        <div className="cta-buttons">

          {primaryBtnNewTab ? (
            <button
              type="button"
              className="btn-primary"
              onClick={() => window.open(primaryBtnLink, "_blank", "noopener,noreferrer")}
            >
              {primaryBtnText} <span>→</span>
            </button>
          ) : (
            <a href={primaryBtnLink} className="btn-primary">
              {primaryBtnText} <span>→</span>
            </a>
          )}

          {secondaryBtnNewTab ? (
            <button
              type="button"
              className="btn-secondary"
              onClick={() => window.open(secondaryBtnLink, "_blank", "noopener,noreferrer")}
            >
              {secondaryBtnText}
            </button>
          ) : (
            <a href={secondaryBtnLink} className="btn-secondary">
              <span>☎</span> {secondaryBtnText}
            </a>
          )}

        </div>

        {/* Footer Note */}
        <p className="cta-note">{noteText}</p>

      </div>
    </section>
  );
};

export default CTASection;