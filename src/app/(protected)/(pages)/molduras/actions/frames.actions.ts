"use server";
// Libs
import { prisma } from "@/lib/prisma";
// Schemas
import { frameSchema } from "../schemas/frame.schema";
// Types
import type {
  CreateFrameProps,
  CreateFrameReturn,
  DeleteFrameProps,
  DeleteFrameReturn,
  DeleteMultipleFramesProps,
  DeleteMultipleFramesReturn,
  FetchFramesReturn,
  UpdateFrameProps,
  UpdateFrameReturn,
} from "./types/frames.actions.types";

const createFrame = async ({
  values,
}: CreateFrameProps): Promise<CreateFrameReturn> => {
  const validatedFields = frameSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const newFrame = await prisma.frame.create({
      data: validatedFields.data,
    });

    return { success: "Moldura creada con éxito", frame: newFrame };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al crear la moldura. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteFrame = async ({
  id,
}: DeleteFrameProps): Promise<DeleteFrameReturn> => {
  try {
    await prisma.frame.delete({
      where: { id },
    });
    return { success: "Moldura eliminada con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar la moldura. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteMultipleFrames = async ({
  ids,
}: DeleteMultipleFramesProps): Promise<DeleteMultipleFramesReturn> => {
  try {
    await prisma.frame.deleteMany({
      where: { id: { in: ids } },
    });
    return { success: "Molduras eliminados con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar las molduras. Por favor, inténtalo de nuevo",
    };
  }
};

const fetchFrames = async (): Promise<FetchFramesReturn> => {
  try {
    const frames = await prisma.frame.findMany({
      orderBy: { name: "asc" },
    });
    return frames;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const updateFrame = async ({
  id,
  values,
}: UpdateFrameProps): Promise<UpdateFrameReturn> => {
  const validatedFields = frameSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const updatedFrame = await prisma.frame.update({
      where: { id },
      data: validatedFields.data,
    });

    return {
      success: "Moldura actualizada con éxito",
      frame: updatedFrame,
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al actualizar la moldura. Por favor, inténtalo de nuevo",
    };
  }
};

export {
  createFrame,
  deleteFrame,
  deleteMultipleFrames,
  fetchFrames,
  updateFrame,
};
