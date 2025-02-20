"use server";
// Libs
import { prisma } from "@/lib/prisma";
// Schemas
import { sectionSchema } from "../schemas/section.schema";
// Types
import type {
  CreateSectionProps,
  CreateSectionReturn,
  DeleteSectionProps,
  DeleteSectionReturn,
  DeleteMultipleSectionsProps,
  DeleteMultipleSectionsReturn,
  FetchSectionsReturn,
  UpdateSectionProps,
  UpdateSectionReturn,
} from "./types/sections.actions.types";

const createSection = async ({
  values,
}: CreateSectionProps): Promise<CreateSectionReturn> => {
  const validatedFields = sectionSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const newSection = await prisma.section.create({
      data: validatedFields.data,
    });

    return { success: "Sección creada con éxito", section: newSection };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al crear la sección. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteSection = async ({
  id,
}: DeleteSectionProps): Promise<DeleteSectionReturn> => {
  try {
    await prisma.section.delete({
      where: { id },
    });
    return { success: "Sección eliminada con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar la sección. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteMultipleSections = async ({
  ids,
}: DeleteMultipleSectionsProps): Promise<DeleteMultipleSectionsReturn> => {
  try {
    await prisma.section.deleteMany({
      where: { id: { in: ids } },
    });
    return { success: "Secciones eliminadas con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar las secciones. Por favor, inténtalo de nuevo",
    };
  }
};

const fetchSections = async (): Promise<FetchSectionsReturn> => {
  try {
    const sections = await prisma.section.findMany({
      orderBy: { name: "asc" },
    });
    return sections;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const updateSection = async ({
  id,
  values,
}: UpdateSectionProps): Promise<UpdateSectionReturn> => {
  const validatedFields = sectionSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const updatedSection = await prisma.section.update({
      where: { id },
      data: validatedFields.data,
    });

    return {
      success: "Sección actualizada con éxito",
      section: updatedSection,
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al actualizar la sección. Por favor, inténtalo de nuevo",
    };
  }
};

export {
  createSection,
  deleteSection,
  deleteMultipleSections,
  fetchSections,
  updateSection,
};
