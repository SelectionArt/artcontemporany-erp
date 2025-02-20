"use server";
// Libs
import { prisma } from "@/lib/prisma";
import { filterValidImages, uploadImage, deleteImage } from "@/lib/cloudinary";
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
  newImages,
  values,
}: CreateArtworkProps): Promise<CreateArtworkReturn> => {
  const validatedFields = artworkSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const existingArtwork = await prisma.artwork.findUnique({
      where: { referenceNumber: validatedFields.data.referenceNumber },
    });

    if (existingArtwork) {
      return { error: "Ya existe una obra con este número de referencia" };
    }

    const reference = validatedFields.data.referenceCode
      ? `${validatedFields.data.referenceNumber}-${validatedFields.data.referenceCode}`
      : `${validatedFields.data.referenceNumber}`;

    const uploadedImages = await Promise.all(
      newImages.map((image) =>
        uploadImage({
          file: image,
          folder: "artworks",
          reference,
        }),
      ),
    );

    const validImages = filterValidImages(uploadedImages);

    if (validImages.length === 0) {
      return {
        error: "Error al subir las imágenes. Por favor, inténtalo de nuevo",
      };
    }

    try {
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
            create: validImages,
          },
          referenceCode: validatedFields.data.referenceCode || null,
          styleId: validatedFields.data.styleId || null,
          supportId: validatedFields.data.supportId || null,
          tag: validatedFields.data.tag || null,
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
            publicId: image.publicId,
            createdAt: image.createdAt,
            updatedAt: image.updatedAt,
            artworkId: image.artworkId,
          })),
          referenceCode: newArtwork.referenceCode ?? "",
          style: newArtwork.style,
          support: newArtwork.support,
          tag: newArtwork.tag ?? "",
          title: newArtwork.title ?? "",
        },
      };
    } catch (error) {
      console.error(error);

      await Promise.all(validImages.map((img) => deleteImage(img.publicId)));

      return {
        error: "Error al crear la moldura. Por favor, inténtalo de nuevo",
      };
    }
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
    const images = await prisma.artworkImage.findMany({
      where: { artworkId: id },
      select: { publicId: true },
    });

    await Promise.all(images.map((img) => deleteImage(img.publicId)));

    await prisma.artwork.delete({ where: { id } });

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
    const images = await prisma.artworkImage.findMany({
      where: { artworkId: { in: ids } },
      select: { publicId: true },
    });

    await Promise.all(images.map((img) => deleteImage(img.publicId)));

    await prisma.artwork.deleteMany({ where: { id: { in: ids } } });

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
      tag: artwork.tag ?? "",
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
    const existingArtwork = await prisma.artwork.findUnique({
      where: { id },
    });

    if (!existingArtwork) {
      return { error: "La obra que intentas actualizar no existe" };
    }

    if (
      validatedFields.data.referenceNumber !== existingArtwork.referenceNumber
    ) {
      const referenceExists = await prisma.artwork.findUnique({
        where: { referenceNumber: validatedFields.data.referenceNumber },
      });

      if (referenceExists) {
        return { error: "Ya existe una obra con este número de referencia" };
      }
    }

    if (toDelete.length > 0) {
      const imagesToDelete = await prisma.frameImage.findMany({
        where: { frameId: id, url: { in: toDelete } },
        select: { publicId: true },
      });

      const cloudinaryPublicIds = imagesToDelete.map((img) => img.publicId);

      await Promise.all(cloudinaryPublicIds.map(deleteImage));

      await prisma.frameImage.deleteMany({
        where: { frameId: id, url: { in: toDelete } },
      });
    }

    const reference = validatedFields.data.referenceCode
      ? `${validatedFields.data.referenceNumber}-${validatedFields.data.referenceCode}`
      : `${validatedFields.data.referenceNumber}`;

    const uploadedImages = await Promise.all(
      newImages.map((image) =>
        uploadImage({
          file: image,
          folder: "frames",
          reference,
        }),
      ),
    );

    const validImages = filterValidImages(uploadedImages);

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
          create: validImages,
        },
        referenceCode: validatedFields.data.referenceCode || null,
        referenceNumber: validatedFields.data.referenceNumber,
        styleId: validatedFields.data.styleId || null,
        supportId: validatedFields.data.supportId || null,
        tag: validatedFields.data.tag || null,
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
          publicId: image.publicId,
          createdAt: image.createdAt,
          updatedAt: image.updatedAt,
          artworkId: image.artworkId,
        })),
        referenceCode: updatedArtwork.referenceCode ?? "",
        tag: updatedArtwork.tag ?? "",
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
