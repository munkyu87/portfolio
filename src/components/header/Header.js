import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  socialMediaLinks,
  techStack,
  openSource,
  bigProjects,
  blogSection,
  talkSection,
  achievementSection,
  certificationSection,
  resumeSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  // const viewExperience = workExperiences.display;
  // const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewTechStack = techStack.display;
  // const viewAchievement = achievementSection.display;
  const viewProjects = bigProjects.display;
  const viewCertification = certificationSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewTechStack && (
            <li>
              <a href="#techStack">TechStack</a>
            </li>
          )}
          {viewProjects && (
            <li>
              <a href="#projects">Projects</a>
            </li>
          )}
          {/* {viewExperience && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )} */}
          {/* {viewOpenSource && (
            <li>
              <a href="#opensource">Open Source</a>
            </li>
          )} */}
          {/* {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )} */}
          {viewCertification && (
            <li>
              <a href="#certificartions">Certifications</a>
            </li>
          )}
          <li>
            <a href="#recentPosts">RecentPosts</a>
          </li>
          {viewBlog && (
            <li>
              <a href={socialMediaLinks.blog} target="_blank" rel="noopener noreferrer">
                Blogs
              </a>
            </li>
          )}
          {/* {viewTalks && (
            <li>
              <a href="#talks">Talks</a>
            </li>
          )} */}
          {/* {viewResume && (
            <li>
              <a href="#resume">Resume</a>
            </li>
          )} */}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
