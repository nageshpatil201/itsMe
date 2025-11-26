import { socialLinks } from '../data/contact'

const icons = {
  globe: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 0c-2.5 2.3-4 5.5-4 9s1.5 6.7 4 9m0-18c2.5 2.3 4 5.5 4 9s-1.5 6.7-4 9m-8-9h16m-14-4h12m-12 8h12"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M9 19c-4 1.5-4-2-6-2m12 4v-3.1c0-.9.1-1.3-.4-1.8 2.3-.3 4.7-1.1 4.7-5a3.9 3.9 0 0 0-1-2.7 3.6 3.6 0 0 0-.1-2.6s-.9-.3-3 1a10.3 10.3 0 0 0-5.4 0c-2.1-1.4-3-1-3-1a3.6 3.6 0 0 0-.1 2.6A3.9 3.9 0 0 0 6.7 11c0 3.8 2.4 4.6 4.7 5-.5.5-.4 1-.4 1.8V21"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6 9v10m0-14a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 14V9m0 4c0-2 1-3 3-3s3 1 3 3v5m-10 0h12"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        ry="5"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <circle cx="17" cy="7" r="1" fill="currentColor" />
    </svg>
  )
}

function SocialRail() {
  return (
    <aside className="social-rail" aria-label="Social links">
      {socialLinks.map((link) => (
        <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="social-rail__link">
          <span className="social-rail__icon">{icons[link.icon] ?? icons.globe}</span>
          <span className="social-rail__label">{link.label}</span>
        </a>
      ))}
    </aside>
  )
}

export default SocialRail

