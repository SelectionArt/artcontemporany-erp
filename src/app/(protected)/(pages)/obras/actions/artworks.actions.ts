"use server";
// Libs
import { prisma } from "@/lib/prisma";
// Schemas
import { artworkSchema } from "../schemas/artwork.schema";
// Types
import type { Prisma } from "@prisma/client";
import type {
  CreateArtworkProps,
  CreateArtworkReturn,
  DeleteArtworkProps,
  DeleteArtworkReturn,
  DeleteMultipleArtworksProps,
  DeleteMultipleArtworksReturn,
  FetchArtworksReturn,
  UpdateArtworkProps,
  UpdateArtworkReturn,
} from "./types/artworks.actions.types";

const createArtwork = async ({
  values,
}: CreateArtworkProps): Promise<CreateArtworkReturn> => {
  const validatedFields = artworkSchema.safeParse(values);

  console.log("validatedFields", validatedFields.data);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const newArtwork = await prisma.artwork.create({
      data: {
        ...validatedFields.data,
        colorId: validatedFields.data.colorId || null,
        finishId: validatedFields.data.finishId || null,
        formatId: validatedFields.data.formatId || null,
        referenceCode: validatedFields.data.referenceCode || null,
        styleId: validatedFields.data.styleId || null,
        supportId: validatedFields.data.supportId || null,
        title: validatedFields.data.title || null,
      },
    });

    return { success: "Obra creada con éxito", artwork: newArtwork };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al crear la obra. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteArtwork = async ({
  id,
}: DeleteArtworkProps): Promise<DeleteArtworkReturn> => {
  try {
    await prisma.artwork.delete({
      where: { id },
    });
    return { success: "Obra eliminada con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar la obra. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteMultipleArtworks = async ({
  ids,
}: DeleteMultipleArtworksProps): Promise<DeleteMultipleArtworksReturn> => {
  try {
    await prisma.artwork.deleteMany({
      where: { id: { in: ids } },
    });
    return { success: "Obras eliminadas con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar las obras. Por favor, inténtalo de nuevo",
    };
  }
};

const fetchArtworks = async (): Promise<FetchArtworksReturn> => {
  try {
    const artworks = await prisma.artwork.findMany({
      orderBy: { createdAt: "desc" },
    });

    const transformedArtworks = artworks.map((artwork) => ({
      ...artwork,
      colorId: artwork.colorId ?? "",
      finishId: artwork.finishId ?? "",
      formatId: artwork.formatId ?? "",
      referenceCode: artwork.referenceCode ?? "",
      styleId: artwork.styleId ?? "",
      supportId: artwork.supportId ?? "",
      title: artwork.title ?? "",
    }));

    return transformedArtworks;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const generateUniqueReferenceNumber = async (): Promise<number> => {
  const existingNumbers = new Set(
    (
      await prisma.artwork.findMany({
        select: { referenceNumber: true },
      })
    ).map((artwork) => artwork.referenceNumber),
  );

  let referenceNumber;

  do {
    referenceNumber = Math.floor(Math.random() * 999999) + 1;
  } while (existingNumbers.has(referenceNumber));

  return referenceNumber;
};

const updateArtwork = async ({
  id,
  values,
}: UpdateArtworkProps): Promise<UpdateArtworkReturn> => {
  const validatedFields = artworkSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const updatedArtwork = await prisma.artwork.update({
      where: { id },
      data: {
        artistId: validatedFields.data.artistId,
        colorId: validatedFields.data.colorId || null,
        finishId: validatedFields.data.finishId || null,
        formatId: validatedFields.data.formatId || null,
        height: validatedFields.data.height,
        referenceNumber: validatedFields.data.referenceNumber,
        referenceCode: validatedFields.data.referenceCode || null,
        styleId: validatedFields.data.styleId || null,
        supportId: validatedFields.data.supportId || null,
        title: validatedFields.data.title || null,
        width: validatedFields.data.width,
      },
    });

    return {
      success: "Obra actualizada con éxito",
      artwork: updatedArtwork,
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al actualizar la obra. Por favor, inténtalo de nuevo",
    };
  }
};

export {
  createArtwork,
  deleteArtwork,
  deleteMultipleArtworks,
  fetchArtworks,
  generateUniqueReferenceNumber,
  updateArtwork,
};
