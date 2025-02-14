"use server";
// Libs
import { prisma } from "@/lib/prisma";
// Schemas
import { supportSchema } from "../schemas/support.schema";
// Types
import type {
  CreateSupportProps,
  CreateSupportReturn,
  DeleteSupportProps,
  DeleteSupportReturn,
  DeleteMultipleSupportsProps,
  DeleteMultipleSupportsReturn,
  FetchSupportsReturn,
  UpdateSupportProps,
  UpdateSupportReturn,
} from "./types/supports.actions.types";

const createSupport = async ({
  values,
}: CreateSupportProps): Promise<CreateSupportReturn> => {
  const validatedFields = supportSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const newSupport = await prisma.support.create({
      data: validatedFields.data,
    });

    return { success: "Soporte creado con éxito", support: newSupport };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al crear el soporte. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteSupport = async ({
  id,
}: DeleteSupportProps): Promise<DeleteSupportReturn> => {
  try {
    await prisma.support.delete({
      where: { id },
    });
    return { success: "Soporte eliminado con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar el soporte. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteMultipleSupports = async ({
  ids,
}: DeleteMultipleSupportsProps): Promise<DeleteMultipleSupportsReturn> => {
  try {
    await prisma.support.deleteMany({
      where: { id: { in: ids } },
    });
    return { success: "Soportes eliminados con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar los soportes. Por favor, inténtalo de nuevo",
    };
  }
};

const fetchSupports = async (): Promise<FetchSupportsReturn> => {
  try {
    const supports = await prisma.support.findMany({
      orderBy: { name: "asc" },
    });
    return supports;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const updateSupport = async ({
  id,
  values,
}: UpdateSupportProps): Promise<UpdateSupportReturn> => {
  const validatedFields = supportSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const updatedSupport = await prisma.support.update({
      where: { id },
      data: validatedFields.data,
    });

    return {
      success: "Soporte actualizado con éxito",
      support: updatedSupport,
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al actualizar el soporte. Por favor, inténtalo de nuevo",
    };
  }
};

export {
  createSupport,
  deleteSupport,
  deleteMultipleSupports,
  fetchSupports,
  updateSupport,
};
