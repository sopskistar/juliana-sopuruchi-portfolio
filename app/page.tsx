'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Cloud,
  Code2,
  Menu,
  Network,
  Send,
  Sparkles,
  Terminal,
  X,
  Zap,
} from 'lucide-react'

const portrait = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_2016-7vPqU4kQPzBAgnrywBcxlzd6xTlKk2.jpg'

const projects = [
  { number: '01', title: 'AWS Hands-on Projects', category: 'CLOUD ENGINEERING', description: 'A documented collection of Cloud Quest exercises exploring VPCs, EC2, IAM, EFS, databases, and highly available applications.', tags: ['AWS', 'VPC', 'EC2'], href: 'https://github.com/sopskistar/AWS-hands-on-projects' },
  { number: '02', title: 'Playwright QA', category: 'QA AUTOMATION', description: 'SauceDemo automation with 30 passing tests across Chromium, Firefox, and WebKit, organized around practical user journeys.', tags: ['Playwright', 'TypeScript', 'QA'], href: 'https://github.com/sopskistar/playwright-qa' },
  { number: '03', title: 'ProofCourt', category: 'WEB3 / BLOCKCHAIN', description: 'A GenLayer-powered adjudication project for submitting evidence, validator review, and transparent verdicts on disputed digital claims.', tags: ['GenLayer', 'Web3', 'Smart Contracts'], href: 'https://github.com/sopskistar' },
]

const skills = [
  { icon: Cloud, title: 'Cloud Engineering', items: 'AWS · IAM · EC2 · VPC · EFS · Databases' },
  { icon: Network, title: 'Networking', items: 'TCP/IP · DNS · Subnetting · Routing · Access control' },
  { icon: Zap, title: 'QA & Automation', items: 'Playwright · Postman · Jira · Manual testing' },
  { icon: Code2, title: 'Web3 & Blockchain', items: 'GenLayer · Evidence integrity · Adjudication' },
  { icon: Terminal, title: 'Python & Automation', items: 'Functions · Operators · Cloud utilities · APIs' },
  { icon: Sparkles, title: 'Digital Entrepreneurship', items: 'Domain research · Portfolio management · Sales' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)

  return (
    <main className="site-shell">
      <header className="nav-wrap">
        <a className="wordmark" href="#top" aria-label="Juliana Udeorji home"><span>J</span>UDEORJI<span className="dot">.</span></a>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#journey" onClick={() => setMenuOpen(false)}>Journey</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <a className="nav-availability" href="mailto:julianahonour20@gmail.com"><span className="status-dot" /> Available for thoughtful work</a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section className="hero section-pad" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Cloud · QA · Web3 · Python</p>
          <h1>Building, testing &<br /><em>exploring</em> technology.</h1>
          <p className="hero-lede">I&apos;m Juliana — a technical practitioner and digital entrepreneur working across cloud engineering, networking, QA automation, Web3, Python, and domain investing.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">View selected work <ArrowUpRight /></a><a className="button button-quiet" href="#about">More about me <ChevronRight /></a></div>
          <div className="hero-meta"><span>Based in the work</span><span className="meta-rule" /><span>Learning by building</span></div>
        </div>
        <div className="hero-image-wrap"><div className="image-label">Portrait / 01</div><img src={portrait} alt="Juliana Sopuruchi Udeorji in a denim jacket" className="hero-image" /><div className="image-caption"><span>Juliana Sopuruchi Udeorji</span><span>Technical practitioner<br />& digital entrepreneur</span></div></div>
      </section>

      <section className="statement section-pad"><p className="section-kicker">01 / The throughline</p><div className="statement-content"><h2>Curiosity is useful.<br /><span>Practice makes it real.</span></h2><p>I build a grounded technical practice through hands-on projects, careful testing, and continuous learning. From AWS architecture and network fundamentals to Web3 systems and automation, I care about understanding how things work — then making them work better.</p></div></section>

      <section className="work section-pad" id="work"><div className="section-heading"><div><p className="section-kicker">02 / Selected work</p><h2>Things I&apos;ve<br /><em>made real.</em></h2></div><p className="section-note">A curated look at projects, exercises, and systems that reflect how I learn: by building, documenting, and testing.</p></div><div className="project-list">{projects.map((project) => <a className="project-card" href={project.href} target="_blank" rel="noreferrer" key={project.number}><div className="project-top"><span>{project.number}</span><span className="project-category">{project.category}</span><ArrowUpRight className="project-arrow" /></div><div className="project-body"><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></a>)}</div></section>

      <section className="journey section-pad" id="journey"><div className="section-heading"><div><p className="section-kicker">03 / The journey</p><h2>Built over<br /><em>time.</em></h2></div><p className="section-note">A timeline of the experiences, learning seasons, and entrepreneurial work shaping my technical perspective.</p></div><div className="timeline"><div className="timeline-item"><span className="timeline-year">Since 2020</span><div><h3>Domain investing & sales</h3><p>Researched, evaluated, managed, and sold domain names through DAN and Afternic — generating more than <strong>$40,000 in domain sales.</strong></p></div><span className="timeline-status">Entrepreneurship</span></div><div className="timeline-item"><span className="timeline-year">2018 — 2021</span><div><h3>QA testing on Test.io</h3><p>Participated in crowdtesting, developing a practical foundation in exploratory testing, bug reporting, and product quality.</p></div><span className="timeline-status">Experience</span></div><div className="timeline-item"><span className="timeline-year">Since 2024</span><div><h3>Cloud, Web3 & automation</h3><p>Studied cloud engineering, built AWS hands-on projects, explored networking, and developed projects across GenLayer, Playwright, and Python.</p></div><span className="timeline-status">Active practice</span></div></div></section>

      <section className="about section-pad" id="about"><div className="section-heading"><div><p className="section-kicker">04 / The toolkit</p><h2>Always<br /><em>learning.</em></h2></div><p className="section-note">No arbitrary percentages. Just the tools and concepts I&apos;m actively putting into practice.</p></div><div className="skills-grid">{skills.map(({icon: Icon, title, items}) => <div className="skill-card" key={title}><Icon /><h3>{title}</h3><p>{items}</p></div>)}</div><div className="certification"><div className="cert-mark"><Check /></div><div><p className="section-kicker">Current credential</p><h3>AWS Certified Cloud Practitioner</h3><p>Active certification · Credential details available upon request</p></div><span className="cert-status">ACTIVE</span></div></section>

      <section className="contact section-pad" id="contact"><div className="contact-inner"><p className="section-kicker">05 / Let&apos;s connect</p><h2>Have a thoughtful<br /><em>idea?</em> Say hello.</h2><a className="email-link" href="mailto:julianahonour20@gmail.com">julianahonour20@gmail.com <ArrowUpRight /></a><div className="contact-lower"><p>Open to conversations around cloud, QA, Web3, automation, and interesting problems worth solving.</p><div className="social-links"><a href="https://github.com/sopskistar" target="_blank" rel="noreferrer"><Code2 /> GitHub</a><a href="https://www.linkedin.com/in/udeorji-juliana-1b66a6166/" target="_blank" rel="noreferrer"><Network /> LinkedIn</a><a href="https://x.com/sopskistar" target="_blank" rel="noreferrer"><X /> X / Twitter</a></div></div><form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSent(true) }}><input required aria-label="Your email" type="email" placeholder="Your email address" /><button type="submit">{sent ? 'Message noted' : 'Start a conversation'} <Send /></button></form>{sent && <p className="form-success">Thanks — your note is ready. Please email me directly to continue the conversation.</p>}</div></section>

      <footer className="footer section-pad"><span>© 2026 Juliana Sopuruchi Udeorji</span><span>Designed with intention · Built with practice</span><a href="#top">Back to top ↑</a></footer>
    </main>
  )
}
