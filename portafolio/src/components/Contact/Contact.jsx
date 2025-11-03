import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
} from 'react-icons/fi';
import styles from './Contact.module.css';

// Initial order/colors for boxes
// New, balanced colors (soft but not fully opaque)
const initialOrder = [
  '#48b5cc', 
  '#96cbcb', 
  '#9e79d4', 
  '#6ab8cd', 
];
// const initialOrder = [
//   '#00d4ff',
//   '#7ddddd',
//   '#7c3aed',
//   '#4ac4e0',
// ];

// Utility shuffle (non-destructive when given a copy)
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Spring transition used by layout animations
const spring = {
  type: 'spring',
  damping: 20,
  stiffness: 300,
};

/**
 * Contact Component
 * Contact form with validation and social links
 */
const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Reordering boxes (simple, stable motion)
  const [order, setOrder] = useState(initialOrder);

  useEffect(() => {
    // shuffle every 1s (example). Use timeout to allow smooth layout animation.
    const timeout = setTimeout(() => setOrder((prev) => shuffle([...prev])), 2000);
    return () => clearTimeout(timeout);
  }, [order]);

  // Social links - replace with your actual links
  const socialLinks = [
    {
      name: 'GitHub',
      icon: FiGithub,
      url: 'https://github.com/yourusername',
      color: '#181717',
    },
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      url: 'https://linkedin.com/in/yourusername',
      color: '#0077B5',
    },
    {
      name: 'Twitter',
      icon: FiTwitter,
      url: 'https://twitter.com/yourusername',
      color: '#1DA1F2',
    },
    {
      name: 'Email',
      icon: FiMail,
      url: 'mailto:your.email@example.com',
      color: '#EA4335',
    },
  ];



  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const socialCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.1,
      y: -5,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="contact" className={styles.contact} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div
            className={styles.header}
            variants={itemVariants}
          >
            <h2 className={styles.title}>
              <span className={styles.titleNumber}>04.</span>
              <span className={styles.titleText}>Get In Touch</span>
            </h2>
            <div className={styles.titleLine}></div>
          </motion.div>

          {/* Contact Content Grid */}
          <div className={styles.contactGrid}>
            {/* Contact Info */}
            <motion.div
              className={styles.contactInfo}
              variants={itemVariants}
            >
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Let's Connect</h3>
                <p className={styles.infoDescription}>
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision. Feel free to reach out
                  through the form or social media.
                </p>

                {/* Social Links */}
                <div className={styles.socialLinks}>
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        variants={socialCardVariants}
                        whileHover="hover"
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        style={{ transitionDelay: `${index * 0.1}s` }}
                        aria-label={`Visit my ${social.name} profile`}
                      >
                        <IconComponent
                          size={24}
                          color={social.color}
                          aria-hidden="true"
                        />
                        <span className={styles.socialName}>{social.name}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Right visual area: simple, stable motion elements (floating circles) */}
            <motion.div
              className={styles.visual}
              variants={itemVariants}
            >
              <div className={styles.visualInner} aria-hidden="true">
                <motion.ul className={styles.reorderList}>
                  {order.map((backgroundColor) => (
                    <motion.li
                      key={backgroundColor}
                      className={styles.reorderItem}
                      layout
                      transition={spring}
                      style={{ backgroundColor }}
                    />
                  ))}
                </motion.ul>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

