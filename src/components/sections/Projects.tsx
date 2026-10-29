import { ArrowUpRight, BookOpen } from "lucide-react";
import { projects } from "../../data/content";
import { Button } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";

type Project = (typeof projects)[number];

function ChatPreview() {
  return (
    <div
      className="rounded-2xl border border-hairline bg-canvas p-6"
      aria-hidden="true"
    >
      <div className="flex items-center gap-3 border-b border-hairline pb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-pink text-ink">
          <BookOpen className="h-5 w-5" />
        </div>
        <p className="text-base font-semibold text-ink">Canal de promoções</p>
      </div>
      <div className="mt-5 rounded-xl rounded-tl-sm bg-surface-card p-4 text-ink">
        <p className="text-sm font-semibold">Nova promoção encontrada</p>
        <div className="mt-3 flex gap-4">
          <div className="h-24 w-16 shrink-0 rounded-md bg-brand-lavender" />
          <div className="flex-1 space-y-2.5 pt-1">
            <div className="h-3 w-4/5 rounded-full bg-ink/15" />
            <div className="h-3 w-3/5 rounded-full bg-ink/15" />
            <div className="h-3 w-2/5 rounded-full bg-brand-pink" />
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-ink py-2.5 text-center text-sm font-semibold text-white">
          Ver oferta
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="grid gap-10 rounded-3xl bg-brand-peach p-8 transition duration-500 ease-out hover:-translate-y-1.5 sm:p-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
      <div>
        <h3 className="text-4xl tracking-[-0.03em]">{project.title}</h3>
        <p className="mt-4 max-w-xl text-lg leading-8 text-ink/80">
          {project.description}
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-canvas px-3 py-1 text-[13px] font-medium text-ink"
            >
              {tag}
            </li>
          ))}
        </ul>
        <Button
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8"
        >
          {project.cta} <ArrowUpRight className="h-4 w-4" />
        </Button>
      </div>
      <ChatPreview />
    </article>
  );
}

export function Projects() {
  return (
    <section
      id="projetos"
      className="mx-auto max-w-[1280px] px-6 pb-24 lg:px-10"
    >
      <SectionHeading className="max-w-3xl">
        Projetos que já saíram do papel.
      </SectionHeading>
      <p className="mt-5 max-w-xl text-lg leading-8 text-body">
        Projetos próprios da SWG Digital que mostram o que sabemos construir.
      </p>
      <div className="mt-14 grid gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
