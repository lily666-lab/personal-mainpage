import React from "react";
import { FloatingDecorationLayer } from "../FloatingDecorations";

const skillsStars = [
  {
    id: "skills-star-left",
    src: "/assets/portfolio/items/items_star.png",
    className: "floating-drag-star",
    left: "7%",
    top: "12%",
    width: "clamp(74px, 7vw, 116px)",
    delay: "-0.4s",
  },
  {
    id: "skills-star-right",
    src: "/assets/portfolio/items/items_star.png",
    className: "floating-drag-star",
    left: "86%",
    top: "11%",
    width: "clamp(82px, 7.8vw, 126px)",
    delay: "-1.1s",
  },
  {
    id: "skills-star-lower",
    src: "/assets/portfolio/items/items_star.png",
    className: "floating-drag-star",
    left: "72%",
    top: "72%",
    width: "clamp(68px, 6.4vw, 106px)",
    delay: "-0.15s",
  },
];

export default function SkillsFloatingStars() {
  return <FloatingDecorationLayer className="floating-skills-star-layer" items={skillsStars} />;
}
