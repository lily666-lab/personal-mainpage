import React from "react";
import { FloatingDecorationLayer } from "../FloatingDecorations";

const contactStars = [
  {
    id: "contact-star-left",
    src: "/assets/portfolio/items/items_star.png",
    className: "floating-drag-star",
    left: "24%",
    top: "23%",
    width: "clamp(76px, 7vw, 116px)",
    delay: "-0.8s",
  },
  {
    id: "contact-star-upper-right",
    src: "/assets/portfolio/items/items_star.png",
    className: "floating-drag-star",
    left: "90%",
    top: "30%",
    width: "clamp(72px, 6.8vw, 112px)",
    delay: "-0.3s",
  },
  {
    id: "contact-star-mid",
    src: "/assets/portfolio/items/items_star.png",
    className: "floating-drag-star",
    left: "49%",
    top: "40%",
    width: "clamp(70px, 6.6vw, 110px)",
    delay: "-1.2s",
  },
  {
    id: "contact-star-lower-right",
    src: "/assets/portfolio/items/items_star.png",
    className: "floating-drag-star",
    left: "88%",
    top: "78%",
    width: "clamp(82px, 7.6vw, 128px)",
    delay: "-0.6s",
  },
];

export default function ContactFloatingStars() {
  return <FloatingDecorationLayer className="floating-contact-star-layer" items={contactStars} />;
}
