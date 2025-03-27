import React from "react";
import "./ToolsSection.scss";

const tools = [
  {name: "Figma", iconClass: "fab fa-figma"},
  {name: "VS Code", iconClass: "fas fa-code"},
  {name: "IntelliJ", iconClass: "fas fa-laptop-code"},
  {name: "Notion", iconClass: "fab fa-n"},
  {name: "Postman", iconClass: "fas fa-flask"}
];

export default function ToolsSection() {
  return (
    <div className="tools-section">
      <h2 className="tools-title">주로 사용하는 도구들</h2>
      <ul className="tools-list">
        {tools.map((tool, i) => (
          <li key={i} className="tool-item">
            <i className={tool.iconClass}></i>
            <p>{tool.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
