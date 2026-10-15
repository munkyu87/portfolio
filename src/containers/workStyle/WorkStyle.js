import React, {useContext} from "react";
import emoji from "react-easy-emoji";
import "./WorkStyle.scss";
import {workStyleSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import SectionHeader from "../../components/sectionHeader/SectionHeader";

// 기획 → 설계 → 개발 → 자동화 순서의 단계 카드
export default function WorkStyle() {
  const {isDark} = useContext(StyleContext);

  if (!workStyleSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px" fraction={0}>
      <div
        className={isDark ? "main ds-section dark" : "main ds-section"}
        id="workStyle"
      >
        <SectionHeader
          eyebrow={workStyleSection.eyebrow}
          title={workStyleSection.title}
          subtitle={workStyleSection.subtitle}
        />
        <ol className="ws-steps">
          {workStyleSection.steps.map((step, i) => (
            <li key={step.title} className="ws-step">
              <div className="ws-top">
                <span className="ws-icon">{emoji(step.icon)}</span>
                <span className="ws-num">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              {step.tags && (
                <div className="ws-tags">
                  {step.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </Fade>
  );
}
