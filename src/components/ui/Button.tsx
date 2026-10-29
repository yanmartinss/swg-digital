import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type Variant = "primary" | "secondary" | "onColor";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-white hover:bg-ink-active",
  secondary: "border border-hairline bg-canvas text-ink hover:bg-surface-card",
  onColor: "bg-canvas text-ink hover:bg-white",
};

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-center text-sm font-semibold transition duration-500 ease-out hover:-translate-y-1";

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type AnchorProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button(props: AnchorProps | NativeButtonProps) {
  const { variant = "primary", className = "", children, ...rest } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if (rest.href !== undefined) {
    return (
      <a
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
