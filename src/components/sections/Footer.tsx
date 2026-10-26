import { contactEmail } from "../../data/content";
import { Logo } from "../ui/Logo";

export function Footer() {
  return (
    <footer className="flex flex-col gap-4 bg-navy px-6 pb-8 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between lg:px-10">
      <Logo withMark={false} className="text-white" />
      <p>© {new Date().getFullYear()} SWG Digital. Feito para o próximo.</p>
      <a
        href={`mailto:${contactEmail}`}
        className="transition hover:text-tangerine"
      >
        {contactEmail}
      </a>
    </footer>
  );
}
