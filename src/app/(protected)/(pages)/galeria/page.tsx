// Actions
// import { fetchGallery } from "./actions/gallery.actions";

// Components
import { GalleryContainer } from "./gallery.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galería de obras",
  description: "Página de galería de obras",
};

const GalleryPage = async () => {
  // const gallery = await fetchGallery();

  // return <GalleryContainer gallery={gallery} />;
  return <GalleryContainer />;
};

export default GalleryPage;
