"use server";
// Libs
import { prisma } from "@/lib/prisma";
// Schemas
import { formatSchema } from "../schemas/format.schema";
// Types
import type {
  CreateFormatProps,
  CreateFormatReturn,
  DeleteFormatProps,
  DeleteFormatReturn,
  DeleteMultipleFormatsProps,
  DeleteMultipleFormatsReturn,
  FetchFormatsReturn,
  UpdateFormatProps,
  UpdateFormatReturn,
} from "./types/formats.actions.types";

const createFormat = async ({
  values,
}: CreateFormatProps): Promise<CreateFormatReturn> => {
  const validatedFields = formatSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  const { name } = validatedFields.data;

  try {
    const newFormat = await prisma.format.create({
      data: { name },
    });

    return { success: "Formato creado con éxito", format: newFormat };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al crear el formato. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteFormat = async ({
  id,
}: DeleteFormatProps): Promise<DeleteFormatReturn> => {
  try {
    await prisma.format.delete({
      where: { id },
    });
    return { success: "Formato eliminado con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar el formato. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteMultipleFormats = async ({
  ids,
}: DeleteMultipleFormatsProps): Promise<DeleteMultipleFormatsReturn> => {
  try {
    await prisma.format.deleteMany({
      where: { id: { in: ids } },
    });
    return { success: "Formatos eliminados con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar los formatos. Por favor, inténtalo de nuevo",
    };
  }
};

const fetchFormats = async (): Promise<FetchFormatsReturn> => {
  try {
    const formats = await prisma.format.findMany({
      orderBy: { name: "asc" },
    });
    return formats;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const updateFormat = async ({
  id,
  values,
}: UpdateFormatProps): Promise<UpdateFormatReturn> => {
  const validatedFields = formatSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  const { name } = validatedFields.data;

  try {
    const updatedFormat = await prisma.format.update({
      where: { id },
      data: { name },
    });

    return { success: "Formato actualizado con éxito", format: updatedFormat };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al actualizar el formato. Por favor, inténtalo de nuevo",
    };
  }
};

export {
  createFormat,
  deleteFormat,
  deleteMultipleFormats,
  fetchFormats,
  updateFormat,
};
