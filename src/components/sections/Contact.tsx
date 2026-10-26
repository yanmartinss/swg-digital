import { ShieldCheck } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section
      id="contato"
      className="bg-navy px-6 py-28 text-white lg:px-10 lg:py-40"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div>
          <SectionHeading className="max-w-2xl">
            Seu projeto merece uma presença à altura.
          </SectionHeading>
          <p className="mt-8 max-w-md text-xl leading-9 text-white/70">
            Conte um pouco sobre o que você está construindo. A gente responde
            com ideias, caminhos e os próximos passos.
          </p>
          <div className="mt-10 flex items-center gap-3 text-base text-white/75">
            <ShieldCheck className="h-6 w-6 text-tangerine" /> Primeiro papo sem
            compromisso
          </div>
        </div>
        <div className="rounded-[2.5rem] bg-white p-8 text-navy sm:p-12">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
