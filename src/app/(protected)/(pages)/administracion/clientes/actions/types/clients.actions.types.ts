// Types
import type { Client } from "../../types/clients.container.types";
import type { ClientSchema } from "../../schemas/types/client.schema.types";

type CreateClientProps = {
  values: ClientSchema;
};

type CreateClientReturn = {
  client?: Client;
  error?: string;
  success?: string;
};

type DeleteClientProps = {
  id: string;
};

type DeleteClientReturn = {
  success?: string;
  error?: string;
};

type DeleteMultipleClientsProps = {
  ids: string[];
};

type DeleteMultipleClientsReturn = {
  success?: string;
  error?: string;
};

type FetchClientsReturn = Client[];

type UpdateClientProps = {
  id: string;
  values: ClientSchema;
};

type UpdateClientReturn = {
  client?: Client;
  error?: string;
  success?: string;
};

export type {
  CreateClientProps,
  CreateClientReturn,
  DeleteClientProps,
  DeleteClientReturn,
  DeleteMultipleClientsProps,
  DeleteMultipleClientsReturn,
  FetchClientsReturn,
  UpdateClientProps,
  UpdateClientReturn,
};
