import { Globe } from "lucide-react";
import githubIcon from "../assets/icons8-github.svg";

export function Projects() {
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
      id="projects"
      className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <span className="text-primary text-sm sm:text-base font-medium tracking-wider uppercase">
          My Projects
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-primary-dark leading-tight mt-1 mb-10">
          Projects I've worked on
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-surface rounded-xl border border-border overflow-hidden hover:border-primary/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.label}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-primary/90 text-white text-xs font-medium px-3 py-1 rounded-full">
                  {project.type}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-serif font-semibold text-primary-dark">
                  {project.label}
                </h3>
                <p className="text-muted text-sm mt-1 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-primary font-medium hover:text-primary-dark transition-colors"
                  >
                    <Globe size={16} /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted hover:text-primary transition-colors"
                  >
                    <img src={githubIcon} alt="GitHub" className="w-4 h-4" />{" "}
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
