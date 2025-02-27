// Vendors
import { auth } from "@/auth";
// Actions
import { fetchPricings } from "./layouts/dashboard/actions/dashboard.actions";
// Layout
import { DashboardLayout } from "./layouts/dashboard/dashboard.layout";
// // Providers
// import { SidebarProvider } from "@/components/ui/sidebar";
// Styles
import "./layout.css";

async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const pricings = await fetchPricings();
  return (
    <DashboardLayout session={session} pricings={pricings}>
      {children}
    </DashboardLayout>
  );
}

export default ProtectedLayout;
