"use server";
// Libs
import { prisma } from "@/lib/prisma";
// Schemas
import { materialSchema } from "../schemas/material.schema";
// Types
import type {
  CreateMaterialProps,
  CreateMaterialReturn,
  DeleteMaterialProps,
  DeleteMaterialReturn,
  DeleteMultipleMaterialsProps,
  DeleteMultipleMaterialsReturn,
  FetchMaterialsReturn,
  UpdateMaterialProps,
  UpdateMaterialReturn,
} from "./types/materials.actions.types";

const createMaterial = async ({
  values,
}: CreateMaterialProps): Promise<CreateMaterialReturn> => {
  const validatedFields = materialSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const newMaterial = await prisma.material.create({
      data: validatedFields.data,
    });

    return { success: "Material creado con éxito", material: newMaterial };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al crear el material. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteMaterial = async ({
  id,
}: DeleteMaterialProps): Promise<DeleteMaterialReturn> => {
  try {
    await prisma.material.delete({
      where: { id },
    });
    return { success: "Material eliminado con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar el material. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteMultipleMaterials = async ({
  ids,
}: DeleteMultipleMaterialsProps): Promise<DeleteMultipleMaterialsReturn> => {
  try {
    await prisma.material.deleteMany({
      where: { id: { in: ids } },
    });
    return { success: "Materiales eliminados con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar los materiales. Por favor, inténtalo de nuevo",
    };
  }
};

const fetchMaterials = async (): Promise<FetchMaterialsReturn> => {
  try {
    const materials = await prisma.material.findMany({
      orderBy: { name: "asc" },
    });
    return materials;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const updateMaterial = async ({
  id,
  values,
}: UpdateMaterialProps): Promise<UpdateMaterialReturn> => {
  const validatedFields = materialSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const updatedMaterial = await prisma.material.update({
      where: { id },
      data: validatedFields.data,
    });

    return {
      success: "Material actualizado con éxito",
      material: updatedMaterial,
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al actualizar el material. Por favor, inténtalo de nuevo",
    };
  }
};

export {
  createMaterial,
  deleteMaterial,
  deleteMultipleMaterials,
  fetchMaterials,
  updateMaterial,
};
