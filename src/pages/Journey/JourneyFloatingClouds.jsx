import React from "react";
import { FloatingDecorationLayer } from "../FloatingDecorations";

const journeyClouds = [
  {
    id: "journey-cloud-top-right",
    src: "/assets/portfolio/items/items_cloud3.png",
    className: "floating-cloud floating-cloud-day",
    left: "72%",
    top: "7%",
    width: "clamp(230px, 26vw, 420px)",
    delay: "-0.4s",
  },
  {
    id: "journey-cloud-top-left-low",
    src: "/assets/portfolio/items/items_cloud1.png",
    className: "floating-cloud floating-cloud-day",
    left: "2%",
    top: "18%",
    width: "clamp(220px, 25vw, 400px)",
    delay: "-1.2s",
  },
  {
    id: "journey-cloud-mid-left",
    src: "/assets/portfolio/items/items_cloud1.png",
    className: "floating-cloud floating-cloud-day",
    left: "-8%",
    top: "42%",
    width: "clamp(210px, 24vw, 380px)",
    delay: "-0.8s",
  },
  {
    id: "journey-cloud-sunset-left",
    src: "/assets/portfolio/items/items_cloud3.png",
    className: "floating-cloud floating-cloud-sunset",
    left: "-4%",
    top: "76%",
    width: "clamp(260px, 30vw, 480px)",
    delay: "-1.5s",
  },
  {
    id: "journey-cloud-sunset-right",
    src: "/assets/portfolio/items/items_cloud3.png",
    className: "floating-cloud floating-cloud-sunset",
    left: "73%",
    top: "82%",
    width: "clamp(250px, 29vw, 460px)",
    delay: "-0.35s",
  },
];

export default function JourneyFloatingClouds() {
  return <FloatingDecorationLayer className="floating-journey-cloud-layer" items={journeyClouds} />;
}
