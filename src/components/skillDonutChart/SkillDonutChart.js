import React from "react";
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./SkillDonutChart.scss";

const techStack = [
  {label: "Frontend", value: 80, color: "#4e73df"},
  {label: "Backend", value: 50, color: "#1cc88a"},
  {label: "DB", value: 30, color: "#f6c23e"}
];

export default function SkillDonutChart() {
  return (
    <div className="donut-chart-container">
      <h2 className="donut-title">📊 기술 영역별 2숙련도</h2>
      <div className="donut-charts">
        {techStack.map((stack, idx) => (
          <div key={idx} className="donut-item">
            <CircularProgressbar
              value={stack.value}
              text={`${stack.value}%`}
              styles={buildStyles({
                textColor: "#000",
                pathColor: stack.color,
                trailColor: "#eee"
              })}
            />
            <p>{stack.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
