import { Link } from '@tanstack/react-router'

import { projects } from '@/data/portfolio'

const titleBar = (_title?: string) => ({
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

const WorkPage = () => {
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
                background: '#dfdfdf',
                border: '1px solid #808080',
                textDecoration: 'none',
                color: '#000',
                fontWeight: 'bold',
              }}
            >
              Work
            </Link>
            <Link
              to="/resume"
              style={{
                padding: '4px 12px',
                background: '#c0c0c0',
                border: '1px solid #808080',
                textDecoration: 'none',
                color: '#000',
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

        {/* Projects */}
        {projects.map((p) => (
          <div key={p.title} style={windowStyle}>
            <div style={titleBar(p.title)}>
              <span>📄 {p.title} — Properties</span>
              <span>▬ □ ✕</span>
            </div>
            <div style={{ padding: 8 }}>
              <div style={{ fontWeight: 'bold', fontSize: 12 }}>
                {p.title} ({p.year})
              </div>
              <div style={{ marginTop: 4 }}>{p.description}</div>
              <div
                style={{
                  marginTop: 8,
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 4,
                }}
              >
                {p.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      border: '2px solid',
                      borderColor: '#ffffff #404040 #404040 #ffffff',
                      padding: '1px 6px',
                      display: 'inline-block',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
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

export default WorkPage
