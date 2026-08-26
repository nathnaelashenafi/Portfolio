import { useState } from "react";
import { X, ExternalLink } from "lucide-react";

export function Experience() {
  const [showLetter, setShowLetter] = useState(false);

  return (
    <section
      id="experience"
      className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <span className="text-primary text-sm font-medium">Experience</span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-primary-dark mt-2">
            Where I've worked
          </h2>

          <p className="text-muted mt-4 max-w-2xl leading-relaxed">
            My first hands-on experience working on real development tasks and
            building projects as part of a team.
          </p>
        </div>

        <div className="max-w-4xl mt-12">
          <div className="border-t border-border pt-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h3 className="text-2xl font-serif font-semibold text-primary-dark">
                  Codveda Technologies
                </h3>

                <p className="text-primary mt-1">Software Development Intern</p>

                <p className="text-sm text-muted mt-1">March 2026 – Present</p>
              </div>

              <button
                onClick={() => setShowLetter(true)}
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-dark transition-colors self-start"
              >
                Offer letter
                <ExternalLink size={14} />
              </button>
            </div>

            <div className="mt-8 max-w-3xl">
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
            </div>

            <div className="mt-8">
              <p className="text-sm text-muted mb-3">
                Some of the projects I worked on:
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <span className="text-primary-dark">NexaAI</span>
                <span className="text-primary-dark">DevFlow</span>
                <span className="text-primary-dark">Simple Login Page</span>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm text-muted mb-3">Technologies</p>

              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "JavaScript",
                  "HTML",
                  "CSS",
                  "Tailwind CSS",
                  "Framer Motion",
                  "Git",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="text-sm text-muted border border-border px-3 py-1 rounded-md"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {showLetter && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setShowLetter(false)}
        >
          <div
            className="relative max-w-2xl w-full bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowLetter(false)}
              className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition"
            >
              <X size={20} />
            </button>

            <img
              src="/images/certeficates/codveda.jpg"
              alt="Codveda Technologies offer letter"
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
}
