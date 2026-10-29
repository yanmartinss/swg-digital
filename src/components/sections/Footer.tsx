import { contactEmail, navLinks } from "../../data/content";
import { Logo } from "../ui/Logo";

export function Footer() {
  return (
    <footer className="bg-surface-soft py-12 text-sm text-body">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <Logo className="text-xl" />
          <nav
            aria-label="Rodapé"
            className="flex flex-wrap gap-x-6 gap-y-3 font-medium text-ink"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-muted"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-hairline pt-6 sm:flex-row sm:items-center sm:justify-between">
          <a
            href={`mailto:${contactEmail}`}
            className="break-all font-medium text-ink underline-offset-4 transition hover:underline"
          >
            {contactEmail}
          </a>
          <p className="text-muted">
            © {new Date().getFullYear()} SWG Digital.
          </p>
        </div>
      </div>
    </footer>
  );
}
