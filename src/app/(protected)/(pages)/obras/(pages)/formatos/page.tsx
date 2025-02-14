// Actions
import { fetchFormats } from "./actions/formats.actions";
// Components
import { FormatsContainer } from "./formats.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formatos",
  description: "Página de formatos",
};

const FormatsPage = async () => {
  const formats = await fetchFormats();
  return <FormatsContainer initialData={formats} />;
};

export default FormatsPage;
