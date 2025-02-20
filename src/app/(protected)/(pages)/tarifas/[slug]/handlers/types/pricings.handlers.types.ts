// Types
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { Pricing } from "../../types/pricings.container.types";
import type {
  IncrementSchema,
  PricingSchema,
} from "../../schemas/types/pricing.schema.types";

type PricingsHandlersProps = {
  incrementForm: UseFormReturn<IncrementSchema>;
  pricingForm: UseFormReturn<PricingSchema>;
  params: { slug: string };
  selectedRow: Pricing | null;
  selectedRows: Pricing[];
  setData: Dispatch<SetStateAction<Pricing[]>>;
  setLoadingPricing: Dispatch<SetStateAction<boolean>>;
  setLoadingIncrement: Dispatch<SetStateAction<boolean>>;
  setOpenAlert: Dispatch<SetStateAction<boolean>>;
  setOpenIncrementDialog: Dispatch<SetStateAction<boolean>>;
  setOpenPricingDialog: Dispatch<SetStateAction<boolean>>;
  setSelectedRow: Dispatch<SetStateAction<Pricing | null>>;
  setSelectedRows: Dispatch<SetStateAction<Pricing[]>>;
};

type PricingsHandlersReturn = {
  handleApplyIncrement: (rows: Pricing[]) => void;
  handleCreate: () => void;
  handleDelete: (row: Pricing) => void;
  handleDeleteMultiple: (rows: Pricing[]) => void;
  handleEdit: (row: Pricing) => void;
  handleOpenChangeAlertDialog: (open: boolean) => void;
  handleOpenChangeIncrementDialog: (open: boolean) => void;
  handleOpenChangePricingDialog: (open: boolean) => void;
  handleSubmitDelete: () => void;
  handleSubmitDeleteMultiple: () => void;
  handleSubmitIncrement: (values: IncrementSchema) => void;
  handleSubmitPricing: (values: PricingSchema) => void;
  handleUploadPricingsExcel: () => void;
};

type ApplyIncrementHandlerProps = Pick<
  PricingsHandlersProps,
  "setSelectedRows" | "setOpenIncrementDialog"
> & {
  rows: Pricing[];
};

type CreateHandlerProps = Pick<PricingsHandlersProps, "setOpenPricingDialog">;

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
  "pricingForm" | "setSelectedRow" | "setOpenPricingDialog"
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

type OpenChangeIncrementDialogHandlerProps = Pick<
  PricingsHandlersProps,
  "setOpenIncrementDialog" | "incrementForm"
> & {
  open: boolean;
};

type OpenChangeDialogHandlerProps = Pick<
  PricingsHandlersProps,
  "pricingForm" | "selectedRow" | "setOpenPricingDialog" | "setSelectedRow"
> & {
  open: boolean;
};

type SubmitHandlerCreateProps = Pick<
  SubmitHandlerProps,
  | "pricingForm"
  | "params"
  | "setData"
  | "setLoadingPricing"
  | "setOpenPricingDialog"
  | "values"
>;

type SubmitHandlerDeleteProps = Pick<
  PricingsHandlersProps,
  "selectedRow" | "setData" | "setLoadingPricing"
>;

type SubmitHandlerDeleteMultipleProps = Pick<
  PricingsHandlersProps,
  "selectedRows" | "setData" | "setLoadingPricing" | "setSelectedRows"
>;

type SubmitHandlerEditProps = Pick<
  SubmitHandlerProps,
  | "pricingForm"
  | "selectedRow"
  | "setData"
  | "setLoadingPricing"
  | "setOpenPricingDialog"
  | "setSelectedRow"
  | "values"
>;

type SubmitHandlerProps = Pick<
  PricingsHandlersProps,
  | "pricingForm"
  | "params"
  | "selectedRow"
  | "setData"
  | "setLoadingPricing"
  | "setOpenPricingDialog"
  | "setSelectedRow"
> & {
  values: PricingSchema;
};

type SubmitHandlerIncrementProps = Pick<
  PricingsHandlersProps,
  | "incrementForm"
  | "selectedRows"
  | "setData"
  | "setLoadingIncrement"
  | "setOpenIncrementDialog"
  | "setSelectedRows"
> & {
  values: IncrementSchema;
};

type UploadPricingsExcelHandlerProps = Pick<PricingsHandlersProps, "params">;

export type {
  ApplyIncrementHandlerProps,
  CreateHandlerProps,
  DeleteHandlerProps,
  DeleteMultipleHandlerProps,
  EditHandlerProps,
  OpenChangeAlertDialogHandlerProps,
  OpenChangeIncrementDialogHandlerProps,
  OpenChangeDialogHandlerProps,
  PricingsHandlersProps,
  PricingsHandlersReturn,
  SubmitHandlerCreateProps,
  SubmitHandlerDeleteMultipleProps,
  SubmitHandlerDeleteProps,
  SubmitHandlerEditProps,
  SubmitHandlerIncrementProps,
  SubmitHandlerProps,
  UploadPricingsExcelHandlerProps,
};
