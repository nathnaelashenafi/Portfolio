import { Send } from "lucide-react";

export function Button() {
  const handleContactClick = (e) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex items-center gap-3">
      <a href="#contact" onClick={handleContactClick}>
        <button className="flex items-center gap-2 bg-primary text-white text-sm sm:text-base font-medium px-4 sm:px-5 py-2.5 rounded-lg hover:bg-primary-dark hover:scale-105 hover:shadow-md transition-all duration-300">
          Let's Talk
          <Send
            size={16}
            className="group-hover:translate-x-0.5 transition-transform"
          />
        </button>
      </a>
    </div>
  );
}
