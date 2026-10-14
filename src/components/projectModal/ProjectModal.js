import React, {useEffect, useRef, useState} from "react";
import ReactDOM from "react-dom";
import "./ProjectModal.scss";

// "- 항목" 형태의 여러 줄 문자열을 줄 단위 배열로
const toLines = text =>
  (text || "")
    .split("\n")
    .map(line => line.trim().replace(/^-\s*/, ""))
    .filter(Boolean);

// 프로젝트 상세: 왼쪽 스크린샷 갤러리 + 오른쪽 설명
export default function ProjectModal({project, isDark, onClose}) {
  const images =
    project.images && project.images.length
      ? project.images
      : project.image
      ? [{src: project.image}]
      : [];
  const count = images.length;
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);
  const closeRef = useRef(null);

  const go = step => setIndex(prev => (prev + step + count) % count);

  useEffect(() => {
    const onKey = e => {
      if (e.key === "Escape") onClose();
      if (count > 1 && e.key === "ArrowLeft") go(-1);
      if (count > 1 && e.key === "ArrowRight") go(1);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    if (closeRef.current) closeRef.current.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onTouchStart = e => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = e => {
    if (touchStartX.current === null || count < 2) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  const tech = (project.tech || []).filter(t => t !== "...");
  const contribution = toLines(project.contribution);
  const details = toLines(project.longDesc);
  const current = images[index];

  return ReactDOM.createPortal(
    <div
      className={isDark ? "pm-overlay dark" : "pm-overlay"}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.projectName}
    >
      <div
        className={count ? "pm-dialog" : "pm-dialog no-gallery"}
        onClick={e => e.stopPropagation()}
      >
        {count > 0 && (
          <div
            className="pm-gallery"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className="pm-stage">
              {count > 1 && (
                <button
                  type="button"
                  className="pm-nav prev"
                  onClick={() => go(-1)}
                  aria-label="이전 이미지"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
              )}
              <img
                key={index}
                src={current.src}
                alt={current.caption || project.projectName}
                className="pm-image"
              />
              {count > 1 && (
                <button
                  type="button"
                  className="pm-nav next"
                  onClick={() => go(1)}
                  aria-label="다음 이미지"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              )}
            </div>
            {(current.caption || count > 1) && (
              <p className="pm-caption">
                {current.caption}
                {count > 1 && (
                  <span>
                    {index + 1} / {count}
                  </span>
                )}
              </p>
            )}
            {count > 1 && (
              <div className="pm-thumbs">
                {images.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    className={i === index ? "pm-thumb on" : "pm-thumb"}
                    onClick={() => setIndex(i)}
                    aria-label={`${i + 1}번째 이미지`}
                  >
                    <img src={img.src} alt="" />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="pm-info">
          <button
            ref={closeRef}
            type="button"
            className="pm-close"
            onClick={onClose}
            aria-label="닫기"
          >
            <i className="fas fa-times"></i>
          </button>
          <h3 className="pm-title">
            {project.projectName}
            {project.platform && (
              <span
                className={`platform-tag ${project.platform.toLowerCase()}`}
              >
                {project.platform}
              </span>
            )}
          </h3>
          {project.projectDesc && (
            <p className="pm-desc">{project.projectDesc}</p>
          )}
          {project.highlights && (
            <div className="pm-badges">
              {project.highlights.map(h => (
                <span key={h} className="pm-badge">
                  {h}
                </span>
              ))}
            </div>
          )}
          {contribution.length > 0 && (
            <section>
              <h4>기여도</h4>
              {contribution.map(line => (
                <p key={line}>{line}</p>
              ))}
            </section>
          )}
          {tech.length > 0 && (
            <section>
              <h4>사용 기술</h4>
              <div className="pm-chips">
                {tech.map(t => (
                  <span key={t} className="pm-chip">
                    {t}
                  </span>
                ))}
              </div>
            </section>
          )}
          {details.length > 0 && (
            <section>
              <h4>상세 설명</h4>
              <ul>
                {details.map(line => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </section>
          )}
          {project.footerLink && project.footerLink.length > 0 && (
            <div className="pm-links">
              {project.footerLink.map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name} <i className="fas fa-external-link-alt"></i>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
