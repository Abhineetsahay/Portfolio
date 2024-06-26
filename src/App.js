import React from 'react';
import { Element } from 'react-scroll';
import './App.css';
import AboutPage from './components/AboutPage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Project from './components/Projects';
import SkillsSection from './components/SkillsSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Element name="about">
        <AboutPage />
      </Element>
      <Element name="projects">
        <Project />
      </Element>
      <Element name="skills">
        <SkillsSection />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
