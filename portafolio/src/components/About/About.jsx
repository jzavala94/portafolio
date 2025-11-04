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
              <span className={styles.titleText}>Sobre mí</span>
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
                Desarrollador de Software con más de 9 años de experiencia creando soluciones escalables y seguras.
                Me especializo en backend y desarrollo full stack, trabajando con diferentes tecnologías y frameworks.
                
                </p>
                <p className={styles.description}>
                Apasionado por la optimización, la automatización y el uso de IA aplicada para mejorar la productividad y el rendimiento de las aplicaciones.
                </p>
                <p className={styles.description}>
                Actualmente colaboro en proyectos cloud-native, integrando inteligencia artificial aplicada y automatización para potenciar la productividad y la calidad del software. 
                Busco oportunidades como Backend Developer, Full Stack Developer o Software Engineer, en entornos cloud-native y DevOps.
                {/* Busco seguir creciendo en entornos que valoren la innovación, la excelencia técnica y la colaboración. */}
                

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

