"use server";
// Vendors
import * as XLSX from "xlsx";
// Libs
import { prisma } from "@/lib/prisma";
// Schemas
import { pricingSchema } from "../schemas/pricing.schema";
// Types
import type {
  ApplyIncrementProps,
  CreatePricingProps,
  CreatePricingReturn,
  DeletePricingProps,
  DeletePricingReturn,
  DeleteMultiplePricingsProps,
  DeleteMultiplePricingsReturn,
  FetchPricingsProps,
  FetchPricingsReturn,
  FetchPricingProps,
  FetchPricingReturn,
  UpdatePricingProps,
  UpdatePricingReturn,
  UploadExcelProps,
  UploadExcelReturn,
} from "./types/pricings.actions.types";

const applyIncrement = async ({ ids, values }: ApplyIncrementProps) => {
  try {
    const pricings = await prisma.pricingItem.findMany({
      where: { id: { in: ids } },
    });

    if (pricings.length === 0) {
      return { error: "No se encontraron registros para actualizar." };
    }

    const updatedPrices = pricings.map((pricing) => ({
      id: pricing.id,
      price:
        pricing.price +
        (pricing.price * (values.porcentualIncrement ?? 0)) / 100 +
        (values.fixedIncrement ?? 0),
    }));

    await Promise.all(
      updatedPrices.map(({ id, price }) =>
        prisma.pricingItem.update({
          where: { id },
          data: { price },
        }),
      ),
    );

    const updatedPricings = await prisma.pricingItem.findMany({
      where: { id: { in: ids } },
    });

    return {
      success: "Incremento aplicado con éxito",
      pricings: updatedPricings,
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al aplicar el incremento. Por favor, inténtalo de nuevo",
    };
  }
};

const createPricing = async ({
  id,
  values,
}: CreatePricingProps): Promise<CreatePricingReturn> => {
  const validatedFields = pricingSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const newPricing = await prisma.pricingItem.create({
      data: {
        ...validatedFields.data,
        pricing: { connect: { id } },
      },
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
    await prisma.pricingItem.delete({
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
    await prisma.pricingItem.deleteMany({
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

const fetchPricings = async ({
  id,
}: FetchPricingsProps): Promise<FetchPricingsReturn> => {
  try {
    const pricingItems = await prisma.pricingItem.findMany({
      where: { pricingId: id },
      orderBy: { price: "asc" },
    });

    return pricingItems ?? [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

const fetchPricing = async ({
  id,
}: FetchPricingProps): Promise<FetchPricingReturn> => {
  try {
    const pricing = await prisma.pricing.findUnique({
      where: { id },
    });

    if (!pricing) {
      return null;
    }

    return pricing;
  } catch (error) {
    console.error(error);
    return null;
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
    const updatedPricing = await prisma.pricingItem.update({
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

type ExcelRow = (string | number | null)[];

const uploadExcel = async ({
  file,
  id,
}: UploadExcelProps): Promise<UploadExcelReturn> => {
  try {
    const pricing = await prisma.pricing.findUnique({
      where: { id },
      select: { id: true },
    });

    if (!pricing) {
      return { error: "Tarifa no encontrada" };
    }

    const buffer = await file.arrayBuffer();
    const workbook = XLSX.read(buffer, { type: "buffer" });

    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    const rows: ExcelRow[][] = XLSX.utils.sheet_to_json(worksheet, {
      header: 1,
    });

    if (rows.length < 2) {
      return { error: "El archivo Excel no tiene datos válidos." };
    }

    const widths = rows[0].slice(1).map(Number);
    const heightsAndPrices = rows.slice(1);

    const pricingData = [];

    for (const row of heightsAndPrices) {
      const height = Number(row[0]);

      if (isNaN(height)) continue;

      for (let i = 1; i < row.length; i++) {
        const width = widths[i - 1];
        const price = Number(row[i]);

        if (!isNaN(price) && price > 0) {
          pricingData.push({ width, height, price, pricingId: pricing.id });
        }
      }
    }

    if (pricingData.length === 0) {
      return { error: "No hay tarifas válidas en el archivo." };
    }

    await prisma.pricingItem.createMany({
      data: pricingData,
      skipDuplicates: true,
    });

    const createdRecords = await prisma.pricingItem.findMany({
      where: { pricingId: pricing.id },
      orderBy: { price: "asc" },
    });

    return {
      success: `Se han creado ${createdRecords.length} registros.`,
      pricings: createdRecords,
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al subir el archivo. Por favor, inténtalo de nuevo",
    };
  }
};

export {
  applyIncrement,
  createPricing,
  deletePricing,
  deleteMultiplePricings,
  fetchPricings,
  fetchPricing,
  updatePricing,
  uploadExcel,
};
