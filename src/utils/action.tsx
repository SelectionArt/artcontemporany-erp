// "use server";
// import { uploadImage } from "@/lib/cloudinary";
// import { prisma } from "@/lib/prisma";

// const extractReferenceData = (filename: string) => {
//   const match = filename.match(/(\d+)-([A-Z]+)\.jpg/i);
//   if (!match) return null;
//   const [, referenceNumber, referenceCode] = match;
//   return { referenceNumber: parseInt(referenceNumber, 10), referenceCode };
// };

// const CHUNK_SIZE = 10;

// const uploadImages = async (formData: FormData) => {
//   const files = formData.getAll("images") as File[];

//   if (!files || files.length === 0) {
//     return { error: "No se han recibido archivos." };
//   }

//   const artworks = [];

//   for (let i = 0; i < files.length; i += CHUNK_SIZE) {
//     const chunk = files.slice(i, i + CHUNK_SIZE);

//     console.log(`Subiendo chunk de ${chunk.length} imágenes...`);

//     const results = await Promise.allSettled(
//       chunk.map(async (file) => {
//         const referenceData = extractReferenceData(file.name);

//         if (!referenceData) {
//           console.warn(`El archivo ${file.name} no tiene el formato esperado.`);
//           return null;
//         }

//         const { referenceNumber, referenceCode } = referenceData;

//         try {
//           const uploadedImage = await uploadImage({
//             file,
//             folder: "artworks",
//             reference: `${referenceNumber}-${referenceCode}`,
//           });

//           if (!uploadedImage) {
//             console.error(`Error al subir ${file.name} a Cloudinary.`);
//             return null;
//           }

//           const newArtwork = await prisma.artwork.create({
//             data: {
//               referenceNumber,
//               referenceCode,
//               width: 0,
//               height: 0,
//               artistId: "cm7cb8g1f0019ti68zrwtindt",
//               images: {
//                 create: {
//                   url: uploadedImage.url,
//                   publicId: uploadedImage.publicId,
//                 },
//               },
//             },
//           });

//           return newArtwork;
//         } catch (error) {
//           console.error(`Error al procesar ${file.name}:`, error);
//           return null;
//         }
//       }),
//     );

//     const successfulUploads = results
//       .filter((result) => result.status === "fulfilled" && result.value)
//       .map((result) => (result as PromiseFulfilledResult<any>).value);

//     artworks.push(...successfulUploads);
//   }

//   return { success: "Imágenes subidas correctamente." };
// };

// export { uploadImages };
