type LogoProps = {
  withMark?: boolean;
  className?: string;
};

export function Logo({ withMark = true, className = "" }: LogoProps) {
  return (
    <a
      href="#inicio"
      aria-label="SWG Digital início"
      className={`flex items-center gap-2 font-bold tracking-[-0.06em] ${className}`}
    >
      {withMark && (
        <svg
          viewBox="32 32 448 448"
          className="h-10 w-10 shrink-0 rounded-[23%] ring-1 ring-navy/10"
          aria-hidden="true"
        >
          <rect
            x="32"
            y="32"
            width="448"
            height="448"
            rx="104"
            fill="#0f1d40"
          />
          <rect x="96" y="130" width="320" height="72" rx="36" fill="#ff6a3d" />
          <rect x="96" y="220" width="240" height="72" rx="36" fill="#cfc7ff" />
          <rect x="96" y="310" width="160" height="72" rx="36" fill="#ffffff" />
        </svg>
      )}
      <span>SWG Digital</span>
    </a>
  );
}
