// Vendors
import JSZip from "jszip";
import { saveAs } from "file-saver";
// Types
import type {
  ArtworkSelectHandlerProps,
  DownloadClickHandlerProps,
  FilterChangeHandlerProps,
  GalleryHandlersProps,
  GalleryHandlersReturn,
  HeightChangeHandlerProps,
  LoadMoreHandlerProps,
  SearchChangeHandlerProps,
  WidthChangeHandlerProps,
} from "./types/gallery.handlers.types";

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

const downloadClickHandler = async ({
  selectedArtworks,
}: DownloadClickHandlerProps): Promise<void> => {
  const zip = new JSZip();

  const downloadPromises = selectedArtworks.flatMap((artwork) => {
    const totalImages = artwork.images.length;

    return artwork.images.map(async (image, index) => {
      try {
        const response = await fetch(image.url);
        const blob = await response.blob();
        const fileExtension = image.url.split(".").pop();

        const baseFilename = `${artwork.referenceNumber}-${artwork.referenceCode}_${artwork.width}x${artwork.height}_${artwork.artist.name}`;
        const filename =
          totalImages > 1
            ? `${baseFilename}_${index + 1}.${fileExtension}`
            : `${baseFilename}.${fileExtension}`;

        zip.file(filename, blob);
      } catch (error) {
        console.error(`Error descargando la imagen ${image.url}:`, error);
      }
    });
  });

  await Promise.all(downloadPromises);

  const zipBlob = await zip.generateAsync({ type: "blob" });
  saveAs(zipBlob, `${selectedArtworks[0].referenceNumber}.zip`);
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

const loadMoreHandler = async ({
  hasMore,
  loading,
  setLoading,
  setPage,
}: LoadMoreHandlerProps): Promise<void> => {
  if (loading || !hasMore) return;

  setLoading(true);

  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  setPage((prev) => prev + 1);
  setLoading(false);
};

const searchChangeHandler = ({
  event,
  setSearchTerm,
}: SearchChangeHandlerProps): void => {
  setSearchTerm(event.target.value);
};

const widthChangeHandler = ({
  event,
  setWidth,
}: WidthChangeHandlerProps): void => {
  setWidth(event.target.value);
};

const GalleryHandlers = ({
  hasMore,
  loading,
  selectedArtworks,
  setFilters,
  setHeight,
  setLoading,
  setPage,
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
    handleLoadMore: () =>
      loadMoreHandler({ hasMore, loading, setLoading, setPage }),
    handleSearchChange: (event) =>
      searchChangeHandler({ event, setSearchTerm }),
    handleWidthChange: (event) => widthChangeHandler({ event, setWidth }),
  };
};

export { GalleryHandlers };
