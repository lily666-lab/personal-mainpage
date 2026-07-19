import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const heartCount = 18;
const hearts = Array.from({ length: heartCount }, (_, index) => index);

export default function HeartCursorTrail() {
  const trailRef = useRef(null);
  const heartRefs = useRef([]);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

      if (reduceMotion || !canHover) {
        return;
      }

      let heartIndex = 0;
      let lastX = 0;
      let lastY = 0;
      let hasLastPoint = false;

      const emitHeart = (x, y) => {
        const heart = heartRefs.current[heartIndex];
        heartIndex = (heartIndex + 1) % heartCount;

        if (!heart) {
          return;
        }

        const driftX = gsap.utils.random(-18, 18);
        const driftY = gsap.utils.random(-34, -16);
        const rotate = gsap.utils.random(-18, 18);
        const startScale = gsap.utils.random(0.72, 1.05);

        gsap.killTweensOf(heart);
        gsap.set(heart, {
          x,
          y,
          xPercent: -50,
          yPercent: -50,
          autoAlpha: 1,
          scale: startScale,
          rotation: rotate * -0.4,
        });

        gsap.to(heart, {
          x: x + driftX,
          y: y + driftY,
          autoAlpha: 0,
          scale: 0.2,
          rotation: rotate,
          duration: 0.78,
          ease: "power2.out",
        });
      };

      const handlePointerMove = (event) => {
        if (!hasLastPoint) {
          hasLastPoint = true;
          lastX = event.clientX;
          lastY = event.clientY;
          emitHeart(event.clientX, event.clientY);
          return;
        }

        const distance = Math.hypot(event.clientX - lastX, event.clientY - lastY);

        if (distance < 22) {
          return;
        }

        lastX = event.clientX;
        lastY = event.clientY;
        emitHeart(event.clientX, event.clientY);
      };

      window.addEventListener("pointermove", handlePointerMove, { passive: true });

      return () => {
        window.removeEventListener("pointermove", handlePointerMove);
      };
    },
    { scope: trailRef },
  );

  return (
    <div className="heart-cursor-trail" ref={trailRef} aria-hidden="true">
      {hearts.map((heart) => (
        <img
          className="heart-cursor-trail-item"
          key={heart}
          src="/assets/portfolio/items/items_heart.png"
          alt=""
          ref={(element) => {
            heartRefs.current[heart] = element;
          }}
        />
      ))}
    </div>
  );
}
