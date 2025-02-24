"use server";
// Libs
import { prisma } from "@/lib/prisma";
// Schemas
import { budgetSchema } from "../schemas/budget.schema";
// Types
import type {
  CreateBudgetProps,
  CreateBudgetReturn,
  DeleteBudgetProps,
  DeleteBudgetReturn,
  DeleteMultipleBudgetsProps,
  DeleteMultipleBudgetsReturn,
  FetchArtworksReturn,
  FetchBudgetsReturn,
  FetchClientsReturn,
  FetchFramesReturn,
  FetchPricingItemsProps,
  FetchPricingItemsReturn,
  FetchPricingsReturn,
  UpdateBudgetProps,
  UpdateBudgetReturn,
} from "./types/budgets.actions.types";

const createBudget = async ({
  values,
}: CreateBudgetProps): Promise<CreateBudgetReturn> => {
  const validatedFields = budgetSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const newBudget = await prisma.budget.create({
      data: validatedFields.data,
    });

    return { success: "Presupuesto creado con éxito", budget: newBudget };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al crear el presupuesto. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteBudget = async ({
  id,
}: DeleteBudgetProps): Promise<DeleteBudgetReturn> => {
  try {
    await prisma.budget.delete({
      where: { id },
    });
    return { success: "Presupuesto eliminado con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar el presupuesto. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteMultipleBudgets = async ({
  ids,
}: DeleteMultipleBudgetsProps): Promise<DeleteMultipleBudgetsReturn> => {
  try {
    await prisma.budget.deleteMany({
      where: { id: { in: ids } },
    });
    return { success: "Presupuestos eliminados con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error:
        "Error al eliminar los presupuestos. Por favor, inténtalo de nuevo",
    };
  }
};

const fetchArtworks = async (): Promise<FetchArtworksReturn> => {
  try {
    const artworks = await prisma.artwork.findMany({
      orderBy: { referenceNumber: "asc" },
      select: { id: true, referenceNumber: true, referenceCode: true },
    });
    return artworks;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const fetchBudgets = async (): Promise<FetchBudgetsReturn> => {
  try {
    const budgets = await prisma.budget.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        client: { select: { id: true, name: true } },
        date: true,
        number: true,
      },
    });
    return budgets;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const fetchClients = async (): Promise<FetchClientsReturn> => {
  try {
    const clients = await prisma.client.findMany({
      orderBy: { name: "asc" },
      select: { id: true, name: true },
    });
    return clients;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const fetchFrames = async (): Promise<FetchFramesReturn> => {
  try {
    const frames = await prisma.frame.findMany({
      orderBy: { reference: "asc" },
      select: { id: true, reference: true },
    });
    return frames;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const fetchPricingItems = async ({
  id,
}: FetchPricingItemsProps): Promise<FetchPricingItemsReturn> => {
  try {
    const items = await prisma.pricingItem.findMany({
      where: { pricingId: id },
      select: { id: true, width: true, height: true, price: true },
    });
    return items;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const fetchPricings = async (): Promise<FetchPricingsReturn> => {
  try {
    const pricings = await prisma.pricing.findMany({
      orderBy: { name: "asc" },
      select: { id: true, name: true },
    });
    return pricings;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const generateUniqueRandomNumber = async (): Promise<number> => {
  const existingNumbers = await prisma.budget.findMany({
    select: { number: true },
  });

  const existingSet = new Set(existingNumbers.map((budget) => budget.number));

  let number;

  do {
    number = Math.floor(Math.random() * 999999) + 1;
  } while (existingSet.has(number));

  return number;
};

const updateBudget = async ({
  id,
  values,
}: UpdateBudgetProps): Promise<UpdateBudgetReturn> => {
  const validatedFields = budgetSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const updatedBudget = await prisma.budget.update({
      where: { id },
      data: validatedFields.data,
    });

    return {
      success: "Presupuesto actualizado con éxito",
      budget: updatedBudget,
    };
  } catch (error) {
    console.error(error);
    return {
      error:
        "Error al actualizar el presupuesto. Por favor, inténtalo de nuevo",
    };
  }
};

export {
  createBudget,
  deleteBudget,
  deleteMultipleBudgets,
  fetchArtworks,
  fetchBudgets,
  fetchClients,
  fetchFrames,
  fetchPricings,
  fetchPricingItems,
  generateUniqueRandomNumber,
  updateBudget,
};
