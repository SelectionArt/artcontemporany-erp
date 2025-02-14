// Layout
import { DashboardLayout } from "./layouts/dashboard/dashboard.layout";
// Providers
import { SidebarProvider } from "../../components/ui/sidebar";
// Styles
import "./layout.css";

async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider defaultOpen={true}>
      <DashboardLayout>{children}</DashboardLayout>
    </SidebarProvider>
  );
}

export default ProtectedLayout;
