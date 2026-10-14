import React, {useEffect, useState, useContext} from "react";
import "./RecentPosts.scss";
import {socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {Fade} from "react-reveal";
import SectionHeader from "../../components/sectionHeader/SectionHeader";

const MAX_TAGS = 3;
const SUMMARY_LENGTH = 90;

// HTML 조각 → 일반 텍스트
const toText = html => {
  const doc = new DOMParser().parseFromString(html || "", "text/html");
  return (doc.body.textContent || "").replace(/\s+/g, " ").trim();
};

const shorten = text =>
  text.length > SUMMARY_LENGTH ? text.slice(0, SUMMARY_LENGTH) + "…" : text;

export default function RecentPosts() {
  const [posts, setPosts] = useState([]);
  const {isDark} = useContext(StyleContext);

  useEffect(() => {
    const fetchRSS = async () => {
      const blog = socialMediaLinks.blog;
      const res = await fetch(blog + "/feed.xml");
      const text = await res.text();
      const parser = new DOMParser();
      const xml = parser.parseFromString(text, "application/xml");

      const entries = [...xml.querySelectorAll("entry")].slice(0, 3);

      const parsed = entries.map(entry => {
        const content = toText(entry.querySelector("content")?.textContent);
        const summary = toText(entry.querySelector("summary")?.textContent);
        return {
          title: entry.querySelector("title")?.textContent ?? "",
          url: entry.querySelector("link")?.getAttribute("href") ?? "",
          date: new Date(
            entry.querySelector("published")?.textContent ??
              entry.querySelector("updated")?.textContent ??
              ""
          ).toLocaleDateString("ko-KR"),
          // 한글 기준 분당 약 500자
          minutes: Math.max(1, Math.round(content.length / 500)),
          summary: shorten(summary || content),
          categories: [
            ...new Map(
              [...entry.querySelectorAll("category")].map(cat => {
                const term = cat.getAttribute("term");
                return [term.toLowerCase(), term];
              })
            ).values()
          ]
        };
      });

      setPosts(parsed);
    };

    fetchRSS().catch(() => setPosts([]));
  }, []);

  if (!posts.length) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px" fraction={0}>
      <div
        className={isDark ? "main ds-section dark" : "main ds-section"}
        id="recentPosts"
      >
        <SectionHeader
          eyebrow="WRITING"
          title="블로그 글"
          subtitle="실무에서 고민한 내용을 정리해요."
        >
          <a
            className="bp-all"
            href={socialMediaLinks.blog}
            target="_blank"
            rel="noopener noreferrer"
          >
            전체 글 보기 →
          </a>
        </SectionHeader>

        <div className="bp-grid">
          {posts.map(post => (
            <a
              key={post.url}
              className="bp-card"
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bp-meta">
                {post.date} · {post.minutes}분
              </span>
              <h3>{post.title}</h3>
              {post.summary && <p>{post.summary}</p>}
              <div className="bp-tags">
                {post.categories.slice(0, MAX_TAGS).map(cat => (
                  <span key={cat}>{cat}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </Fade>
  );
}
