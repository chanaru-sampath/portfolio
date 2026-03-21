import { Link } from '@tanstack/react-router'

import { personalInfo } from '@/data/portfolio'

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

const HomePage = () => {
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
          <div style={titleBar('🌐 Portfolio - Navigation')}>
            <span>🌐 Portfolio - Navigation</span>
            <span>▬ □ ✕</span>
          </div>
          <div style={{ display: 'flex', gap: 0 }}>
            <Link
              to="/"
              style={{
                padding: '4px 12px',
                background: '#dfdfdf',
                border: '1px solid #808080',
                textDecoration: 'none',
                color: '#000',
                fontWeight: 'bold',
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

        {/* Profile window */}
        <div style={windowStyle}>
          <div style={titleBar('👤 User Profile')}>
            <span>👤 User Profile — {personalInfo.name}</span>
            <span>▬ □ ✕</span>
          </div>
          <div style={{ padding: 12 }}>
            <div style={{ display: 'flex', gap: 16 }}>
              <div
                style={{
                  width: 80,
                  height: 80,
                  border: '2px solid',
                  borderColor: '#404040 #ffffff #ffffff #404040',
                  background: '#ddd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}
              >
                <img
                  src="/images/portrait.jpg"
                  alt={personalInfo.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: 16 }}>
                  {personalInfo.name}
                </div>
                <div style={{ marginTop: 4 }}>{personalInfo.title}</div>
                <div
                  style={{
                    marginTop: 8,
                    padding: '6px 8px',
                    background: 'white',
                    border: '2px solid',
                    borderColor: '#404040 #ffffff #ffffff #404040',
                    maxWidth: 400,
                  }}
                >
                  {personalInfo.summary.slice(0, 200)}...
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Welcome window */}
        <div style={windowStyle}>
          <div style={titleBar('💡 Welcome')}>
            <span>💡 Welcome to Windows 98 Portfolio</span>
            <span>▬ □ ✕</span>
          </div>
          <div
            style={{
              padding: 12,
              display: 'flex',
              gap: 12,
              alignItems: 'flex-start',
            }}
          >
            <span style={{ fontSize: 32 }}>💡</span>
            <div>
              <div style={{ fontWeight: 'bold', marginBottom: 4 }}>
                Did you know?
              </div>
              <div>
                This portfolio can be viewed in multiple themes! You are
                currently viewing the Windows 98 theme.
              </div>
              <div style={{ marginTop: 8 }}>
                Use the navigation bar above to explore projects, resume, and
                contact information.
              </div>
            </div>
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
        <div style={{ flex: 1 }} />
        <div
          style={{
            border: '2px solid',
            borderColor: '#404040 #ffffff #ffffff #404040',
            padding: '2px 8px',
            fontSize: 10,
            fontFamily: 'monospace',
          }}
        >
          {new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </div>
      </div>
    </div>
  )
}

export default HomePage
