// Icons
import { CircleAlert, CircleCheck, Info, TriangleAlert } from "lucide-react";
// Libs
import { cn } from "@/lib/utils";

type AlertFormProps = {
  alignment?: "left" | "center" | "right";
  fullWidth?: boolean;
  message: string;
  type?: "error" | "info" | "success" | "warning";
};

const AlertForm = ({
  alignment = "left",
  fullWidth = false,
  message,
  type = "info",
}: AlertFormProps) => {
  const baseClasses = "flex h-10 items-center gap-2 rounded-md px-4 text-sm";

  const alignmentClasses = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  const colorClasses = {
    error: "bg-red-100 text-red-900",
    warning: "bg-yellow-100 text-yellow-900",
    info: "bg-blue-100 text-blue-900",
    success: "bg-emerald-100 text-emerald-900",
  };

  const iconMap = {
    error: CircleAlert,
    warning: TriangleAlert,
    info: Info,
    success: CircleCheck,
  };

  const roles = {
    error: "alert",
    warning: "alert",
    info: "status",
    success: "status",
  };

  const fullWidthClasses = fullWidth ? "w-full" : "";

  const Icon = iconMap[type];

  if (!message) {
    return null;
  }

  return (
    <div
      className={cn(
        baseClasses,
        alignmentClasses[alignment],
        colorClasses[type],
        fullWidthClasses,
      )}
      role={roles[type]}
    >
      <Icon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};

export { AlertForm };
export type { AlertFormProps };
