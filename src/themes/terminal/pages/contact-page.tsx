import { Link } from '@tanstack/react-router'

const ContactPage = () => {
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
          <Link to="/resume" style={{ color: '#00d4ff', marginRight: 16 }}>
            cat ~/resume.md
          </Link>
          <Link to="/contact" style={{ color: '#00ff41' }}>
            mail -s 'Hello'
          </Link>
        </nav>

        <div>
          <span style={{ opacity: 0.5 }}>visitor@portfolio:~$ </span>mail -s
          'Hello' chanaru@portfolio
        </div>

        <div
          style={{ marginTop: 16, padding: 16, border: '1px solid #004d13' }}
        >
          <div style={{ opacity: 0.5, marginBottom: 16 }}>
            [TODO: Terminal ContactForm — mail client style layout]
          </div>
          <div style={{ marginBottom: 8 }}>
            From (name): <span style={{ opacity: 0.5 }}>_</span>
          </div>
          <div style={{ marginBottom: 8 }}>
            Reply-To (email): <span style={{ opacity: 0.5 }}>_</span>
          </div>
          <div style={{ marginBottom: 8 }}>Message body:</div>
          <div
            style={{
              borderLeft: '2px solid #004d13',
              paddingLeft: 12,
              minHeight: 100,
              marginBottom: 16,
            }}
          >
            <span style={{ opacity: 0.3 }}>Type your message here...</span>
          </div>
          <button
            style={{
              color: '#00ff41',
              background: 'none',
              border: '1px solid #00ff41',
              padding: '6px 16px',
              cursor: 'pointer',
              fontFamily: 'monospace',
            }}
          >
            &gt; send-mail
          </button>
        </div>

        <div style={{ marginTop: 24 }}>
          <span style={{ opacity: 0.5 }}>visitor@portfolio:~$ </span>
          <span
            style={{
              display: 'inline-block',
              width: 8,
              height: 14,
              background: '#00ff41',
              verticalAlign: 'middle',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default ContactPage
