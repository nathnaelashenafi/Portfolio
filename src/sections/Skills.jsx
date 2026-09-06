import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import htmlIcon from "../assets/skills/html5.svg";
import cssIcon from "../assets/skills/css3.svg";
import jsIcon from "../assets/skills/javascript.svg";
import reactIcon from "../assets/skills/react.svg";
import tailwindIcon from "../assets/skills/tailwindcss.svg";
import gitIcon from "../assets/skills/git.svg";
import googleIcon from "../assets/skills/google.svg";
import vscodeIcon from "../assets/skills/vscode.svg";
import sqlIcon from "../assets/skills/sql.png";
import cppIcon from "../assets/skills/cpp.svg";
import powerIcon from "../assets/skills/powerbi.svg";
import figmaIcon from "../assets/skills/figma.svg";

export function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const allSkills = [
    {
      name: "HTML",
      level: "Advanced",
      details:
        "I'm comfortable building clean, semantic pages with forms, responsive layouts, accessibility, and basic SEO in mind.",
      icon: htmlIcon,
    },
    {
      name: "CSS",
      level: "Advanced",
      details:
        "I use Flexbox, Grid, responsive layouts, transitions, animations, and modern CSS to build interfaces that feel polished.",
      icon: cssIcon,
    },
    {
      name: "JavaScript",
      level: "Intermediate",
      details:
        "I work with modern JavaScript, DOM manipulation, events, APIs, async code, array methods, and everyday frontend logic.",
      icon: jsIcon,
    },
    {
      name: "React",
      level: "Intermediate",
      details:
        "I build React interfaces with components, props, state, hooks, routing, conditional rendering, and reusable UI.",
      icon: reactIcon,
    },
    {
      name: "Tailwind",
      level: "Intermediate",
      details:
        "I use Tailwind to build responsive interfaces quickly while keeping layouts, spacing, typography, and components consistent.",
      icon: tailwindIcon,
    },
    {
      name: "Git",
      level: "Intermediate",
      details:
        "I use Git and GitHub to manage projects, track changes, work with branches, and keep my code organized.",
      icon: gitIcon,
    },
    {
      name: "Google Workspace",
      level: "Advanced",
      details:
        "I'm comfortable working with Docs, Sheets, Slides, Drive, Gmail, Calendar, and Forms for everyday productivity.",
      icon: googleIcon,
    },
    {
      name: "VS Code",
      level: "Advanced",
      details:
        "VS Code is my main development environment. I use extensions, the terminal, debugging tools, shortcuts, and custom workflows.",
      icon: vscodeIcon,
    },
    {
      name: "SQL",
      level: "Beginner",
      details:
        "I'm building my foundation in SQL and currently work with queries, filtering, sorting, CRUD operations, and basic joins.",
      icon: sqlIcon,
    },
    {
      name: "C++",
      level: "Beginner",
      details:
        "I use C++ to strengthen my understanding of programming fundamentals such as variables, loops, functions, and control flow.",
      icon: cppIcon,
    },
    {
      name: "Power BI",
      level: "Beginner",
      details:
        "I'm learning Power BI and exploring how to turn data into useful dashboards, reports, and visual insights.",
      icon: powerIcon,
    },
    {
      name: "Figma",
      level: "Beginner",
      details:
        "I use Figma for basic UI design, layouts, components, prototypes, and turning ideas into interfaces before coding them.",
      icon: figmaIcon,
    },
  ];

  const getLevelStyle = (level) => {
    if (level === "Advanced") {
      return "bg-primary/10 text-primary border-primary/20";
    }

    if (level === "Intermediate") {
      return "bg-accent/10 text-primary-dark border-accent/30";
    }

    return "bg-background text-muted border-border";
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="px-5 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-20 md:py-24 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-10 md:mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm sm:text-base font-medium tracking-wider uppercase"
          >
            My Skills
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-primary-dark leading-tight mt-2 mb-3"
          >
            What I work with
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted text-sm sm:text-base leading-relaxed max-w-xl"
          >
            A mix of technologies and tools I use while building projects and
            improving my skills.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4"
        >
          {allSkills.map((skill, index) => {
            const isOpen = selectedSkill === index;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{
                  duration: 0.4,
                  delay: 0.1 * (index % 6) + 0.3,
                }}
                className="group relative"
                onMouseEnter={() => setSelectedSkill(index)}
                onMouseLeave={() => setSelectedSkill(null)}
              >
                <motion.button
                  type="button"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedSkill(isOpen ? null : index)}
                  className="w-full text-left p-4 sm:p-5 bg-surface rounded-xl border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center mb-3"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
                      />
                    </motion.div>

                    <span className="text-primary-dark font-medium text-xs sm:text-sm">
                      {skill.name}
                    </span>

                    <span
                      className={`mt-2 text-[10px] sm:text-xs px-2.5 py-1 rounded-full border ${getLevelStyle(
                        skill.level,
                      )}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                </motion.button>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: isOpen ? 1 : 0,
                    scale: isOpen ? 1 : 0.9,
                    visibility: isOpen ? "visible" : "hidden",
                  }}
                  transition={{ duration: 0.2 }}
                  className={`hidden md:block absolute z-30 top-1/2 -translate-y-1/2 w-64 ${
                    index % 6 < 3
                      ? "lg:left-full lg:ml-3"
                      : "lg:right-full lg:mr-3"
                  } ${
                    index % 4 < 2
                      ? "md:left-full md:ml-3"
                      : "md:right-full md:mr-3"
                  }`}
                >
                  <div className="relative bg-surface border border-border rounded-xl p-4 shadow-xl">
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-surface border-border rotate-45 ${
                        index % 6 < 3
                          ? "-left-1.5 border-l border-b"
                          : "-right-1.5 border-r border-t"
                      }`}
                    />

                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src={skill.icon}
                        alt=""
                        className="w-8 h-8 object-contain"
                      />

                      <div>
                        <h3 className="text-sm font-semibold text-primary-dark">
                          {skill.name}
                        </h3>

                        <span
                          className={`inline-block mt-1 text-[10px] px-2 py-0.5 rounded-full border ${getLevelStyle(
                            skill.level,
                          )}`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted text-xs leading-5">
                      {skill.details}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: isOpen ? 1 : 0,
                    y: isOpen ? 0 : -10,
                    visibility: isOpen ? "visible" : "hidden",
                  }}
                  transition={{ duration: 0.2 }}
                  className="md:hidden absolute z-30 top-full left-0 right-0 mt-2 bg-surface border border-border rounded-xl p-4 shadow-md"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={skill.icon}
                      alt=""
                      className="w-8 h-8 object-contain"
                    />

                    <div>
                      <h3 className="text-sm font-semibold text-primary-dark">
                        {skill.name}
                      </h3>

                      <span
                        className={`inline-block mt-1 text-[10px] px-2 py-0.5 rounded-full border ${getLevelStyle(
                          skill.level,
                        )}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted text-xs leading-5">
                    {skill.details}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
