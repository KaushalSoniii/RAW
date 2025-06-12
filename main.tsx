import React from 'react';
import ReactDOM from 'react-dom/client';
import AboutSection from './components/AboutSection';
import './global.css'; 
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <AboutSection id="about" />
    </React.StrictMode>
  );
} else {
  console.error('Root element with id "root" not found.');
}