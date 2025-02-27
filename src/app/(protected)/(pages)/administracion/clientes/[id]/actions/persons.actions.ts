"use server";
// Libs
import { prisma } from "@/lib/prisma";
// Schemas
import { personSchema } from "../schemas/person.schema";
// Types
import type {
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
} from "./types/persons.actions.types";

const createPerson = async ({
  id,
  values,
}: CreatePersonProps): Promise<CreatePersonReturn> => {
  const validatedFields = personSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  const { name, email, phone } = values;

  try {
    const newPerson = await prisma.person.create({
      data: {
        name,
        email,
        phone: phone || null,
        client: {
          connect: { id },
        },
      },
    });

    return { success: "Persona creado con éxito", person: newPerson };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al crear el persona. Por favor, inténtalo de nuevo",
    };
  }
};

const deletePerson = async ({
  id,
}: DeletePersonProps): Promise<DeletePersonReturn> => {
  try {
    await prisma.person.delete({
      where: { id },
    });
    return { success: "Persona eliminado con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar el persona. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteMultiplePersons = async ({
  ids,
}: DeleteMultiplePersonsProps): Promise<DeleteMultiplePersonsReturn> => {
  try {
    await prisma.person.deleteMany({
      where: { id: { in: ids } },
    });
    return { success: "Personas eliminados con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar los personas. Por favor, inténtalo de nuevo",
    };
  }
};

const fetchClient = async ({
  id,
}: FetchClientProps): Promise<FetchClientReturn> => {
  try {
    const person = await prisma.client.findUnique({
      where: { id },
    });
    if (!person) {
      return null;
    }
    return person;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const fetchPersons = async ({
  id,
}: FetchPersonsProps): Promise<FetchPersonsReturn> => {
  try {
    const persons = await prisma.person.findMany({
      where: { clientId: id },
      orderBy: { name: "asc" },
    });
    return persons;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const updatePerson = async ({
  id,
  values,
}: UpdatePersonProps): Promise<UpdatePersonReturn> => {
  const validatedFields = personSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  const { name, email, phone } = values;

  try {
    const updatedPerson = await prisma.person.update({
      where: { id },
      data: {
        name,
        email,
        phone: phone || null,
      },
    });

    return {
      success: "Persona actualizado con éxito",
      person: updatedPerson,
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al actualizar el persona. Por favor, inténtalo de nuevo",
    };
  }
};

export {
  createPerson,
  deletePerson,
  deleteMultiplePersons,
  fetchClient,
  fetchPersons,
  updatePerson,
};
