import { services } from "../../data/content";
import { SectionHeading } from "../ui/SectionHeading";

type Service = (typeof services)[number];

// Cores em sequência, sem repetir a mesma cor em cards seguidos (regra do DESIGN.md).
const tones = [
  { card: "bg-brand-pink", title: "text-ink", text: "text-ink/80" },
  { card: "bg-brand-teal", title: "text-white", text: "text-white/80" },
  { card: "bg-brand-lavender", title: "text-ink", text: "text-ink/80" },
];

function ServiceCard({
  service,
  tone,
}: {
  service: Service;
  tone: (typeof tones)[number];
}) {
  const Icon = service.icon;

  return (
    <div
      className={`flex min-h-[320px] flex-col rounded-3xl p-8 transition duration-500 ease-out hover:-translate-y-1.5 ${tone.card}`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-canvas text-ink">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className={`mt-auto text-2xl tracking-[-0.02em] ${tone.title}`}>
        {service.title}
      </h3>
      <p className={`mt-3 text-base leading-7 ${tone.text}`}>
        {service.description}
      </p>
    </div>
  );
}

export function Services() {
  return (
    <section
      id="servicos"
      className="mx-auto max-w-[1280px] px-6 py-24 lg:px-10"
    >
      <SectionHeading className="max-w-3xl">
        O que construímos.
      </SectionHeading>
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <ServiceCard
            key={service.number}
            service={service}
            tone={tones[i % tones.length]}
          />
        ))}
      </div>
    </section>
  );
}
