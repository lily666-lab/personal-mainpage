import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SkillsFloatingStars from "./SkillsFloatingStars";

gsap.registerPlugin(useGSAP);

const skillAssets = {
  titleFrame: "/assets/portfolio/page4_skill/skill_tag_subtitle.png",
  toolkitFrame: "/assets/portfolio/page4_skill/skill_tagbackground_purple.png",
  star: "/assets/portfolio/items/items_star.png",
};

const skillThemes = [
  {
    name: "blue",
    title: "/assets/portfolio/page4_skill/skill_tag_title_blue.png",
    tag: "/assets/portfolio/page4_skill/skill_tag_blue.png",
  },
  {
    name: "yellow",
    title: "/assets/portfolio/page4_skill/skill_tag_title_yellow.png",
    tag: "/assets/portfolio/page4_skill/skill_tag_yellow.png",
  },
  {
    name: "pink",
    title: "/assets/portfolio/page4_skill/skill_tag_title_pink.png",
    tag: "/assets/portfolio/page4_skill/skill_tag_pink.png",
  },
  {
    name: "orange",
    title: "/assets/portfolio/page4_skill/skill_tag_title_orange.png",
    tag: "/assets/portfolio/page4_skill/skill_tag_orange.png",
  },
];

export default function Skills({ content }) {
  const { skills } = content;
  const skillsRef = useRef(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        return;
      }

      const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      const tags = gsap.utils.toArray(".skills-column-title, .skills-tag");
      const clampTitleMove = gsap.utils.clamp(-8, 8);
      const clampTagMove = gsap.utils.clamp(-14, 14);
      const clampTitleRotate = gsap.utils.clamp(-1.4, 1.4);
      const clampTagRotate = gsap.utils.clamp(-2.4, 2.4);
      const cleanup = [];

      gsap.set(tags, {
        transformOrigin: "50% 50%",
        force3D: true,
      });

      tags.forEach((tag) => {
        const isTitle = tag.classList.contains("skills-column-title");
        const moveClamp = isTitle ? clampTitleMove : clampTagMove;
        const rotateClamp = isTitle ? clampTitleRotate : clampTagRotate;
        let returnTimer;

        const returnToRest = () => {
          window.clearTimeout(returnTimer);
          gsap.to(tag, {
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            duration: 0.82,
            ease: "elastic.out(1, 0.48)",
            overwrite: true,
          });
        };

        const nudge = (event) => {
          if (!canHover) {
            return;
          }

          window.clearTimeout(returnTimer);

          const movementX = event.movementX || 0;
          const movementY = event.movementY || 0;
          const nextX = moveClamp(movementX * 0.9);
          const nextY = moveClamp(movementY * 0.62);
          const nextRotation = rotateClamp(movementX * 0.13);

          gsap.to(tag, {
            x: nextX,
            y: nextY,
            rotation: nextRotation,
            duration: 0.26,
            ease: "power3.out",
            overwrite: true,
          });

          returnTimer = window.setTimeout(returnToRest, 90);
        };

        const press = () => {
          window.clearTimeout(returnTimer);
          gsap.to(tag, {
            scale: 0.965,
            y: "+=2",
            duration: 0.08,
            ease: "power1.out",
            overwrite: true,
          });
        };

        const release = () => {
          gsap.to(tag, {
            scale: 1,
            x: 0,
            y: 0,
            rotation: 0,
            duration: 0.62,
            ease: "elastic.out(1, 0.44)",
            overwrite: true,
          });
        };

        tag.addEventListener("pointermove", nudge);
        tag.addEventListener("pointerleave", returnToRest);
        tag.addEventListener("pointerdown", press);
        tag.addEventListener("pointerup", release);
        tag.addEventListener("pointercancel", release);

        cleanup.push(() => {
          window.clearTimeout(returnTimer);
          tag.removeEventListener("pointermove", nudge);
          tag.removeEventListener("pointerleave", returnToRest);
          tag.removeEventListener("pointerdown", press);
          tag.removeEventListener("pointerup", release);
          tag.removeEventListener("pointercancel", release);
        });
      });

      return () => {
        cleanup.forEach((removeListeners) => removeListeners());
      };
    },
    { dependencies: [skills], revertOnUpdate: true, scope: skillsRef },
  );

  return (
    <section className="portfolio-section portfolio-skills" id="skills" ref={skillsRef}>
      <SkillsFloatingStars />
      <div className="portfolio-shell portfolio-skills-shell">
        <div className="portfolio-section-heading portfolio-skills-heading">
          <img className="skill-heading-star" src={skillAssets.star} alt="" />
          <div className="skills-main-title-frame">
            <img src={skillAssets.titleFrame} alt="" />
            <h2>{skills.title}</h2>
          </div>
          <img className="skill-heading-star" src={skillAssets.star} alt="" />
        </div>

        <div className="portfolio-skills-subtitle" aria-label={skills.subtitle}>
          <img src={skillAssets.star} alt="" />
          <strong>{skills.subtitle}</strong>
          <img src={skillAssets.star} alt="" />
        </div>

        <div className="skills-toolkit">
          <img className="skills-toolkit-frame" src={skillAssets.toolkitFrame} alt="" />
          <div className="skills-toolkit-grid">
            {skills.groups.map((group, groupIndex) => {
              const theme = skillThemes[groupIndex];

              return (
                <article className={`skills-column skills-column-${theme.name}`} key={theme.name}>
                  <h3 className="skills-column-title" style={{ "--title-art": `url(${theme.title})` }}>
                    {group.title}
                  </h3>
                  <div className="skills-tag-stack">
                    {group.items.map((item, itemIndex) => (
                      <span
                        className={`skills-tag ${item.length > 16 ? "skills-tag-extra-long" : item.length > 12 ? "skills-tag-long" : ""}`}
                        key={`${theme.name}-${itemIndex}`}
                        style={{ "--tag-art": `url(${theme.tag})` }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
