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
    handleFilterChange,
    handleHeightChange,
    handleSearchChange,
    handleWidthChange,
  } = GalleryHandlers({
    setFilters,
    setHeight,
    setSearchTerm,
    setWidth,
  });

  return {
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
  };
};

export { GalleryHook };
