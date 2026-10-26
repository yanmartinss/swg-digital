import { steps } from "../../data/content";
import { SectionHeading } from "../ui/SectionHeading";

export function Process() {
  return (
    <section
      id="processo"
      className="bg-tangerine px-6 py-28 text-navy lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading className="max-w-3xl">
            Do primeiro papo ao próximo capítulo.
          </SectionHeading>
          <p className="max-w-sm text-xl leading-9 text-navy/75">
            Um processo simples, transparente e pensado para fazer seu projeto
            avançar de verdade.
          </p>
        </div>
        <ol className="mt-20 grid gap-12 border-t-2 border-navy pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.number}>
              <span className="font-display text-7xl font-semibold tracking-[-0.04em]">
                {step.number}
              </span>
              <h3 className="mt-6 text-3xl font-semibold tracking-[-0.02em]">
                {step.title}
              </h3>
              <p className="mt-3 text-lg leading-8 text-navy/75">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
