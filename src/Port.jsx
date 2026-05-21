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
  {
    label: 'Resume',
    value: 'View PDF resume',
    href: '/karthy-resume.pdf',
  },
]

const experienceHighlights = [
  {
    title: 'Responsive interface work',
    description:
      'Built modern UI screens with HTML, CSS, and React while keeping layouts clear, usable, and mobile-friendly.',
  },
  {
    title: 'Backend and database practice',
    description:
      'Applied Core Java concepts and database querying in MySQL to connect frontend work with solid backend basics.',
  },
  {
    title: 'Debugging and delivery',
    description:
      'Developed and tested small web applications, fixed issues, and improved functionality through hands-on iteration.',
  },
]

const techStack = [
  {
    name: 'Java',
    detail: 'Core Java, OOP, backend logic, and application structure.',
    accent: '#f97316',
    glow: 'rgba(249,115,22,0.18)',
    icon: 'java',
  },
  {
    name: 'Spring Boot',
    detail: 'REST APIs, services, validation, and scalable backend flows.',
    accent: '#84cc16',
    glow: 'rgba(132,204,22,0.18)',
    icon: 'spring',
  },
  {
    name: 'HTML5',
    detail: 'Semantic markup and clean page structure for reliable UI.',
    accent: '#fb923c',
    glow: 'rgba(251,146,60,0.18)',
    icon: 'html',
  },
  {
    name: 'CSS3',
    detail: 'Responsive layouts, polished spacing, and visual consistency.',
    accent: '#38bdf8',
    glow: 'rgba(56,189,248,0.18)',
    icon: 'css',
  },
  {
    name: 'JavaScript',
    detail: 'Client-side behavior, interactions, and dynamic interfaces.',
    accent: '#facc15',
    glow: 'rgba(250,204,21,0.18)',
    icon: 'javascript',
  },
  {
    name: 'React',
    detail: 'Component-driven frontend work with reusable UI patterns.',
    accent: '#22d3ee',
    glow: 'rgba(34,211,238,0.18)',
    icon: 'react',
  },
  {
    name: 'Python',
    detail: 'Used for NLP, deep learning, automation, and data handling.',
    accent: '#60a5fa',
    glow: 'rgba(96,165,250,0.18)',
    icon: 'python',
  },
  {
    name: 'MySQL',
    detail: 'Relational schemas, queries, and dependable data handling.',
    accent: '#a78bfa',
    glow: 'rgba(167,139,250,0.18)',
    icon: 'mysql',
  },
]

const projectItems = [
  {
    label: 'NLP and analytics',
    title: 'Social Media Sentimental Analysis',
    summary:
      'An automated sentiment analysis system that classifies public reactions from social media content using NLP and machine learning.',
    points: [
      'Cleaned unstructured text with tokenization, stop-word removal, and lemmatization before analysis.',
      'Used models such as Naive Bayes or SVM to categorize emotional tone and surface brand perception trends.',
      'Presented results with supporting data visualizations for easier interpretation.',
    ],
    tools: ['Python', 'NLTK/OpenNLP', 'MySQL', 'Matplotlib', 'Seaborn'],
  },
  {
    label: 'Deep learning and vision',
    title: 'True Vision',
    summary:
      'A deep-learning project focused on detecting manipulated facial features and synthetic media in high-resolution video.',
    points: [
      'Combined CNN and RNN/LSTM models to analyze spatial and temporal inconsistencies in frames.',
      'Used face extraction and landmark detection with libraries such as OpenCV or Dlib to isolate key regions.',
      'Connected the system to a React-based interface for a clearer user-facing flow.',
    ],
    tools: ['Python', 'TensorFlow/PyTorch', 'OpenCV', 'Dlib', 'React'],
  },
  {
    label: 'Responsive web design',
    title: 'Personal Portfolio',
    summary:
      'A personal portfolio website created to showcase technical skills, projects, and contact information with a modern responsive layout.',
    points: [
      'Designed structured sections for about, projects, skills, and contact with clear navigation.',
      'Built the interface with HTML, CSS, and JavaScript to perform smoothly across mobile and laptop screens.',
      'Used AI-assisted code generation and optimization to speed up iteration and refine the final experience.',
    ],
    tools: ['HTML', 'CSS', 'JavaScript', 'VS Code', 'AI Tools'],
    link: 'https://github.com/Karthi6374/MyPortfolio',
    linkLabel: 'View repository',
  },
]

const TechIcon = ({ type }) => {
  switch (type) {
    case 'java':
      return (
        <svg
          className='tech-icon'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
        >
          <path
            d='M18 4.5C14.6 6.7 20.1 8.1 16.3 10.8C13.4 12.8 18.5 14.3 15.6 16.8'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
          />
          <path
            d='M8.5 15H21.5C21.5 20.2 18.7 24 15 24C11.3 24 8.5 20.2 8.5 15Z'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinejoin='round'
          />
          <path
            d='M21.5 16H23C24.933 16 26.5 17.567 26.5 19.5C26.5 21.433 24.933 23 23 23H21.5'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
          />
          <path d='M10 27H22' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
        </svg>
      )
    case 'spring':
      return (
        <svg
          className='tech-icon'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
        >
          <path
            d='M24.5 7.5C17.6 7.7 11.1 11.5 8 18.5C11.6 21.7 18.7 21.2 23.2 16.8C25.8 14.1 26.8 10.3 24.5 7.5Z'
            fill='currentColor'
            opacity='0.18'
          />
          <path
            d='M24.5 7.5C17.6 7.7 11.1 11.5 8 18.5C11.6 21.7 18.7 21.2 23.2 16.8C25.8 14.1 26.8 10.3 24.5 7.5Z'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M12.5 18.5C15.4 17 18.4 14.7 21.3 11.5'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
          />
          <circle cx='12' cy='20.5' r='1.5' fill='currentColor' />
        </svg>
      )
    case 'html':
      return (
        <svg
          className='tech-icon'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
        >
          <path
            d='M7 4.5H25L22.8 25.5L16 27.8L9.2 25.5L7 4.5Z'
            fill='currentColor'
            opacity='0.18'
          />
          <path
            d='M7 4.5H25L22.8 25.5L16 27.8L9.2 25.5L7 4.5Z'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinejoin='round'
          />
          <text
            x='16'
            y='18.5'
            textAnchor='middle'
            fontSize='8.5'
            fontWeight='700'
            fill='currentColor'
          >
            H5
          </text>
        </svg>
      )
    case 'css':
      return (
        <svg
          className='tech-icon'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
        >
          <path
            d='M7 4.5H25L22.8 25.5L16 27.8L9.2 25.5L7 4.5Z'
            fill='currentColor'
            opacity='0.18'
          />
          <path
            d='M7 4.5H25L22.8 25.5L16 27.8L9.2 25.5L7 4.5Z'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinejoin='round'
          />
          <text
            x='16'
            y='18.5'
            textAnchor='middle'
            fontSize='8.5'
            fontWeight='700'
            fill='currentColor'
          >
            C3
          </text>
        </svg>
      )
    case 'javascript':
      return (
        <svg
          className='tech-icon'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
        >
          <rect
            x='5'
            y='5'
            width='22'
            height='22'
            rx='5'
            fill='currentColor'
            opacity='0.18'
          />
          <rect x='5' y='5' width='22' height='22' rx='5' stroke='currentColor' strokeWidth='2' />
          <text
            x='16'
            y='19'
            textAnchor='middle'
            fontSize='8.5'
            fontWeight='700'
            fill='currentColor'
          >
            JS
          </text>
        </svg>
      )
    case 'react':
      return (
        <svg
          className='tech-icon'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
        >
          <ellipse cx='16' cy='16' rx='10.5' ry='4.6' stroke='currentColor' strokeWidth='2' />
          <ellipse
            cx='16'
            cy='16'
            rx='10.5'
            ry='4.6'
            stroke='currentColor'
            strokeWidth='2'
            transform='rotate(60 16 16)'
          />
          <ellipse
            cx='16'
            cy='16'
            rx='10.5'
            ry='4.6'
            stroke='currentColor'
            strokeWidth='2'
            transform='rotate(-60 16 16)'
          />
          <circle cx='16' cy='16' r='2.5' fill='currentColor' />
        </svg>
      )
    case 'typescript':
      return (
        <svg
          className='tech-icon'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
        >
          <rect
            x='5'
            y='5'
            width='22'
            height='22'
            rx='5'
            fill='currentColor'
            opacity='0.18'
          />
          <rect x='5' y='5' width='22' height='22' rx='5' stroke='currentColor' strokeWidth='2' />
          <text
            x='16'
            y='19'
            textAnchor='middle'
            fontSize='8.5'
            fontWeight='700'
            fill='currentColor'
          >
            TS
          </text>
        </svg>
      )
    case 'python':
      return (
        <svg
          className='tech-icon'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
        >
          <rect
            x='5'
            y='5'
            width='22'
            height='22'
            rx='5'
            fill='currentColor'
            opacity='0.18'
          />
          <rect x='5' y='5' width='22' height='22' rx='5' stroke='currentColor' strokeWidth='2' />
          <text
            x='16'
            y='19'
            textAnchor='middle'
            fontSize='8'
            fontWeight='700'
            fill='currentColor'
          >
            Py
          </text>
        </svg>
      )
    case 'mysql':
      return (
        <svg
          className='tech-icon'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
        >
          <ellipse cx='16' cy='8' rx='8.5' ry='3.5' fill='currentColor' opacity='0.18' />
          <ellipse cx='16' cy='8' rx='8.5' ry='3.5' stroke='currentColor' strokeWidth='2' />
          <path
            d='M7.5 8V22.5C7.5 24.4 11.3 26 16 26C20.7 26 24.5 24.4 24.5 22.5V8'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M7.5 15C7.5 16.9 11.3 18.5 16 18.5C20.7 18.5 24.5 16.9 24.5 15'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
          />
        </svg>
      )
    default:
      return null
  }
}

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
              Full stack Java developer with hands-on project experience in
              Java, Spring Boot, React, and MySQL, with a strong focus on
              responsive UI, backend fundamentals, and practical delivery.
            </p>
            <div className='hero-stats reveal reveal-slide-up'>
              <div className='stat-card'>
                <strong>Backend</strong>
                <span>Java, Spring Boot, SQL, and application logic</span>
              </div>
              <div className='stat-card'>
                <strong>Frontend</strong>
                <span>React, responsive UI, and clean user journeys</span>
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
                each product feels connected, usable, and ready for real users.
              </p>
            </div>
            <div className='section-note reveal reveal-slide-right'>
              <p>
                My projects span Java full stack development, machine learning,
                and responsive portfolio design, so I can adapt quickly across
                both product and implementation work.
              </p>
            </div>
          </div>

          <div className='capability-band'>
            <div className='capability-card reveal reveal-pop'>Java / Spring Boot</div>
            <div className='capability-card reveal reveal-pop'>REST and JSON APIs</div>
            <div className='capability-card reveal reveal-pop'>React / Responsive UI</div>
            <div className='capability-card reveal reveal-pop'>MySQL / PostgreSQL</div>
          </div>

          <div className='tech-stack-panel'>
            <article className='tech-stack-copy reveal reveal-slide-left'>
              <p className='project-label'>Core stack</p>
              <h3>Languages and tools I work with</h3>
              <p>
                From Java services to frontend polish, this is the stack I use
                across my full stack, NLP, and deep learning projects.
              </p>
            </article>

            <div className='tech-stack-grid'>
              {techStack.map(item => (
                <article
                  key={item.name}
                  className='tech-card reveal reveal-pop'
                  style={{
                    '--tech-accent': item.accent,
                    '--tech-glow': item.glow,
                  }}
                >
                  <span className='tech-icon-wrap'>
                    <TechIcon type={item.icon} />
                  </span>
                  <div className='tech-card-copy'>
                    <strong>{item.name}</strong>
                    <span>{item.detail}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className='section-grid'>
            <div className='section-text reveal reveal-tilt'>
              <h3>Building reliable web apps end to end</h3>
              <p>
                I build with Java and Spring Boot on the backend and React,
                HTML, CSS, and JavaScript on the frontend. My focus is writing
                clean logic, organizing data well, and making interfaces feel
                smooth across devices.
              </p>
              <div className='pill-row reveal reveal-rise'>
                <span className='pill'>Responsive UI</span>
                <span className='pill'>Core Java</span>
                <span className='pill'>SQL and data flow</span>
                <span className='pill'>Project-based learning</span>
              </div>
            </div>

            <div className='highlights-grid'>
              <article className='highlight-card reveal reveal-tilt'>
                <h3>Frontend care</h3>
                <p>
                  I enjoy turning requirements into screens that are clear,
                  responsive, and comfortable to use.
                </p>
              </article>
              <article className='highlight-card reveal reveal-tilt'>
                <h3>Data-aware development</h3>
                <p>
                  My work connects UI flows with SQL-backed data and backend
                  logic so features feel complete end to end.
                </p>
              </article>
              <article className='highlight-card reveal reveal-tilt'>
                <h3>Fast learning</h3>
                <p>
                  I learn quickly from project work, debugging, and feedback,
                  then apply those lessons in the next build.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className='section experience reveal reveal-shell reveal-rise' id='experience'>
          <div className='section-head-grid'>
            <div className='section-heading reveal reveal-slide-left'>
              <p className='section-tag'>Experience</p>
              <h2 className='section-title'>Hands-on full stack training and project experience</h2>
              <p className='section-intro'>
                My resume reflects hands-on training and project work across
                HTML, CSS, React, Core Java, and MySQL, with practical exposure
                to building, testing, and improving web applications.
              </p>
            </div>
            <div className='section-note reveal reveal-slide-right'>
              <p>
                The strongest takeaway from this experience is being able to
                move between interface work, backend logic, and debugging
                without losing focus on usability.
              </p>
            </div>
          </div>

          <div className='section-grid'>
            <article className='section-text reveal reveal-tilt'>
              <p className='project-label'>Training and implementation</p>
              <h3>Java Full Stack Developer Intern</h3>
              <strong className='experience-company'>Full Stack Web Development</strong>
              <p className='experience-location'>HTML, CSS, React, Core Java, and MySQL</p>
              <p>
                Completed certified training in full stack web development and
                strengthened practical knowledge through small applications,
                frontend work, and backend problem solving.
              </p>
              <p>
                Worked on responsive UI creation, React components, Java-based
                logic, SQL queries, and debugging tasks that improved both
                functionality and confidence in day-to-day delivery.
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
              <h2 className='section-title'>What you can expect from working with me</h2>
              <p className='section-intro'>
                I bring a strong learning mindset, practical full stack
                fundamentals, and a real interest in building interfaces and
                application logic that work well together.
              </p>
            </div>
            <div className='section-note reveal reveal-slide-right'>
              <p>
                You get someone who is comfortable learning fast, listening to
                feedback, and turning project requirements into usable screens
                and working features.
              </p>
            </div>
          </div>

          <div className='impact-strip'>
            <div className='impact-pill reveal reveal-pop'>Responsive UI focus</div>
            <div className='impact-pill reveal reveal-pop'>Java full stack foundation</div>
            <div className='impact-pill reveal reveal-pop'>Project-based problem solving</div>
            <div className='impact-pill reveal reveal-pop'>Quick learning mindset</div>
          </div>

          <div className='reason-grid'>
            <article className='reason-card reveal reveal-slide-up'>
              <p className='reason-kicker'>01</p>
              <h3>Full stack foundation</h3>
              <p>
                Certified training and project work across Java, React, HTML,
                CSS, and MySQL provide a solid base to build on.
              </p>
            </article>
            <article className='reason-card reveal reveal-slide-up'>
              <p className='reason-kicker'>02</p>
              <h3>Project-backed learning</h3>
              <p>
                My resume projects cover sentiment analysis, deep learning, and
                responsive portfolio work across different problem spaces.
              </p>
            </article>
            <article className='reason-card reveal reveal-slide-up'>
              <p className='reason-kicker'>03</p>
              <h3>Responsive build quality</h3>
              <p>
                I pay attention to spacing, flow, and usability so interfaces
                stay clean on both laptop and mobile screens.
              </p>
            </article>
            <article className='reason-card reveal reveal-slide-up'>
              <p className='reason-kicker'>04</p>
              <h3>Growth mindset</h3>
              <p>
                I am comfortable learning from feedback, debugging patiently,
                and improving the next version with every project.
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
              <h2 className='section-title'>Projects extracted from my resume</h2>
              <p className='projects-summary'>
                These projects reflect the actual work listed in my resume and
                show experience across NLP, deep learning, and responsive web
                development.
              </p>
            </div>
            <div className='projects-note reveal reveal-slide-right'>
              <p>
                Each card highlights the problem area, the core implementation
                work, and the tools used so recruiters can quickly scan both
                breadth and technical focus.
              </p>
            </div>
          </div>

          <div className='project-grid'>
            {projectItems.map(project => (
              <article key={project.title} className='project-card project-detail-card reveal reveal-slide-up'>
                <div className='project-card-head'>
                  <p className='project-label'>{project.label}</p>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </div>

                <ul className='project-points'>
                  {project.points.map(point => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className='project-footer'>
                  <div className='project-tools'>
                    {project.tools.map(tool => (
                      <span key={tool} className='project-tool'>
                        {tool}
                      </span>
                    ))}
                  </div>
                  {project.link ? (
                    <a className='project-link' href={project.link} target='_blank' rel='noreferrer'>
                      {project.linkLabel}
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
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
