"use server";
// Libs
import { prisma } from "@/lib/prisma";
import { cloudinary } from "@/lib/cloudinary";
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

type UploadImageToCloudinaryProps = {
  file: File;
  referenceCode: string;
  referenceNumber: number;
};

const uploadImageToCloudinary = async ({
  file,
  referenceCode,
  referenceNumber,
}: UploadImageToCloudinaryProps): Promise<string | null> => {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    return new Promise((resolve, reject) => {
      const reference = referenceCode
        ? `${referenceCode}-${referenceNumber}`
        : referenceNumber.toString();
      const uploadStream = cloudinary.uploader.upload_stream(
        { tags: [reference] },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result?.secure_url || null);
          }
        },
      );

      uploadStream.end(buffer);
    });
  } catch (error) {
    console.error("Error en la subida de imagen:", error);
    return null;
  }
};

const createArtwork = async ({
  values,
}: CreateArtworkProps): Promise<CreateArtworkReturn> => {
  const validatedFields = artworkSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const uploadedImages = await Promise.all(
      validatedFields.data.images.map((image) =>
        uploadImageToCloudinary({
          file: image,
          referenceCode: validatedFields.data.referenceCode ?? "",
          referenceNumber: validatedFields.data.referenceNumber,
        }),
      ),
    );

    const validImages = uploadedImages.filter(
      (image) => image !== null,
    ) as string[];

    if (validImages.length === 0) {
      return {
        error: "Error al subir las imágenes. Por favor, inténtalo de nuevo",
      };
    }

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
        images: {
          create: validImages.map((image) => ({ url: image })),
        },
      },
      include: { images: true },
    });

    return {
      success: "Obra creada con éxito",
      artwork: {
        ...newArtwork,
        title: newArtwork.title ?? "",
        referenceCode: newArtwork.referenceCode ?? "",
        colorId: newArtwork.colorId ?? "",
        finishId: newArtwork.finishId ?? "",
        formatId: newArtwork.formatId ?? "",
        images: newArtwork.images.map((image) => image.url),
        styleId: newArtwork.styleId ?? "",
        supportId: newArtwork.supportId ?? "",
      },
    };
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
      include: {
        images: true,
      },
    });

    const transformedArtworks = artworks.map((artwork) => ({
      ...artwork,
      colorId: artwork.colorId ?? "",
      finishId: artwork.finishId ?? "",
      formatId: artwork.formatId ?? "",
      images: artwork.images.map((image) => image.url),
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
      include: { images: true },
    });

    return {
      success: "Obra actualizada con éxito",
      artwork: {
        ...updatedArtwork,
        title: updatedArtwork.title ?? "",
        referenceCode: updatedArtwork.referenceCode ?? "",
        colorId: updatedArtwork.colorId ?? "",
        finishId: updatedArtwork.finishId ?? "",
        formatId: updatedArtwork.formatId ?? "",
        images: updatedArtwork.images.map((image) => image.url),
        styleId: updatedArtwork.styleId ?? "",
        supportId: updatedArtwork.supportId ?? "",
      },
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
