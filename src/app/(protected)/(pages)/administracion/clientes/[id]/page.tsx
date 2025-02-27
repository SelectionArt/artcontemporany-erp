// Actions
import { fetchClient, fetchPersons } from "./actions/persons.actions";
// Components
import { PersonsContainer } from "./persons.container";
// Types
import type {
  ClientPageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
} from "./types/page.types";

const generateMetadata = async ({
  params,
}: GenerateMetadataProps): GenerateMetadataReturn => {
  const { id } = await params;
  const client = await fetchClient({ id });

  if (!client) {
    return {
      title: "Cliente no encontrado",
      description: "El cliente que buscas no está disponible.",
    };
  }

  return {
    title: client.name,
    description: `Pagina de cliente ${client.name}`,
  };
};

const PersonsPage = async ({ params }: ClientPageProps) => {
  const { id } = await params;

  const client = await fetchClient({ id });
  const persons = await fetchPersons({ id });

  if (!client) {
    return <div className="p-4 text-center">Cliente no encontrado.</div>;
  }
  return <PersonsContainer initialData={persons} client={client} />;
};

export { generateMetadata };
export default PersonsPage;
