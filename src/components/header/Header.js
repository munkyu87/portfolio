import React, {useContext, useEffect, useState} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  skillsSection,
  bigProjects,
  sideProjects,
  certificationSection
} from "../../portfolio";

const MENU = [
  {id: "skills", label: "기술", show: skillsSection.display},
  {id: "projects", label: "프로젝트", show: bigProjects.display},
  {id: "sideProjects", label: "사이드", show: sideProjects.display},
  {id: "proof", label: "인증·자격", show: certificationSection.display},
  {id: "recentPosts", label: "블로그", show: true},
  {id: "contact", label: "연락", show: true}
].filter(item => item.show);

function Header() {
  const {isDark} = useContext(StyleContext);
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);

  // 스크롤 위치로 현재 섹션과 진행률 계산
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);

      let current = "";
      MENU.forEach(({id}) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) {
          current = id;
        }
      });
      // 맨 아래에서는 짧은 마지막 섹션(연락)을 활성화
      if (max > 0 && window.scrollY >= max - 2) {
        current = MENU[MENU.length - 1].id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          {MENU.map(item => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={active === item.id ? "active" : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
        <div
          className="header-progress"
          style={{transform: `scaleX(${progress})`}}
        ></div>
      </header>
    </Headroom>
  );
}
export default Header;
