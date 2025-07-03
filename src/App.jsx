import React from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';
import ProjectLine from './component/ProjectLine';
import Services from './component/Services';
import Specializations from './component/Specialization';
import Lan from './component/Lan';
import Certificate from './component/Certificate';
import Education from './component/Education';
import GitHubSection from './component/GithubSection';
import Contact from './component/Contact';
import Discription from './component/Discription';
import About from './component/About';

function App() {
  return (
    <div className="bg-zinc-800">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <Home />

      {/* All Projects */}
      <ProjectLine />

      {/* Services Offered */}
      <Services />

      {/* Specializations */}
      <Specializations />

      {/* Skills and Tools */}
      <Lan />

      {/* Certificates */}
      <Certificate />

      {/* Education Background */}
      <Education />

      {/* GitHub Activity Section */}
      <GitHubSection />

      {/* About Me (Bio Section) */}
      <Discription />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <About />
    </div>
  );
}

export default App;
