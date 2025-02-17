"use client";
// Components
import { Artwork } from "./components/artwork/artwork.component";
import { Filter } from "./components/filter/filter.component";
import { Input } from "@/components/ui/input";
// Hooks
import { GalleryHook } from "./hooks/gallery.hook";
// Types
import type { GalleryProps } from "./types/gallery.container.types";

const GalleryContainer = ({ gallery }: GalleryProps) => {
  const {
    filterConfig,
    filteredArtworks,
    filters,
    handleFilterChange,
    handleHeightChange,
    handleSearchChange,
    handleWidthChange,
    height,
    searchTerm,
    width,
  } = GalleryHook({
    gallery,
  });

  return (
    <div className="flex w-full flex-col gap-4 overflow-auto p-4">
      <h1 className="text-2xl font-semibold">Galería de obras</h1>

      <div className="flex gap-4">
        <Input
          type="text"
          placeholder="Buscar obras..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="flex-1"
        />

        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Ancho (cm)"
            value={width}
            onChange={handleWidthChange}
            className="w-full max-w-28 shrink-0"
          />
          <Input
            type="text"
            placeholder="Alto (cm)"
            value={height}
            onChange={handleHeightChange}
            className="w-full max-w-28 shrink-0"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {filterConfig.map(({ key, title, options, mapOptions }) => (
          <Filter
            key={key}
            title={title}
            options={mapOptions(options)}
            selectedValues={filters[key]}
            onFilterChange={(newValues) =>
              handleFilterChange({ key, newValues })
            }
          />
        ))}
      </div>

      {filteredArtworks.length > 0 ? (
        <div className="p- p- grid auto-rows-auto grid-cols-[repeat(auto-fill,minmax(288px,1fr))] gap-4">
          {filteredArtworks.map((artwork) => (
            <Artwork key={artwork.id} artwork={artwork} />
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
