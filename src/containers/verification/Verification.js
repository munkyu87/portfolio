import React, {useContext} from "react";
import "./Verification.scss";
import {verificationSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Verification() {
  const {isDark} = useContext(StyleContext);

  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  if (!verificationSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="verification">
        <div className="verification-main-div">
          <div className="verification-header">
            <h1
              className={
                isDark
                  ? "dark-mode skills-heading verification-heading"
                  : "skills-heading verification-heading"
              }
            >
              {verificationSection.title}
            </h1>
            {!!verificationSection.subtitle && (
              <p
                className={
                  isDark
                    ? "dark-mode subTitle verification-subtitle"
                    : "subTitle verification-subtitle"
                }
              >
                {verificationSection.subtitle}
              </p>
            )}
          </div>

          <div className="verification-cards-div">
            {verificationSection.cards.map((card, i) => (
              <div
                key={i}
                className={
                  isDark ? "dark-mode verification-card" : "verification-card"
                }
              >
                <div className="verification-image-div">
                  <img src={card.image} alt={card.title} className="verification-image" />
                </div>
                <div className="verification-detail-div">
                  <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
                    {card.title}
                  </h5>
                  <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
                    {card.subtitle}
                  </p>
                  <p
                    className={
                      isDark ? "dark-mode verification-description" : "verification-description"
                    }
                  >
                    {card.description}
                  </p>
                </div>
                {card.footerLink ? (
                  <div className="verification-card-footer">
                    {card.footerLink.map((link, linkIndex) => (
                      <span
                        key={linkIndex}
                        className={isDark ? "dark-mode verification-tag" : "verification-tag"}
                        onClick={() => openUrlInNewTab(link.url)}
                      >
                        {link.name}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
