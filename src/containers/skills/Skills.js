import React, {useContext} from "react";
import "./Skills.scss";
import {skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import SectionHeader from "../../components/sectionHeader/SectionHeader";

// 이름 → 아이콘·레벨 (gold = 주력)
const lookup = {};
skillsSection.softwareSkills.forEach(s => {
  lookup[s.skillName] = {icon: s.icon, gold: s.level === "gold"};
});
(skillsSection.softwareTools || []).forEach(t => {
  lookup[t.toolName] = {icon: t.icon, gold: t.level === "gold"};
});

function SkillIcon({name}) {
  const info = lookup[name] || {};
  return (
    <li className={info.gold ? "sg-icon gold" : "sg-icon"}>
      <div className="sg-tile">
        {info.icon && <img src={info.icon} alt="" loading="lazy" />}
        {info.gold && (
          <span className="sg-medal" aria-label="주력">
            🥇
          </span>
        )}
      </div>
      <span className="sg-name">{name}</span>
    </li>
  );
}

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px" fraction={0}>
      <div
        className={isDark ? "main ds-section dark" : "main ds-section"}
        id="skills"
      >
        <SectionHeader
          eyebrow={skillsSection.eyebrow}
          title={skillsSection.title}
          subtitle={skillsSection.subTitle}
        >
          <span className="sg-legend">🥇 주력 기술</span>
        </SectionHeader>
        <div className="sg-grid">
          {skillsSection.groups.map(group => (
            <div
              key={group.title}
              className={group.size ? `sg-card ${group.size}` : "sg-card"}
            >
              <h3>{group.title}</h3>
              <p>{group.desc}</p>
              <ul className="sg-icons">
                {group.items.map(name => (
                  <SkillIcon key={name} name={name} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
}
