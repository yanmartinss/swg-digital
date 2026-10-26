import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { navLinks } from "../../data/content";
import { Button } from "../ui/Button";
import { Logo } from "../ui/Logo";

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
        <Logo className="text-2xl" />
        <div className="hidden items-center gap-10 text-base font-medium text-navy/70 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="transition hover:text-navy"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="hidden xl:block">
          <Button href="#contato" className="!px-7 !py-3.5">
            Vamos conversar <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <button
          className="-mr-2 p-2 xl:hidden"
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
          aria-expanded={open}
          aria-controls="menu-lateral"
        >
          <Menu className="h-7 w-7" />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-navy/60 transition-opacity duration-500 xl:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <aside
        id="menu-lateral"
        inert={!open}
        className={`fixed inset-y-0 right-0 z-50 flex w-[85%] max-w-sm flex-col bg-navy px-8 py-7 text-white shadow-2xl transition-transform duration-500 ease-out xl:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Menu"
      >
        <button
          className="-mr-2 mb-10 self-end p-2"
          onClick={() => setOpen(false)}
          aria-label="Fechar menu"
        >
          <X className="h-7 w-7" />
        </button>
        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/15 py-5 font-display text-3xl font-semibold tracking-[-0.02em] transition hover:text-tangerine"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Button
          href="#contato"
          onClick={() => setOpen(false)}
          className="mt-10 w-full"
        >
          Vamos conversar <ArrowRight className="h-5 w-5" />
        </Button>
      </aside>
    </>
  );
}
