function Skills() {
  return (
    <section id="skills" className="skills">

      <div className="section-container">

        <div className="section-header">
          <span className="section-number">02</span>
          <h2>SKILLS</h2>
        </div>

        <p className="skills-intro">
          Technologies and tools I use to build,
          manage and deploy digital solutions.
        </p>


        {/* DEVELOPMENT */}

        <div className="skills-category">

          <h3>DEVELOPMENT</h3>

          <div className="skills-grid">

            <div className="skill-card">
              <span className="skill-icon">HTML</span>
              <h4>HTML</h4>
              <p>Web Structure</p>
            </div>

            <div className="skill-card">
              <span className="skill-icon">CSS</span>
              <h4>CSS</h4>
              <p>Web Styling</p>
            </div>

            <div className="skill-card">
              <span className="skill-icon">JS</span>
              <h4>JavaScript</h4>
              <p>Web Development</p>
            </div>

            <div className="skill-card">
              <span className="skill-icon">TS</span>
              <h4>TypeScript</h4>
              <p>Modern Development</p>
            </div>

            <div className="skill-card">
              <span className="skill-icon">R</span>
              <h4>React</h4>
              <p>Frontend Development</p>
            </div>

            <div className="skill-card">
              <span className="skill-icon">N</span>
              <h4>Node.js</h4>
              <p>Backend Development</p>
            </div>

          </div>

        </div>


        {/* SYSTEMS & NETWORKS */}

        <div className="skills-category">

          <h3>SYSTEMS & NETWORKS</h3>

          <div className="skills-grid">

            <div className="skill-card">
              <span className="skill-icon">L</span>
              <h4>Linux</h4>
              <p>Server Administration</p>
            </div>

            <div className="skill-card">
              <span className="skill-icon">N</span>
              <h4>Nginx</h4>
              <p>Web Server</p>
            </div>

            <div className="skill-card">
              <span className="skill-icon">NM</span>
              <h4>Nmap</h4>
              <p>Network Scanning</p>
            </div>

            <div className="skill-card">
              <span className="skill-icon">WG</span>
              <h4>WireGuard</h4>
              <p>VPN & Networking</p>
            </div>

            <div className="skill-card">
              <span className="skill-icon">AG</span>
              <h4>AdGuard Home</h4>
              <p>DNS & Network Security</p>
            </div>

            <div className="skill-card">
              <span className="skill-icon">G</span>
              <h4>Git</h4>
              <p>Version Control</p>
            </div>

          </div>

        </div>


        {/* DATABASES */}

        <div className="skills-category">

          <h3>DATABASES & TOOLS</h3>

          <div className="skills-grid">

            <div className="skill-card">
              <span className="skill-icon">SQL</span>
              <h4>MySQL</h4>
              <p>Database Management</p>
            </div>

            <div className="skill-card">
              <span className="skill-icon">VS</span>
              <h4>VS Code</h4>
              <p>Development Environment</p>
            </div>

            <div className="skill-card">
              <span className="skill-icon">VB</span>
              <h4>VirtualBox</h4>
              <p>Virtualization</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;