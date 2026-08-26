import { Logo } from "../components/Logo";
import { SocialLinks } from "../components/SocialLinks";

export function Footer() {
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
    <footer className="bg-surface border-t border-border px-6 md:px-12 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo />

          <nav className="flex flex-wrap justify-center gap-4 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <SocialLinks />
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-muted text-sm">
            © 2026 Nathnael Ashenafi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
