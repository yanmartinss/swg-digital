type LogoProps = {
  withMark?: boolean;
  className?: string;
};

export function Logo({ withMark = true, className = "" }: LogoProps) {
  return (
    <a
      href="#inicio"
      aria-label="SWG Digital início"
      className={`flex items-center gap-2.5 font-display font-medium tracking-[-0.04em] text-ink ${className}`}
    >
      {withMark && (
        <svg
          viewBox="32 32 448 448"
          className="h-10 w-10 shrink-0 rounded-[23%]"
          aria-hidden="true"
        >
          <rect
            x="32"
            y="32"
            width="448"
            height="448"
            rx="104"
            fill="#0a0a0a"
          />
          <rect x="96" y="130" width="320" height="72" rx="36" fill="#ff4d8b" />
          <rect x="96" y="220" width="240" height="72" rx="36" fill="#b8a4ed" />
          <rect x="96" y="310" width="160" height="72" rx="36" fill="#fffaf0" />
        </svg>
      )}
      <span>SWG Digital</span>
    </a>
  );
}
