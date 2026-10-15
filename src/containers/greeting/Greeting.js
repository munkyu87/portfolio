import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import "../../components/sectionHeader/SectionHeader.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div
        className={
          isDark ? "greet-main ds-section dark" : "greet-main ds-section"
        }
        id="greeting"
      >
        <div className="hero">
          <div className="hero-text">
            {greeting.availability && (
              <span className="hero-avail">
                <i className="fas fa-circle"></i>
                {greeting.availability}
              </span>
            )}
            <h1 className="hero-title">
              {greeting.title}
              <br />
              {greeting.highlight && (
                <em className="hero-highlight">{greeting.highlight}</em>
              )}{" "}
              {greeting.name} <span className="wave-emoji">{emoji("👋")}</span>
            </h1>
            <p className="hero-desc">{greeting.subTitle}</p>
            <div className="hero-ctas">
              <a className="hero-btn primary" href="#projects">
                프로젝트 보기 <i className="fas fa-arrow-down"></i>
              </a>
              <a className="hero-btn" href="#contact">
                <i className="far fa-envelope"></i> 연락하기
              </a>
              {greeting.resumeLink && (
                <a
                  className="hero-btn"
                  href={greeting.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="far fa-file-pdf"></i> 이력서 PDF
                </a>
              )}
            </div>
            <SocialMedia />
          </div>
          {greeting.stats && (
            <div className="hero-stats">
              {greeting.stats.map(stat => (
                <div
                  key={stat.label}
                  className={stat.tone ? `hero-stat ${stat.tone}` : "hero-stat"}
                >
                  <b>{emoji(stat.value)}</b>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Fade>
  );
}
