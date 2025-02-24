// Vendors
import { useRouter } from "next/navigation";
// Types
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { Pricing } from "../../types/pricings.container.types";
import type { PricingSchema } from "../../schemas/types/pricing.schema.types";

type PricingsHandlersProps = {
  form: UseFormReturn<PricingSchema>;
  router: ReturnType<typeof useRouter>;
  selectedRow: Pricing | null;
  selectedRows: Pricing[];
  setData: Dispatch<SetStateAction<Pricing[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOpenAlert: Dispatch<SetStateAction<boolean>>;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  setSelectedRow: Dispatch<SetStateAction<Pricing | null>>;
  setSelectedRows: Dispatch<SetStateAction<Pricing[]>>;
};

type PricingsHandlersReturn = {
  handleCreate: () => void;
  handleDelete: (row: Pricing) => void;
  handleDeleteMultiple: (rows: Pricing[]) => void;
  handleEdit: (row: Pricing) => void;
  handleOpenChangeAlertDialog: (open: boolean) => void;
  handleOpenChangeDialog: (open: boolean) => void;
  handleSubmit: (values: PricingSchema) => void;
  handleSubmitDelete: () => void;
  handleSubmitDeleteMultiple: () => void;
};

type CreateHandlerProps = Pick<PricingsHandlersProps, "setOpenDialog">;

type DeleteHandlerProps = Pick<
  PricingsHandlersProps,
  "setSelectedRow" | "setOpenAlert"
> & { row: Pricing };

type DeleteMultipleHandlerProps = Pick<
  PricingsHandlersProps,
  "setSelectedRows" | "setOpenAlert"
> & {
  rows: Pricing[];
};

type EditHandlerProps = Pick<
  PricingsHandlersProps,
  "form" | "setSelectedRow" | "setOpenDialog"
> & {
  row: Pricing;
};

type OpenChangeAlertDialogHandlerProps = Pick<
  PricingsHandlersProps,
  | "selectedRow"
  | "selectedRows"
  | "setOpenAlert"
  | "setSelectedRow"
  | "setSelectedRows"
> & {
  open: boolean;
};

type OpenChangeDialogHandlerProps = Pick<
  PricingsHandlersProps,
  "form" | "selectedRow" | "setOpenDialog" | "setSelectedRow"
> & {
  open: boolean;
};

type SubmitHandlerCreateProps = Pick<
  SubmitHandlerProps,
  "form" | "router" | "setData" | "setLoading" | "setOpenDialog" | "values"
>;

type SubmitHandlerDeleteProps = Pick<
  PricingsHandlersProps,
  "selectedRow" | "setData" | "setLoading"
>;

type SubmitHandlerDeleteMultipleProps = Pick<
  PricingsHandlersProps,
  "selectedRows" | "setData" | "setLoading" | "setSelectedRows"
>;

type SubmitHandlerEditProps = Pick<
  SubmitHandlerProps,
  | "form"
  | "router"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
  | "values"
>;

type SubmitHandlerProps = Pick<
  PricingsHandlersProps,
  | "form"
  | "router"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
> & {
  values: PricingSchema;
};

export type {
  PricingsHandlersProps,
  PricingsHandlersReturn,
  CreateHandlerProps,
  DeleteHandlerProps,
  DeleteMultipleHandlerProps,
  EditHandlerProps,
  OpenChangeAlertDialogHandlerProps,
  OpenChangeDialogHandlerProps,
  SubmitHandlerCreateProps,
  SubmitHandlerDeleteMultipleProps,
  SubmitHandlerDeleteProps,
  SubmitHandlerEditProps,
  SubmitHandlerProps,
};
