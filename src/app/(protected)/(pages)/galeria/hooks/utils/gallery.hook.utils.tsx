// Types
import {
  GetFiltersConfigProps,
  GetFiltersConfigReturn,
  GetFilteredArtworksProps,
  GetFilteredArtworksReturn,
} from "./types/artworks.hook.utils.types";

const getFiltersConfig = ({
  gallery,
}: GetFiltersConfigProps): GetFiltersConfigReturn[] => [
  {
    key: "artists",
    title: "Artistas",
    artworkKey: "artist",
    options: gallery.filters.artists,
    mapOptions: (options) =>
      options.map((option) => ({
        label: option.name,
        value: option.id,
      })),
  },
  {
    key: "colors",
    title: "Colores",
    artworkKey: "color",
    options: gallery.filters.colors,
    mapOptions: (options) =>
      options.map((option) => ({
        label: option.name,
        value: option.id,
        icon: () => (
          <div
            className="h-4 w-4 rounded-full"
            style={{ backgroundColor: option.hex }}
          />
        ),
      })),
  },
  {
    key: "finishes",
    title: "Acabados",
    artworkKey: "finish",
    options: gallery.filters.finishes,
    mapOptions: (options) =>
      options.map((option) => ({
        label: option.name,
        value: option.id,
      })),
  },
  {
    key: "formats",
    title: "Formatos",
    artworkKey: "format",
    options: gallery.filters.formats,
    mapOptions: (options) =>
      options.map((option) => ({
        label: option.name,
        value: option.id,
      })),
  },
  {
    key: "styles",
    title: "Estilos",
    artworkKey: "style",
    options: gallery.filters.styles,
    mapOptions: (options) =>
      options.map((option) => ({
        label: option.name,
        value: option.id,
      })),
  },
  {
    key: "supports",
    title: "Soportes",
    artworkKey: "support",
    options: gallery.filters.supports,
    mapOptions: (options) =>
      options.map((option) => ({
        label: option.name,
        value: option.id,
      })),
  },
];

const getFilteredArtworks = ({
  filterConfig,
  filters,
  gallery,
  height,
  searchTerm,
  width,
}: GetFilteredArtworksProps): GetFilteredArtworksReturn =>
  gallery.artworks.filter((artwork) => {
    const passesFilters = filterConfig.every(({ key, artworkKey }) => {
      const activeFilters = filters[key];
      if (activeFilters.size === 0) return true;
      const artworkValue = artwork[artworkKey];
      return artworkValue?.id ? activeFilters.has(artworkValue.id) : false;
    });

    const lowerSearchTerm = searchTerm.toLowerCase();

    const passesSearch = searchTerm
      ? [
          artwork.title,
          artwork.referenceNumber?.toString(),
          artwork.referenceCode,
          artwork.artist?.name,
          artwork.color?.name,
          artwork.finish?.name,
          artwork.format?.name,
          artwork.style?.name,
          artwork.support?.name,
        ]
          .filter(Boolean)
          .some((field) => field?.toLowerCase().includes(lowerSearchTerm))
      : true;

    const numericWidth = width.trim() !== "" ? Number(width) : null;
    const numericHeight = height.trim() !== "" ? Number(height) : null;

    const passesWidth =
      numericWidth !== null ? artwork.width === numericWidth : true;
    const passesHeight =
      numericHeight !== null ? artwork.height === numericHeight : true;

    return passesFilters && passesSearch && passesWidth && passesHeight;
  });

export { getFiltersConfig, getFilteredArtworks };
