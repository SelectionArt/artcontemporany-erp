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
  newImages,
  values,
}: CreateArtworkProps): Promise<CreateArtworkReturn> => {
  const validatedFields = artworkSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const uploadedImages = await Promise.all(
      newImages.map((image) =>
        uploadImageToCloudinary({
          file: image,
          referenceCode: validatedFields.data.referenceCode ?? "",
          referenceNumber: validatedFields.data.referenceNumber,
        }),
      ),
    );

    const validImages = uploadedImages.filter(Boolean) as string[];

    if (validImages.length === 0) {
      return {
        error: "Error al subir las imágenes. Por favor, inténtalo de nuevo",
      };
    }

    const newArtwork = await prisma.artwork.create({
      data: {
        ...validatedFields.data,
        colors: {
          create: validatedFields.data.colors.map((colorId) => ({
            colorId,
          })),
        },
        finishId: validatedFields.data.finishId || null,
        formatId: validatedFields.data.formatId || null,
        images: {
          create: validImages.map((image) => ({ url: image })),
        },
        referenceCode: validatedFields.data.referenceCode || null,
        styleId: validatedFields.data.styleId || null,
        supportId: validatedFields.data.supportId || null,
        title: validatedFields.data.title || null,
      },
      include: {
        artist: true,
        colors: { include: { color: true } },
        finish: true,
        format: true,
        images: true,
        style: true,
        support: true,
      },
    });

    return {
      success: "Obra creada con éxito",
      artwork: {
        ...newArtwork,
        artist: newArtwork.artist,
        colors: newArtwork.colors.map(({ color }) => ({
          id: color.id,
          name: color.name,
          createdAt: color.createdAt,
          updatedAt: color.updatedAt,
          hex: color.hex,
        })),
        finish: newArtwork.finish,
        format: newArtwork.format,
        images: newArtwork.images.map((image) => ({
          id: image.id,
          url: image.url,
          createdAt: image.createdAt,
          updatedAt: image.updatedAt,
          artworkId: image.artworkId,
        })),
        referenceCode: newArtwork.referenceCode ?? "",
        style: newArtwork.style,
        support: newArtwork.support,
        title: newArtwork.title ?? "",
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
    const images = await prisma.image.findMany({
      where: { artworkId: id },
      select: { url: true },
    });

    const cloudinaryPublicIds = images.map((img) => {
      const parts = img.url.split("/");
      return parts[parts.length - 1].split(".")[0];
    });

    await Promise.all(
      cloudinaryPublicIds.map((publicId) =>
        cloudinary.uploader.destroy(publicId),
      ),
    );

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
    const images = await prisma.image.findMany({
      where: { artworkId: { in: ids } },
      select: { url: true },
    });

    const cloudinaryPublicIds = images.map((img) => {
      const parts = img.url.split("/");
      return parts[parts.length - 1].split(".")[0];
    });

    await Promise.all(
      cloudinaryPublicIds.map((publicId) =>
        cloudinary.uploader.destroy(publicId),
      ),
    );

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
        artist: true,
        colors: {
          include: {
            color: true,
          },
        },
        finish: true,
        format: true,
        style: true,
        support: true,
        images: true,
      },
    });

    return artworks.map((artwork) => ({
      artist: artwork.artist,
      colors: artwork.colors.map((color) => color.color),
      createdAt: artwork.createdAt,
      finish: artwork.finish,
      format: artwork.format,
      height: artwork.height,
      id: artwork.id,
      images: artwork.images,
      referenceCode: artwork.referenceCode ?? "",
      referenceNumber: artwork.referenceNumber,
      style: artwork.style,
      support: artwork.support,
      title: artwork.title ?? "",
      updatedAt: artwork.updatedAt,
      width: artwork.width,
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};

const fetchFilters = async () => {
  try {
    const [artists, colors, finishes, formats, styles, supports] =
      await Promise.all([
        prisma.artist.findMany(),
        prisma.color.findMany(),
        prisma.finish.findMany(),
        prisma.format.findMany(),
        prisma.style.findMany(),
        prisma.support.findMany(),
      ]);

    return {
      artists,
      colors,
      finishes,
      formats,
      styles,
      supports,
    };
  } catch (error) {
    console.error(error);
    return {
      artists: [],
      colors: [],
      finishes: [],
      formats: [],
      styles: [],
      supports: [],
    };
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
  newImages,
  toDelete,
  values,
}: UpdateArtworkProps): Promise<UpdateArtworkReturn> => {
  const validatedFields = artworkSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    if (toDelete.length > 0) {
      await Promise.all(
        toDelete.map(async (imageUrl) => {
          const publicId = imageUrl.split("/").pop()?.split(".")[0];
          if (publicId) {
            await cloudinary.uploader.destroy(publicId);
          }
        }),
      );

      await prisma.image.deleteMany({
        where: { artworkId: id, url: { in: toDelete } },
      });
    }

    const uploadedImages = await Promise.all(
      newImages.map((image) =>
        uploadImageToCloudinary({
          file: image,
          referenceCode: validatedFields.data.referenceCode ?? "",
          referenceNumber: validatedFields.data.referenceNumber,
        }),
      ),
    );

    const validImages = uploadedImages.filter(Boolean) as string[];

    await prisma.artworkColor.deleteMany({
      where: { artworkId: id },
    });

    const updatedArtwork = await prisma.artwork.update({
      where: { id },
      data: {
        artistId: validatedFields.data.artistId,
        colors: {
          create: validatedFields.data.colors.map((colorId) => ({
            color: { connect: { id: colorId } },
          })),
        },
        finishId: validatedFields.data.finishId || null,
        formatId: validatedFields.data.formatId || null,
        height: validatedFields.data.height,
        images: {
          create: validImages.map((image) => ({ url: image })),
        },
        referenceCode: validatedFields.data.referenceCode || null,
        referenceNumber: validatedFields.data.referenceNumber,
        styleId: validatedFields.data.styleId || null,
        supportId: validatedFields.data.supportId || null,
        title: validatedFields.data.title || null,
        width: validatedFields.data.width,
      },
      include: {
        artist: true,
        colors: { include: { color: true } },
        finish: true,
        format: true,
        images: true,
        style: true,
        support: true,
      },
    });

    return {
      success: "Obra actualizada con éxito",
      artwork: {
        ...updatedArtwork,
        artist: updatedArtwork.artist,
        colors: updatedArtwork.colors.map(({ color }) => ({
          id: color.id,
          name: color.name,
          createdAt: color.createdAt,
          updatedAt: color.updatedAt,
          hex: color.hex,
        })),
        finish: updatedArtwork.finish,
        format: updatedArtwork.format,
        style: updatedArtwork.style,
        support: updatedArtwork.support,
        images: updatedArtwork.images.map((image) => ({
          id: image.id,
          url: image.url,
          createdAt: image.createdAt,
          updatedAt: image.updatedAt,
          artworkId: image.artworkId,
        })),
        referenceCode: updatedArtwork.referenceCode ?? "",
        title: updatedArtwork.title ?? "",
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
  fetchFilters,
  generateUniqueReferenceNumber,
  updateArtwork,
};
