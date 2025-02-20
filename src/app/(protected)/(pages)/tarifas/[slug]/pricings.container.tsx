"use client";
// Components
import { AlertDialogWrapper } from "@/components/alert-dialog-wrapper/alert-dialog-wrapper.component";
import { PricingForm } from "./components/pricing-form/pricing-form.component";
import { IncrementForm } from "./components/increment-form/increment-form.component";
import { DataTable } from "@/components/data-table/data-table.component";
import { DialogWrapper } from "@/components/dialog-wrapper/dialog-wrapper.component";
// Hooks
import { PricingsHook } from "./hooks/pricings.hook";
// Types
import type { PricingsProps } from "./types/pricings.container.types";

const PricingsContainer = ({ initialData }: PricingsProps) => {
  const {
    columns,
    data,
    handleCreate,
    handleOpenChangeAlertDialog,
    handleOpenChangeIncrementDialog,
    handleOpenChangePricingDialog,
    handleSubmitDelete,
    handleSubmitDeleteMultiple,
    handleSubmitIncrement,
    handleSubmitPricing,
    headerActionsProps,
    incrementForm,
    loadingIncrement,
    loadingPricing,
    multipleSelectActionsProps,
    openAlert,
    openIncrementDialog,
    openPricingDialog,
    pricingForm,
    selectedRow,
    selectedRows,
  } = PricingsHook({ initialData });

  return (
    <div className="flex w-full grow p-4">
      <DataTable
        columns={columns}
        data={data}
        headerActions={headerActionsProps}
        initialColumnVisibility={{}}
        multipleSelectActionsProps={multipleSelectActionsProps}
        onCreateRecord={handleCreate}
      />
      <DialogWrapper
        description={`Rellena los campos para ${selectedRow ? "editar" : "crear"} una tarifa.`}
        onOpenChange={handleOpenChangePricingDialog}
        open={openPricingDialog}
        title={`${selectedRow ? "Editar" : "Crear"} tarifa`}
      >
        <PricingForm
          form={pricingForm}
          handleSubmit={handleSubmitPricing}
          label={selectedRow ? "Editar" : "Crear"}
          loading={loadingPricing}
        />
      </DialogWrapper>
      <DialogWrapper
        description="Rellena los campos para aplicar un incremento fijo y/o porcentual a las tarifas seleccionadas."
        onOpenChange={handleOpenChangeIncrementDialog}
        open={openIncrementDialog}
        title="Icrementar tarifas"
      >
        <IncrementForm
          form={incrementForm}
          handleSubmit={handleSubmitIncrement}
          label="Incrementar"
          loading={loadingIncrement}
        />
      </DialogWrapper>
      <AlertDialogWrapper
        action={{
          onClick: selectedRows.length
            ? handleSubmitDeleteMultiple
            : handleSubmitDelete,
          label: "Eliminar",
        }}
        cancel={{
          label: "Cancelar",
        }}
        description={`¿Estás seguro de que quieres eliminar ${
          selectedRows.length > 1
            ? "las tarifas seleccionadas"
            : "la tarifa seleccionada"
        }?`}
        open={openAlert}
        onOpenChange={handleOpenChangeAlertDialog}
        title={`Eliminar ${selectedRows.length > 1 ? "tarifas" : "tarifa"}`}
      />
    </div>
  );
};

export { PricingsContainer };
