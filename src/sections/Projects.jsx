import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe } from "lucide-react";
import githubIcon from "../assets/icons8-github.svg";

export function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const projects = [
    {
      label: "NexaAI",
      type: "Internship Practice",
      live: "https://nexaai-proj.netlify.app",
      github: "https://github.com/nathnaelashenafi/nexa-ai.git",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/images/projects/nexaai.webp",
      description:
        "A modern tech landing page for an AI company. Built with clean UI and responsive design.",
    },
    {
      label: "DevFlow",
      type: "Internship Practice",
      live: "https://natdevflow.netlify.app",
      github: "https://github.com/nathnaelashenafi/devflow.git",
      technologies: ["React", "HTML", "CSS", "JavaScript"],
      image: "/images/projects/preview.png",
      description:
        "A developer portfolio template with project showcase and contact form. Built during internship.",
    },
    {
      label: "Weather App",
      type: "Practice Project",
      live: "https://natweather.netlify.app",
      github: "https://github.com/nathnaelashenafi/weather-app.git",
      technologies: ["React", "CSS", "JavaScript", "API"],
      image: "/images/projects/weatherapp.webp",
      description:
        "A weather app that shows real-time weather data using API. Practice project with React.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-primary text-sm sm:text-base font-medium tracking-wider uppercase"
        >
          My Projects
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-primary-dark leading-tight mt-1 mb-10"
        >
          Projects I've worked on
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.1 * (idx + 1) }}
              whileHover={{ y: -4 }}
              className="group bg-surface rounded-xl border border-border overflow-hidden hover:border-primary/40 hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.label}
                  className="w-full h-48 object-cover"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 * (idx + 1) }}
                  className="absolute top-3 right-3 bg-primary/90 text-white text-xs font-medium px-3 py-1 rounded-full"
                >
                  {project.type}
                </motion.div>
              </motion.div>

              <div className="p-5">
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 * (idx + 1) }}
                  className="text-xl font-serif font-semibold text-primary-dark"
                >
                  {project.label}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 * (idx + 1) + 0.1 }}
                  className="text-muted text-sm mt-1 leading-relaxed"
                >
                  {project.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 * (idx + 1) + 0.2 }}
                  className="flex flex-wrap gap-2 mt-3"
                >
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{
                        duration: 0.2,
                        delay: 0.2 * (idx + 1) + 0.1 * i,
                      }}
                      className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 * (idx + 1) + 0.3 }}
                  className="flex items-center gap-3 mt-4 pt-4 border-t border-border"
                >
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-primary font-medium hover:text-primary-dark transition-colors"
                  >
                    <Globe size={16} /> Live Demo
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted hover:text-primary transition-colors"
                  >
                    <img src={githubIcon} alt="GitHub" className="w-4 h-4" />{" "}
                    Code
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
