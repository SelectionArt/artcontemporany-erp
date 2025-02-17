"use server";
// Libs
import { prisma } from "@/lib/prisma";
// Schemas
import { manufacturerSchema } from "../schemas/manufacturer.schema";
// Types
import type {
  CreateManufacturerProps,
  CreateManufacturerReturn,
  DeleteManufacturerProps,
  DeleteManufacturerReturn,
  DeleteMultipleManufacturersProps,
  DeleteMultipleManufacturersReturn,
  FetchManufacturersReturn,
  UpdateManufacturerProps,
  UpdateManufacturerReturn,
} from "./types/manufacturers.actions.types";

const createManufacturer = async ({
  values,
}: CreateManufacturerProps): Promise<CreateManufacturerReturn> => {
  const validatedFields = manufacturerSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const newManufacturer = await prisma.manufacturer.create({
      data: validatedFields.data,
    });

    return {
      success: "Fabricante creado con éxito",
      manufacturer: newManufacturer,
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al crear el fabricante. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteManufacturer = async ({
  id,
}: DeleteManufacturerProps): Promise<DeleteManufacturerReturn> => {
  try {
    await prisma.manufacturer.delete({
      where: { id },
    });
    return { success: "Fabricante eliminado con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar el fabricante. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteMultipleManufacturers = async ({
  ids,
}: DeleteMultipleManufacturersProps): Promise<DeleteMultipleManufacturersReturn> => {
  try {
    await prisma.manufacturer.deleteMany({
      where: { id: { in: ids } },
    });
    return { success: "Fabricantes eliminados con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar los fabricantes. Por favor, inténtalo de nuevo",
    };
  }
};

const fetchManufacturers = async (): Promise<FetchManufacturersReturn> => {
  try {
    const manufacturers = await prisma.manufacturer.findMany({
      orderBy: { name: "asc" },
    });
    return manufacturers;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const updateManufacturer = async ({
  id,
  values,
}: UpdateManufacturerProps): Promise<UpdateManufacturerReturn> => {
  const validatedFields = manufacturerSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const updatedManufacturer = await prisma.manufacturer.update({
      where: { id },
      data: validatedFields.data,
    });

    return {
      success: "Fabricante actualizado con éxito",
      manufacturer: updatedManufacturer,
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al actualizar el fabricante. Por favor, inténtalo de nuevo",
    };
  }
};

export {
  createManufacturer,
  deleteManufacturer,
  deleteMultipleManufacturers,
  fetchManufacturers,
  updateManufacturer,
};
