// import React, {useContext} from "react";
// import "./Certification.scss";
// import {certifications} from "../../portfolio";
// import StyleContext from "../../contexts/StyleContext";

// export default function Certification() {
//   const {isDark} = useContext(StyleContext);
//   if (!achievementSection.display) {
//     return null;
//   }

//   if (!certifications.list.length) return null;

//   return (
//     <div
//       className={`certification-section ${isDark ? "dark-mode" : ""}`}
//       id="certifications"
//     >
//       <h1 className="section-title">{certifications.title}</h1>
//       <div className="certification-cards">
//         {certifications.list.map((cert, index) => (
//           <div className="cert-custom-card">
//             <div className="cert-card-header">
//               <h3 className="cert-title">{cert.name}</h3>
//               <img className="cert-logo" src={cert.logo_path} alt="logo" />
//             </div>
//             <div className="cert-body">
//               <p className="cert-number">자격증 번호: {cert.certNumber}</p>
//               <p className="cert-date">취득일자:{cert.date}</p>
//               <p className="cert-issuer">{cert.issuer}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
