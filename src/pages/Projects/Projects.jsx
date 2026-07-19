import React, { useEffect, useState } from "react";
import ProjectFloatingClouds from "./ProjectFloatingClouds";

export default function Projects({ content, selectedProject, onSelectProject }) {
  const { projects } = content;
  const activeProject = projects.items[selectedProject] ?? projects.items[0];
  const totalProjects = projects.items.length;
  const [carouselProject, setCarouselProject] = useState(0);
  const [hasUserSelectedProject, setHasUserSelectedProject] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCarouselProject((currentProject) => {
        const nextProject = (currentProject + 1) % totalProjects;
        if (!hasUserSelectedProject) {
          onSelectProject(nextProject);
        }
        return nextProject;
      });
    }, 3200);

    return () => window.clearInterval(timer);
  }, [hasUserSelectedProject, onSelectProject, totalProjects]);

  const handleProjectClick = (index) => {
    setHasUserSelectedProject(true);
    setCarouselProject(index);
    onSelectProject(index);
  };

  const getCardOffset = (index) => {
    const rawOffset = index - carouselProject;
    const half = Math.floor(totalProjects / 2);
    return ((rawOffset + half + totalProjects) % totalProjects) - half;
  };

  return (
    <section className="portfolio-section portfolio-projects" id="projects">
      <ProjectFloatingClouds />
      <div className="portfolio-shell portfolio-project-shell">
        <div className="portfolio-section-heading portfolio-project-heading">
          <img className="project-heading-star" src="/assets/portfolio/items/items_star.png" alt="" />
          <div className="project-title-frame">
            <img src="/assets/portfolio/page4_skill/skill_tag_subtitle.png" alt="" />
            <h2>{projects.title}</h2>
          </div>
          <img className="project-heading-star" src="/assets/portfolio/items/items_star.png" alt="" />
        </div>

        <div className="project-carousel" aria-label="AI project cards">
          {projects.items.map((project, index) => {
            const offset = getCardOffset(index);
            const depth = Math.abs(offset);

            return (
              <button
                className={`project-slider-card ${carouselProject === index ? "is-active" : ""}`}
                key={project.id}
                type="button"
                onClick={() => handleProjectClick(index)}
                style={{ "--offset": offset, "--depth": depth }}
                aria-label={`${projects.itemAriaLabelPrefix} ${project.title.replace("\n", " ")} ${projects.itemAriaLabelSuffix}`}
              >
                <img className="project-card-art" src={project.cardImage} alt="" />
                <span className="project-card-number">{project.number}</span>
                <strong>{project.title}</strong>
                <small>{project.subtitle}</small>
                <span className="project-keywords">
                  {project.keywords.map((keyword) => (
                    <em key={keyword}>{keyword}</em>
                  ))}
                </span>
              </button>
            );
          })}
        </div>

        <aside className="portfolio-panel portfolio-project-detail" key={activeProject.id}>
          <div>
            <p className="portfolio-kicker">{projects.detailLabel}</p>
            <h3>{activeProject.title}</h3>
            <strong>{activeProject.summary}</strong>
            <p>{activeProject.detail}</p>
          </div>
          <div className="project-tech-stack">
            <span>{projects.techStackLabel}</span>
            {activeProject.tags.map((tag) => (
              <em key={tag}>{tag}</em>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
