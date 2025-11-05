import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import styles from './Projects.module.css';

// Load images through Vite's asset pipeline so they get bundled and work on GitHub Pages
// We import folders per project and sort by filename for stable ordering
const loadImages = (glob) =>
  Object.entries(glob)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, url]) => url);

// Note: paths are relative to this file
const appnutriaImages = loadImages(
  import.meta.glob('../../assets/projects/appnutria/*.{png,PNG,jpg,jpeg,webp,avif}', {
    eager: true,
    import: 'default',
  })
);
const bismoImages = loadImages(
  import.meta.glob('../../assets/projects/bismo/*.{png,PNG,jpg,jpeg,webp,avif}', {
    eager: true,
    import: 'default',
  })
);
const talleresImages = loadImages(
  import.meta.glob('../../assets/projects/talleres/*.{png,PNG,jpg,jpeg,webp,avif}', {
    eager: true,
    import: 'default',
  })
);
const rifasImages = loadImages(
  import.meta.glob('../../assets/projects/rifas/*.{png,PNG,jpg,jpeg,webp,avif}', {
    eager: true,
    import: 'default',
  })
);
const mobiliarioImages = loadImages(
  import.meta.glob('../../assets/projects/mobiliario/*.{png,PNG,jpg,jpeg,webp,avif}', {
    eager: true,
    import: 'default',
  })
);

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
      title: 'AppNutria',
      description: 'Desarrollo de plataforma web y móvil para nutriólogos (seguimiento clínico, citas, dietas).',
      technologies: ['React', 'Expo', 'Python', 'FastAPI', 'PostgreSQL', 'Stripe', 'AWS', 'CI/CD', 'GitHub', 'Websockets', 'Kanban', 'JWT'],
      images: appnutriaImages,
      // githubUrl: 'https://github.com/yourusername/ecommerce-platform',
      demoUrl: 'https://appnutria.com/',
      featured: false,
    },
    {
      id: 2,
      title: 'Bismo',
      description: 'Desarrollo de software inmobiliario basado en microservicios para gestión de bienes y propiedades.',
      technologies: ['MySQL', 'JavaScript', 'Jquery', 'HTML', 'CI/CD', 'Bootstrap', 'AWS', 'Python', 'Flask', 'Nginx', 'Docker', 'SOAP', 'Restful', 'PHP'],
      images: bismoImages,
      // githubUrl: 'https://github.com/yourusername/task-manager',
      demoUrl: 'https://bismo.com.mx/',
      featured: false,
    },
    {
      id: 3,
      title: 'Sistema para talleres',
      description: 'Desarrollo de una aplicación de escritorio enfocada en la gestión integral de talleres de reparación de dispositivos electrónicos, facilitando el seguimiento de servicios.',
      technologies: ['Tauri', 'React', 'Vite', 'FastAPI', 'SQLite', 'CSS', 'JSON', 'Cursor'],
      images: talleresImages,
      // githubUrl: 'https://github.com/yourusername/weather-dashboard',
      demoUrl: 'https://www.youtube.com/@Serbeesoft',
      featured: false,
    },
    {
      id: 4,
      title: 'Sistema para rifas',
      description: 'Desarrollo de plataforma de sorteos con gestión de boletos, ventas, validación de tickets, referidos, y una interfaz responsiva y autoadministrable.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'GitHub Copilot', 'Bootstrap'],
      images: rifasImages,
      // githubUrl: 'https://github.com/yourusername/weather-dashboard',
      // demoUrl: 'https://www.youtube.com/watch?v=GoQgWP5BNbg&t=20s',
      featured: false,
    },
    {
      id: 5,
      title: 'Sistema para mobiliario',
      description: 'Plataforma para gestión de rentas de diversos artículos. Integración a Paypal para suscripciones.',
      technologies: ['React', 'Node.js', 'Express', 'MariaDB', 'Gemini Code', 'Paypal', 'Webhooks'],
      images: mobiliarioImages,
      // githubUrl: 'https://github.com/yourusername/weather-dashboard',
      // demoUrl: 'https://www.youtube.com/watch?v=GoQgWP5BNbg&t=20s',
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
            <>
              <div className={styles.imagePlaceholder}>
                <div className={styles.placeholderInner}>No images</div>
              </div>
              <div className={styles.imageControls}>
                <div className={styles.controlsLeft}>
                  <div style={{ width: 72 }} />
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
            </>
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
              <span className={styles.titleText}>Proyectos</span>
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


