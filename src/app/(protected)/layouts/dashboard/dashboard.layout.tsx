"use client";
// Components
import { Sidebar } from "@/app/(protected)/layouts/dashboard/components/sidebar/sidebar.component";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ToggleTheme } from "@/app/(protected)/layouts/dashboard/components/toggle-theme/toggle-theme.component";
import { UserNav } from "@/app/(protected)/layouts/dashboard/components/user-nav/user-nav";
// Types
import { DashboardProps } from "@/app/(protected)/layouts/dashboard/types/dashboard.types";

const DashboardLayout = ({ children }: DashboardProps) => {
  return (
    <div className="flex w-full flex-1">
      <Sidebar />

      <div className="flex w-full flex-1 flex-col overflow-hidden">
        <header className="bg-background flex h-16 shrink-0 items-center justify-end border-b px-4">
          <div className="flex gap-2">
            <SidebarTrigger />
            <ToggleTheme />
            <UserNav />
          </div>
        </header>

        <main className="bg-background flex flex-1 overflow-hidden">
          {/* <div className="flex w-full"> */}
            {children}
            {/* </div> */}
        </main>
      </div>
    </div>
  );
};

export { DashboardLayout };
