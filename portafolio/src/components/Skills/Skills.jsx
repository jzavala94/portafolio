import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiPython,
  SiFirebase,
  SiNextdotjs,
  SiVite,
} from 'react-icons/si';
import styles from './Skills.module.css';

/**
 * Skills Component
 * Display technologies with icons using react-icons
 */
const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Skills data with icons
  const skills = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Express', icon: SiExpress, color: '#000000' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'GitHub', icon: SiGithub, color: '#181717' },
    { name: 'TailwindCSS', icon: SiTailwindcss, color: '#38B2AC' },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    { name: 'Vite', icon: SiVite, color: '#646CFF' },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const skillCardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      y: -10,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="skills" className={styles.skills} ref={ref}>
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
              <span className={styles.titleNumber}>03.</span>
              <span className={styles.titleText}>Skills & Technologies</span>
            </h2>
            <div className={styles.titleLine}></div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className={styles.skillsGrid}
            variants={containerVariants}
          >
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  className={styles.skillCard}
                  variants={skillCardVariants}
                  whileHover="hover"
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  style={{ transitionDelay: `${index * 0.05}s` }}
                >
                  <div className={styles.skillIcon}>
                    <IconComponent
                      size={48}
                      color={skill.color}
                      aria-hidden="true"
                    />
                    <div
                      className={styles.iconGlow}
                      style={{ '--icon-color': skill.color }}
                    ></div>
                  </div>
                  <span className={styles.skillName}>{skill.name}</span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Additional Info */}
          <motion.p
            className={styles.info}
            variants={itemVariants}
          >
            Always learning and exploring new technologies to build better solutions.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

