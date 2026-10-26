import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type Variant = "primary" | "dark" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-tangerine px-9 py-5 font-bold text-navy hover:-translate-y-1 hover:bg-navy hover:text-white",
  dark: "bg-navy px-9 py-5 font-bold text-white hover:-translate-y-1 hover:bg-tangerine hover:text-navy",
  ghost: "px-5 py-5 font-semibold text-navy/70 hover:text-navy",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-center text-base transition duration-500 ease-out";

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
