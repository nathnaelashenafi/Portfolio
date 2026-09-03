import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, Briefcase, Code2, GraduationCap } from "lucide-react";

export function Journey() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const journey = [
    {
      icon: BookOpen,
      year: "2024",
      label: "High School",
      description: "Graduated from Miraf Academy",
    },
    {
      icon: GraduationCap,
      year: "2024",
      label: "University",
      description: "Started BSc in Computer Science at Unity University",
    },
    {
      icon: Code2,
      year: "2025",
      label: "Web Development",
      description: "Learned HTML, CSS, JavaScript and built many projects",
    },
    {
      icon: Briefcase,
      year: "2026",
      label: "Internship",
      description: "Software Dev Intern at Codveda Technologies",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="px-6 md:px-12 lg:px-20 py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-primary text-sm sm:text-base font-medium tracking-wider uppercase"
        >
          My Journey
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-primary-dark leading-tight mt-1 mb-12"
        >
          The path I'm on
        </motion.h2>

        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-primary/20 md:left-1/2 md:-translate-x-0.5"></div>

          <div className="space-y-8 md:space-y-0">
            {journey.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }
                }
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) + 0.1 }}
                  className="flex-1 md:text-right"
                >
                  <div
                    className={`bg-surface p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <span className="text-primary font-bold text-xl block mb-1">
                      {item.year}
                    </span>
                    <h3 className="text-primary-dark font-semibold text-lg">
                      {item.label}
                    </h3>
                    <p className="text-muted text-sm mt-1">
                      {item.description}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0 }
                  }
                  transition={{
                    duration: 0.4,
                    delay: 0.1 * (index + 1) + 0.2,
                    type: "spring",
                    stiffness: 300,
                  }}
                  whileHover={{ scale: 1.2 }}
                  className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white shadow-md shrink-0"
                >
                  <item.icon size={18} />
                </motion.div>

                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
