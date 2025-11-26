import './App.css'
import Hero from './components/Hero'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import ContactSection from './components/ContactSection'
import AppFooter from './components/AppFooter'
import SocialRail from './components/SocialRail'
import { contact, socialLinks } from './data/contact'
import { navLinks } from './data/navigation'

function App() {
  return (
    <div className="app">
      <SocialRail />
      <Hero contact={contact} navLinks={navLinks} socialLinks={socialLinks} />
      <main>
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <AppFooter />
    </div>
  )
}

export default App
