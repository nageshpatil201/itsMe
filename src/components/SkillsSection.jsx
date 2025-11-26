// src/components/SkillsSection.jsx
import { skills } from '../data/skills'

function SkillsSection() {
  return (
    <section className="section" id="skills">
      <div className="section-heading">
        <div>
          <p className="section-heading__eyebrow">Technical Stack</p>
          <h2>Skills & Technologies</h2>
          <p className="section-heading__description">
            Core competencies across the full development lifecycle
          </p>
        </div>
      </div>
      <div className="skills-grid">
        {skills.map((category) => (
          <div key={category.label} className="skills-card">
            <div className="skills-card__label">{category.label}</div>
            <ul>
              {category.items.map((item) => (
                <li key={item.name} className="skill-item">
                  <span className="skill-item__icon">{item.icon}</span>
                  <span className="skill-item__name">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection