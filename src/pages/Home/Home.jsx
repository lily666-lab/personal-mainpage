import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const profilePhoto = {
  src: "/assets/portfolio/page1_about/profile_photo_smell.png",
  position: "46% 57%",
};

export default function PortfolioHome({ content }) {
  const { about } = content;
  const aboutRef = useRef(null);
  const typedIntroLines = about.paragraphs.slice(0, 2);
  const typedIntro = typedIntroLines.join("\n");
  const terminalRest = about.paragraphs.slice(2);
  const [typedCount, setTypedCount] = useState(0);
  const [showTerminalRest, setShowTerminalRest] = useState(false);
  const firstIntroLineLength = typedIntroLines[0].length;
  const secondIntroLineStart = firstIntroLineLength + 1;
  const typedFirstIntroLine = typedIntro.slice(0, Math.min(typedCount, firstIntroLineLength));
  const typedSecondIntroLine = typedCount > secondIntroLineStart ? typedIntro.slice(secondIntroLineStart, typedCount) : "";

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        return;
      }

      const timeline = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
      });

      timeline
        .from(".about-title-row", {
          autoAlpha: 0,
          y: 18,
          duration: 0.55,
        })
        .from(
          ".about-computer-wrap",
          {
            autoAlpha: 0,
            y: 30,
            duration: 0.72,
          },
          "-=0.24",
        )
        .from(
          ".about-photo-frame",
          {
            autoAlpha: 0,
            y: 28,
            rotation: -1.5,
            duration: 0.68,
          },
          "-=0.5",
        )
        .from(
          ".about-corner-decor, .about-photo-flower",
          {
            autoAlpha: 0,
            y: 14,
            scale: 0.94,
            duration: 0.5,
            stagger: 0.08,
          },
          "-=0.34",
        );
    },
    { scope: aboutRef },
  );

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setTypedCount(typedIntro.length);
      setShowTerminalRest(true);
      return undefined;
    }

    setTypedCount(0);
    setShowTerminalRest(false);

    const typingDuration = 5000;
    const startDelay = 520;
    const stepDuration = typingDuration / typedIntro.length;
    let intervalId;
    let revealTimer;

    const startTimer = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        setTypedCount((currentCount) => {
          const nextCount = currentCount + 1;

          if (nextCount >= typedIntro.length) {
            window.clearInterval(intervalId);
            revealTimer = window.setTimeout(() => setShowTerminalRest(true), 260);
            return typedIntro.length;
          }

          return nextCount;
        });
      }, stepDuration);
    }, startDelay);

    return () => {
      window.clearTimeout(startTimer);
      window.clearInterval(intervalId);
      window.clearTimeout(revealTimer);
    };
  }, [typedIntro]);

  return (
    <section className="portfolio-section portfolio-about" id="about" ref={aboutRef}>
      <div className="portfolio-shell portfolio-about-shell">
        <header className="about-title-row">
          <img className="about-title-star about-title-star-left" src="/assets/portfolio/items/items_star.png" alt="" />
          <h1>{about.title}</h1>
          <img className="about-title-star about-title-star-right" src="/assets/portfolio/items/items_star.png" alt="" />
        </header>

        <div className="portfolio-about-grid">
          <div className="about-computer-wrap" aria-label="About me computer">
            <img className="about-computer" src="/assets/portfolio/page1_about/crt_computer1.png" alt="Retro CRT computer" />
            <div className="about-terminal-screen">
              <p className={typedCount <= firstIntroLineLength ? "about-terminal-line" : ""}>{typedFirstIntroLine}</p>
              {typedCount > firstIntroLineLength && <p className="about-terminal-line">{typedSecondIntroLine}</p>}
              <div className={`about-terminal-rest${showTerminalRest ? " is-visible" : ""}`} aria-hidden={!showTerminalRest}>
                {terminalRest.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="about-photo-frame about-pinned-photo" aria-label="Profile photo preview">
            <span className="about-photo-tape" aria-hidden="true" />
            <div className="about-photo-preview">
              <img src={profilePhoto.src} alt="Lily profile preview" style={{ objectPosition: profilePhoto.position }} />
            </div>
            <img className="about-photo-flower" src="/assets/portfolio/items/items_flower.png" alt="" />
          </div>
        </div>

        <img className="about-corner-decor about-computer-flower" src="/assets/portfolio/items/items_flower.png" alt="" />
        <img className="about-corner-decor about-corner-cloud" src="/assets/portfolio/items/items_cloud1.png" alt="" />
      </div>
    </section>
  );
}
