"use client";
// Components
import { Artwork } from "./components/artwork/artwork.component";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Filter } from "./components/filter/filter.component";
import { Input } from "@/components/ui/input";
// Hooks
import { GalleryHook } from "./hooks/gallery.hook";
// Icons
import { Ellipsis } from "lucide-react";
// Types
import type { GalleryProps } from "./types/gallery.container.types";

const GalleryContainer = ({ gallery }: GalleryProps) => {
  const {
    filterConfig,
    filteredArtworks,
    filters,
    handleArtworkSelect,
    handleDownloadClick,
    handleFilterChange,
    handleHeightChange,
    handleSearchChange,
    handleWidthChange,
    height,
    searchTerm,
    selectedArtworks,
    width,
  } = GalleryHook({
    gallery,
  });

  return (
    <div className="flex w-full flex-col gap-4 overflow-auto p-4">
      <h1 className="text-2xl font-semibold">Galería de obras</h1>

      <div className="flex flex-wrap gap-4">
        <Input
          type="text"
          placeholder="Buscar obras..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="min-w-48 flex-1"
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
          {selectedArtworks.length > 0 && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size={"icon"}
                  variant={"outline"}
                  className="flex items-center gap-2"
                >
                  <Ellipsis />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleDownloadClick}>
                  {`Descargar ${selectedArtworks.length} ${selectedArtworks.length > 1 ? "imágenes" : "imagen"}`}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
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
            <Artwork
              key={artwork.id}
              artwork={artwork}
              onSelect={handleArtworkSelect}
            />
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
