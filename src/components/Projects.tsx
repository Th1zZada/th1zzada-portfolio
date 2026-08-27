function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-container">

        <div className="section-header">
          <span className="section-number">03</span>
          <h2>PROJECTS</h2>
        </div>

        <p className="projects-intro">
          A selection of projects I've developed while exploring
          software development, systems, networking and server technologies.
        </p>

        <div className="projects-grid">

          {/* PROJECT 01 */}

          <article className="project-card">

            <div className="project-preview server-preview">
              <span>SERVER</span>
            </div>

            <div className="project-top">
              <span className="project-number">01</span>
              <span className="project-type">
                SERVER / NETWORK
              </span>
            </div>

            <h3>
              Enterprise Server
            </h3>

            <p>
              A complete server platform developed for small
              business environments using a Raspberry Pi.
              Includes monitoring, file management, backups,
              network inventory and DNS protection.
            </p>

            <div className="project-tech">
              <span>NODE.JS</span>
              <span>UBUNTU</span>
              <span>NGINX</span>
              <span>NMAP</span>
              <span>ADGUARD</span>
              <span>WIREGUARD</span>
            </div>

           <a
  href="/project/enterprise-server"
  className="project-link"
>
  VIEW PROJECT →
</a>

          </article>


          {/* PROJECT 02 */}

          <article className="project-card">

            <div className="project-preview portfolio-preview">
              <span>TH1ZZADA.DEV</span>
            </div>

            <div className="project-top">
              <span className="project-number">02</span>
              <span className="project-type">
                WEB DEVELOPMENT
              </span>
            </div>

            <h3>
              Th1zZada Portfolio
            </h3>

            <p>
              Personal developer portfolio focused on presenting
              my skills, projects and experience through a modern
              interface with a dark blue and purple visual identity.
            </p>

            <div className="project-tech">
              <span>REACT</span>
              <span>TYPESCRIPT</span>
              <span>VITE</span>
              <span>CSS</span>
            </div>

            <a
              href="#"
              className="project-link"
            >
              VIEW PROJECT →
            </a>

          </article>


          {/* PROJECT 03 */}

          <article className="project-card">

            <div className="project-preview versifera-preview">
              <span>VERSIFERA</span>
            </div>

            <div className="project-top">
              <span className="project-number">03</span>
              <span className="project-type">
                WEB PROJECT
              </span>
            </div>

            <h3>
              Versifera
            </h3>

            <p>
              A new web project currently under development,
              focused on creating a modern digital experience
              with a strong visual identity.
            </p>

            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JAVASCRIPT</span>
            </div>

           <a
  href="/project/versifera"
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