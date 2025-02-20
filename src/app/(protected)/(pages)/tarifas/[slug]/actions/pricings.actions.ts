"use server";
// Vendors
import * as XLSX from "xlsx";
// Libs
import { prisma } from "@/lib/prisma";
// Schemas
import { incrementSchema, pricingSchema } from "../schemas/pricing.schema";
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
  FetchSectionProps,
  FetchSectionReturn,
  UpdatePricingProps,
  UpdatePricingReturn,
  UploadExcelProps,
  UploadExcelReturn,
} from "./types/pricings.actions.types";

const applyIncrement = async ({ ids, values }: ApplyIncrementProps) => {
  try {
    const pricings = await prisma.pricing.findMany({
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
        prisma.pricing.update({
          where: { id },
          data: { price },
        }),
      ),
    );

    const updatedPricings = await prisma.pricing.findMany({
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
  slug,
  values,
}: CreatePricingProps): Promise<CreatePricingReturn> => {
  const validatedFields = pricingSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const newPricing = await prisma.pricing.create({
      data: {
        ...validatedFields.data,
        section: { connect: { slug } },
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

const fetchPricings = async ({
  slug,
}: FetchPricingsProps): Promise<FetchPricingsReturn> => {
  try {
    const section = await prisma.section.findUnique({
      where: { slug },
      include: { Pricing: { orderBy: { price: "asc" } } },
    });

    return section?.Pricing ?? [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

const fetchSection = async ({
  slug,
}: FetchSectionProps): Promise<FetchSectionReturn> => {
  try {
    const section = await prisma.section.findUnique({
      where: { slug },
    });

    if (!section) {
      return null;
    }

    return section;
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

const uploadExcel = async ({
  file,
  slug,
}: UploadExcelProps): Promise<UploadExcelReturn> => {
  try {
    const section = await prisma.section.findUnique({
      where: { slug },
      select: { id: true },
    });

    if (!section) {
      return { error: "Sección no encontrada" };
    }

    const buffer = await file.arrayBuffer();
    const workbook = XLSX.read(buffer, { type: "buffer" });

    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    const rows: any[][] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

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
          pricingData.push({ width, height, price, sectionId: section.id });
        }
      }
    }

    if (pricingData.length === 0) {
      return { error: "No hay tarifas válidas en el archivo." };
    }

    const createdRecords = await prisma.pricing.createMany({
      data: pricingData,
      skipDuplicates: true,
    });

    return { success: `Se han creado ${createdRecords.count} registros.` };
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
  fetchSection,
  updatePricing,
  uploadExcel,
};
