"use client";

// Vendors
import { useState } from "react";
import { GalleryFilter } from "./components/filter/filter.component";
import Image from "next/image";
// Types
import type { GalleryProps } from "./types/gallery.container.types";

type FilterOption = {
  id: string;
  name: string;
  hex?: string;
};

type FilterConfig = {
  key: string;
  title: string;
  artworkKey: string;
  options: FilterOption[];
  mapOptions: (options: FilterOption[]) => {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
};

const GalleryContainer = ({ gallery }: GalleryProps) => {
  const [filters, setFilters] = useState<Record<string, Set<string>>>({
    artists: new Set(),
    colors: new Set(),
    finishes: new Set(),
    formats: new Set(),
    styles: new Set(),
    supports: new Set(),
  });

  const filterConfig: FilterConfig[] = [
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
  ] as const;

  const filteredArtworks = gallery.artworks.filter((artwork) =>
    filterConfig.every(({ key, artworkKey }) => {
      return (
        filters[key].size === 0 ||
        (artwork[artworkKey as keyof typeof artwork] !== null &&
          filters[key].has(
            (artwork[artworkKey as keyof typeof artwork] as { id: string }).id,
          ))
      );
    }),
  );

  const handleFilterChange = (key: string, newValues: Set<string>) => {
    setFilters((prevFilters) => ({ ...prevFilters, [key]: newValues }));
  };

  return (
    <div className="flex w-full flex-col gap-4 p-4">
      <h1 className="text-2xl font-semibold">Galería de obras</h1>

      <div className="flex flex-wrap gap-2">
        {filterConfig.map(({ key, title, options, mapOptions }) => (
          <GalleryFilter
            key={key}
            title={title}
            options={mapOptions(options)}
            selectedValues={filters[key]}
            onFilterChange={(newValues) => handleFilterChange(key, newValues)}
          />
        ))}
      </div>

      {filteredArtworks.length > 0 ? (
        <div className="grid auto-rows-auto grid-cols-[repeat(auto-fill,minmax(224px,1fr))] gap-4">
          {filteredArtworks.map((artwork) => (
            <div key={artwork.id} className="bg">
              <div className="relative h-48">
                <Image
                  src={artwork.images[0]?.url}
                  alt={artwork.title}
                  fill
                  className="w-full rounded-md object-cover"
                />
              </div>
              <h3 className="mt-2 text-lg font-semibold">{artwork.title}</h3>
              <p className="text-muted-foreground text-sm">
                {artwork.artist?.name}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">
          No se encontraron obras con los filtros seleccionados.
        </p>
      )}
    </div>
  );
};

export { GalleryContainer };
