// Vendors
import JSZip from "jszip";
import { saveAs } from "file-saver";
// Types
import type {
  GalleryHandlersProps,
  GalleryHandlersReturn,
  DownloadClickHandlerProps,
  FilterChangeHandlerProps,
  HeightChangeHandlerProps,
  SearchChangeHandlerProps,
  ArtworkSelectHandlerProps,
  WidthChangeHandlerProps,
} from "./types/gallery.handlers.types";

const downloadClickHandler = async ({
  selectedArtworks,
}: DownloadClickHandlerProps): Promise<void> => {
  console.log("Download click", selectedArtworks);

  const zip = new JSZip();

  const downloadPromises = selectedArtworks.flatMap((artwork) =>
    artwork.images.map(async (image) => {
      try {
        const response = await fetch(image.url);
        const blob = await response.blob();
        const fileExtension = image.url.split(".").pop();
        const filename = `${artwork.referenceNumber}-${artwork.referenceCode}_${image.id}.${fileExtension}`;
        zip.file(filename, blob);
      } catch (error) {
        console.error(`Error descargando la imagen ${image.url}:`, error);
      }
    }),
  );

  await Promise.all(downloadPromises);

  const zipBlob = await zip.generateAsync({ type: "blob" });
  saveAs(zipBlob, "artworks.zip");
};

const filterChangeHandler = ({
  key,
  newValues,
  setFilters,
}: FilterChangeHandlerProps): void => {
  setFilters((prevFilters) => ({ ...prevFilters, [key]: newValues }));
};

const heightChangeHandler = ({
  event,
  setHeight,
}: HeightChangeHandlerProps): void => {
  setHeight(event.target.value);
};

const searchChangeHandler = ({
  event,
  setSearchTerm,
}: SearchChangeHandlerProps): void => {
  setSearchTerm(event.target.value);
};

const artworkSelectHandler = ({
  artwork,
  checked,
  setSelectedArtworks,
}: ArtworkSelectHandlerProps): void => {
  setSelectedArtworks((prevSelectedArtworks) => {
    if (checked === true) {
      return [...prevSelectedArtworks, artwork];
    }

    return prevSelectedArtworks.filter(
      (selectedArtwork) => selectedArtwork.id !== artwork.id,
    );
  });
};

const widthChangeHandler = ({
  event,
  setWidth,
}: WidthChangeHandlerProps): void => {
  setWidth(event.target.value);
};

const GalleryHandlers = ({
  selectedArtworks,
  setFilters,
  setHeight,
  setSearchTerm,
  setSelectedArtworks,
  setWidth,
}: GalleryHandlersProps): GalleryHandlersReturn => {
  return {
    handleArtworkSelect: ({ artwork, checked }) =>
      artworkSelectHandler({ artwork, checked, setSelectedArtworks }),
    handleDownloadClick: () => downloadClickHandler({ selectedArtworks }),
    handleFilterChange: ({ key, newValues }) =>
      filterChangeHandler({ key, newValues, setFilters }),
    handleHeightChange: (event) => heightChangeHandler({ event, setHeight }),
    handleSearchChange: (event) =>
      searchChangeHandler({ event, setSearchTerm }),
    handleWidthChange: (event) => widthChangeHandler({ event, setWidth }),
  };
};

export { GalleryHandlers };
