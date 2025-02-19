"use client";
// Vendors
import { useState } from "react";
// Handlers
import { GalleryHandlers } from "../handlers/gallery.handlers";
// Types
import type {
  GalleryHookProps,
  GalleryHookReturn,
} from "./types/gallery.hook.types";
import type { Artworks } from "../types/gallery.container.types";
// Utils
import {
  getFiltersConfig,
  getFilteredArtworks,
} from "./utils/gallery.hook.utils";

const GalleryHook = ({ gallery }: GalleryHookProps): GalleryHookReturn => {
  const [filters, setFilters] = useState<Record<string, Set<string>>>({
    artists: new Set(),
    colors: new Set(),
    finishes: new Set(),
    formats: new Set(),
    styles: new Set(),
    supports: new Set(),
  });
  const [height, setHeight] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedArtworks, setSelectedArtworks] = useState<Artworks>([]);
  const [width, setWidth] = useState<string>("");

  const filterConfig = getFiltersConfig({ gallery });
  const filteredArtworks = getFilteredArtworks({
    filterConfig,
    filters,
    gallery,
    height,
    searchTerm,
    width,
  });

  const {
    handleArtworkSelect,
    handleDownloadClick,
    handleFilterChange,
    handleHeightChange,
    handleSearchChange,
    handleWidthChange,
  } = GalleryHandlers({
    selectedArtworks,
    setFilters,
    setHeight,
    setSearchTerm,
    setSelectedArtworks,
    setWidth,
  });

  return {
    filterConfig,
    filteredArtworks,
    filters,
    handleDownloadClick,
    handleArtworkSelect,
    handleFilterChange,
    handleHeightChange,
    handleSearchChange,
    handleWidthChange,
    height,
    searchTerm,
    selectedArtworks,
    width,
  };
};

export { GalleryHook };
