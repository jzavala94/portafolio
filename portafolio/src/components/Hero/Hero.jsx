import { motion } from 'framer-motion';
import styles from './Hero.module.css';

/**
 * Hero Component
 * Introduction section with tagline and call-to-action
 */
const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.8,
        duration: 0.4,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 30px rgba(0, 212, 255, 0.3)',
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  // Smooth scroll to contact section
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      {/* Animated Background Elements - Outside container for full extension */}
      <div className={styles.backgroundElements}>
        <div className={styles.glowCircle1}></div>
        <div className={styles.glowCircle2}></div>
        <div className={styles.glowCircle3}></div>
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.div
            className={styles.greeting}
            variants={itemVariants}
          >
            <span className={styles.greetingText}>Hello, I'm</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className={styles.name}
            variants={itemVariants}
          >
            <span className={styles.nameText}>Jorge Zavala</span>
            <br />
            <span className={styles.nameHighlight}>Full Stack Developer</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className={styles.tagline}
            variants={itemVariants}
          >
            Crafting digital experiences with modern technologies
            <br />
            <span className={styles.taglineAccent}>
              Building the future, one line of code at a time.
            </span>
          </motion.p>

          {/* Description */}
          <motion.p
            className={styles.description}
            variants={itemVariants}
          >
            I'm a passionate developer specializing in React, Node.js, and cloud technologies.
            I transform ideas into elegant, scalable solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className={styles.ctaContainer}
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              onClick={scrollToContact}
              className={styles.ctaButton}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label="Get in touch"
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  const offset = 80;
                  const elementPosition = projectsSection.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                  });
                }
              }}
              className={styles.ctaButtonSecondary}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label="View my projects"
            >
              View Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          className={styles.scrollArrow}
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          aria-hidden="true"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

