"use server";
// Libs
import { prisma } from "../../../../../../../lib/prisma";
// Schemas
import { styleSchema } from "../schemas/style.schema";
// Types
import type {
  CreateStyleProps,
  CreateStyleReturn,
  DeleteStyleProps,
  DeleteStyleReturn,
  DeleteMultipleStylesProps,
  DeleteMultipleStylesReturn,
  FetchStylesReturn,
  UpdateStyleProps,
  UpdateStyleReturn,
} from "./types/styles.actions.types";

const createStyle = async ({
  values,
}: CreateStyleProps): Promise<CreateStyleReturn> => {
  const validatedFields = styleSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  const { name } = validatedFields.data;

  try {
    const newStyle = await prisma.style.create({
      data: { name },
    });

    return { success: "Estilo creado con éxito", style: newStyle };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al crear el estilo. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteStyle = async ({
  id,
}: DeleteStyleProps): Promise<DeleteStyleReturn> => {
  try {
    await prisma.style.delete({
      where: { id },
    });
    return { success: "Estilo eliminado con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar el estilo. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteMultipleStyles = async ({
  ids,
}: DeleteMultipleStylesProps): Promise<DeleteMultipleStylesReturn> => {
  try {
    await prisma.style.deleteMany({
      where: { id: { in: ids } },
    });
    return { success: "Estilos eliminados con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar los estilos. Por favor, inténtalo de nuevo",
    };
  }
};

const fetchStyles = async (): Promise<FetchStylesReturn> => {
  try {
    const styles = await prisma.style.findMany({
      orderBy: { name: "asc" },
    });
    return styles;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const updateStyle = async ({
  id,
  values,
}: UpdateStyleProps): Promise<UpdateStyleReturn> => {
  const validatedFields = styleSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  const { name } = validatedFields.data;

  try {
    const updatedStyle = await prisma.style.update({
      where: { id },
      data: { name },
    });

    return { success: "Estilo actualizado con éxito", style: updatedStyle };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al actualizar el estilo. Por favor, inténtalo de nuevo",
    };
  }
};

export {
  createStyle,
  deleteStyle,
  deleteMultipleStyles,
  fetchStyles,
  updateStyle,
};
