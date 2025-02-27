// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Principal",
  description: "Página principal",
};

const DashboardPage = () => {
  return <div className="p-4">Principal</div>;
};

export default DashboardPage;
