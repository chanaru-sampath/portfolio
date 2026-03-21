import { Link } from '@tanstack/react-router'

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

const ContactPage = () => {
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
                background: '#dfdfdf',
                border: '1px solid #808080',
                textDecoration: 'none',
                color: '#000',
                fontWeight: 'bold',
              }}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Contact form window */}
        <div style={windowStyle}>
          <div style={titleBar('📧 Contact')}>
            <span>📧 New Message — Portfolio Mail</span>
            <span>▬ □ ✕</span>
          </div>
          <div style={{ padding: 8 }}>
            <div style={{ opacity: 0.5, marginBottom: 12 }}>
              [TODO: Win98 ContactForm — email client style]
            </div>
            <div style={{ marginBottom: 4 }}>To: chanarusampath@gmail.com</div>
            <div
              style={{
                marginBottom: 8,
                borderBottom: '1px solid #808080',
                paddingBottom: 8,
              }}
            >
              Subject: Hello
            </div>
            <div
              style={{
                border: '2px solid',
                borderColor: '#404040 #ffffff #ffffff #404040',
                background: 'white',
                padding: 8,
                minHeight: 120,
                marginBottom: 8,
              }}
            >
              <span style={{ color: '#808080' }}>
                Type your message here...
              </span>
            </div>
            <button
              style={{
                background: '#c0c0c0',
                border: '2px solid',
                borderColor: '#ffffff #404040 #404040 #ffffff',
                padding: '3px 12px',
                cursor: 'default',
                minWidth: 75,
                textAlign: 'center',
                fontSize: 11,
              }}
            >
              Send
            </button>
          </div>
        </div>

        {/* Address book */}
        <div style={windowStyle}>
          <div style={titleBar('📋 Address Book')}>
            <span>📋 Contact Information</span>
            <span>▬ □ ✕</span>
          </div>
          <div style={{ padding: 8 }}>
            <div style={{ marginBottom: 4 }}>
              <strong>Location:</strong> Minuwangoda, Sri Lanka
            </div>
            <div style={{ marginBottom: 4 }}>
              <strong>Phone:</strong> +94 717 155 557
            </div>
            <div>
              <strong>Email:</strong> chanarusampath@gmail.com
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
      </div>
    </div>
  )
}

export default ContactPage
