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
  SiGraphql,
} from 'react-icons/si';
import styles from './Skills.module.css';

/**
 * Skills Component
 * Display technologies with icons using react-icons
 */
const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Skills data with icons and categories
  const skills = [
    { name: 'React', icon: SiReact, color: '#61DAFB', category: 'Frontend' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000', category: 'Frontend' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'Frontend' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'Frontend' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933', category: 'Backend' },
    { name: 'Express', icon: SiExpress, color: '#000000', category: 'Backend' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'Backend' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', category: 'Backend' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED', category: 'Herramientas' },
    { name: 'Git', icon: SiGit, color: '#F05032', category: 'Herramientas' },
    { name: 'GitHub', icon: SiGithub, color: '#181717', category: 'Herramientas' },
    { name: 'TailwindCSS', icon: SiTailwindcss, color: '#38B2AC', category: 'Frontend' },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26', category: 'Frontend' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6', category: 'Frontend' },
    { name: 'Python', icon: SiPython, color: '#3776AB', category: 'Backend' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', category: 'Backend' },
    { name: 'Vite', icon: SiVite, color: '#646CFF', category: 'Herramientas' },
    // Aprendiendo
    { name: 'GraphQL', icon: SiGraphql, color: '#E10098', category: 'Aprendiendo' },
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
      // rotate: 5,
      // y: -10,
      transition: {
        duration: 0.05,
        ease: 'easeOut',
      },
    },
  };

  // Group skills by category for sectioned display
  const groupedSkills = skills.reduce((acc, s) => {
    const cat = s.category || 'Herramientas';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(s);
    return acc;
  }, {});

  // Desired display order
  const categoriesOrder = ['Frontend', 'Backend', 'Herramientas', 'Aprendiendo'];

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

          {/* Skills Categories */}
          {categoriesOrder.map((category) =>
            groupedSkills[category] ? (
              <div key={category} className={styles.categorySection}>
                <motion.h3 className={styles.categoryTitle} variants={itemVariants}>
                  {category}
                </motion.h3>

                <motion.div className={styles.skillsGrid} variants={containerVariants}>
                  {groupedSkills[category].map((skill) => {
                    const IconComponent = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        className={styles.skillCard}
                        variants={skillCardVariants}
                        whileHover="hover"
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                      >
                        <div className={styles.skillIcon}>
                          <IconComponent size={48} color={skill.color} aria-hidden="true" />
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
              </div>
            ) : null
          )}

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

