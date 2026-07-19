import React from "react";
import { FloatingDecorationLayer } from "../FloatingDecorations";

const projectClouds = [
  {
    id: "project-cloud-bridge-left",
    src: "/assets/portfolio/items/items_cloud3.png",
    className: "floating-cloud floating-cloud-day",
    left: "-3%",
    top: "calc(76% + 100px)",
    width: "clamp(260px, 30vw, 480px)",
    delay: "-0.6s",
  },
  {
    id: "project-cloud-bridge-mid",
    src: "/assets/portfolio/items/items_cloud1.png",
    className: "floating-cloud floating-cloud-day",
    left: "34%",
    top: "calc(82% + 100px)",
    width: "clamp(220px, 25vw, 400px)",
    delay: "-1.2s",
  },
  {
    id: "project-cloud-bridge-right",
    src: "/assets/portfolio/items/items_cloud3.png",
    className: "floating-cloud floating-cloud-day",
    left: "70%",
    top: "calc(74% + 100px)",
    width: "clamp(270px, 31vw, 500px)",
    delay: "-0.3s",
  },
  {
    id: "project-cloud-bridge-low",
    src: "/assets/portfolio/items/items_cloud1.png",
    className: "floating-cloud floating-cloud-day",
    left: "12%",
    top: "92%",
    width: "clamp(170px, 20vw, 310px)",
    delay: "-1.6s",
  },
];

export default function ProjectFloatingClouds() {
  return <FloatingDecorationLayer className="floating-project-cloud-layer" items={projectClouds} />;
}
