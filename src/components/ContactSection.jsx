import SectionHeading from './SectionHeading'
import { contact, socialLinks } from '../data/contact'

const linkedInLink =
  socialLinks.find((link) => link.label.toLowerCase() === 'linkedin')?.href || socialLinks[0]?.href || '#'

function ContactSection() {
  return (
    <section id="contact" className="section contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s talk about your roadmap"
        description="Whether you need a hands-on engineer or someone to lead a team, I can help ship the next milestone."
      />
      <div className="contact__content">
        <p>{contact.availability}</p>
        <div className="contact__details">
          <p>
            Phone:{' '}
            <a href={`tel:${contact.phone.replace(/\s+/g, '')}`}>{contact.phone}</a>
          </p>
          <p>
            Email:{' '}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          {/* <p>
            Website:{' '}
            <a href={contact.website} target="_blank" rel="noreferrer">
              {contact.website}
            </a>
          </p> */}
          <p>Location: {contact.location}</p>
        </div>
        <div className="contact__actions">
          <a className="btn btn--primary" href={`mailto:${contact.email}`}>
            <span style={{ fontSize: "20px"}}>{contact.email_icon}</span>
            {contact.email}
          </a>
          <a className="btn btn--ghost" href={linkedInLink} target="_blank" rel="noreferrer">
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

