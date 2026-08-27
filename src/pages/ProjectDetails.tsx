function ProjectDetails() {
  return (
    <main className="project-details">

      <div className="project-details-container">

        <a
          href="/#projects"
          className="back-link"
        >
          ← BACK TO PROJECTS
        </a>


        <div className="project-details-header">

          <span className="project-details-number">
            PROJECT 01
          </span>

          <h1>
            Enterprise Server
          </h1>

          <p>
            A complete server platform designed for small
            business environments using a Raspberry Pi.
          </p>

        </div>


        <div className="project-details-grid">

          <div className="project-details-main">

            <section>
              <span className="details-label">
                OVERVIEW
              </span>

              <h2>
                About the project
              </h2>

              <p>
                This project was developed to create a
                centralized server solution capable of
                providing multiple services to a small
                business environment.
              </p>

              <p>
                The platform combines server management,
                network monitoring, file management,
                automated backups and DNS protection
                into a single environment.
              </p>
            </section>


            <section>
              <span className="details-label">
                FEATURES
              </span>

              <h2>
                Main features
              </h2>

              <div className="features-grid">

                <div className="feature-card">
                  <h3>System Monitoring</h3>
                  <p>
                    Real-time CPU, RAM, temperature,
                    storage and uptime monitoring.
                  </p>
                </div>

                <div className="feature-card">
                  <h3>File Management</h3>
                  <p>
                    Centralized file management through
                    a web interface.
                  </p>
                </div>

                <div className="feature-card">
                  <h3>Network Inventory</h3>
                  <p>
                    Automatic network device discovery
                    using Nmap.
                  </p>
                </div>

                <div className="feature-card">
                  <h3>Backup System</h3>
                  <p>
                    Automated backup system using Restic.
                  </p>
                </div>

                <div className="feature-card">
                  <h3>DNS Protection</h3>
                  <p>
                    Network-wide DNS filtering using
                    AdGuard Home.
                  </p>
                </div>

                <div className="feature-card">
                  <h3>VPN Access</h3>
                  <p>
                    Secure remote access using WireGuard.
                  </p>
                </div>

              </div>
            </section>

          </div>


          <aside className="project-details-sidebar">

            <div className="details-box">

              <span className="details-label">
                TECHNOLOGIES
              </span>

              <div className="details-tech">

                <span>RASPBERRY PI</span>
                <span>UBUNTU SERVER</span>
                <span>NODE.JS</span>
                <span>NGINX</span>
                <span>NMAP</span>
                <span>ADGUARD HOME</span>
                <span>WIREGUARD</span>
                <span>RESTIC</span>

              </div>

            </div>


            <div className="details-box">

              <span className="details-label">
                TYPE
              </span>

              <strong>
                SERVER / NETWORK
              </strong>

            </div>


            <div className="details-box">

              <span className="details-label">
                STATUS
              </span>

              <strong>
                COMPLETED
              </strong>

            </div>

          </aside>

        </div>

      </div>

    </main>
  );
}

export default ProjectDetails;