// Vendors
import { create } from "zustand";
import { persist } from "zustand/middleware";
// Types
import type { LayoutSidebarStore } from "./types/layout-sidebar.store.types";

const useLayoutSidebarStore = create<LayoutSidebarStore>()(
  persist(
    (set) => ({
      open: true,
      setOpen: (open: boolean) => set({ open }),
      toggleOpen: () => set((state) => ({ open: !state.open })),
    }),
    { name: "layout-store" },
  ),
);

export { useLayoutSidebarStore };
