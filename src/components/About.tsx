function About() {
  return (
    <section id="about" className="about">

      <div className="section-container">

        <div className="section-header">
          <span className="section-number">01</span>
          <h2>ABOUT ME</h2>
        </div>

        <div className="about-content">

          <div className="about-text">

            <p className="about-intro">
              I'm an IT Technician passionate about technology,
              software development, systems and networking.
            </p>

            <p>
              I enjoy creating practical solutions, experimenting
              with new technologies and learning through real-world
              projects.
            </p>

            <p>
              My interests range from web development and servers
              to network infrastructure and cybersecurity.
            </p>

          </div>

          <div className="about-info">

            <div className="info-card">
              <span>FIELD</span>
              <strong>IT & DEVELOPMENT</strong>
            </div>

            <div className="info-card">
              <span>FOCUS</span>
              <strong>WEB • SYSTEMS • NETWORKS</strong>
            </div>

            <div className="info-card">
              <span>LOCATION</span>
              <strong>PORTUGAL</strong>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;