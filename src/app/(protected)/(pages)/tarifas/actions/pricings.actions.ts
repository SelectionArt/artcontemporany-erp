"use server";
// Libs
import { prisma } from "@/lib/prisma";
// Schemas
import { pricingSchema } from "../schemas/pricing.schema";
// Types
import type {
  CreatePricingProps,
  CreatePricingReturn,
  DeletePricingProps,
  DeletePricingReturn,
  DeleteMultiplePricingsProps,
  DeleteMultiplePricingsReturn,
  FetchPricingsReturn,
  UpdatePricingProps,
  UpdatePricingReturn,
} from "./types/pricings.actions.types";

const createPricing = async ({
  values,
}: CreatePricingProps): Promise<CreatePricingReturn> => {
  const validatedFields = pricingSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const newPricing = await prisma.pricing.create({
      data: validatedFields.data,
    });

    return { success: "Tarifa creada con éxito", pricing: newPricing };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al crear la tarifa. Por favor, inténtalo de nuevo",
    };
  }
};

const deletePricing = async ({
  id,
}: DeletePricingProps): Promise<DeletePricingReturn> => {
  try {
    await prisma.pricing.delete({
      where: { id },
    });
    return { success: "Tarifa eliminada con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar la tarifa. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteMultiplePricings = async ({
  ids,
}: DeleteMultiplePricingsProps): Promise<DeleteMultiplePricingsReturn> => {
  try {
    await prisma.pricing.deleteMany({
      where: { id: { in: ids } },
    });
    return { success: "Tarifas eliminadas con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar las tarifas. Por favor, inténtalo de nuevo",
    };
  }
};

const fetchPricings = async (): Promise<FetchPricingsReturn> => {
  try {
    const pricings = await prisma.pricing.findMany({
      orderBy: { name: "asc" },
    });
    return pricings;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const updatePricing = async ({
  id,
  values,
}: UpdatePricingProps): Promise<UpdatePricingReturn> => {
  const validatedFields = pricingSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const updatedPricing = await prisma.pricing.update({
      where: { id },
      data: validatedFields.data,
    });

    return {
      success: "Tarifa actualizada con éxito",
      pricing: updatedPricing,
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al actualizar la tarifa. Por favor, inténtalo de nuevo",
    };
  }
};

export {
  createPricing,
  deletePricing,
  deleteMultiplePricings,
  fetchPricings,
  updatePricing,
};
