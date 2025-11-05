import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Header.module.css';

/**
 * Header Component
 * Navigation bar with smooth scroll to sections
 */
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const handleNavClick = (e, targetId) => {
    if (e) e.preventDefault();
    const doScroll = () => {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    if (isMobileMenuOpen) {
      // Close menu first, wait for its close animation to finish, then scroll
      setIsMobileMenuOpen(false);
      setTimeout(doScroll, 320); // matches transition duration ~0.3s
    } else {
      doScroll();
    }
  };

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'about', label: 'Sobre mí' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'skills', label: 'Stack' },
    { id: 'contact', label: 'Contacto' },
  ];

  return (
    <motion.header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className={styles.nav} role="navigation" aria-label="Main navigation">
        <div className={styles.container}>
          {/* Logo */}
          <motion.a
            href="#home"
            className={styles.logo}
            onClick={(e) => handleNavClick(e, 'home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Home"
          >
            <span className={styles.logoText}>Portfolio</span>
          </motion.a>

          {/* Desktop Navigation */}
          <ul className={styles.navList}>
            {navItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={styles.navLink}
                  aria-label={`Navigate to ${item.label} section`}
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={styles.hamburger}>
              <span className={isMobileMenuOpen ? styles.active : ''}></span>
              <span className={isMobileMenuOpen ? styles.active : ''}></span>
              <span className={isMobileMenuOpen ? styles.active : ''}></span>
            </span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.ul
          className={styles.mobileNavList}
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{ pointerEvents: isMobileMenuOpen ? 'auto' : 'none' }}
        >
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={styles.mobileNavLink}
              >
                {item.label}
              </a>
            </li>
          ))}
        </motion.ul>
      </nav>
    </motion.header>
  );
};

export default Header;


