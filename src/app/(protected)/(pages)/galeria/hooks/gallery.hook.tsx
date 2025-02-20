"use client";
// Vendors
import { useEffect, useRef, useState } from "react";
// Constants
import { ITEMS_PER_PAGE } from "../constants/gallery.constants";
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
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedArtworks, setSelectedArtworks] = useState<Artworks>([]);
  const [width, setWidth] = useState<string>("");

  const loadMoreObserverRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const filterConfig = getFiltersConfig({ gallery });
  const filteredArtworks = getFilteredArtworks({
    filterConfig,
    filters,
    gallery,
    height,
    searchTerm,
    width,
  });
  const totalArtworks = filteredArtworks.length;
  const paginatedArtworks = filteredArtworks.slice(0, page * ITEMS_PER_PAGE);
  const hasMore = paginatedArtworks.length < filteredArtworks.length;

  const {
    handleArtworkSelect,
    handleDownloadClick,
    handleFilterChange,
    handleHeightChange,
    handleLoadMore,
    handleSearchChange,
    handleWidthChange,
  } = GalleryHandlers({
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
  });

  useEffect(() => {
    if (!hasMore || loading) return;

    loadMoreObserverRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          handleLoadMore();
        }
      },
      { threshold: 1.0 },
    );

    if (loadMoreRef.current) {
      loadMoreObserverRef.current.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreObserverRef.current) loadMoreObserverRef.current.disconnect();
    };
  }, [hasMore]);

  return {
    filterConfig,
    filters,
    handleArtworkSelect,
    handleDownloadClick,
    handleFilterChange,
    handleHeightChange,
    handleSearchChange,
    handleWidthChange,
    height,
    loading,
    loadMoreRef,
    paginatedArtworks,
    searchTerm,
    selectedArtworks,
    totalArtworks,
    width,
  };
};

export { GalleryHook };
