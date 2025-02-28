"use client";
// Types
import type { Session } from "next-auth";
// Icons
import { Brush } from "lucide-react";

const Header = ({
  open,
  session,
}: {
  open: boolean;
  session: Session | null;
}) => {
  const padding = open ? "p-4" : "p-2";
  const rolesMap = {
    ADMIN: "Administrador",
    USER: "Usuario",
  };
  return (
    <div className={`flex gap-2 ${padding} transition-all`}>
      <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
        <Brush className="size-4" />
      </div>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-semibold">Art Contemporany</span>
        <span className="truncate text-xs">
          {rolesMap[session?.user?.role ?? "USER"]}
        </span>
      </div>
    </div>
  );
};

export { Header };
