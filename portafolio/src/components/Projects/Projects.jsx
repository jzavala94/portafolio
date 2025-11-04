import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
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
      images: [
        'https://picsum.photos/seed/ecommerce1/800/520',
        'https://picsum.photos/seed/ecommerce2/800/520',
        'https://picsum.photos/seed/ecommerce3/800/520',
      ],
      githubUrl: 'https://github.com/yourusername/ecommerce-platform',
      demoUrl: 'https://your-demo-url.com',
      featured: false,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'TypeScript', 'Firebase', 'TailwindCSS'],
      images: [
        'https://picsum.photos/seed/tasks1/800/520',
        'https://picsum.photos/seed/tasks2/800/520',
      ],
      githubUrl: 'https://github.com/yourusername/task-manager',
      demoUrl: 'https://your-demo-url.com',
      featured: false,
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS Modules'],
      images: [
        'https://picsum.photos/seed/weather1/800/520',
      ],
      githubUrl: 'https://github.com/yourusername/weather-dashboard',
      demoUrl: 'https://your-demo-url.com',
      featured: false,
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for social media metrics with real-time data visualization and comprehensive reporting tools.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'D3.js'],
      images: [],
      githubUrl: 'https://github.com/yourusername/social-analytics',
      demoUrl: 'https://your-demo-url.com',
      featured: false,
    },
  ];

  // Small sub-component for each project card so we can keep per-card state
  const ProjectCard = ({ project, index, cardVariants, isInView }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = project.images || [];
    const hasImages = images.length > 0;

    const prevImage = () => {
      if (!hasImages) return;
      setCurrentIndex((i) => (i - 1 + images.length) % images.length);
    };

    const nextImage = () => {
      if (!hasImages) return;
      setCurrentIndex((i) => (i + 1) % images.length);
    };

    // Make sure index resets when images change
    if (currentIndex >= images.length && images.length > 0) {
      setCurrentIndex(0);
    }

    return (
      <motion.div
        className={`${styles.projectCard} ${project.featured ? styles.featured : ''}`}
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        style={{ transitionDelay: `${index * 0.06}s` }}
      >
        <div className={styles.projectHeader}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
        </div>

        {/* Single-image display with side arrows */}
        <div className={styles.imageWrapper}>
          {hasImages ? (
            <>
              <div className={styles.singleImage}>
                <img src={images[currentIndex]} alt={`${project.title} screenshot ${currentIndex + 1}`} />
              </div>

              {
                <div className={styles.imageControls}>
                  <div className={styles.controlsLeft}>
                    {images.length > 1 ? (
                      <>
                        <button
                          type="button"
                          className={styles.galleryBtn}
                          onClick={prevImage}
                          aria-label="Previous image"
                        >
                          ‹
                        </button>
                        <button
                          type="button"
                          className={styles.galleryBtn}
                          onClick={nextImage}
                          aria-label="Next image"
                        >
                          ›
                        </button>
                      </>
                    ) : (
                      <div style={{ width: 72 }} />
                    )}
                  </div>

                  <div className={styles.controlsRight}>
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
              }
            </>
          ) : (
            <div className={styles.imagePlaceholder}>
              <div className={styles.placeholderInner}>No images</div>
            </div>
          )}
        </div>

        <div className={styles.projectContent}>
          <p className={styles.projectDescription}>{project.description}</p>
          <div className={styles.techBadges}>
            {project.technologies.map((tech, i) => (
              <span key={i} className={styles.badge}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

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
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                cardVariants={cardVariants}
                isInView={isInView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

