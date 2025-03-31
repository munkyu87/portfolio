import React from "react";
import "./CertificationCard.scss";

export default function CertificationCard({cardInfo, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const images = require.context("../../assets/images", true);
  const test = "certifications/정보처리기사.png";
  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <div className="cert-card-header">
        <h3 className="cert-title">{cardInfo.name}</h3>
        <img
          className="cert-logo"
          src={require("../../assets/images/airbnbLogo.png")}
          alt="logo"
        />
      </div>
      <div className="certificate-image-div">
        <img
          src={images(`./${cardInfo.image}`)}
          alt={cardInfo.name || "Card Thumbnail"}
          className="card-image"
        ></img>
      </div>
      <div className="certificate-detail-div">
        <p
          className={
            isDark
              ? "dark-mode certificate-detail-number"
              : "certificate-detail-number"
          }
        >
          자격증 번호: {cardInfo.certNumber}
        </p>
        <p
          className={
            isDark
              ? "dark-mode certificate-detail-date"
              : "certificate-detail-date"
          }
        >
          취득일자:{cardInfo.date}
        </p>
        <p
          className={
            isDark
              ? "dark-mode certificate-detail-issuer"
              : "certificate-detail-issuer"
          }
        >
          {cardInfo.issuer}
        </p>
        {/* <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.image}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.issuer}
        </p> */}
      </div>
      <div className="certificate-card-footer">
        {/* {cardInfo.footer.map((v, i) => {
          return (
            <span
              key={i}
              className={
                isDark ? "dark-mode certificate-tag" : "certificate-tag"
              }
              onClick={() => openUrlInNewTab(v.url, v.name)}
            >
              {v.name}
            </span>
          );
        })} */}
      </div>
    </div>
  );
}
