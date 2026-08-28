import { useState } from "react";
import { Code, Goal, GraduationCap, Heart, User, X } from "lucide-react";

export function About() {
  const [showMore, setShowMore] = useState(false);

  const highlights = [
    {
      icon: GraduationCap,
      label: "Education",
      value: "BSc in Computer Science",
    },
    {
      icon: Code,
      label: "Focus",
      value: "Web Development & Data Engineering",
    },
    {
      icon: Goal,
      label: "Goal",
      value: "Build impactful solutions",
    },
    {
      icon: Heart,
      label: "Passion",
      value: "Technology & Learning",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-16"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3">
          <span className="text-primary text-sm sm:text-base font-medium tracking-wider uppercase">
            About Me
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-primary-dark leading-tight mt-1">
            Get to know me
          </h2>

          <p className="text-base sm:text-lg text-muted max-w-xl mt-4 leading-relaxed">
            I'm a Computer Science student who enjoys building things, learning
            how technology works, and turning ideas into something useful. I'm
            especially interested in web development, data, and the
            possibilities of AI.
          </p>

          <button
            onClick={() => setShowMore(true)}
            className="group inline-flex items-center gap-2 mt-6 border-2 border-primary text-primary text-base sm:text-lg font-medium px-6 py-3 rounded-lg hover:bg-primary hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            More About me
            <User
              size={20}
              className="group-hover:translate-x-0.5 transition-transform duration-300"
            />
          </button>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 p-5 rounded-xl border border-border hover:border-primary/30 hover:bg-primary/5 hover:shadow-md transition-all duration-300"
            >
              <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                <item.icon size={22} />
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-muted font-medium">
                  {item.label}
                </span>

                <p className="text-primary-dark font-medium text-sm sm:text-base leading-tight">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showMore && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-6 bg-black/50 backdrop-blur-sm"
          onClick={() => setShowMore(false)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white rounded-2xl p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowMore(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-muted hover:text-primary-dark hover:bg-primary/10 transition-colors"
              aria-label="Close"
            >
              <X size={22} />
            </button>

            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              A little more about me
            </span>

            <h3 className="text-3xl sm:text-4xl font-serif font-semibold text-primary-dark mt-2 pr-8">
              Still learning, still building.
            </h3>

            <div className="mt-6 space-y-4 text-base text-muted leading-relaxed">
              <p>
                I'm currently studying Computer Science and spending a lot of my
                time learning by building. For me, coding isn't just about
                writing code. I enjoy taking an idea, figuring out how it could
                work, and turning it into something people can actually use.
              </p>

              <p>
                I started with the fundamentals of web development and have
                gradually moved into React, modern frontend development, APIs,
                and data engineering. Every project gives me something new to
                learn, and I'm comfortable being a beginner when there's
                something I don't know yet.
              </p>

              <p>
                I'm also interested in data and AI. My long-term goal is to grow
                into a strong developer and data professional while building
                technology that solves real problems and creates value for
                people.
              </p>

              <p>
                I'm still early in my journey, but I'm focused on improving one
                step at a time and turning what I learn into real projects.
              </p>
            </div>

            <button
              onClick={() => setShowMore(false)}
              className="mt-7 px-5 py-2.5 rounded-lg bg-primary text-white font-medium hover:scale-105 transition-transform duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
