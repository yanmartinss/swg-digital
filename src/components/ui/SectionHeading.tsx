import type { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
  className?: string;
};

export function SectionHeading({
  children,
  className = "",
}: SectionHeadingProps) {
  return (
    <h2
      className={`text-4xl leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-[3.5rem] ${className}`}
    >
      {children}
    </h2>
  );
}
