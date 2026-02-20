import { Link } from '@tanstack/react-router'

import { projects } from '@/data/portfolio'

const WorkPage = () => {
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
          <Link to="/work" style={{ color: '#00ff41', marginRight: 16 }}>
            ls ~/projects
          </Link>
          <Link to="/resume" style={{ color: '#00d4ff', marginRight: 16 }}>
            cat ~/resume.md
          </Link>
          <Link to="/contact" style={{ color: '#00d4ff' }}>
            mail -s 'Hello'
          </Link>
        </nav>

        <div style={{ marginBottom: 16 }}>
          <span style={{ opacity: 0.5 }}>visitor@portfolio:~$ </span>ls -la
          ~/projects/
        </div>
        <div style={{ opacity: 0.5, fontSize: 12, marginBottom: 16 }}>
          total {projects.length}
        </div>

        {projects.map((p) => (
          <div
            key={p.title}
            style={{ borderBottom: '1px solid #004d13', padding: '16px 0' }}
          >
            <div style={{ fontSize: 12 }}>
              drwxr-xr-x user {p.year}{' '}
              <span style={{ color: '#00d4ff' }}>{p.title}</span>
            </div>
            <div style={{ marginTop: 8 }}>
              <span style={{ opacity: 0.5 }}>$ </span>cat README.md
            </div>
            <p
              style={{
                borderLeft: '2px solid #004d13',
                paddingLeft: 12,
                marginTop: 8,
                lineHeight: 1.7,
              }}
            >
              {p.description}
            </p>
            <div style={{ marginTop: 8 }}>
              <span style={{ opacity: 0.5 }}>$ </span>ls ./tech-stack/
            </div>
            <div style={{ marginTop: 4 }}>
              {p.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    border: '1px solid #004d13',
                    padding: '2px 8px',
                    marginRight: 8,
                    fontSize: 11,
                    opacity: 0.8,
                  }}
                >
                  [{t}]
                </span>
              ))}
            </div>
          </div>
        ))}

        <div style={{ marginTop: 24 }}>
          <span style={{ opacity: 0.5 }}>visitor@portfolio:~/projects$ </span>
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

export default WorkPage
