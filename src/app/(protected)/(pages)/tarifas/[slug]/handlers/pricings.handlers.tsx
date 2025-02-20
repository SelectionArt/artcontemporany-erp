// Vendors
import { toast } from "sonner";
// Actions
import {
  applyIncrement,
  createPricing,
  deletePricing,
  deleteMultiplePricings,
  updatePricing,
  uploadExcel,
} from "../actions/pricings.actions";
// Types
import type {
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
} from "./types/pricings.handlers.types";

const applyIncrementHandler = async ({
  rows,
  setSelectedRows,
  setOpenIncrementDialog,
}: ApplyIncrementHandlerProps): Promise<void> => {
  setSelectedRows(rows);
  setOpenIncrementDialog(true);
};

const createHandler = ({ setOpenPricingDialog }: CreateHandlerProps): void => {
  setOpenPricingDialog(true);
};

const deleteHandler = ({
  row,
  setSelectedRow,
  setOpenAlert,
}: DeleteHandlerProps): void => {
  setSelectedRow(row);
  setOpenAlert(true);
};

const deleteMultipleHandler = ({
  rows,
  setSelectedRows,
  setOpenAlert,
}: DeleteMultipleHandlerProps): void => {
  setSelectedRows(rows);
  setOpenAlert(true);
};

const editHandler = ({
  pricingForm,
  row,
  setSelectedRow,
  setOpenPricingDialog,
}: EditHandlerProps): void => {
  pricingForm.reset(row, { keepDefaultValues: true });
  setSelectedRow(row);
  setOpenPricingDialog(true);
};

const openChangeAlertDialogHandler = ({
  open,
  selectedRow,
  selectedRows,
  setOpenAlert,
  setSelectedRow,
  setSelectedRows,
}: OpenChangeAlertDialogHandlerProps): void => {
  setOpenAlert(open);

  if (!open && selectedRow) {
    setSelectedRow(null);
  }

  if (!open && selectedRows.length) {
    setSelectedRows([]);
  }
};

const openChangeIncrementDialogHandler = ({
  incrementForm,
  open,
  setOpenIncrementDialog,
}: OpenChangeIncrementDialogHandlerProps): void => {
  setOpenIncrementDialog(open);

  if (!open) {
    incrementForm.reset();
  }
};

const openChangePricingDialogHandler = ({
  pricingForm,
  open,
  selectedRow,
  setOpenPricingDialog,
  setSelectedRow,
}: OpenChangeDialogHandlerProps): void => {
  setOpenPricingDialog(open);

  if (!open && selectedRow) {
    pricingForm.reset();
    setSelectedRow(null);
  }
};

const submitPricingHandler = ({
  pricingForm,
  params,
  selectedRow,
  setData,
  setLoadingPricing,
  setOpenPricingDialog,
  setSelectedRow,
  values,
}: SubmitHandlerProps): void => {
  if (selectedRow) {
    submitHandlerEdit({
      selectedRow,
      pricingForm,
      setData,
      setLoadingPricing,
      setOpenPricingDialog,
      setSelectedRow,
      values,
    });
  } else {
    submitHandlerCreate({
      pricingForm,
      params,
      setData,
      setLoadingPricing,
      setOpenPricingDialog,
      values,
    });
  }
};

const submitHandlerCreate = async ({
  pricingForm,
  params,
  setData,
  setLoadingPricing,
  setOpenPricingDialog,
  values,
}: SubmitHandlerCreateProps): Promise<void> => {
  setLoadingPricing(true);

  try {
    const { pricing, error, success } = await createPricing({
      slug: params.slug,
      values,
    });

    if (error) {
      toast.error(error);
      return;
    }

    if (success && pricing) {
      setData((prev) => [...prev, pricing].sort((a, b) => a.price - b.price));
      pricingForm.reset();
      setOpenPricingDialog(false);
      toast.success(success);
    }
  } catch (error) {
    console.error(error);
    toast.error("Error al crear la tarifa. Por favor, inténtalo de nuevo");
  } finally {
    setLoadingPricing(false);
  }
};

const submitHandlerEdit = async ({
  pricingForm,
  selectedRow,
  setData,
  setLoadingPricing,
  setOpenPricingDialog,
  setSelectedRow,
  values,
}: SubmitHandlerEditProps): Promise<void> => {
  if (!selectedRow) {
    return;
  }

  setLoadingPricing(true);

  try {
    const { pricing, error, success } = await updatePricing({
      id: selectedRow.id,
      values,
    });

    if (error) {
      toast.error(error);
      return;
    }

    if (success && pricing) {
      setData((prev) =>
        prev
          .map((item) => (item.id === pricing.id ? pricing : item))
          .sort((a, b) => a.price - b.price),
      );
      pricingForm.reset();
      setOpenPricingDialog(false);
      setSelectedRow(null);
      toast.success(success);
    }
  } catch (error) {
    console.error(error);
    toast.error("Error al actualizar la tarifa. Por favor, inténtalo de nuevo");
  } finally {
    setLoadingPricing(false);
  }
};

const submitHandlerDelete = async ({
  selectedRow,
  setData,
  setLoadingPricing,
}: SubmitHandlerDeleteProps): Promise<void> => {
  if (!selectedRow) {
    return;
  }

  setLoadingPricing(true);

  try {
    const { success, error } = await deletePricing({ id: selectedRow.id });

    if (error) {
      toast.error(error);
      return;
    }

    if (success) {
      setData((prev) => prev.filter((item) => item.id !== selectedRow.id));
      toast.success(success);
    }
  } catch (error) {
    console.error(error);
    toast.error("Error al eliminar la tarifa. Por favor, inténtalo de nuevo");
  } finally {
    setLoadingPricing(false);
  }
};

const submitHandlerDeleteMultiple = async ({
  selectedRows,
  setData,
  setLoadingPricing,
  setSelectedRows,
}: SubmitHandlerDeleteMultipleProps): Promise<void> => {
  setLoadingPricing(true);
  try {
    const { success, error } = await deleteMultiplePricings({
      ids: selectedRows.map((row) => row.id),
    });

    if (error) {
      toast.error(error);
      return;
    }

    if (success) {
      setData((prev) =>
        prev.filter((item) => !selectedRows.some((row) => row.id === item.id)),
      );
      toast.success(success);
      setSelectedRows([]);
    }
  } catch (error) {
    console.error(error);
    toast.error("Error al eliminar los tarifas. Por favor, inténtalo de nuevo");
  } finally {
    setLoadingPricing(false);
  }
};

const submitIncrementHandler = async ({
  incrementForm,
  selectedRows,
  setData,
  setLoadingIncrement,
  setOpenIncrementDialog,
  setSelectedRows,
  values,
}: SubmitHandlerIncrementProps): Promise<void> => {
  setLoadingIncrement(true);

  try {
    const { pricings, success, error } = await applyIncrement({
      ids: selectedRows.map((row) => row.id),
      values,
    });

    if (error) {
      toast.error(error);
      return;
    }

    if (success) {
      setData((prev) =>
        prev.map((item) => {
          const updatedItem = pricings.find((row) => row.id === item.id);
          return updatedItem ? updatedItem : item;
        }),
      );

      toast.success(success);
      incrementForm.reset();
      setOpenIncrementDialog(false);
      setSelectedRows([]);
    }
  } catch (error) {
    console.error(error);
    toast.error(
      "Error al aplicar el incremento. Por favor, inténtalo de nuevo",
    );
  } finally {
    setLoadingIncrement(false);
  }
};

const uploadPricingsExcelHandler = async ({
  params,
}: UploadPricingsExcelHandlerProps): Promise<void> => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".xlsx, .xls";
  input.style.display = "none";
  input.addEventListener("change", async (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (!target.files || target.files.length === 0) return;

    const file = target.files[0];

    const { success, error } = await uploadExcel({ slug: params.slug, file });

    if (error) {
      toast.error(error);
      return;
    }

    if (success) {
      toast.success(success);
    }
  });

  document.body.appendChild(input);
  input.click();

  setTimeout(() => document.body.removeChild(input), 0);
};

const PricingsHandlers = ({
  incrementForm,
  pricingForm,
  params,
  selectedRow,
  selectedRows,
  setData,
  setLoadingIncrement,
  setLoadingPricing,
  setOpenAlert,
  setOpenIncrementDialog,
  setOpenPricingDialog,
  setSelectedRow,
  setSelectedRows,
}: PricingsHandlersProps): PricingsHandlersReturn => {
  return {
    handleApplyIncrement: (rows) =>
      applyIncrementHandler({ rows, setSelectedRows, setOpenIncrementDialog }),
    handleCreate: () => createHandler({ setOpenPricingDialog }),
    handleDelete: (row) => deleteHandler({ row, setSelectedRow, setOpenAlert }),
    handleDeleteMultiple: (rows) =>
      deleteMultipleHandler({ rows, setSelectedRows, setOpenAlert }),
    handleEdit: (row) =>
      editHandler({
        pricingForm,
        row,
        setSelectedRow,
        setOpenPricingDialog,
      }),
    handleOpenChangeAlertDialog: (open) =>
      openChangeAlertDialogHandler({
        open,
        selectedRow,
        selectedRows,
        setSelectedRow,
        setSelectedRows,
        setOpenAlert,
      }),
    handleOpenChangeIncrementDialog: (open) =>
      openChangeIncrementDialogHandler({
        incrementForm,
        open,
        setOpenIncrementDialog,
      }),
    handleOpenChangePricingDialog: (open) =>
      openChangePricingDialogHandler({
        pricingForm,
        open,
        selectedRow,
        setOpenPricingDialog,
        setSelectedRow,
      }),
    handleSubmitPricing: (values) =>
      submitPricingHandler({
        pricingForm,
        params,
        selectedRow,
        setData,
        setLoadingPricing,
        setOpenPricingDialog,
        setSelectedRow,
        values,
      }),
    handleSubmitDelete: () =>
      submitHandlerDelete({ selectedRow, setData, setLoadingPricing }),
    handleSubmitDeleteMultiple: () =>
      submitHandlerDeleteMultiple({
        selectedRows,
        setData,
        setLoadingPricing,
        setSelectedRows,
      }),
    handleSubmitIncrement: (values) =>
      submitIncrementHandler({
        incrementForm,
        selectedRows,
        setData,
        setLoadingIncrement,
        setOpenIncrementDialog,
        setSelectedRows,
        values,
      }),
    handleUploadPricingsExcel: () => uploadPricingsExcelHandler({ params }),
  };
};

export { PricingsHandlers };
