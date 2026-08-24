import { Code, Goal, GraduationCap, Heart, User } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: GraduationCap,
      label: "Education",
      value: "BSc in Computer Science",
    },
    { icon: Code, label: "Focus", value: "Web Development & Data Engineering" },
    { icon: Goal, label: "Goal", value: "Build impactful solutions" },
    { icon: Heart, label: "Passion", value: "Tech & Learning new things" },
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
            I'm a Computer Science student at Unity University, passionate about
            building solutions using web technologies and data. I love learning
            and turning ideas into real world products.
          </p>
          <a
            href="#"
            className="group inline-flex items-center gap-2 mt-6 border-2 border-primary text-primary text-base sm:text-lg font-medium px-6 py-3 rounded-lg hover:bg-primary hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            More About me
            <User
              size={20}
              className="group-hover:translate-x-0.5 transition-transform duration-300"
            />
          </a>
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
    </section>
  );
}
