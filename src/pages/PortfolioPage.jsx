import React, { useState } from "react";
import PortfolioHome from "./Home/Home";
import Projects from "./Projects/Projects";
import Journey from "./Journey/Journey";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import HeartCursorTrail from "./HeartCursorTrail";
import { getPortfolioContent } from "../data/portfolio";

const twinkleStars = [
  { left: "8%", top: "13%", size: "3px", delay: "0s", duration: "1.2s" },
  { left: "18%", top: "28%", size: "2px", delay: "-0.4s", duration: "1.4s" },
  { left: "28%", top: "9%", size: "4px", delay: "-0.7s", duration: "1.1s" },
  { left: "38%", top: "21%", size: "3px", delay: "-0.2s", duration: "1.5s" },
  { left: "48%", top: "12%", size: "2px", delay: "-0.9s", duration: "1.3s" },
  { left: "59%", top: "25%", size: "4px", delay: "-0.5s", duration: "1.6s" },
  { left: "69%", top: "10%", size: "3px", delay: "-0.1s", duration: "1.25s" },
  { left: "81%", top: "31%", size: "2px", delay: "-0.8s", duration: "1.45s" },
  { left: "91%", top: "17%", size: "3px", delay: "-0.3s", duration: "1.2s" },
  { left: "11%", top: "63%", size: "4px", delay: "-0.6s", duration: "1.55s" },
  { left: "23%", top: "77%", size: "2px", delay: "-1s", duration: "1.35s" },
  { left: "34%", top: "56%", size: "3px", delay: "-0.35s", duration: "1.25s" },
  { left: "45%", top: "82%", size: "2px", delay: "-0.75s", duration: "1.5s" },
  { left: "57%", top: "67%", size: "3px", delay: "-0.15s", duration: "1.3s" },
  { left: "72%", top: "74%", size: "4px", delay: "-0.55s", duration: "1.6s" },
  { left: "84%", top: "58%", size: "2px", delay: "-0.95s", duration: "1.2s" },
  { left: "94%", top: "81%", size: "3px", delay: "-0.45s", duration: "1.45s" },
];

const accentStars = [
  { left: "15%", top: "18%", delay: "-0.2s", duration: "1.8s" },
  { left: "76%", top: "14%", delay: "-0.9s", duration: "2s" },
  { left: "88%", top: "66%", delay: "-0.5s", duration: "1.9s" },
];

export default function PortfolioPage({ language, onToggleLanguage }) {
  const [selectedProject, setSelectedProject] = useState(0);
  const content = getPortfolioContent(language);

  return (
    <div className="portfolio-page portfolio-version-b" lang={language === "en" ? "en" : "zh-CN"}>
      <div className="portfolio-twinkle-layer" aria-hidden="true">
        {twinkleStars.map((star) => (
          <span
            className="portfolio-twinkle-dot"
            key={`${star.left}-${star.top}`}
            style={{
              "--star-left": star.left,
              "--star-top": star.top,
              "--star-size": star.size,
              "--star-delay": star.delay,
              "--star-duration": star.duration,
            }}
          />
        ))}
        {accentStars.map((star) => (
          <img
            className="portfolio-twinkle-accent"
            key={`${star.left}-${star.top}`}
            src="/assets/portfolio/items/items_star.png"
            alt=""
            style={{
              "--star-left": star.left,
              "--star-top": star.top,
              "--star-delay": star.delay,
              "--star-duration": star.duration,
            }}
          />
        ))}
      </div>
      <HeartCursorTrail />
      <button
        type="button"
        className="portfolio-language-button"
        onClick={onToggleLanguage}
        aria-label={language === "en" ? "Switch to Chinese" : "切换为英文"}
      >
        <img src="/assets/ui/button_language.png" alt="EN | 中文" />
      </button>
      <PortfolioHome content={content} />
      <Projects content={content} selectedProject={selectedProject} onSelectProject={setSelectedProject} />
      <Journey content={content} />
      <Skills content={content} />
      <Contact content={content} />
    </div>
  );
}
