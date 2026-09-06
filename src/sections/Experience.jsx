import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

export function Experience() {
  const [showLetter, setShowLetter] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const technologies = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Framer Motion",
    "Git",
  ];

  const projects = ["NexaAI", "DevFlow", "Simple Login Page"];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm font-medium"
          >
            Experience
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-primary-dark mt-2"
          >
            Where I've worked
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted mt-4 max-w-2xl leading-relaxed"
          >
            My first hands-on experience working on real development tasks and
            building projects as part of a team.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mt-12"
        >
          <div className="border-t border-border pt-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="text-2xl font-serif font-semibold text-primary-dark"
                >
                  Codveda Technologies
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="text-primary mt-1"
                >
                  Software Development Intern
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="text-sm text-muted mt-1"
                >
                  March 2026 – Present
                </motion.p>
              </div>

              <motion.button
                initial={{ opacity: 0, x: 10 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }
                }
                transition={{ duration: 0.4, delay: 0.5 }}
                whileHover={{ scale: 1.05, x: 4 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowLetter(true)}
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-dark transition-colors self-start"
              >
                Offer letter
                <ExternalLink size={14} />
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="mt-8 max-w-3xl"
            >
              <p className="text-primary-dark leading-relaxed">
                During my internship, I worked through three development levels
                focused on building and improving web projects. Most of my work
                involved React, JavaScript, responsive interfaces, animations,
                and performance optimization.
              </p>

              <p className="text-muted leading-relaxed mt-4">
                I also worked with Git and GitHub throughout the internship and
                got more comfortable taking a project from development to
                deployment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="mt-8"
            >
              <p className="text-sm text-muted mb-3">
                Some of the projects I worked on:
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                {projects.map((project, idx) => (
                  <motion.span
                    key={project}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.9 }
                    }
                    transition={{ duration: 0.3, delay: 0.7 + idx * 0.1 }}
                    className="text-primary-dark"
                  >
                    {project}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="mt-8"
            >
              <p className="text-sm text-muted mb-3">Technologies</p>

              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, idx) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, y: 10 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                    }
                    transition={{ duration: 0.3, delay: 0.8 + idx * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-sm text-muted border border-border px-3 py-1 rounded-md"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {showLetter && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setShowLetter(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300,
            }}
            className="relative max-w-2xl w-full bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowLetter(false)}
              className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition"
            >
              <X size={20} />
            </motion.button>

            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              src={`${import.meta.env.BASE_URL}images/certeficates/codveda.jpg`}
              alt="Codveda Technologies offer letter"
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
