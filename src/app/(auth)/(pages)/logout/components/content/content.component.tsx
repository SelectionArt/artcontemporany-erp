"use client";
// Hooks
import { LogoutHook } from "../../hooks/logout.hook";
// Icons
import { LoaderCircle } from "lucide-react";

const Content = (): React.ReactElement => {
  LogoutHook();

  return (
    <div className="flex w-full items-center justify-center">
      <LoaderCircle className="mr-2 h-10 w-10 animate-spin" />
    </div>
  );
};

export { Content };
