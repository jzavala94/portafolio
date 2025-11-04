import { color, motion } from 'framer-motion';
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
  SiFlask,
  SiFastapi,
  SiDjango,
  SiPhp,
  SiLaravel,
  SiExpo,
  SiBootstrap,
  SiJquery,
  SiMysql,
  SiMariadb,
  SiSqlite,
  SiRedis,
  SiNginx,
  SiSublimetext,
  SiSocketdotio,
  SiPostman,
  SiGooglegemini,
  SiJirasoftware,
  SiSlack,
  SiDiscord,
} from 'react-icons/si';
import { BsMicrosoft, BsFillKanbanFill } from 'react-icons/bs';
import { FaAws, FaTrello, FaDatabase, FaCubes, FaLock } from "react-icons/fa";
import { DiVisualstudio, DiScrum } from "react-icons/di";
import { TbSettingsAutomation, TbLockCog, TbWebhook } from "react-icons/tb";
import { LuFileJson } from "react-icons/lu";
import { GiDolphin } from "react-icons/gi";
import { RiExchangeLine } from "react-icons/ri";
import { GoCopilot } from "react-icons/go";
import { IoCube } from "react-icons/io5";

import styles from './Skills.module.css';


/**
 * Skills Component
 * Display technologies with icons using react-icons
 */
const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Skills data with icons and categories
  // Skills data with icons and categories
  // Mapped from the user's provided lists into more granular categories.
  const skills = [
    // Backend / Frameworks
    { name: 'Python', icon: SiPython, color: '#3776AB', category: 'Backend' },
    { name: 'Flask', icon: SiFlask, color: '#999999ff', category: 'Backend' },
    { name: 'FastAPI', icon: SiFastapi, color: '#009688', category: 'Backend' },
    { name: 'Django', icon: SiDjango, color: '#146747ff', category: 'Backend' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933', category: 'Backend' },
    { name: 'Express', icon: SiExpress, color: '#999999ff', category: 'Backend' },
    { name: 'PHP', icon: SiPhp, color: '#777BB4', category: 'Backend' },
    { name: 'Laravel', icon: SiLaravel, color: '#FF2D20', category: 'Backend' },

    // Frontend / UI
    { name: 'React', icon: SiReact, color: '#61DAFB', category: 'Frontend' },
    { name: 'Expo', icon: SiExpo, color: '#999999ff', category: 'Frontend' },
    { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3', category: 'Frontend' },
    { name: 'jQuery', icon: SiJquery, color: '#0769AD', category: 'Frontend' },
    { name: 'JavaScript', icon: SiJavascript, color: '#e5b701cc', category: 'Frontend' },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26', category: 'Frontend' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6', category: 'Frontend' },

    // Bases de datos
    { name: 'MySQL', icon: SiMysql, color: '#4479A1', category: 'Bases de datos' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', category: 'Bases de datos' },
    { name: 'MariaDB', icon: SiMariadb, color: '#003545', category: 'Bases de datos' },
    { name: 'SQLite', icon: SiSqlite, color: '#003B57', category: 'Bases de datos' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'Bases de datos' },
    { name: 'Redis', icon: SiRedis, color: '#DC382D', category: 'Bases de datos' },

    // Cloud/DevOps
    { name: 'AWS', icon: FaAws, color: '#999999ff', category: 'Cloud/DevOps' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED', category: 'Cloud/DevOps' },
    { name: 'Git', icon: SiGit, color: '#F05032', category: 'Cloud/DevOps' },
    { name: 'GitHub', icon: SiGithub, color: '#999999ff', category: 'Cloud/DevOps' },
    { name: 'CI/CD', icon: TbSettingsAutomation, color: '#999999ff', category: 'Cloud/DevOps' },
    { name: 'Nginx', icon: SiNginx, color: '#009639', category: 'Cloud/DevOps' },

    // Arquitectura / Protocolos
    { name: 'RESTful', icon: RiExchangeLine, color: '#999999ff', category: 'Integraciones y Protocolos' },
    { name: 'WebSockets', icon: SiSocketdotio, color: '#999999ff', category: 'Integraciones y Protocolos' },
    { name: 'SOAP', icon: FaCubes, color: '#999999ff', category: 'Integraciones y Protocolos' },
    { name: 'Webhooks', icon: TbWebhook, color: '#999999ff', category: 'Integraciones y Protocolos' },
    { name: 'JSON / XML', icon: LuFileJson, color: '#999999ff', category: 'Integraciones y Protocolos' },
    { name: 'JWT', icon: TbLockCog, color: '#999999ff', category: 'Integraciones y Protocolos' },

    // IA Aplicada y Productividad
    { name: 'Cursor', icon: IoCube, color: '#747272ff', category: 'IA y Productividad' },
    { name: 'GitHub Copilot', icon: GoCopilot, color: '#5865F2', category: 'IA y Productividad' },
    { name: 'Gemini Code Assist', icon: SiGooglegemini, color: '#2496ED', category: 'IA y Productividad' },

    // Metodologías Ágiles
    { name: 'Scrum', icon: DiScrum, color: '#0052CC', category: 'Metodologías' },
    { name: 'Kanban', icon: BsFillKanbanFill, color: '#e5b701cc', category: 'Metodologías' },

    // Herramientas / IDEs / Colaboración
    { name: 'Visual Studio Code', icon: DiVisualstudio, color: '#007ACC', category: 'Herramientas' },
    { name: 'Sublime Text', icon: SiSublimetext, color: '#FF9800', category: 'Herramientas' },
    { name: 'Postman', icon: SiPostman, color: '#FF6C37', category: 'Herramientas' },
    { name: 'HeidiSQL', icon: FaDatabase, color: '#009639', category: 'Herramientas' },
    { name: 'SQLyog', icon: GiDolphin, color: '#007ACC', category: 'Herramientas' },
    { name: 'Jira', icon: SiJirasoftware, color: '#0052CC', category: 'Herramientas' },
    { name: 'Trello', icon: FaTrello, color: '#0052CC', category: 'Herramientas' },
    { name: 'Teams', icon: BsMicrosoft, color: '#6264A7', category: 'Herramientas' },
    { name: 'Slack', icon: SiSlack, color: '#4A154B', category: 'Herramientas' },
    { name: 'Discord', icon: SiDiscord, color: '#5865F2', category: 'Herramientas' },
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

  // Desired display order (expanded to match user's requested sections)
  const categoriesOrder = [
    'Backend',
    'Frontend',
    'Bases de datos',
    'Cloud/DevOps',
    'Integraciones y Protocolos',
    'IA y Productividad',
    'Metodologías',
    'Herramientas',
    'Aprendiendo',
  ];

  // (categories rendered statically; no collapsible state)

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
              <span className={styles.titleText}>Mi Stack Tecnológico</span>
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
                      const initials = skill.name
                        .split(' ')
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join('');

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
                            {IconComponent ? (
                              <IconComponent size={48} color={skill.color} aria-hidden="true" />
                            ) : (
                              <div className={styles.skillFallback} aria-hidden="true">{initials}</div>
                            )}
                            <div
                              className={styles.iconGlow}
                              style={{ '--icon-color': skill.color || 'var(--accent-blue)' }}
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
            Siempre aprendiendo y explorando nuevas tecnologías para crear mejores soluciones.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

