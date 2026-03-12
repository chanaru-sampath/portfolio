import { Link } from '@tanstack/react-router'

import { education, experience, personalInfo, skills } from '@/data/portfolio'

const ResumePage = () => {
  return (
    <div
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        color: '#00ff41',
        background: '#0c0c0c',
        minHeight: '100vh',
        padding: 20,
      }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <nav
          style={{
            marginBottom: 32,
            padding: '8px 0',
            borderBottom: '1px solid #004d13',
          }}
        >
          <span style={{ opacity: 0.5 }}>visitor@portfolio:~$ </span>
          <Link to="/" style={{ color: '#00d4ff', marginRight: 16 }}>
            cd ~/home
          </Link>
          <Link to="/work" style={{ color: '#00d4ff', marginRight: 16 }}>
            ls ~/projects
          </Link>
          <Link to="/resume" style={{ color: '#00ff41', marginRight: 16 }}>
            cat ~/resume.md
          </Link>
          <Link to="/contact" style={{ color: '#00d4ff' }}>
            mail -s 'Hello'
          </Link>
        </nav>

        <div>
          <span style={{ opacity: 0.5 }}>visitor@portfolio:~$ </span>cat
          ~/resume.md
        </div>

        {/* Skills */}
        <div style={{ marginTop: 24 }}>
          <div style={{ opacity: 0.5 }}>{'# ─── SKILLS ───'}</div>
          <div
            style={{ marginTop: 8, display: 'flex', flexWrap: 'wrap', gap: 8 }}
          >
            {skills.map((s) => (
              <span
                key={s}
                style={{
                  border: '1px solid #004d13',
                  padding: '2px 8px',
                  fontSize: 11,
                }}
              >
                [{s}]
              </span>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div style={{ marginTop: 32 }}>
          <div style={{ opacity: 0.5 }}>{'# ─── EXPERIENCE ───'}</div>
          {experience.map((job) => (
            <div
              key={`${job.company}-${job.period}`}
              style={{
                marginTop: 16,
                borderLeft: '2px solid #004d13',
                paddingLeft: 12,
              }}
            >
              <div style={{ color: '#00d4ff' }}>{job.role}</div>
              <div style={{ opacity: 0.6, fontSize: 12 }}>
                {job.company} · {job.period}
              </div>
              <p style={{ marginTop: 4, lineHeight: 1.7, fontSize: 13 }}>
                {job.description}
              </p>
            </div>
          ))}
        </div>

        {/* Education */}
        <div style={{ marginTop: 32 }}>
          <div style={{ opacity: 0.5 }}>{'# ─── EDUCATION ───'}</div>
          {education.map((edu) => (
            <div key={edu.degree} style={{ marginTop: 8 }}>
              <span style={{ color: '#00d4ff' }}>{edu.degree}</span>
              <span style={{ opacity: 0.5 }}> @ {edu.institution}</span>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div style={{ marginTop: 32 }}>
          <div style={{ opacity: 0.5 }}>{'# ─── CONTACT ───'}</div>
          <div style={{ marginTop: 8 }}>{personalInfo.email}</div>
        </div>

        <div style={{ marginTop: 24, display: 'flex', alignItems: 'center' }}>
          <span style={{ opacity: 0.5, marginRight: 8 }}>
            visitor@portfolio:~${' '}
          </span>
          <a
            href="/cv/chanaru-sampath.pdf"
            download
            style={{
              color: '#00ff41',
              textDecoration: 'none',
              border: '1px solid #004d13',
              padding: '2px 8px',
              marginRight: 8,
              fontSize: 13,
            }}
          >
            wget ~/resume.pdf
          </a>
          <span
            style={{
              display: 'inline-block',
              width: 8,
              height: 14,
              background: '#00ff41',
              verticalAlign: 'middle',
              animation: 'blink 1s step-end infinite',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default ResumePage
