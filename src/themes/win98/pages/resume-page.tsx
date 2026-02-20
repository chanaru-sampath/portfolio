import { Link } from '@tanstack/react-router'

import { education, experience, personalInfo, skills } from '@/data/portfolio'

const titleBar = (_title: string) => ({
  background: 'linear-gradient(to right, #000080, #1084d0)',
  color: 'white',
  fontWeight: 'bold' as const,
  padding: '3px 6px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: 11,
  userSelect: 'none' as const,
})

const windowStyle: React.CSSProperties = {
  background: '#c0c0c0',
  border: '2px solid',
  borderColor: '#ffffff #404040 #404040 #ffffff',
  boxShadow: '2px 2px 0 #404040',
  marginBottom: 8,
}

const ResumePage = () => {
  return (
    <div
      style={{
        background: '#008080',
        minHeight: '100vh',
        padding: '8px 8px 36px',
        fontFamily: 'Arial, sans-serif',
        fontSize: 11,
      }}
    >
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        {/* Nav */}
        <div style={{ ...windowStyle, padding: 0 }}>
          <div style={titleBar('🌐 Navigation')}>
            <span>🌐 Portfolio - Navigation</span>
            <span>▬ □ ✕</span>
          </div>
          <div style={{ display: 'flex', gap: 0 }}>
            <Link
              to="/"
              style={{
                padding: '4px 12px',
                background: '#c0c0c0',
                border: '1px solid #808080',
                textDecoration: 'none',
                color: '#000',
              }}
            >
              Home
            </Link>
            <Link
              to="/work"
              style={{
                padding: '4px 12px',
                background: '#c0c0c0',
                border: '1px solid #808080',
                textDecoration: 'none',
                color: '#000',
              }}
            >
              Work
            </Link>
            <Link
              to="/resume"
              style={{
                padding: '4px 12px',
                background: '#dfdfdf',
                border: '1px solid #808080',
                textDecoration: 'none',
                color: '#000',
                fontWeight: 'bold',
              }}
            >
              Resume
            </Link>
            <Link
              to="/contact"
              style={{
                padding: '4px 12px',
                background: '#c0c0c0',
                border: '1px solid #808080',
                textDecoration: 'none',
                color: '#000',
              }}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Profile */}
        <div style={windowStyle}>
          <div style={titleBar('👤 Profile')}>
            <span>👤 {personalInfo.name} — Resume</span>
            <span>▬ □ ✕</span>
          </div>
          <div style={{ padding: 8 }}>
            <div style={{ fontWeight: 'bold', fontSize: 14 }}>
              {personalInfo.name}
            </div>
            <div>{personalInfo.title}</div>
          </div>
        </div>

        {/* Skills */}
        <div style={windowStyle}>
          <div style={titleBar('🔧 Skills')}>
            <span>🔧 Installed Programs</span>
            <span>▬ □ ✕</span>
          </div>
          <div
            style={{ padding: 8, display: 'flex', flexWrap: 'wrap', gap: 4 }}
          >
            {skills.map((s) => (
              <span
                key={s}
                style={{
                  border: '2px solid',
                  borderColor: '#ffffff #404040 #404040 #ffffff',
                  padding: '2px 8px',
                  display: 'inline-block',
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div style={windowStyle}>
          <div style={titleBar('💼 Experience')}>
            <span>💼 Work Experience</span>
            <span>▬ □ ✕</span>
          </div>
          <div style={{ padding: 8 }}>
            {experience.map((job) => (
              <div
                key={`${job.company}-${job.period}`}
                style={{ borderBottom: '1px solid #808080', padding: '8px 0' }}
              >
                <div style={{ fontWeight: 'bold' }}>{job.role}</div>
                <div style={{ color: '#000080' }}>
                  {job.company} · {job.period}
                </div>
                <div style={{ marginTop: 4 }}>{job.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div style={windowStyle}>
          <div style={titleBar('🎓 Education')}>
            <span>🎓 Education</span>
            <span>▬ □ ✕</span>
          </div>
          <div style={{ padding: 8 }}>
            {education.map((edu) => (
              <div key={edu.degree} style={{ marginBottom: 4 }}>
                <span style={{ fontWeight: 'bold' }}>{edu.degree}</span> —{' '}
                {edu.institution}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Taskbar */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: 28,
          background: '#c0c0c0',
          borderTop: '2px solid #ffffff',
          display: 'flex',
          alignItems: 'center',
          padding: '0 4px',
          gap: 4,
        }}
      >
        <button
          style={{
            background: '#c0c0c0',
            border: '2px solid',
            borderColor: '#ffffff #404040 #404040 #ffffff',
            padding: '2px 8px',
            fontWeight: 'bold',
            cursor: 'default',
            fontSize: 11,
          }}
        >
          ⊞ Start
        </button>
      </div>
    </div>
  )
}

export default ResumePage
