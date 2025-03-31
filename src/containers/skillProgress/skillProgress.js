import React, {useContext} from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import StyleContext from "../../contexts/StyleContext";

export default function StackProgress() {
  const {isDark} = useContext(StyleContext);

  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <div className="skills-bar">
            <h1 className="skills-heading">📊 기술 영역별 숙련도</h1>
            <div className="donut-chart-container">
              <div className="donut-row">
                {techStack.experience.slice(0, 3).map((exp, idx) => (
                  <div key={idx} className="donut-item">
                    <CircularProgressbar
                      value={exp.progressPercentage}
                      text={`${exp.progressPercentage}%`}
                      styles={buildStyles({
                        textColor: isDark ? "#fff" : "#000",
                        pathColor: exp.color,
                        trailColor: "#eee"
                      })}
                    />
                    <p>{exp.Stack}</p>
                  </div>
                ))}
              </div>
              <div className="donut-row">
                {techStack.experience.slice(3).map((exp, idx) => (
                  <div key={idx} className="donut-item">
                    <CircularProgressbar
                      value={exp.progressPercentage}
                      text={`${exp.progressPercentage}%`}
                      styles={buildStyles({
                        textColor: isDark ? "#fff" : "#000",
                        pathColor: exp.color,
                        trailColor: "#eee"
                      })}
                    />
                    <p>{exp.Stack}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="skills-image">
            {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : (
              <img
                alt="Skills"
                src={require("../../assets/images/skill.svg")}
              />
            )}
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
