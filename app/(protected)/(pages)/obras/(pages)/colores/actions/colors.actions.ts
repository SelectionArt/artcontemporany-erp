"use server";
// Libs
import { prisma } from "@/lib/prisma";
// Schemas
import { colorSchema } from "../schemas/color.schema";
// Types
import type {
  CreateColorProps,
  CreateColorReturn,
  DeleteColorProps,
  DeleteColorReturn,
  DeleteMultipleColorsProps,
  DeleteMultipleColorsReturn,
  FetchColorsReturn,
  UpdateColorProps,
  UpdateColorReturn,
} from "./types/colors.actions.types";

const createColor = async ({
  values,
}: CreateColorProps): Promise<CreateColorReturn> => {
  const validatedFields = colorSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  const { name } = validatedFields.data;

  try {
    const newColor = await prisma.color.create({
      data: { name },
    });

    return { success: "Color creado con éxito", color: newColor };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al crear el color. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteColor = async ({
  id,
}: DeleteColorProps): Promise<DeleteColorReturn> => {
  try {
    await prisma.color.delete({
      where: { id },
    });
    return { success: "Color eliminado con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar el color. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteMultipleColors = async ({
  ids,
}: DeleteMultipleColorsProps): Promise<DeleteMultipleColorsReturn> => {
  try {
    await prisma.color.deleteMany({
      where: { id: { in: ids } },
    });
    return { success: "Colores eliminados con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar los colores. Por favor, inténtalo de nuevo",
    };
  }
};

const fetchColors = async (): Promise<FetchColorsReturn> => {
  try {
    const colors = await prisma.color.findMany({
      orderBy: { name: "asc" },
    });
    return colors;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const updateColor = async ({
  id,
  values,
}: UpdateColorProps): Promise<UpdateColorReturn> => {
  const validatedFields = colorSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  const { name } = validatedFields.data;

  try {
    const updatedColor = await prisma.color.update({
      where: { id },
      data: { name },
    });

    return { success: "Color actualizado con éxito", color: updatedColor };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al actualizar el color. Por favor, inténtalo de nuevo",
    };
  }
};

export {
  createColor,
  deleteColor,
  deleteMultipleColors,
  fetchColors,
  updateColor,
};
