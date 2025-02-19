"use server";
// Libs
import { prisma } from "@/lib/prisma";
import { cloudinary } from "@/lib/cloudinary";
// Schemas
import { frameSchema } from "../schemas/frame.schema";
// Types
import type {
  CreateFrameProps,
  CreateFrameReturn,
  DeleteFrameProps,
  DeleteFrameReturn,
  DeleteMultipleFramesProps,
  DeleteMultipleFramesReturn,
  FetchFramesReturn,
  UpdateFrameProps,
  UpdateFrameReturn,
} from "./types/frames.actions.types";

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

const createFrame = async ({
  newImages,
  values,
}: CreateFrameProps): Promise<CreateFrameReturn> => {
  const validatedFields = frameSchema.safeParse(values);

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

    const newFrame = await prisma.frame.create({
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
      success: "Moldura creada con éxito",
      frame: {
        ...newFrame,
        artist: newFrame.artist,
        colors: newFrame.colors.map(({ color }) => ({
          id: color.id,
          name: color.name,
          createdAt: color.createdAt,
          updatedAt: color.updatedAt,
          hex: color.hex,
        })),
        finish: newFrame.finish,
        format: newFrame.format,
        images: newFrame.images.map((image) => ({
          id: image.id,
          url: image.url,
          createdAt: image.createdAt,
          updatedAt: image.updatedAt,
          frameId: image.frameId,
        })),
        referenceCode: newFrame.referenceCode ?? "",
        style: newFrame.style,
        support: newFrame.support,
        title: newFrame.title ?? "",
      },
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al crear la moldura. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteFrame = async ({
  id,
}: DeleteFrameProps): Promise<DeleteFrameReturn> => {
  try {
    const images = await prisma.image.findMany({
      where: { frameId: id },
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

    await prisma.frame.delete({
      where: { id },
    });

    return { success: "Moldura eliminada con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar la moldura. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteMultipleFrames = async ({
  ids,
}: DeleteMultipleFramesProps): Promise<DeleteMultipleFramesReturn> => {
  try {
    const images = await prisma.image.findMany({
      where: { frameId: { in: ids } },
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

    await prisma.frame.deleteMany({
      where: { id: { in: ids } },
    });

    return { success: "Molduras eliminadas con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar las molduras. Por favor, inténtalo de nuevo",
    };
  }
};

const fetchFrames = async (): Promise<FetchFramesReturn> => {
  try {
    const frames = await prisma.frame.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        manufacturer: true,
        material: true,
      },
    });

    return frames.map((frame) => ({
      id: frame.id,
      name: frame.name,
      description: frame.description ?? "",
      reference: frame.reference,
      weight: frame.weight,
      height: frame.height,
      galce: frame.galce,
      manufacturer: frame.manufacturer,
      material: frame.material,
      createdAt: frame.createdAt,
      updatedAt: frame.updatedAt,
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};

const fetchFilters = async () => {
  try {
    const [manufacturers, materials] = await Promise.all([
      prisma.manufacturer.findMany(),
      prisma.material.findMany(),
    ]);

    return {
      manufacturers,
      materials,
    };
  } catch (error) {
    console.error(error);
    return {
      manufacturers: [],
      materials: [],
    };
  }
};


const generateUniqueReferenceNumber = async (): Promise<number> => {
  const existingNumbers = new Set(
    (
      await prisma.frame.findMany({
        select: { referenceNumber: true },
      })
    ).map((frame) => frame.referenceNumber),
  );

  let referenceNumber;

  do {
    referenceNumber = Math.floor(Math.random() * 999999) + 1;
  } while (existingNumbers.has(referenceNumber));

  return referenceNumber;
};

const updateFrame = async ({
  id,
  newImages,
  toDelete,
  values,
}: UpdateFrameProps): Promise<UpdateFrameReturn> => {
  const validatedFields = frameSchema.safeParse(values);

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
        where: { frameId: id, url: { in: toDelete } },
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

    await prisma.frameColor.deleteMany({
      where: { frameId: id },
    });

    const updatedFrame = await prisma.frame.update({
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
      success: "Moldura actualizada con éxito",
      frame: {
        ...updatedFrame,
        artist: updatedFrame.artist,
        colors: updatedFrame.colors.map(({ color }) => ({
          id: color.id,
          name: color.name,
          createdAt: color.createdAt,
          updatedAt: color.updatedAt,
          hex: color.hex,
        })),
        finish: updatedFrame.finish,
        format: updatedFrame.format,
        style: updatedFrame.style,
        support: updatedFrame.support,
        images: updatedFrame.images.map((image) => ({
          id: image.id,
          url: image.url,
          createdAt: image.createdAt,
          updatedAt: image.updatedAt,
          frameId: image.frameId,
        })),
        referenceCode: updatedFrame.referenceCode ?? "",
        title: updatedFrame.title ?? "",
      },
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al actualizar la moldura. Por favor, inténtalo de nuevo",
    };
  }
};

export {
  createFrame,
  deleteFrame,
  deleteMultipleFrames,
  fetchFrames,
  fetchFilters,
  generateUniqueReferenceNumber,
  updateFrame,
};
