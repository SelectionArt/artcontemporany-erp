// Vendors
import { auth } from "@/auth";
// Actions
import { fetchSections } from "./layouts/dashboard/actions/dashboard.actions";
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
  const pricingSections = await fetchSections();
  return (
    <SidebarProvider defaultOpen={true}>
      <DashboardLayout session={session} pricingSections={pricingSections}>
        {children}
      </DashboardLayout>
    </SidebarProvider>
  );
}

export default ProtectedLayout;
