import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";

gsap.registerPlugin(useGSAP, Draggable, InertiaPlugin);

export function FloatingDecorationLayer({ className = "", items }) {
  const layerRef = useRef(null);

  useGSAP(
    () => {
      const draggableItems = gsap.utils.toArray(".floating-sky-item");
      const instances = Draggable.create(draggableItems, {
        type: "x,y",
        bounds: layerRef.current,
        inertia: true,
        edgeResistance: 0.82,
        zIndexBoost: true,
        cursor: "grab",
        activeCursor: "grabbing",
        onPress() {
          this.target.classList.add("is-dragging");
        },
        onRelease() {
          this.target.classList.remove("is-dragging");
        },
        onThrowComplete() {
          this.target.classList.remove("is-dragging");
        },
      });

      return () => {
        instances.forEach((instance) => instance.kill());
      };
    },
    { scope: layerRef },
  );

  return (
    <div className={`floating-sky-layer ${className}`} ref={layerRef} aria-hidden="true">
      {items.map((item) => (
        <button
          className={`floating-sky-item ${item.className}`}
          key={item.id}
          type="button"
          style={{
            "--float-left": item.left,
            "--float-top": item.top,
            "--float-width": item.width,
            "--float-delay": item.delay,
          }}
          tabIndex={-1}
        >
          <img src={item.src} alt="" draggable="false" />
        </button>
      ))}
    </div>
  );
}
