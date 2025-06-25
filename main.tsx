import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import TrustedBySection from './components/TrustedBySection';
import './index.css';
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ProjectsSection id="projects" />
      <TrustedBySection />
      <AboutSection id="about" />
      {/* Who We Are section here */}
    </React.StrictMode>
  );
} else {
  console.error('Root element with id "root" not found.');
}