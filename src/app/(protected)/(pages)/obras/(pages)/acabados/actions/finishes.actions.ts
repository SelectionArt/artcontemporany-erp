"use server";
// Libs
import { prisma } from "@/lib/prisma";
// Schemas
import { finishSchema } from "../schemas/finish.schema";
// Types
import type {
  CreateFinishProps,
  CreateFinishReturn,
  DeleteFinishProps,
  DeleteFinishReturn,
  DeleteMultipleFinishesProps,
  DeleteMultipleFinishesReturn,
  FetchFinishesReturn,
  UpdateFinishProps,
  UpdateFinishReturn,
} from "./types/finishes.actions.types";

const createFinish = async ({
  values,
}: CreateFinishProps): Promise<CreateFinishReturn> => {
  const validatedFields = finishSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const newFinish = await prisma.finish.create({
      data: validatedFields.data,
    });

    return { success: "Acabado creado con éxito", finish: newFinish };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al crear el acabado. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteFinish = async ({
  id,
}: DeleteFinishProps): Promise<DeleteFinishReturn> => {
  try {
    await prisma.finish.delete({
      where: { id },
    });
    return { success: "Acabado eliminado con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar el acabado. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteMultipleFinishes = async ({
  ids,
}: DeleteMultipleFinishesProps): Promise<DeleteMultipleFinishesReturn> => {
  try {
    await prisma.finish.deleteMany({
      where: { id: { in: ids } },
    });
    return { success: "Acabados eliminados con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar los acabados. Por favor, inténtalo de nuevo",
    };
  }
};

const fetchFinishes = async (): Promise<FetchFinishesReturn> => {
  try {
    const finishes = await prisma.finish.findMany({
      orderBy: { name: "asc" },
    });
    return finishes;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const updateFinish = async ({
  id,
  values,
}: UpdateFinishProps): Promise<UpdateFinishReturn> => {
  const validatedFields = finishSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const updatedFinish = await prisma.finish.update({
      where: { id },
      data: validatedFields.data,
    });

    return { success: "Acabado actualizado con éxito", finish: updatedFinish };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al actualizar el acabado. Por favor, inténtalo de nuevo",
    };
  }
};

export {
  createFinish,
  deleteFinish,
  deleteMultipleFinishes,
  fetchFinishes,
  updateFinish,
};
