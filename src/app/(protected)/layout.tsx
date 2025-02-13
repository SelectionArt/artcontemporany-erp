// Vendors
import { cookies } from "next/headers";
// Layout
import { DashboardLayout } from "@/app/(protected)/layouts/dashboard/dashboard.layout";
// Providers
import { SidebarProvider } from "@/components/ui/sidebar";
// Styles
import "./layout.css";

async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar")?.value === "true";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <DashboardLayout>{children}</DashboardLayout>
    </SidebarProvider>
  );
}

export default ProtectedLayout;
