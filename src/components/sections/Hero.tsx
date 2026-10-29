import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import { DashboardPreview } from "./DashboardPreview";
import { Navbar } from "./Navbar";

export function Hero() {
  return (
    <section className="bg-canvas">
      <Navbar />
      <div
        id="inicio"
        className="mx-auto grid max-w-[1280px] items-center gap-14 px-6 pb-24 pt-14 lg:grid-cols-[7fr_5fr] lg:px-10 lg:pt-20"
      >
        <div>
          <h1 className="text-5xl leading-none tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Sites e plataformas sob medida para o seu negócio.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-body">
            Criamos sites e plataformas de acordo com o que o seu negócio
            precisa. Atuamos com desenvolvimento full stack e mobile, com mais
            de 2 anos de experiência na área.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="#contato">
              Quero tirar meu projeto do papel{" "}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#servicos" variant="secondary">
              Conheça nosso trabalho
            </Button>
          </div>
        </div>
        <div className="rounded-3xl bg-surface-soft p-4 sm:p-10">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}
