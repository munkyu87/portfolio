import React, {useContext, useState} from "react";
import "./Proof.scss";
import {certificationSection, verificationSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import ProjectModal from "../../components/projectModal/ProjectModal";

const images = require.context("../../assets/images", true);

// 공식 인증(큰 카드) + 자격증(한 줄 카드)
export default function Proof() {
  const {isDark} = useContext(StyleContext);
  const [selected, setSelected] = useState(null);

  if (!certificationSection.display && !verificationSection.display) {
    return null;
  }

  const openCard = card => {
    if (card.gallery) {
      setSelected({
        projectName: card.title,
        projectDesc: card.subtitle,
        longDesc: card.description,
        images: card.gallery
      });
    }
  };

  return (
    <Fade bottom duration={1000} distance="20px" fraction={0}>
      <div
        className={isDark ? "main ds-section dark" : "main ds-section"}
        id="proof"
      >
        <SectionHeader
          eyebrow={certificationSection.eyebrow}
          title={certificationSection.title}
          subtitle={certificationSection.subtitle}
        />

        {verificationSection.display && (
          <div className="pf-cards">
            {verificationSection.cards.map(card => {
              const body = (
                <>
                  <div className={`pf-icon ${card.tone || ""}`}>
                    {card.icon}
                  </div>
                  <div className="pf-text">
                    <h3>{card.title}</h3>
                    <p>{card.subtitle}</p>
                  </div>
                  <span className="pf-action">{card.action} →</span>
                </>
              );
              return card.url ? (
                <a
                  key={card.title}
                  className="pf-card"
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {body}
                </a>
              ) : (
                <button
                  key={card.title}
                  type="button"
                  className="pf-card"
                  onClick={() => openCard(card)}
                >
                  {body}
                </button>
              );
            })}
          </div>
        )}

        {certificationSection.display && (
          <ul className="pf-certs">
            {certificationSection.certificationsCards.map(cert => (
              <li key={cert.name} className="pf-cert">
                <img src={images(`./${cert.logo}`)} alt="" />
                <div>
                  <b>{cert.name}</b>
                  <span>{cert.issuer}</span>
                </div>
                <span className="pf-year">{cert.date.slice(0, 4)}</span>
              </li>
            ))}
          </ul>
        )}

        {selected && (
          <ProjectModal
            project={selected}
            isDark={isDark}
            onClose={() => setSelected(null)}
          />
        )}
      </div>
    </Fade>
  );
}
