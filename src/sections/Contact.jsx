import { Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <span className="text-primary text-sm sm:text-base font-medium tracking-wider uppercase">
          Contact
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-primary-dark leading-tight mt-1 mb-4">
          Let's work together
        </h2>
        <p className="text-muted text-lg max-w-2xl mb-10">
          I'm always open to discussing new projects, creative ideas or
          opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          <div className="bg-surface rounded-xl border border-border p-6 hover:border-primary/40 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Mail size={22} />
              </div>
              <div>
                <p className="text-xs text-muted uppercase tracking-wider font-medium">
                  Email
                </p>
                <p className="text-primary-dark font-medium">
                  nathnaelashenafi21@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface rounded-xl border border-border p-6 hover:border-primary/40 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-xs text-muted uppercase tracking-wider font-medium">
                  Location
                </p>
                <p className="text-primary-dark font-medium">
                  Addis Ababa, Ethiopia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
