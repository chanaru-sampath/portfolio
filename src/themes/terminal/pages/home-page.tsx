import { Link } from '@tanstack/react-router'

import { personalInfo } from '@/data/portfolio'

const HomePage = () => {
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
        {/* Boot message */}
        <div style={{ opacity: 0.5, marginBottom: 24, fontSize: 12 }}>
          Last login: {new Date().toLocaleString()} on ttys001
        </div>

        {/* Nav */}
        <nav
          style={{
            marginBottom: 32,
            padding: '8px 0',
            borderBottom: '1px solid #004d13',
          }}
        >
          <span style={{ opacity: 0.5 }}>visitor@portfolio:~$ </span>
          <Link to="/" style={{ color: '#00ff41', marginRight: 16 }}>
            cd ~/home
          </Link>
          <Link to="/work" style={{ color: '#00d4ff', marginRight: 16 }}>
            ls ~/projects
          </Link>
          <Link to="/resume" style={{ color: '#00d4ff', marginRight: 16 }}>
            cat ~/resume.md
          </Link>
          <Link to="/contact" style={{ color: '#00d4ff' }}>
            mail -s 'Hello'
          </Link>
        </nav>

        {/* ASCII banner */}
        <pre
          style={{
            color: '#00ff41',
            fontSize: 10,
            lineHeight: 1.2,
            marginBottom: 24,
          }}
        >
          {`
  ██████╗██╗  ██╗ █████╗ ███╗   ██╗ █████╗ ██████╗ ██╗   ██╗
 ██╔════╝██║  ██║██╔══██╗████╗  ██║██╔══██╗██╔══██╗██║   ██║
 ██║     ███████║███████║██╔██╗ ██║███████║██████╔╝██║   ██║
 ██║     ██╔══██║██╔══██║██║╚██╗██║██╔══██║██╔══██╗██║   ██║
 ╚██████╗██║  ██║██║  ██║██║ ╚████║██║  ██║██║  ██║╚██████╔╝
  ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝
`}
        </pre>

        {/* Whoami */}
        <div style={{ marginBottom: 24 }}>
          <div>
            <span style={{ opacity: 0.5 }}>visitor@portfolio:~$ </span>whoami
          </div>
          <div style={{ fontSize: 24, fontWeight: 700, marginTop: 8 }}>
            {personalInfo.name}
          </div>
          <div style={{ color: '#00d4ff', marginTop: 4 }}>
            {personalInfo.title}
          </div>
        </div>

        {/* Bio */}
        <div style={{ marginBottom: 24 }}>
          <div>
            <span style={{ opacity: 0.5 }}>visitor@portfolio:~$ </span>cat
            bio.txt
          </div>
          <p
            style={{
              marginTop: 8,
              borderLeft: '2px solid #004d13',
              paddingLeft: 12,
              lineHeight: 1.8,
            }}
          >
            {personalInfo.summary}
          </p>
        </div>

        {/* Prompt */}
        <div>
          <span style={{ opacity: 0.5 }}>visitor@portfolio:~$ </span>
          <span
            style={{
              display: 'inline-block',
              width: 8,
              height: 14,
              background: '#00ff41',
              verticalAlign: 'middle',
              animation: 'tm-blink 1.1s step-end infinite',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage
