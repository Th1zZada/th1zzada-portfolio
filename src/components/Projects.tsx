function Projects() {
  return (
    <section id="projects" className="projects">

      <div className="section-container">

        <div className="section-header">
          <span className="section-number">03</span>
          <h2>PROJECTS</h2>
        </div>

        <p className="projects-intro">
          A selection of projects I've developed while
          learning and experimenting with technology.
        </p>


        <div className="projects-grid">


          {/* PROJECT 1 */}

          <article className="project-card">

            <div className="project-top">
              <span className="project-number">
                01
              </span>

              <span className="project-type">
                SERVER
              </span>
            </div>

            <h3>
              Enterprise Server
            </h3>

            <p>
              A complete server platform designed for
              small businesses, featuring system
              monitoring, file management, backups,
              network inventory and DNS security.
            </p>

            <div className="project-tech">
              <span>Ubuntu</span>
              <span>Node.js</span>
              <span>Nginx</span>
              <span>AdGuard</span>
              <span>Nmap</span>
            </div>

            <a
              href="#"
              className="project-link"
            >
              VIEW PROJECT →
            </a>

          </article>


          {/* PROJECT 2 */}

          <article className="project-card">

            <div className="project-top">
              <span className="project-number">
                02
              </span>

              <span className="project-type">
                WEB
              </span>
            </div>

            <h3>
              Personal Portfolio
            </h3>

            <p>
              A modern personal portfolio focused on
              web development, technology and
              professional projects.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>TypeScript</span>
              <span>CSS</span>
              <span>Vite</span>
            </div>

            <a
              href="#"
              className="project-link"
            >
              VIEW PROJECT →
            </a>

          </article>


          {/* PROJECT 3 */}

          <article className="project-card">

            <div className="project-top">
              <span className="project-number">
                03
              </span>

              <span className="project-type">
                NETWORK
              </span>
            </div>

            <h3>
              Network Infrastructure
            </h3>

            <p>
              Network administration and infrastructure
              projects involving VPNs, DNS filtering,
              network scanning and server configuration.
            </p>

            <div className="project-tech">
              <span>Linux</span>
              <span>WireGuard</span>
              <span>Nmap</span>
              <span>Networking</span>
            </div>

            <a
              href="#"
              className="project-link"
            >
              VIEW PROJECT →
            </a>

          </article>


        </div>

      </div>

    </section>
  );
}

export default Projects;