"use client";
// Hooks
import { usePageIndicator } from "./hooks/use-page-indicator/use-page-indicator.hook";
// Types
import type { PageIndicatorProps } from "./types/page-indicator.component.types";

const PageIndicator = <TData,>({ table }: PageIndicatorProps<TData>) => {
  const { pageIndex, pageCount, t } = usePageIndicator({ table });

  return (
    <div className="hidden w-24 items-center justify-center text-sm font-medium sm:flex">
      {t("page", { current: pageIndex + 1, total: pageCount })}
    </div>
  );
};

export { PageIndicator };
