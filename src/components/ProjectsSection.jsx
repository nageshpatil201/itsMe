import SectionHeading from './SectionHeading'
import ProjectMediaCarousel from './ProjectMediaCarousel'
import { projects1, projects2 } from '../data/projects'

function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <SectionHeading
        eyebrow="Projects"
        title="My work"
        description="Recent projects that highlight end-to-end ownership, from architecture to launch."
      />
      <div className="projects-grid">
        {projects1.map((project) => (
          <article key={project.name} className="project-card">
            <ProjectMediaCarousel images={project.images} />
            <div className="project-card__header">
              <h3>{project.name}</h3>
              <span>{project.impact}</span>
            </div>
            <p>{project.description}</p>
            <div className="project-card__footer">
              <div className="chip-row">
                {project.stack.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="projects-grid">
        {projects2.map((project) => (
          <article key={project.name} className="project-card">
            <ProjectMediaCarousel images={project.images} />
            <div className="project-card__header">
              <h3>{project.name}</h3>
              <span>{project.impact}</span>
            </div>
            <p>{project.description}</p>
            <div className="project-card__footer">
              <div className="chip-row">
                {project.stack.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection

