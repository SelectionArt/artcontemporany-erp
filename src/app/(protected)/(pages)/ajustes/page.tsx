// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ajustes",
  description: "Página de ajustes",
};

const SettingsPage = async () => {
  return <div className="p-4">Ajustes</div>;
};

export default SettingsPage;
