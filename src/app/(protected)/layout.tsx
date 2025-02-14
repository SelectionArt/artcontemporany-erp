import { auth } from "@/auth";
// Layout
import { DashboardLayout } from "./layouts/dashboard/dashboard.layout";
// Providers
import { SidebarProvider } from "@/components/ui/sidebar";
// Styles
import "./layout.css";

async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SidebarProvider defaultOpen={true}>
      <DashboardLayout session={session}>{children}</DashboardLayout>
    </SidebarProvider>
  );
}

export default ProtectedLayout;
