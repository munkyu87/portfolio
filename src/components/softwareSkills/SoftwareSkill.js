import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

const levelIcons = {
  gold: "🥇",
  silver: "🥈",
  bronze: "🥉"
};

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <p className="section-title">💻 내가 다룰 수 있는 기술들</p>
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skill, i) => {
            return (
              <li
                className="software-skill-inline"
                key={i}
                name={skill.skillName}
              >
                <div className="skill-icon-wrapper">
                  {/* <i className={skill.fontAwesomeClassname}></i> */}
                  <img
                    src={skill.icon}
                    alt={skill.skillName}
                    className="skill-icon-img"
                  />
                  {skill.level && (
                    <span className={`skill-badge ${skill.level}`}>
                      {levelIcons[skill.level]}
                    </span>
                  )}
                </div>
                <p>{skill.skillName}</p>
              </li>
            );
          })}
        </ul>
        <p className="section-title">🛠️ 즐겨 쓰는 도구들</p>
        <ul className="dev-icons">
          {skillsSection.softwareTools.map((tool, i) => {
            return (
              <li
                className="software-skill-inline"
                key={i}
                name={tool.toolName}
              >
                <div className="skill-icon-wrapper">
                  {/* <i className={skill.fontAwesomeClassname}></i> */}
                  <img
                    src={tool.icon}
                    alt={tool.toolName}
                    className="skill-icon-img"
                  />
                  {/* {skill.level && (
                    <span className={`skill-badge ${skill.level}`}>
                      {levelIcons[skill.level]}
                    </span>
                  )} */}
                </div>
                <p>{tool.toolName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
