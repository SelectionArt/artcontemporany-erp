"use server";
// Libs
import { prisma } from "@/lib/prisma";
// Schemas
import { clientSchema } from "../schemas/client.schema";
// Types
import type {
  CreateClientProps,
  CreateClientReturn,
  DeleteClientProps,
  DeleteClientReturn,
  DeleteMultipleClientsProps,
  DeleteMultipleClientsReturn,
  FetchClientsReturn,
  UpdateClientProps,
  UpdateClientReturn,
} from "./types/clients.actions.types";

const createClient = async ({
  values,
}: CreateClientProps): Promise<CreateClientReturn> => {
  const validatedFields = clientSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    if (validatedFields.data.cif) {
      const existingClient = await prisma.client.findUnique({
        where: { cif: validatedFields.data.cif },
      });
      if (existingClient) {
        return {
          error: "El CIF ingresado ya está en uso. Introduce un CIF único.",
        };
      }
    }

    const newClient = await prisma.client.create({
      data: validatedFields.data,
    });

    return { success: "Cliente creado con éxito", client: newClient };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al crear el cliente. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteClient = async ({
  id,
}: DeleteClientProps): Promise<DeleteClientReturn> => {
  try {
    await prisma.client.delete({
      where: { id },
    });
    return { success: "Cliente eliminado con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar el cliente. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteMultipleClients = async ({
  ids,
}: DeleteMultipleClientsProps): Promise<DeleteMultipleClientsReturn> => {
  try {
    await prisma.client.deleteMany({
      where: { id: { in: ids } },
    });
    return { success: "Clientes eliminados con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar los clientes. Por favor, inténtalo de nuevo",
    };
  }
};

const fetchClients = async (): Promise<FetchClientsReturn> => {
  try {
    const clients = await prisma.client.findMany({
      orderBy: { name: "asc" },
    });
    return clients;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const updateClient = async ({
  id,
  values,
}: UpdateClientProps): Promise<UpdateClientReturn> => {
  const validatedFields = clientSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    if (validatedFields.data.cif) {
      const existingClient = await prisma.client.findUnique({
        where: { cif: validatedFields.data.cif },
      });
      if (existingClient) {
        return {
          error: "El CIF ingresado ya está en uso. Introduce un CIF único.",
        };
      }
    }

    const updatedClient = await prisma.client.update({
      where: { id },
      data: validatedFields.data,
    });

    return {
      success: "Cliente actualizado con éxito",
      client: updatedClient,
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al actualizar el cliente. Por favor, inténtalo de nuevo",
    };
  }
};

export {
  createClient,
  deleteClient,
  deleteMultipleClients,
  fetchClients,
  updateClient,
};
