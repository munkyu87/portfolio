import React from "react";
import "./SectionHeader.scss";

// 섹션 공통 제목: 영문 라벨 + 제목 + 설명 (+ 오른쪽 보조 요소)
export default function SectionHeader({eyebrow, title, subtitle, children}) {
  return (
    <div className="ds-head">
      <div>
        {eyebrow && <small className="ds-eyebrow">{eyebrow}</small>}
        <h2 className="ds-title">{title}</h2>
        {subtitle && <p className="ds-subtitle">{subtitle}</p>}
      </div>
      {children && <div className="ds-head-side">{children}</div>}
    </div>
  );
}
