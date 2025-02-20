// "use client";
// import { uploadImages } from "./action";
// const Multi = () => {
//   return (
//     <form
//       onSubmit={async (e) => {
//         e.preventDefault();
//         const formData = new FormData(e.currentTarget);
//         try {
//           const response = await uploadImages(formData);
//           if (response.success) {
//             console.log(response.success);
//           } else {
//             console.error(response.error);
//           }
//         } catch (error) {
//           console.error("Error en la subida masiva:", error);
//         }
//       }}
//     >
//       <input name="images" type="file" multiple />
//       <button type="submit">Enviar</button>
//     </form>
//   );
// };

// export { Multi };
