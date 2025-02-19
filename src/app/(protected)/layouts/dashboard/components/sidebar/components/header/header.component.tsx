"use client";

// Icons
import { Brush } from "lucide-react";

const Header = () => {
  return (
    <div className="flex gap-2 p-4">
      <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
        <Brush className="size-4" />
      </div>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-semibold">Art Contemporany</span>
        <span className="truncate text-xs">Administrador</span>
      </div>
    </div>
  );
};

export { Header };
