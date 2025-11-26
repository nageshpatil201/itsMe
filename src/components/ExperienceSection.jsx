import SectionHeading from './SectionHeading'
import { experience } from '../data/experience'

function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <SectionHeading
        eyebrow="Experience"
        title="Building resilient systems with measurable outcomes"
        description="A snapshot of the teams I have helped scale and the impact delivered."
      />
      <div className="experience-grid">
        {experience.map((job) => (
          <article key={job.company} className="experience-card">
            <div className="experience-card__header">
              <p className="experience-card__period">{job.period}</p>
              <h3>
                {job.role} · {job.company}
              </h3>
            </div>
            <p className="experience-card__summary">{job.summary}</p>
            <ul>
              {job.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection

