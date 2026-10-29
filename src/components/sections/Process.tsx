import { steps } from "../../data/content";
import { SectionHeading } from "../ui/SectionHeading";

export function Process() {
  return (
    <section id="processo" className="bg-surface-soft py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading className="max-w-2xl">
            Como trabalhamos.
          </SectionHeading>
          <p className="max-w-sm text-lg leading-8 text-body">
            Quatro etapas, da primeira conversa ao projeto no ar.
          </p>
        </div>
        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.number} className="rounded-2xl bg-surface-card p-6">
              <span className="font-display text-5xl font-medium tracking-[-0.04em] text-ink">
                {step.number}
              </span>
              <h3 className="mt-8 text-xl tracking-[-0.01em]">{step.title}</h3>
              <p className="mt-2 text-base leading-7 text-body">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
