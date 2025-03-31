import { v2 as cloudinary } from "cloudinary";
import type {
  UploadImageToCloudinaryProps,
  UploadImageToCloudinaryReturn,
} from "./types/cloudinary.types";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const extractPublicIdFromUrl = (url: string): string => {
  return url
    .replace(
      /^https?:\/\/res\.cloudinary\.com\/[^/]+\/image\/upload\/v\d+\//,
      "",
    )
    .replace(/\.[^.]+$/, "");
};

const filterValidImages = (
  uploadedImages: (UploadImageToCloudinaryReturn | null)[],
) => {
  return uploadedImages
    .filter((img): img is UploadImageToCloudinaryReturn => img !== null)
    .map((img) => ({ url: img.url, publicId: img.publicId }));
};

const uploadImage = async ({
  file,
  folder,
  reference,
}: UploadImageToCloudinaryProps): Promise<UploadImageToCloudinaryReturn | null> => {
  try {
    if (!file.type.startsWith("image/")) {
      throw new Error("Tipo de archivo no soportado");
    }

    const arrayBuffer = await file.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString("base64");
    const mimeType = file.type || "image/jpeg";
    const dataURI = `data:${mimeType};base64,${base64}`;

    const result = await cloudinary.uploader.upload(dataURI, {
      folder,
      tags: [reference],
      resource_type: "image",
    });

    return {
      url: result.secure_url,
      publicId: result.public_id,
    };
  } catch (error) {
    console.error("Error en la subida de imagen:", error);
    return null;
  }
};

const deleteImage = async (publicId: string): Promise<boolean> => {
  try {
    await cloudinary.uploader.destroy(publicId);
    return true;
  } catch (error) {
    console.error("Error al eliminar la imagen:", error);
    return false;
  }
};

export {
  cloudinary,
  extractPublicIdFromUrl,
  filterValidImages,
  uploadImage,
  deleteImage,
};
