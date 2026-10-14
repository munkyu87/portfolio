import React, {useContext, useState} from "react";
import "./Contact.scss";
import "../../components/sectionHeader/SectionHeader.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(contactInfo.email_address).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Fade bottom duration={1000} distance="20px" fraction={0}>
      <div
        className={
          isDark
            ? "main ds-section dark contact-cta"
            : "main ds-section contact-cta"
        }
        id="contact"
      >
        <div className="cta-box">
          <div className="cta-text">
            <h2>{contactInfo.ctaTitle}</h2>
            <p>{contactInfo.ctaSubtitle}</p>
            {contactInfo.number && (
              <a className="cta-phone" href={"tel:" + contactInfo.number}>
                {contactInfo.number}
              </a>
            )}
          </div>
          <div className="cta-mail">
            <a href={"mailto:" + contactInfo.email_address}>
              {contactInfo.email_address}
            </a>
            <button type="button" onClick={copyEmail}>
              <i className={copied ? "fas fa-check" : "far fa-copy"}></i>
              {copied ? " 복사됨" : " 복사"}
            </button>
          </div>
        </div>
        <div className="cta-social">
          <SocialMedia />
        </div>
      </div>
    </Fade>
  );
}
