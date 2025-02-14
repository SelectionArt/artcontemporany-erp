"use server";
// Libs
import { prisma } from "../../../../../lib/prisma";
// Schemas
import { artistSchema } from "../schemas/artist.schema";
// Types
import type {
  CreateArtistProps,
  CreateArtistReturn,
  DeleteArtistProps,
  DeleteArtistReturn,
  DeleteMultipleArtistsProps,
  DeleteMultipleArtistsReturn,
  FetchArtistsReturn,
  UpdateArtistProps,
  UpdateArtistReturn,
} from "./types/artists.actions.types";

const createArtist = async ({
  values,
}: CreateArtistProps): Promise<CreateArtistReturn> => {
  const validatedFields = artistSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const newArtist = await prisma.artist.create({
      data: validatedFields.data,
    });

    return { success: "Artista creado con éxito", artist: newArtist };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al crear el artista. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteArtist = async ({
  id,
}: DeleteArtistProps): Promise<DeleteArtistReturn> => {
  try {
    await prisma.artist.delete({
      where: { id },
    });
    return { success: "Artista eliminado con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar el artista. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteMultipleArtists = async ({
  ids,
}: DeleteMultipleArtistsProps): Promise<DeleteMultipleArtistsReturn> => {
  try {
    await prisma.artist.deleteMany({
      where: { id: { in: ids } },
    });
    return { success: "Artistas eliminados con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar los artistas. Por favor, inténtalo de nuevo",
    };
  }
};

const fetchArtists = async (): Promise<FetchArtistsReturn> => {
  try {
    const artists = await prisma.artist.findMany({
      orderBy: { name: "asc" },
    });
    return artists;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const updateArtist = async ({
  id,
  values,
}: UpdateArtistProps): Promise<UpdateArtistReturn> => {
  const validatedFields = artistSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const updatedArtist = await prisma.artist.update({
      where: { id },
      data: validatedFields.data,
    });

    return { success: "Artista actualizado con éxito", artist: updatedArtist };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al actualizar el artista. Por favor, inténtalo de nuevo",
    };
  }
};

export {
  createArtist,
  deleteArtist,
  deleteMultipleArtists,
  fetchArtists,
  updateArtist,
};
