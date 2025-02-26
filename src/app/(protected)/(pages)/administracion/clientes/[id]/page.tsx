// Actions
import { fetchPersons } from "./actions/persons.actions";
// Components
import { PersonsContainer } from "./persons.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personas",
  description: "Página de personas",
};

const PersonsPage = async () => {
  const persons = await fetchPersons();
  return <PersonsContainer initialData={persons} />;
};

export default PersonsPage;
