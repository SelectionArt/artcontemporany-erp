// Types
import type { Client, Person } from "@prisma/client";
import type { PersonSchema } from "../../schemas/types/person.schema.types";

type CreatePersonProps = {
  id: string;
  values: PersonSchema;
};

type CreatePersonReturn = {
  person?: Person;
  error?: string;
  success?: string;
};

type DeletePersonProps = {
  id: string;
};

type DeletePersonReturn = {
  success?: string;
  error?: string;
};

type DeleteMultiplePersonsProps = {
  ids: string[];
};

type DeleteMultiplePersonsReturn = {
  success?: string;
  error?: string;
};

type FetchClientProps = {
  id: string;
};

type FetchClientReturn = Client | null;

type FetchPersonsReturn = Person[];

type FetchPersonsProps = {
  id: string;
};

type UpdatePersonProps = {
  id: string;
  values: PersonSchema;
};

type UpdatePersonReturn = {
  person?: Person;
  error?: string;
  success?: string;
};

export type {
  CreatePersonProps,
  CreatePersonReturn,
  DeletePersonProps,
  DeletePersonReturn,
  DeleteMultiplePersonsProps,
  DeleteMultiplePersonsReturn,
  FetchClientProps,
  FetchClientReturn,
  FetchPersonsProps,
  FetchPersonsReturn,
  UpdatePersonProps,
  UpdatePersonReturn,
};
