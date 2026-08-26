import { useState } from "react";
import { X, Calendar, Briefcase, ExternalLink } from "lucide-react";

export function Experience() {
  const [showLetter, setShowLetter] = useState(false);

  return (
    <section
      id="experience"
      className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <span className="text-primary text-sm sm:text-base font-medium tracking-wider uppercase">
          Experience
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-primary-dark leading-tight mt-1 mb-10">
          Work experience
        </h2>

        <div className="max-w-3xl">
          <div className="bg-surface rounded-xl border border-border p-6 hover:border-primary/40 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <h3 className="text-2xl font-serif font-semibold text-primary-dark">
                  Codveda Technologies
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <Briefcase size={16} className="text-primary" />
                  <span className="text-primary font-medium">
                    Software Development Intern
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Calendar size={14} className="text-muted" />
                  <span className="text-muted text-sm">Mar 2026 – Present</span>
                </div>
              </div>
              <button
                onClick={() => setShowLetter(true)}
                className="flex items-center gap-2 text-sm text-primary font-medium hover:text-primary-dark transition-colors border border-primary/30 px-3 py-1.5 rounded-lg hover:bg-primary/5"
              >
                View Offer Letter <ExternalLink size={14} />
              </button>
            </div>

            <div className="mt-4 pt-4 border-t border-border">
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-muted text-sm">
                  <span className="text-primary mt-1">•</span>
                  Completed all 3 levels with 100% success.
                </li>
                <li className="flex items-start gap-2 text-muted text-sm">
                  <span className="text-primary mt-1">•</span>
                  Built real world projects and improved development skills.
                </li>
                <li className="flex items-start gap-2 text-muted text-sm">
                  <span className="text-primary mt-1">•</span>
                  Collaborated with the team and practiced clean code.
                </li>
                <li className="flex items-start gap-2 text-muted text-sm">
                  <span className="text-primary mt-1">•</span>
                  Used Git for version control and modern web development.
                </li>
              </ul>
            </div>

            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-sm text-muted">
                <span className="font-medium text-primary-dark">
                  Projects worked on:
                </span>{" "}
                NexaAI, DevFlow, Simple Login Page
              </p>
              <p className="text-sm text-muted mt-1">
                <span className="font-medium text-primary-dark">
                  Skills applied:
                </span>{" "}
                React, HTML, CSS, JavaScript, Framer Motion, Performance
                Optimization
              </p>
            </div>
          </div>
        </div>
      </div>

      {showLetter && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setShowLetter(false)}
        >
          <div
            className="relative max-w-2xl w-full bg-white rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowLetter(false)}
              className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full transition-colors z-10"
            >
              <X size={22} />
            </button>
            <img
              src="/images/certeficates/codveda.jpg"
              alt="Offer Letter"
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
}
