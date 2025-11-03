import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './About.module.css';

/**
 * About Component
 * About Me section with glassmorphic design
 */
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="about" className={styles.about} ref={ref}>
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
              <span className={styles.titleNumber}>01.</span>
              <span className={styles.titleText}>About Me</span>
            </h2>
            <div className={styles.titleLine}></div>
          </motion.div>

          {/* About Content Grid */}
          <div className={styles.grid}>
            {/* Text Content */}
            <motion.div
              className={styles.textContent}
              variants={itemVariants}
            >
              <div className={styles.textCard}>
                <p className={styles.intro}>
                  Hello! I'm a passionate full-stack developer with a love for creating
                  beautiful, functional, and user-friendly applications. I specialize in
                  modern web technologies and enjoy turning complex problems into simple,
                  elegant solutions.
                </p>
                <p className={styles.description}>
                  My journey in web development started with a curiosity about how things
                  work on the internet. Over time, I've developed expertise in building
                  scalable applications using React, Node.js, and cloud technologies.
                </p>
                <p className={styles.description}>
                  When I'm not coding, you can find me exploring new technologies,
                  contributing to open-source projects, or sharing knowledge with the
                  developer community.
                </p>
              </div>
            </motion.div>

            {/* Image/Visual Card */}
            <motion.div
              className={styles.visualCard}
              variants={cardVariants}
            >
              <div className={styles.imageWrapper}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.imageGlow}></div>
                  <div className={styles.imageText}>Your Photo</div>
                </div>
                <div className={styles.imageBorder}></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

