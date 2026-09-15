import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Update navbar styling when the page is scrolled.
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is removed.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Prevent the background page from scrolling while the mobile menu is open.
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    // Restore normal scrolling when the component is unmounted.
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMobileMenu = () => {
    // Close the mobile navigation after the user selects a link.
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-[var(--color-border)] bg-[rgba(5,5,7,0.72)] backdrop-blur-xl"
          : "bg-transparent"
      } `}
    >
      <nav className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Logo / Brand */}
        <a
          href="#home"
          onClick={closeMobileMenu}
          className="group flex items-center gap-2"
        >
          <span className="text-lg font-bold tracking-[-0.03em] sm:text-xl">
            Nikhil<span className="text-[var(--color-primary)]">.</span>
          </span>

          {/* Green indicator represents availability. */}
          <span
            className="h-2 w-2 rounded-full bg-[var(--color-success)]"
            aria-label="Available for work"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--color-text-secondary)] transition-colors duration-200 hover:text-[var(--color-text)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="group hidden items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 text-sm font-medium text-[var(--color-text)] shadow-sm transition-all duration-300 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:shadow-[var(--shadow-primary)] md:flex"
        >
          Let's Talk
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((previous) => !previous)}
          className="rounded-lg border border-[var(--color-border)] p-2 text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text)] md:hidden"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-[var(--color-border)] bg-[rgba(5,5,7,0.95)] backdrop-blur-xl transition-all duration-300 md:hidden ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"} `}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-5 sm:px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
              className="rounded-lg px-4 py-3 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]"
            >
              {link.label}
            </a>
          ))}

          {/* Mobile CTA */}
          <a
            href="#contact"
            onClick={closeMobileMenu}
            className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-[var(--color-primary)] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)]"
          >
            Let's Talk
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
