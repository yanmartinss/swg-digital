import { ShieldCheck } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section
      id="contato"
      className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-10"
    >
      <div className="grid gap-10 rounded-3xl bg-surface-soft p-6 sm:gap-12 sm:p-14 lg:grid-cols-2 lg:items-start lg:p-20">
        <div>
          <SectionHeading className="max-w-xl">
            Conte o que você precisa.
          </SectionHeading>
          <p className="mt-6 max-w-md text-lg leading-8 text-body">
            Escreva sobre o seu projeto e nós respondemos por e-mail.
          </p>
          <div className="mt-8 flex items-center gap-3 text-sm font-medium text-ink">
            <ShieldCheck className="h-5 w-5 shrink-0 text-brand-teal" /> Primeira
            conversa sem compromisso
          </div>
        </div>
        <div className="sm:rounded-2xl sm:border sm:border-hairline sm:bg-canvas sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
