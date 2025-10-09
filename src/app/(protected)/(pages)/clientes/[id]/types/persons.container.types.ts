import {
  FetchPersonsReturn,
  FetchClientReturn,
} from "../actions/types/persons.actions.types";

type Client = FetchClientReturn;

type Person = FetchPersonsReturn[number];

type PersonsProps = {
  client: Client;
  initialData: Person[];
};

export type { Client, Person, PersonsProps };
