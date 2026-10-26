import type { CSSProperties } from "react";
import { Check, MousePointer2, Palette } from "lucide-react";

const bars = [
  { height: "h-20", tone: "bg-tangerine/40" },
  { height: "h-28", tone: "bg-tangerine/55" },
  { height: "h-24", tone: "bg-tangerine/45" },
  { height: "h-40", tone: "bg-tangerine/70" },
  { height: "h-52", tone: "bg-tangerine" },
  { height: "h-64", tone: "bg-white" },
];

const months = ["jan", "fev", "mar", "abr", "mai", "jun"];

export function DashboardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:justify-self-end">
      <div className="dashboard-card relative overflow-hidden rounded-[2rem] border border-white/15 bg-navy p-5 text-white shadow-2xl shadow-navy/30 sm:p-7">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-coral" />
            <span className="h-2 w-2 rounded-full bg-amber" />
            <span className="h-2 w-2 rounded-full bg-white/70" />
          </div>
          <span className="text-[10px] tracking-[0.2em] text-white/40">
            seu próximo nível
          </span>
        </div>
        <div className="py-8">
          <p className="text-sm text-white/50">Visão geral</p>
          <p className="mt-2 font-display text-4xl font-semibold tracking-tight">
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
            className="mt-3 flex justify-between text-[10px] text-white/35"
            aria-hidden="true"
          >
            {months.map((month) => (
              <span key={month}>{month}</span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-white/10 p-4">
            <MousePointer2 className="h-5 w-5 text-tangerine" />
            <p className="mt-5 text-2xl font-semibold">100%</p>
            <p className="mt-1 text-xs text-white/45">responsivo</p>
          </div>
          <div className="rounded-2xl bg-tangerine p-4 text-navy">
            <Palette className="h-4 w-4" />
            <p className="mt-5 text-2xl font-semibold">∞</p>
            <p className="mt-1 text-xs opacity-60">possibilidades</p>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-navy/10 bg-white p-4 text-navy shadow-xl sm:block">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-tangerine">
            <Check className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-bold">Projeto aprovado</p>
            <p className="text-[11px] text-navy/50">
              exatamente como imaginado
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
