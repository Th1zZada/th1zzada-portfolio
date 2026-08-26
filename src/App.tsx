import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">

      <Navbar />

      <main className="hero">

        <div className="hero-content">

          <p className="hero-small">
            HELLO, I'M
          </p>

          <h1>
            Th1zZada
          </h1>

          <p className="hero-description">
            IT Technician focused on development,
            systems, networking and server technologies.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="hero-button primary"
            >
              VIEW PROJECTS
            </a>

            <a
              href="#contact"
              className="hero-button secondary"
            >
              CONTACT ME
            </a>

          </div>

        </div>

      </main>

      <About />
     <Skills /> 
     <Projects />
     <Contact />
    </div>
  );
}

export default App;