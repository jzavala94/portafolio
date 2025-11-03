import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import styles from './Projects.module.css';

/**
 * Projects Component
 * Showcase projects with cards linking to GitHub or demos
 */
const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Sample projects data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      githubUrl: 'https://github.com/yourusername/ecommerce-platform',
      demoUrl: 'https://your-demo-url.com',
      featured: false,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'TypeScript', 'Firebase', 'TailwindCSS'],
      githubUrl: 'https://github.com/yourusername/task-manager',
      demoUrl: 'https://your-demo-url.com',
      featured: false,
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS Modules'],
      githubUrl: 'https://github.com/yourusername/weather-dashboard',
      demoUrl: 'https://your-demo-url.com',
      featured: false,
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for social media metrics with real-time data visualization and comprehensive reporting tools.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'D3.js'],
      githubUrl: 'https://github.com/yourusername/social-analytics',
      demoUrl: 'https://your-demo-url.com',
      featured: false,
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
    <section id="projects" className={styles.projects} ref={ref}>
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
              <span className={styles.titleNumber}>02.</span>
              <span className={styles.titleText}>Projects</span>
            </h2>
            <div className={styles.titleLine}></div>
          </motion.div>

          {/* Projects Grid */}
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`${styles.projectCard} ${project.featured ? styles.featured : ''}`}
                variants={cardVariants}
                // initial="hidden"
                // animate={isInView ? 'visible' : 'hidden'}
                // style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* Project Header */}
                <div className={styles.projectHeader}>
                  <div className={styles.projectIcon}>
                    <div className={styles.iconCircle}></div>
                  </div>
                  <div className={styles.projectLinks}>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <FiGithub aria-hidden="true" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                        aria-label={`View ${project.title} demo`}
                      >
                        <FiExternalLink aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                </div>

                {/* Project Technologies */}
                <div className={styles.projectTechnologies}>
                  <ul className={styles.techList}>
                    {project.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className={styles.techItem}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}

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

                
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

