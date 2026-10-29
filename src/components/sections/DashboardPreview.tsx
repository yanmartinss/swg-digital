import type { CSSProperties } from "react";
import { MousePointer2, Palette } from "lucide-react";

const bars = [
  { height: "h-20", tone: "bg-brand-pink/45" },
  { height: "h-28", tone: "bg-brand-pink/60" },
  { height: "h-24", tone: "bg-brand-pink/50" },
  { height: "h-40", tone: "bg-brand-pink/75" },
  { height: "h-52", tone: "bg-brand-pink" },
  { height: "h-64", tone: "bg-brand-ochre" },
];

const months = ["jan", "fev", "mar", "abr", "mai", "jun"];

export function DashboardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="dashboard-card relative overflow-hidden rounded-2xl bg-brand-teal p-4 text-white sm:p-7">
        <div className="flex items-center justify-between border-b border-white/15 pb-4">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-brand-coral" />
            <span className="h-2 w-2 rounded-full bg-brand-ochre" />
            <span className="h-2 w-2 rounded-full bg-brand-mint" />
          </div>
          <span className="text-xs font-medium text-white/60">
            exemplo
          </span>
        </div>
        <div className="py-8">
          <p className="text-sm text-white/65">Visão geral</p>
          <p className="mt-2 font-display text-3xl font-medium tracking-[-0.03em] text-white sm:text-4xl">
            Experiência que conecta
          </p>
          <div className="mt-8 flex items-end gap-2" aria-hidden="true">
            {bars.map((bar, i) => (
              <div
                key={i}
                className={`chart-bar w-1/6 rounded-t-md ${bar.height} ${bar.tone}`}
                style={{ "--i": i } as CSSProperties}
              />
            ))}
          </div>
          <div
            className="mt-3 flex justify-between text-xs text-white/50"
            aria-hidden="true"
          >
            {months.map((month) => (
              <span key={month}>{month}</span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-white/10 p-3 sm:p-4">
            <MousePointer2 className="h-5 w-5 text-brand-ochre" />
            <p className="mt-5 text-2xl font-semibold">100%</p>
            <p className="mt-1 text-[11px] text-white/60 sm:text-xs">
              responsivo
            </p>
          </div>
          <div className="rounded-xl bg-brand-lavender p-3 text-ink sm:p-4">
            <Palette className="h-5 w-5" />
            <p className="mt-5 text-2xl font-semibold">2+</p>
            <p className="mt-1 text-[11px] text-ink/70 sm:text-xs">
              anos de experiência
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
