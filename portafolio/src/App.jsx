import { useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import './App.css';

/**
 * Main App Component
 * Single-page portfolio with smooth scroll navigation
 */
function App() {
  // Smooth scroll behavior is already set in index.css
  // Additional scroll behavior can be added here if needed

  useEffect(() => {
    // Prevent default hash link behavior
    const handleHashClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        const href = target.getAttribute('href');
        if (href && href !== '#') {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });
          }
        }
      }
    };

    document.addEventListener('click', handleHashClick);
    return () => document.removeEventListener('click', handleHashClick);
  }, []);

  return (
    <div className="app">
      {/* Header with Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main className="main-content">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Projects Section */}
        <Projects />

        {/* Skills Section */}
        <Skills />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-content">
          <p className="footer-text">
            Designed & Built with React
            <span className="footer-heart" aria-label="love"> ❤️ </span>
            by Your Name
          </p>
          <p className="footer-copyright">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
