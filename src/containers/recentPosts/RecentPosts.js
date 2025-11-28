import React, { useEffect, useState, useContext } from "react";
import "./RecentPosts.scss";
import {socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import { Fade } from "react-reveal";

export default function RecentPosts() {
  const [posts, setPosts] = useState([]);
  const { isDark } = useContext(StyleContext);

  useEffect(() => {
    const fetchRSS = async () => {
      const blog = socialMediaLinks.blog;
      const res = await fetch(blog + "/feed.xml");
      const text = await res.text();
      const parser = new DOMParser();
      const xml = parser.parseFromString(text, "application/xml");

      const entries = [...xml.querySelectorAll("entry")].slice(0, 3);

      const parsed = entries.map((entry) => ({
        title: entry.querySelector("title")?.textContent ?? "",
        url: entry.querySelector("link")?.getAttribute("href") ?? "",
        date: new Date(entry.querySelector("updated")?.textContent ?? "").toLocaleDateString(),
        categories: [...entry.querySelectorAll("category")].map(cat => cat.getAttribute("term")),
      }));

      setPosts(parsed);
    };

    fetchRSS();
  }, []);

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="recentPosts">
        <div className="blog-header">
          <h1 className="blog-heading">📝 블로그 글</h1>
          <p className={isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"}>
            최신 기술 블로그 글 3개를 가져왔어요!
          </p>
        </div>

        <div className="blog-main-div">
          <div className="blog-text-div">
            {posts.map((post, i) => (
              <div
                key={i}
                className={isDark ? "blog-container dark-mode" : "blog-container"}
                onClick={() => window.open(post.url, "_blank")}
              >
                <div className={isDark ? "blog-card blog-card-shadow" : "blog-card"}>
                  
                  <h3 className={isDark ? "small-dark blog-title" : "blog-title"}>
                    {post.title}
                  </h3>

                  {/* 태그들 */}
                  <div className="tag-container">
                    {post.categories.map((cat, idx) => (
                      <span key={idx} className="tag">
                        {cat}
                      </span>
                    ))}
                  </div>

                  <div className="go-corner">
                    <div className="go-arrow">→</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
