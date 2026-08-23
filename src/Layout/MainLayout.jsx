import { Button } from "../components/Button";
import { Logo } from "../components/Logo";
import { Navbar } from "../components/Navbar";

export function MainLayout() {
  return (
    <>
      <header className="flex justify-between items-center py-4 px-6 border-b border-border bg-surface/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex gap-4 items-center">
          <Logo />
          <span className="text-xl text-primary-dark font-medium hidden sm:block">
            Nathnael Ashenafi
          </span>
        </div>

        <Navbar />

        <div className="flex gap-3 items-center">
          <Button />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6"></main>
    </>
  );
}
