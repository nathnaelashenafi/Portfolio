export function Logo() {
  const handleLogoClick = (e) => {
    e.preventDefault();
    const element = document.getElementById("hero");
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
    <div className="flex items-center text-4xl font-medium relative">
      <a
        href="#hero"
        onClick={handleLogoClick}
        className="relative inline-block"
      >
        <span className="relative z-10">N</span>
        <span className="absolute inset-0 text-primary ml-[0.5rem]">A</span>
      </a>
    </div>
  );
}
