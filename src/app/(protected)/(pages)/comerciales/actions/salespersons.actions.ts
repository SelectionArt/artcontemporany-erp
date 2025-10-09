"use server";
// Libs
import { prisma } from "@/lib/prisma";
// Schemas
import { salespersonSchema } from "../schemas/salesperson.schema";
// Types
import type {
  CreateSalespersonProps,
  CreateSalespersonReturn,
  DeleteSalespersonProps,
  DeleteSalespersonReturn,
  DeleteMultipleSalespersonsProps,
  DeleteMultipleSalespersonsReturn,
  FetchSalespersonsReturn,
  UpdateSalespersonProps,
  UpdateSalespersonReturn,
} from "./types/salespersons.actions.types";

const createSalesperson = async ({
  values,
}: CreateSalespersonProps): Promise<CreateSalespersonReturn> => {
  const validatedFields = salespersonSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const newSalesperson = await prisma.salesperson.create({
      data: validatedFields.data,
    });

    return {
      success: "Comercial creado con éxito",
      salesperson: newSalesperson,
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al crear el comercial. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteSalesperson = async ({
  id,
}: DeleteSalespersonProps): Promise<DeleteSalespersonReturn> => {
  try {
    await prisma.salesperson.delete({
      where: { id },
    });
    return { success: "Comercial eliminado con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar el comercial. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteMultipleSalespersons = async ({
  ids,
}: DeleteMultipleSalespersonsProps): Promise<DeleteMultipleSalespersonsReturn> => {
  try {
    await prisma.salesperson.deleteMany({
      where: { id: { in: ids } },
    });
    return { success: "Comerciales eliminados con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar los comerciales. Por favor, inténtalo de nuevo",
    };
  }
};

const fetchSalespersons = async (): Promise<FetchSalespersonsReturn> => {
  try {
    const salespersons = await prisma.salesperson.findMany({
      orderBy: { name: "asc" },
    });
    return salespersons;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const updateSalesperson = async ({
  id,
  values,
}: UpdateSalespersonProps): Promise<UpdateSalespersonReturn> => {
  const validatedFields = salespersonSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const updatedSalesperson = await prisma.salesperson.update({
      where: { id },
      data: validatedFields.data,
    });

    return {
      success: "Comercial actualizado con éxito",
      salesperson: updatedSalesperson,
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al actualizar el comercial. Por favor, inténtalo de nuevo",
    };
  }
};

export {
  createSalesperson,
  deleteSalesperson,
  deleteMultipleSalespersons,
  fetchSalespersons,
  updateSalesperson,
};
