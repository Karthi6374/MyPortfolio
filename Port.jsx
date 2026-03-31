import React, { useEffect } from 'react'

const contactItems = [
  {
    label: 'Email',
    value: 'karthy6374@gmail.com',
    href: 'mailto:karthy6374@gmail.com',
  },
  {
    label: 'Phone',
    value: '+91 63747 91166',
    href: 'tel:+916374791166',
  },
  {
    label: 'LinkedIn',
    value: 'www.linkedin.com/in/s-karthikeyan777',
    href: 'https://www.linkedin.com/in/s-karthikeyan777',
  },
  {
    label: 'GitHub',
    value: 'github.com/Karthi6374',
    href: 'https://github.com/Karthi6374',
  },
]

const experienceHighlights = [
  {
    title: 'Real project exposure',
    description:
      'Worked in a company environment on practical development tasks, feature support, and iterative improvements.',
  },
  {
    title: 'Full stack learning',
    description:
      'Strengthened understanding of how backend logic, APIs, and frontend updates connect in day-to-day delivery.',
  },
  {
    title: 'Team collaboration',
    description:
      'Learned to work with feedback, follow development workflows, and contribute inside a structured software team.',
  },
]

const Port = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const shouldSkipRevealMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce), (max-width: 860px), (pointer: coarse)').matches

    if (shouldSkipRevealMotion || typeof IntersectionObserver === 'undefined') {
      elements.forEach(element => {
        element.style.setProperty('--reveal-delay', '0ms')
        element.classList.add('show')
      })

      return undefined
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('show')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    )

    elements.forEach((element, index) => {
      element.style.setProperty('--reveal-delay', `${Math.min(index * 60, 360)}ms`)
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className='page' id='top'>
      <header className='nav'>
        <div className='nav-brand'>
          <a className='home-link' href='#top' aria-label='Go to top of page'>
            <svg
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'
            >
              <path
                d='M3 10.75L12 3L21 10.75'
                stroke='currentColor'
                strokeWidth='1.8'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M6.75 9.75V20.25H17.25V9.75'
                stroke='currentColor'
                strokeWidth='1.8'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M10 20.25V14H14V20.25'
                stroke='currentColor'
                strokeWidth='1.8'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </a>
          <div>
            <p className='brand-eyebrow'>Karthikeyan</p>
            <h2 className='brand-title'>Portfolio</h2>
          </div>
        </div>
        <nav className='nav-links'>
          <a href='#about'>What I Can!</a>
          <a href='#experience'>Experience</a>
          <a href='#why-hire'>What You Get</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact</a>
        </nav>
      </header>

      <main>
        <section className='hero' id='hero'>
          <div className='hero-text reveal reveal-rise'>
            <p className='eyebrow'>Hi, I'm Karthikeyan</p>
            <h1 className='title'>Java Fullstack Developer</h1>
            <p className='summary'>
              Builds scalable backend systems with Java and creates responsive,
              user-friendly frontends. Focused on clean code, performance, and
              end-to-end application development.
            </p>
            <div className='hero-stats reveal reveal-slide-up'>
              <div className='stat-card'>
                <strong>Backend</strong>
                <span>Java, Spring Boot, API design</span>
              </div>
              <div className='stat-card'>
                <strong>Frontend</strong>
                <span>React, responsive UI, clean UX</span>
              </div>
            </div>
            <div className='cta-row'>
              <a className='btn primary' href='#projects'>
                See project work
              </a>
              <a
                className='btn ghost resume-btn'
                href='/karthy-resume.pdf'
                target='_blank'
                rel='noreferrer'
              >
                View resume
              </a>
              <a className='btn ghost' href='#contact'>
                Contact me
              </a>
            </div>
          </div>

          <div className='hero-photo reveal reveal-slide-right'>
            <div className='photo-frame'>
              <div className='photo-media'>
                <img
                  src='/karthy1.jpeg'
                  alt='Portrait of Karthikeyan'
                  decoding='async'
                  fetchPriority='high'
                />
              </div>
            </div>
          </div>
        </section>

        <section className='section about reveal reveal-shell reveal-rise' id='about'>
          <div className='section-head-grid'>
            <div className='section-heading reveal reveal-slide-left'>
              <p className='section-tag'> I Can</p>
              <h2 className='section-title'>Build reliable web apps from API to UI</h2>
              <p className='section-intro'>
                I work across backend logic, data flow, and frontend polish so
                the full product feels connected, fast, and ready for real use.
              </p>
            </div>
            <div className='section-note reveal reveal-slide-right'>
              <p>
                I can move from authentication and APIs to responsive screens
                and deployment-minded cleanup without losing momentum.
              </p>
            </div>
          </div>

          <div className='capability-band'>
            <div className='capability-card reveal reveal-pop'>Java / Spring Boot</div>
            <div className='capability-card reveal reveal-pop'>REST and JSON APIs</div>
            <div className='capability-card reveal reveal-pop'>React / TypeScript</div>
            <div className='capability-card reveal reveal-pop'>SQL / NoSQL</div>
          </div>

          <div className='section-grid'>
            <div className='section-text reveal reveal-tilt'>
              <h3>Building reliable web apps end to end</h3>
              <p>
                I specialize in Java and Spring Boot on the backend and modern
                React on the frontend. My focus is designing clean APIs,
                performance-aware database access, and UI flows that feel
                effortless to use.
              </p>
              <div className='pill-row reveal reveal-rise'>
                <span className='pill'>Clean architecture</span>
                <span className='pill'>Responsive UI</span>
                <span className='pill'>Scalable services</span>
                <span className='pill'>Real-world delivery</span>
              </div>
            </div>

            <div className='highlights-grid'>
              <article className='highlight-card reveal reveal-tilt'>
                <h3>Backend-first thinking</h3>
                <p>
                  Secure auth, validation, and error handling baked in so
                  frontends stay simple and predictable.
                </p>
              </article>
              <article className='highlight-card reveal reveal-tilt'>
                <h3>Frontend care</h3>
                <p>
                  Responsive layouts and accessible components that translate
                  complex logic into clear user journeys.
                </p>
              </article>
              <article className='highlight-card reveal reveal-tilt'>
                <h3>Delivery discipline</h3>
                <p>
                  Small, review-friendly commits, API contracts, and concise
                  docs that keep teams unblocked.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className='section experience reveal reveal-shell reveal-rise' id='experience'>
          <div className='section-head-grid'>
            <div className='section-heading reveal reveal-slide-left'>
              <p className='section-tag'>Experience</p>
              <h2 className='section-title'>Internship experience in a real software team</h2>
              <p className='section-intro'>
                My internship gave me hands-on exposure to professional development
                workflows and helped me apply Java full stack fundamentals in
                practical work.
              </p>
            </div>
            <div className='section-note reveal reveal-slide-right'>
              <p>
                Elevado Software Limited in Coimbatore helped me build confidence
                with implementation work, debugging, and collaboration inside a
                real company environment.
              </p>
            </div>
          </div>

          <div className='section-grid'>
            <article className='section-text reveal reveal-tilt'>
              <p className='project-label'>Internship</p>
              <h3>Software Intern</h3>
              <strong className='experience-company'>Elevado Software Limited</strong>
              <p className='experience-location'>Coimbatore, Tamil Nadu</p>
              <p>
                Worked as an intern at Elevado Software Limited, gaining practical
                exposure to software development in a professional team setting.
              </p>
              <p>
                Supported day-to-day development tasks, improved understanding of
                backend and frontend coordination, and built stronger skills in
                implementation, debugging, and team communication.
              </p>
            </article>

            <div className='highlights-grid'>
              {experienceHighlights.map(item => (
                <article key={item.title} className='highlight-card reveal reveal-tilt'>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className='section why reveal reveal-shell reveal-rise' id='why-hire'>
          <div className='section-head-grid'>
            <div className='section-heading reveal reveal-slide-left'>
              <p className='section-tag'>You Get</p>
              <h2 className='section-title'>Outcomes you get on day one</h2>
              <p className='section-intro'>
                I focus on shipping work that is clean to maintain, quick to
                review, and easy for teams to build on after launch.
              </p>
            </div>
            <div className='section-note reveal reveal-slide-right'>
              <p>
                You get a developer who can understand the requirement, own the
                implementation, and keep quality visible from first commit to
                release.
              </p>
            </div>
          </div>

          <div className='impact-strip'>
            <div className='impact-pill reveal reveal-pop'>Production-ready delivery</div>
            <div className='impact-pill reveal reveal-pop'>Performance-first thinking</div>
            <div className='impact-pill reveal reveal-pop'>Clear communication</div>
            <div className='impact-pill reveal reveal-pop'>Feature ownership</div>
          </div>

          <div className='reason-grid'>
            <article className='reason-card reveal reveal-slide-up'>
              <p className='reason-kicker'>01</p>
              <h3>Production-ready code</h3>
              <p>
                Tests around business rules, logging that tells the truth, and
                metrics that surface issues before users do.
              </p>
            </article>
            <article className='reason-card reveal reveal-slide-up'>
              <p className='reason-kicker'>02</p>
              <h3>Performance-aware design</h3>
              <p>
                Caches and database access patterns tuned for real traffic,
                plus lightweight UIs that stay fast on mobile.
              </p>
            </article>
            <article className='reason-card reveal reveal-slide-up'>
              <p className='reason-kicker'>03</p>
              <h3>Clear collaboration</h3>
              <p>
                Straightforward communication, transparent estimates, and early
                demos so stakeholders see progress, not promises.
              </p>
            </article>
            <article className='reason-card reveal reveal-slide-up'>
              <p className='reason-kicker'>04</p>
              <h3>Ownership mindset</h3>
              <p>
                I treat features like products - monitoring, iterating, and
                keeping them healthy after launch.
              </p>
            </article>
          </div>

          <div className='cta-row section-cta reveal reveal-rise'>
            <a className='btn primary' href='#projects'>
              See project work next
            </a>
            <a className='btn ghost' href='#contact'>
              Reach out now
            </a>
          </div>
        </section>

        <section className='section projects reveal reveal-shell reveal-rise' id='projects'>
          <div className='projects-top'>
            <div className='projects-copy reveal reveal-slide-left'>
              <p className='section-tag'>Project work</p>
              <h2 className='section-title'>Projects that show practical delivery</h2>
              <p className='projects-summary'>
                This section sets up the next step of the portfolio with room
                for featured builds, case studies, and live product snapshots.
              </p>
            </div>
            <div className='projects-note reveal reveal-slide-right'>
              <p>
                Each project can highlight the problem, the stack, and the
                result so recruiters see both code quality and business impact.
              </p>
            </div>
          </div>

          <div className='project-grid'>
            <article className='project-card reveal reveal-slide-up'>
              <p className='project-label'>Backend systems</p>
              <h3>Secure API workflows</h3>
              <p>
                Authentication, validation, clean service layers, and database
                design that stays maintainable as features grow.
              </p>
            </article>
            <article className='project-card reveal reveal-slide-up'>
              <p className='project-label'>Frontend products</p>
              <h3>Responsive dashboard experiences</h3>
              <p>
                Data-heavy screens, filtering, forms, and accessible layouts
                that still feel polished and fast on mobile.
              </p>
            </article>
            <article className='project-card reveal reveal-slide-up'>
              <p className='project-label'>Full stack delivery</p>
              <h3>End-to-end product flows</h3>
              <p>
                From database schema to final UI interactions, the work connects
                backend logic with user-focused design.
              </p>
            </article>
          </div>
        </section>

        <section className='section contact reveal reveal-shell reveal-rise' id='contact'>
          <div className='section-head-grid contact-head'>
            <div className='section-heading reveal reveal-slide-left'>
              <p className='section-tag'>Contact</p>
              <h2 className='section-title'>Let's build something useful</h2>
              <p className='section-intro'>
                Open to internships, freelance work, and full-time roles. 
              </p>
            </div>
            <div className='contact-status reveal reveal-slide-right'>
              <span className='status-dot' aria-hidden='true' />
              <div>
                <strong>Available for work</strong>
                <p>Java backend, full stack apps, UI polish, and product delivery.</p>
              </div>
            </div>
          </div>

          <div className='contact-grid'>
            {contactItems.map(item => (
              <a
                key={item.label}
                className='contact-card reveal reveal-slide-up'
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <span className='contact-label'>{item.label}</span>
                <strong>{item.value}</strong>
              </a>
            ))}
          </div>

          <div className='cta-row section-cta reveal reveal-rise'>
            <a className='btn primary' href='mailto:karthy6374@gmail.com'>
              Email me
            </a>
            <a className='btn ghost' href='#top'>
              Back to top
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Port
