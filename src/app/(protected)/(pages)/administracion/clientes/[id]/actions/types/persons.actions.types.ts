// Types
import type { Person } from "../../types/persons.container.types";
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

type FetchPersonsReturn = Person[];

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
  FetchPersonsReturn,
  UpdatePersonProps,
  UpdatePersonReturn,
};
