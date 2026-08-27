import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import ProjectDetails from "./pages/ProjectDetails";
import Versifera from "./pages/Versifera";

function Home() {
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


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/project/enterprise-server"
          element={<ProjectDetails />}
        />
        
        <Route
  path="/project/versifera"
  element={<Versifera />}
/>


      </Routes>

    </BrowserRouter>
  );
}


export default App;