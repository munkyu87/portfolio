import React, {useContext, useState} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import ProjectModal from "../../components/projectModal/ProjectModal";
import SectionHeader from "../../components/sectionHeader/SectionHeader";

const MAX_CHIPS = 3;

function PlatformTag({platform}) {
  if (!platform) return null;
  return (
    <span className={`platform-tag ${platform.toLowerCase()}`}>{platform}</span>
  );
}

function TechChips({tech = [], max = MAX_CHIPS}) {
  const list = tech.filter(t => t !== "...");
  if (!list.length) return null;
  return (
    <div className="tech-chips">
      {list.slice(0, max).map(t => (
        <span key={t} className="tech-chip">
          {t}
        </span>
      ))}
      {list.length > max && (
        <span className="tech-chip more">+{list.length - max}</span>
      )}
    </div>
  );
}

function Shot({project}) {
  const count = project.images ? project.images.length : 0;
  return (
    <div className="pj-shot">
      {project.image ? (
        <img src={project.image} alt={project.projectName} />
      ) : (
        <i className="fas fa-ellipsis-h pj-shot-empty"></i>
      )}
      {count > 1 && (
        <span className="gallery-badge">
          <i className="fas fa-images"></i>
          {count}
        </span>
      )}
    </div>
  );
}

function FooterLinks({links}) {
  if (!links || !links.length) return null;
  return (
    <div className="pj-links">
      {links.map(link => (
        <a
          key={link.name}
          className="pj-link"
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}

// 카드 전체를 클릭/키보드로 열 수 있게
const clickable = onOpen => ({
  role: "button",
  tabIndex: 0,
  onClick: onOpen,
  onKeyDown: e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen();
    }
  }
});

function FeaturedCard({project, main, onOpen}) {
  return (
    <div
      className={main ? "pj-feat is-main" : "pj-feat is-small"}
      {...clickable(onOpen)}
    >
      <Shot project={project} />
      <div className="pj-body">
        <div className="pj-title">
          {project.projectName}
          <PlatformTag platform={project.platform} />
        </div>
        {project.highlights && (
          <div className="pj-badges">
            {project.highlights.map(h => (
              <span
                key={h}
                className={h.startsWith("🏅") ? "pj-badge gold" : "pj-badge"}
              >
                {h}
              </span>
            ))}
          </div>
        )}
        <p className="pj-desc">{project.projectDesc}</p>
        <TechChips tech={project.tech} max={main ? 6 : 3} />
        <span className="pj-more">자세히 보기 →</span>
      </div>
    </div>
  );
}

function GridCard({project, onOpen}) {
  return (
    <div
      className={project.image ? "pj-card" : "pj-card etc"}
      {...clickable(onOpen)}
    >
      <Shot project={project} />
      <div className="pj-body">
        <div className="pj-title">
          {project.projectName}
          <PlatformTag platform={project.platform} />
        </div>
        <p className="pj-desc">{project.projectDesc}</p>
        <TechChips tech={project.tech} />
      </div>
    </div>
  );
}

function SideCard({project, onOpen}) {
  return (
    <div className="pj-side" {...clickable(onOpen)}>
      <Shot project={project} />
      <div className="pj-body">
        <div className="pj-title">
          {project.projectName}
          <PlatformTag platform={project.platform} />
        </div>
        {project.status && (
          <span className={`pj-status ${project.status.type}`}>
            ● {project.status.label}
          </span>
        )}
        <p className="pj-desc">{project.projectDesc}</p>
        {project.highlights && (
          <ul className="pj-highlights">
            {project.highlights.map(h => (
              <li key={h}>
                <i className="fas fa-check"></i>
                {h}
              </li>
            ))}
          </ul>
        )}
        <TechChips tech={project.tech} max={4} />
        <FooterLinks links={project.footerLink} />
      </div>
    </div>
  );
}

export default function StartupProject({
  section = bigProjects,
  id = "projects"
}) {
  const {isDark} = useContext(StyleContext);
  const [filter, setFilter] = useState("전체");
  const [selected, setSelected] = useState(null);

  if (!section.display) {
    return null;
  }

  const isSide = section.variant === "side";
  const featured = isSide ? [] : section.projects.filter(p => p.featured);
  const rest = isSide ? [] : section.projects.filter(p => !p.featured);

  // 플랫폼별 개수 (플랫폼 없는 "그 외.." 카드는 전체에서만 표시)
  const counts = {};
  rest.forEach(p => {
    if (p.platform) counts[p.platform] = (counts[p.platform] || 0) + 1;
  });
  const total = Object.values(counts).reduce((a, b) => a + b, 0);
  const visible =
    filter === "전체" ? rest : rest.filter(p => p.platform === filter);

  // 섹션이 길어 기본 fraction(0.2)으로는 모바일에서 나타나지 않으므로 0
  return (
    <Fade bottom duration={1000} distance="20px" fraction={0}>
      <div
        className={
          isDark
            ? "main ds-section projects-section dark"
            : "main ds-section projects-section"
        }
        id={id}
      >
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          subtitle={section.subtitle}
        />

        {isSide ? (
          <div className="pj-side-grid">
            {section.projects.map(p => (
              <SideCard
                key={p.projectName}
                project={p}
                onOpen={() => setSelected(p)}
              />
            ))}
          </div>
        ) : (
          <>
            {featured.length > 0 && (
              <div className="pj-featured">
                {featured.map((p, i) => (
                  <FeaturedCard
                    key={p.projectName}
                    project={p}
                    main={i === 0}
                    onOpen={() => setSelected(p)}
                  />
                ))}
              </div>
            )}

            {Object.keys(counts).length > 1 && (
              <div className="pj-filters">
                {[["전체", total], ...Object.entries(counts)].map(
                  ([name, n]) => (
                    <button
                      key={name}
                      type="button"
                      className={filter === name ? "pj-filter on" : "pj-filter"}
                      onClick={() => setFilter(name)}
                    >
                      {name}
                      <span>{n}</span>
                    </button>
                  )
                )}
              </div>
            )}

            <div className="pj-grid">
              {visible.map(p => (
                <GridCard
                  key={p.projectName}
                  project={p}
                  onOpen={() => setSelected(p)}
                />
              ))}
            </div>
          </>
        )}

        {selected && (
          <ProjectModal
            project={selected}
            isDark={isDark}
            onClose={() => setSelected(null)}
          />
        )}
      </div>
    </Fade>
  );
}
