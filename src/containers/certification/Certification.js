import React, {useContext} from "react";
import "./Certification.scss";
import {certificationSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import CertificationCard from "../../components/certificationCard/CertificationCard";

export default function Certification() {
  const {isDark} = useContext(StyleContext);
  if (!certificationSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="certificartions">
        <div className="certification-main-div">
          <div className="certification-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading certification-heading"
                  : "heading certification-heading"
              }
            >
              {certificationSection.title}
            </h1>
            {!!certificationSection.subtitle && (
              <p
                className={
                  isDark
                    ? "dark-mode subTitle certification-subtitle"
                    : "subTitle certification-subtitle"
                }
              >
                {certificationSection.subtitle}
              </p>
            )}
          </div>
          <div className="certification-cards-div">
            {certificationSection.certificationsCards.map((card, i) => {
              return (
                <CertificationCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    name: card.name,
                    issuer: card.issuer,
                    date: card.date,
                    certNumber: card.certNumber,
                    logo: card.logo,
                    image: card.image
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
