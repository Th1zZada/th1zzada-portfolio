import { Link } from "react-router-dom";

function Versifera() {
  return (
    <div className="project-page">

      <div className="project-page-container">

        <Link
          to="/"
          className="back-button"
        >
          ← BACK TO PORTFOLIO
        </Link>

        <p className="project-page-number">
          PROJECT 03
        </p>

        <h1>
          Versifera
        </h1>

        <p className="project-page-subtitle">
          A community-driven platform for sharing poetry,
          discovering writers and connecting through words.
        </p>


        <div className="project-page-content">

          <div>

            <h2>
              About the project
            </h2>

            <p>
              Versifera is a social platform designed for
              people who enjoy writing and reading poetry.
            </p>

            <p>
              The concept is similar to a forum, allowing
              users to publish their own poems, discover
              content from other writers and interact with
              the community.
            </p>

            <p>
              The main goal is to create a simple and
              welcoming space where people can share their
              creativity and connect through poetry.
            </p>

          </div>


          <div className="project-page-info">

            <div>
              <span>STATUS</span>

              <strong>
                IN DEVELOPMENT
              </strong>
            </div>


            <div>
              <span>TYPE</span>

              <strong>
                SOCIAL PLATFORM
              </strong>
            </div>


            <div>
              <span>CONCEPT</span>

              <strong>
                POETRY COMMUNITY
              </strong>
            </div>


            <div>
              <span>TECHNOLOGIES</span>

              <strong>
                REACT • TYPESCRIPT • CSS
              </strong>
            </div>

          </div>

        </div>


        <div className="project-features">

          <h2>
            Planned Features
          </h2>


          <div className="features-grid">

            <div className="feature-card">
              <span>01</span>

              <h3>
                Poetry Sharing
              </h3>

              <p>
                Users can publish their own poems
                and share them with the community.
              </p>
            </div>


            <div className="feature-card">
              <span>02</span>

              <h3>
                Community
              </h3>

              <p>
                A forum-like environment where
                readers and writers can interact.
              </p>
            </div>


            <div className="feature-card">
              <span>03</span>

              <h3>
                Discovery
              </h3>

              <p>
                Explore poems, authors and different
                styles of writing.
              </p>
            </div>


            <div className="feature-card">
              <span>04</span>

              <h3>
                User Profiles
              </h3>

              <p>
                Personal profiles where writers can
                showcase their work and activity.
              </p>
            </div>

          </div>

        </div>


        <div className="project-status">

          <span>
            CURRENT STATUS
          </span>

          <strong>
            DEVELOPMENT
          </strong>

          <p>
            Versifera is currently being developed.
            More features and community functionality
            will be added in future versions.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Versifera;