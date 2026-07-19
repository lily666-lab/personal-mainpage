import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import JourneyFloatingClouds from "./JourneyFloatingClouds";

gsap.registerPlugin(useGSAP, MotionPathPlugin, ScrollTrigger);

const journeyAssets = {
  background: "/assets/portfolio/backgrounds/sky_p3_v3.png",
  route: "/assets/portfolio/page3_journey/journey_flyroad.png",
  plane: "/assets/portfolio/page3_journey/journey_icon_plane.png",
  title: "/assets/portfolio/page3_journey/journey_title.png",
  cloud: "/assets/portfolio/items/items_cloud3.png",
  sunset: "/assets/portfolio/page3_journey/journey_icon_sunset_1.png",
};

const revealDirections = {
  "yanbian-bachelor": "right",
  "anu-master": "left",
  "handy-operation": "right",
  "ruitai-auditor": "left",
};

const journeyFlightSegments = [
  "M150 60 C160 185 260 315 390 390",
  "M390 390 C500 470 640 585 760 710",
  "M760 710 C625 800 470 855 310 935",
  "M310 935 C430 1005 620 1085 775 1150",
  "M775 1150 C650 1260 365 1405 115 1507",
];

const journeyFlightPath = journeyFlightSegments.join(" ");

const journeyFlightDebugPoints = [
  { label: "1", x: 390, y: 390 },
  { label: "2", x: 760, y: 710 },
  { label: "3", x: 310, y: 935 },
  { label: "4", x: 775, y: 1150 },
  { label: "5", x: 115, y: 1507 },
];

export default function Journey({ content }) {
  const { journey } = content;
  const stops = journey.stops;
  const journeyRef = useRef(null);
  const planeRef = useRef(null);
  const flightPathRef = useRef(null);
  const flightSegmentRefs = useRef([]);

  useGSAP(
    () => {
      const plane = planeRef.current;

      gsap.set(plane, {
        xPercent: -50,
        yPercent: -50,
        transformOrigin: "50% 50%",
      });

      gsap.set(plane, {
        rotation: 0,
        scaleX: 1,
      });

      const flightTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: journeyRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 3,
          invalidateOnRefresh: true,
        },
      });

      const segmentElements = flightSegmentRefs.current.filter(Boolean);

      const pathSegment = (segmentIndex, start = 0, end = 1) => ({
        ease: "none",
        rotation: 0,
        motionPath: {
          path: segmentElements[segmentIndex],
          align: segmentElements[segmentIndex],
          alignOrigin: [0.5, 0.5],
          autoRotate: false,
          start,
          end,
        },
      });

      flightTimeline
        .to(plane, pathSegment(0), 0)
        .to(plane, pathSegment(1, 0, 0.88))
        .to(plane, pathSegment(1, 0.88, 1))
        .to(plane, { scaleX: -1, rotation: 0, duration: 0.12, ease: "none" }, "<")
        .to(plane, pathSegment(2, 0, 0.88))
        .to(plane, pathSegment(2, 0.88, 1))
        .to(plane, { scaleX: 1, rotation: 0, duration: 0.12, ease: "none" }, "<")
        .to(plane, pathSegment(3, 0, 0.88))
        .to(plane, pathSegment(3, 0.88, 1))
        .to(plane, { scaleX: -1, rotation: 0, duration: 0.12, ease: "none" }, "<")
        .to(plane, pathSegment(4));
    },
    { scope: journeyRef },
  );

  const { contextSafe } = useGSAP({ scope: journeyRef });

  const revealStop = contextSafe((event, stop) => {
    const stopElement = event.currentTarget.closest(".journey-stop");

    if (!stopElement || stopElement.classList.contains("is-revealed")) {
      return;
    }

    const direction = revealDirections[stop.id] === "right" ? 1 : -1;
    const cloud = stopElement.querySelector(".journey-stop-cloud");
    const icon = stopElement.querySelector(".journey-stop-icon");
    const text = stopElement.querySelector(".journey-stop-text");

    stopElement.classList.add("is-revealed");

    gsap
      .timeline()
      .to([cloud, icon], {
        x: `+=${direction * 150}`,
        scale: 0.85,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
      })
      .to(
        text,
        {
          opacity: 1,
          y: -8,
          duration: 0.45,
          ease: "power2.out",
        },
        "-=0.25",
      );
  });

  return (
    <section className="portfolio-section portfolio-journey" id="journey" ref={journeyRef}>
      <div className="portfolio-map-canvas" aria-label="Journey map">
        <img className="portfolio-map-background" src={journeyAssets.background} alt="" />
        <JourneyFloatingClouds />

        <div className="journey-map-stage">
          <img className="journey-sunset-art" src={journeyAssets.sunset} alt="" />
          <img className="journey-title-art" src={journeyAssets.title} alt="My Journey" />

          <div className="journey-route-wrap" aria-label={journey.routeAriaLabel}>
            <img className="journey-route-art" src={journeyAssets.route} alt="" />
            <svg className="journey-flight-svg" viewBox="0 0 941 1672" aria-hidden="true">
              <path ref={flightPathRef} className="journey-flight-path" d={journeyFlightPath} />
              {journeyFlightSegments.map((segment, index) => (
                <path
                  className="journey-flight-segment"
                  d={segment}
                  key={segment}
                  ref={(element) => {
                    flightSegmentRefs.current[index] = element;
                  }}
                />
              ))}
              {journeyFlightDebugPoints.map((point) => (
                <g className="journey-flight-point" key={point.label} transform={`translate(${point.x} ${point.y})`}>
                  <circle r="18" />
                  <text y="8">{point.label}</text>
                </g>
              ))}
            </svg>
            <img className="journey-plane" src={journeyAssets.plane} alt="" ref={planeRef} />

            {stops.map((stop) => (
              <article className={`journey-stop ${stop.className} journey-stop-${stop.side}`} key={stop.id}>
                <img className="journey-stop-pin" src={stop.pin} alt="" />
                <div className="journey-stop-cloud-wrap">
                  <div className="journey-stop-text">
                    <p className="journey-stop-time">{stop.time}</p>
                    {stop.lines.map((line, index) => (
                      <p className={index === 0 ? "journey-stop-name" : "journey-stop-role"} key={line}>
                        {line}
                      </p>
                    ))}
                  </div>
                  <img
                    className="journey-stop-cloud"
                    src={journeyAssets.cloud}
                    alt=""
                    onClick={(event) => revealStop(event, stop)}
                  />
                  <img
                    className="journey-stop-icon"
                    src={stop.icon}
                    alt=""
                    onClick={(event) => revealStop(event, stop)}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
