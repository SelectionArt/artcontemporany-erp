"use client";
// Components
import { Button } from "@/components/ui/button";
// Icons
import { LoaderCircle } from "lucide-react";
// Types
import { ButtonProps } from "@/components/ui/button";

type ButtonLoadingProps = ButtonProps & {
  fullWidth?: boolean;
  label: string;
  loading: boolean;
  showLabel?: boolean;
};

const ButtonLoading: React.FC<ButtonLoadingProps> = ({
  fullWidth = false,
  label,
  loading,
  showLabel = false,
  ...props
}) => {
  const fullWidthClasses = fullWidth ? "w-full" : "";

  const buttonContent = loading ? (
    <>
      <LoaderCircle className="mr-2 h-5 w-5 animate-spin" />
      {showLabel && label}
    </>
  ) : (
    label
  );

  return (
    <Button disabled={loading} className={fullWidthClasses} {...props}>
      {buttonContent}
    </Button>
  );
};

export { ButtonLoading };
