import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ContactFloatingStars from "./ContactFloatingStars";

gsap.registerPlugin(useGSAP);

const contactAssets = {
  star: "/assets/portfolio/items/items_star.png",
  heart: "/assets/portfolio/items/items_heart.png",
  moon: "/assets/portfolio/page5_contact/about_moon.png",
  character: "/assets/portfolio/page5_contact/about_character_star.png",
  ground: "/assets/portfolio/page5_contact/contact_ground.png",
  email: "/assets/portfolio/page5_contact/contact_email.png",
};

export default function Contact({ content }) {
  const { contact } = content;
  const contactRef = useRef(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        return;
      }

      gsap.set(".contact-divider span", { transformOrigin: "50% 50%" });
      gsap.set(".contact-divider img", { transformOrigin: "50% 50%" });
      gsap.set(".contact-title-area", { autoAlpha: 0, y: -112, scaleX: 1.04, scaleY: 0.92 });
      gsap.set(".contact-divider span", { scaleX: 0 });
      gsap.set(".contact-divider img", { autoAlpha: 0, scale: 0.3, rotation: -12 });
      gsap.set(".contact-info-panel", { autoAlpha: 0, y: 30 });
      gsap.set(".contact-character, .contact-ground", { autoAlpha: 0, y: 32 });

      const timeline = gsap.timeline({
        paused: true,
        defaults: {
          ease: "power2.out",
        },
      });

      timeline
        .to(".contact-title-area", {
          autoAlpha: 1,
          y: 0,
          scaleX: 1,
          scaleY: 1,
          duration: 1.08,
          ease: "bounce.out",
        })
        .to(
          ".contact-divider span",
          {
            scaleX: 1,
            duration: 0.52,
            stagger: 0.04,
          },
          "-=0.12",
        )
        .to(
          ".contact-divider img",
          {
            autoAlpha: 1,
            scale: 1,
            rotation: 0,
            duration: 0.42,
            ease: "back.out(3)",
          },
          "-=0.28",
        )
        .to(
          ".contact-info-panel",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.08",
        )
        .to(
          ".contact-character, .contact-ground",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.76,
            stagger: 0,
          },
          "-=0.42",
        );

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            timeline.play(0);
            observer.disconnect();
          }
        },
        {
          threshold: 0.28,
          rootMargin: "0px 0px -12% 0px",
        },
      );

      observer.observe(contactRef.current);

      return () => {
        observer.disconnect();
      };
    },
    { scope: contactRef },
  );

  return (
    <section className="portfolio-section portfolio-contact" id="contact" ref={contactRef}>
      <ContactFloatingStars />
      <div className="portfolio-shell portfolio-contact-shell">
        <div className="contact-title-area">
          <img className="contact-title-moon" src={contactAssets.moon} alt="" />
          <img className="contact-title-star" src={contactAssets.star} alt="" />
          <h2>{contact.title}</h2>
          <img className="contact-title-star" src={contactAssets.star} alt="" />
        </div>

        <div className="contact-divider" aria-hidden="true">
          <span />
          <img src={contactAssets.heart} alt="" />
          <span />
        </div>

        <div className="portfolio-contact-stage">
          <div className="contact-info-panel" aria-label="Contact information">
            <div className="contact-info-row">
              <img className="contact-info-icon" src={contactAssets.email} alt="" />
              <div>
                <strong>Email:</strong>
                <p>{contact.email}</p>
              </div>
            </div>

            <div className="contact-link-list">
              <div className="contact-resource-row">
                <span className="contact-resource-label">{contact.resumeLabel}</span>
                <div className="contact-resume-actions">
                  {contact.resumeDownloads.map((resume) => (
                    <a
                      className="contact-resource-button"
                      href={resume.href}
                      download={resume.filename}
                      key={resume.href}
                    >
                      {resume.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="contact-resource-row contact-project-row">
                <span className="contact-resource-label">{contact.portfolioLabel}</span>
                <a
                  className="contact-project-link"
                  href={contact.portfolioUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {contact.portfolioUrl}
                </a>
              </div>
            </div>

            <div className="contact-closing">
              <span>★</span>
              <p>{contact.closing}</p>
              <img src={contactAssets.heart} alt="" />
            </div>
          </div>

          <div className="contact-character-stage" aria-hidden="true">
            <img className="contact-character" src={contactAssets.character} alt="" />
            <img className="contact-ground" src={contactAssets.ground} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
