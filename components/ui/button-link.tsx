"use client";
// Vendors
import Link from "next/link";
// Components
import { Button } from "@/components/ui/button";
// Types
import { ButtonProps } from "@/components/ui/button";

type ButtonLinkProps = ButtonProps & {
  fullWidth?: boolean;
  href: string;
  label: string;
};

const ButtonLink: React.FC<ButtonLinkProps> = ({
  fullWidth = false,
  href,
  label,
  size = "default",
  variant = "link",
  className,
  ...props
}) => (
  <Button
    variant={variant}
    size={size}
    className={`${fullWidth ? "w-full" : ""} px-0 font-normal ${className}`}
    asChild
    {...props}
  >
    <Link href={href}>{label}</Link>
  </Button>
);

export { ButtonLink };
