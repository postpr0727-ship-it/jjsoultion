import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  variant?: "green" | "blue" | "outline-green" | "outline-blue";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const variantClasses = {
  green: "bg-brand-green text-white hover:bg-brand-green-dark font-bold",
  blue: "bg-brand-blue text-white hover:bg-brand-blue-dark font-bold",
  "outline-green":
    "border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white font-medium",
  "outline-blue":
    "border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-medium",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  href,
  variant = "green",
  size = "md",
  children,
  className,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-lg transition-all duration-200",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
