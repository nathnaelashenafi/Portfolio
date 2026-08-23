import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#journey", label: "Journey" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#certificates", label: "Certificates" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="hidden lg:flex items-center text-primary gap-6 font-semibold text-sm sm:text-base">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="relative group whitespace-nowrap transition-colors duration-300 hover:text-primary-dark"
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </nav>

      <button
        className="lg:hidden text-primary p-1.5 hover:text-primary-dark transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-surface border-b border-border shadow-lg lg:hidden max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-primary text-base font-medium px-4 py-3 rounded-lg hover:bg-primary/10 active:bg-primary/20 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
