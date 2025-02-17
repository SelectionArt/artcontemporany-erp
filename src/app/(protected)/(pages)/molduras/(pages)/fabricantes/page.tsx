// Actions
import { fetchManufacturers } from "./actions/manufacturers.actions";
// Components
import { ManufacturersContainer } from "./manufacturers.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fabricantes",
  description: "Página de fabricantes",
};

const ManufacturersPage = async () => {
  const manufacturers = await fetchManufacturers();
  return <ManufacturersContainer initialData={manufacturers} />;
};

export default ManufacturersPage;
