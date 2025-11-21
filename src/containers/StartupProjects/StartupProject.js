import React, {useContext, useState, useRef} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  const [openStates, setOpenStates] = useState(
    Array(bigProjects.projects.length).fill(false)
  );

  // const scrollRef = useRef(null);
  // const scrollLeft = () =>
  //   scrollRef.current.scrollBy({left: -300, behavior: "smooth"});
  // const scrollRight = () =>
  //   scrollRef.current.scrollBy({left: 300, behavior: "smooth"});
  const scrollRef = useRef();

  const scroll = direction => {
    const scrollAmount = 300;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth"
      });
    }
  };

  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }

  const toggleDetails = index => {
    setOpenStates(prev =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>
          <div className={
              isDark
                ? "project-scroll-wrapper-dark"
                : "project-scroll-wrapper-white"
            }>
            {/* <button className="scroll-button left" onClick={() => scroll(-1)}>
              ←
            </button> */}
            <button className="scroll-button left" onClick={() => scroll(-1)}>
    <i className="fas fa-chevron-left"></i>
  </button>

            <div className="scroll-container" ref={scrollRef}>
              {bigProjects.projects.map((project, i) => {
                return (
                  <div
                    key={i}
                    className={
                      isDark
                        ? "dark-mode project-card project-card-dark"
                        : "project-card project-card-light"
                    }
                  >
                    {project.image ? (
                      <div className="project-image">
                        <img
                          src={project.image}
                          alt={project.projectName}
                          className="card-image"
                        ></img>
                      </div>
                    ) : null}
                    <div className="project-detail">
                      <h5
                        className={
                          isDark ? "dark-mode card-title" : "card-title"
                        }
                      >
                        {project.projectName}
                        <span
                          className={`platform-tag ${
                            project.platform
                              ? project.platform.toLowerCase()
                              : ""
                          }`}
                        >
                          {project.platform}
                        </span>
                      </h5>
                      <p
                        className={
                          isDark ? "dark-mode card-subtitle" : "card-subtitle"
                        }
                      >
                        {project.projectDesc}
                      </p>

                      <button
                        className={
                          openStates[i]
                            ? "toggle-button collapse"
                            : "toggle-button expand"
                        }
                        onClick={() => toggleDetails(i)}
                      >
                        {openStates[i] ? "간략히 보기" : "자세히 보기"}
                      </button>
                      {openStates[i] && (
                        <div className="project-more-detail">
                          {project.contribution &&
                            <div style={{marginTop: "18px"}}>
                              <strong>기여도</strong> 
                              <p className="contribution-detail">
                                {project.contribution}
                              </p>
                            </div>
                          }
                          {project.tech && Array.isArray(project.tech) ? (
                            <div className="tech-tags">
                              <strong>사용 기술</strong>
                              <div className="tech-tags-list">
                                {project.tech.map((tech, i) => (
                                  <span key={i} className="tech-tag">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ) : null}
                          <div style={{marginTop: "18px"}}>
                            <strong>상세 설명</strong>
                            <p className="long-desc-detail">
                              {project.longDesc}
                            </p>
                          </div>
                          {project.moreImage && (
                            <img
                              src={project.moreImage}
                              alt="상세이미지"
                              className="more-image"
                            />
                          )}
                        </div>
                      )}
                      {project.footerLink ? (
                        <div className="project-card-footer">
                          {project.footerLink.map((link, i) => {
                            return (
                              <span
                                key={i}
                                className={
                                  isDark
                                    ? "dark-mode project-tag"
                                    : "project-tag"
                                }
                                onClick={e => {
                                  e.stopPropagation();
                                  openUrlInNewTab(link.url);
                                }}
                              >
                                {link.name}
                              </span>
                            );
                          })}
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="scroll-button right" onClick={() => scroll(1)}>
    <i className="fas fa-chevron-right"></i>
  </button>

        <div className="fade left-fade" />
        <div className="fade right-fade" />
            {/* <button className="scroll-button right" onClick={() => scroll(1)}>
              →
            </button> */}

            {/* <div className="fade left-fade" />
            <div className="fade right-fade" /> */}
          </div>
        </div>
      </div>
    </Fade>
  );
}
