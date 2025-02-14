"use server";
// Libs
import { prisma } from "../../../../../lib/prisma";
// Schemas
import { artworkSchema } from "../schemas/artwork.schema";
// Types
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

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const newArtwork = await prisma.artwork.create({
      data: validatedFields.data,
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
    return artworks;
  } catch (error) {
    console.error(error);
    return [];
  }
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
      data: validatedFields.data,
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
  updateArtwork,
};
