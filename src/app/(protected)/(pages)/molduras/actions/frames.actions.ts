"use server";
// Libs
import { prisma } from "@/lib/prisma";
import { filterValidImages, uploadImage, deleteImage } from "@/lib/cloudinary";
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

const createFrame = async ({
  newImages,
  values,
}: CreateFrameProps): Promise<CreateFrameReturn> => {
  const validatedFields = frameSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const existingFrame = await prisma.frame.findUnique({
      where: { reference: validatedFields.data.reference },
    });

    if (existingFrame) {
      return { error: "Ya existe una moldura con esta referencia" };
    }

    const uploadedImages = await Promise.all(
      newImages.map((image) =>
        uploadImage({
          file: image,
          folder: "frames",
          reference: validatedFields.data.reference,
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
      const newFrame = await prisma.frame.create({
        data: {
          description: validatedFields.data.description || null,
          galce: validatedFields.data.galce || null,
          height: validatedFields.data.height || null,
          images: {
            create: validImages,
          },
          manufacturerReference:
            validatedFields.data.manufacturerReference || null,
          manufacturerId: validatedFields.data.manufacturerId || null,
          materialId: validatedFields.data.materialId || null,
          name: validatedFields.data.name,
          reference: validatedFields.data.reference,
          width: validatedFields.data.width || null,
        },
        include: {
          manufacturer: true,
          material: true,
          images: true,
        },
      });

      return {
        success: "Moldura creada con éxito",
        frame: {
          ...newFrame,
          manufacturer: newFrame.manufacturer,
          material: newFrame.material,
          images: newFrame.images.map((image) => ({
            id: image.id,
            url: image.url,
            publicId: image.publicId,
            createdAt: image.createdAt,
            updatedAt: image.updatedAt,
            frameId: image.frameId,
          })),
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
      error: "Error al crear la moldura. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteFrame = async ({
  id,
}: DeleteFrameProps): Promise<DeleteFrameReturn> => {
  try {
    const images = await prisma.frameImage.findMany({
      where: { frameId: id },
      select: { publicId: true },
    });

    await Promise.all(images.map((img) => deleteImage(img.publicId)));

    await prisma.frame.delete({ where: { id } });

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
    const images = await prisma.frameImage.findMany({
      where: { frameId: { in: ids } },
      select: { publicId: true },
    });

    await Promise.all(images.map((img) => deleteImage(img.publicId)));

    await prisma.frame.deleteMany({ where: { id: { in: ids } } });

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
        images: true,
        manufacturer: true,
        material: true,
      },
    });

    return frames.map((frame) => ({
      id: frame.id,
      name: frame.name,
      description: frame.description ?? "",
      reference: frame.reference,
      width: frame.width,
      height: frame.height,
      galce: frame.galce,
      images: frame.images,
      manufacturerReference: frame.manufacturerReference ?? "",
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
    const existingFrame = await prisma.frame.findUnique({
      where: { reference: validatedFields.data.reference },
    });

    if (!existingFrame) {
      return { error: "La moldura no existe" };
    }

    if (validatedFields.data.reference !== existingFrame.reference) {
      const referenceExists = await prisma.frame.findUnique({
        where: { reference: validatedFields.data.reference },
      });

      if (referenceExists) {
        return { error: "Ya existe una moldura con esta referencia" };
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

    const uploadedImages = await Promise.all(
      newImages.map((image) =>
        uploadImage({
          file: image,
          folder: "frames",
          reference: validatedFields.data.reference,
        }),
      ),
    );

    const validImages = filterValidImages(uploadedImages);

    try {
      const updatedFrame = await prisma.frame.update({
        where: { id },
        data: {
          name: validatedFields.data.name,
          description: validatedFields.data.description || null,
          reference: validatedFields.data.reference,
          width: validatedFields.data.width || null,
          height: validatedFields.data.height || null,
          galce: validatedFields.data.galce || null,
          manufacturerReference:
            validatedFields.data.manufacturerReference || null,
          manufacturerId: validatedFields.data.manufacturerId || null,
          materialId: validatedFields.data.materialId || null,
          images: {
            create: validImages,
          },
        },
        include: {
          manufacturer: true,
          material: true,
          images: true,
        },
      });

      return {
        success: "Moldura actualizada con éxito",
        frame: {
          ...updatedFrame,
          manufacturer: updatedFrame.manufacturer,
          material: updatedFrame.material,
          images: updatedFrame.images.map((image) => ({
            id: image.id,
            url: image.url,
            publicId: image.publicId,
            createdAt: image.createdAt,
            updatedAt: image.updatedAt,
            frameId: image.frameId,
          })),
        },
      };
    } catch (error) {
      console.error(error);

      await Promise.all(validImages.map((img) => deleteImage(img.publicId)));

      return {
        error: "Error al actualizar la moldura. Por favor, inténtalo de nuevo",
      };
    }
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
  updateFrame,
};
