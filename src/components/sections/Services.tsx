import { ArrowRight } from "lucide-react";
import { services } from "../../data/content";
import { SectionHeading } from "../ui/SectionHeading";

type Service = (typeof services)[number];

const tones = [
  {
    card: "bg-white text-navy ring-1 ring-navy/10",
    text: "text-navy/65",
    icon: "bg-lilac text-navy",
  },
  {
    card: "bg-lilac text-navy",
    text: "text-navy/70",
    icon: "bg-white text-navy",
  },
  {
    card: "bg-navy text-white",
    text: "text-white/70",
    icon: "bg-tangerine text-navy",
  },
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
      className={`group grid gap-8 rounded-[2.5rem] p-8 transition duration-500 ease-out hover:-translate-y-1.5 sm:p-12 md:grid-cols-[auto_1fr_auto] md:items-center ${tone.card}`}
    >
      <div
        className={`flex h-20 w-20 items-center justify-center rounded-full ${tone.icon}`}
      >
        <Icon className="h-9 w-9" />
      </div>
      <div>
        <h3 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
          {service.title}
        </h3>
        <p className={`mt-3 max-w-2xl text-lg leading-8 ${tone.text}`}>
          {service.description}
        </p>
      </div>
      <ArrowRight className="hidden h-9 w-9 transition duration-500 group-hover:translate-x-2 md:block" />
    </div>
  );
}

export function Services() {
  return (
    <section
      id="servicos"
      className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40"
    >
      <SectionHeading className="max-w-4xl">
        Digital não é só estar online. É ser lembrado.
      </SectionHeading>
      <div className="mt-16 grid gap-5">
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
