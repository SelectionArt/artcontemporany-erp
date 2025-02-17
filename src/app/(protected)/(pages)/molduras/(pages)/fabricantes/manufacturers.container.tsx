"use client";
// Components
import { AlertDialogWrapper } from "../../../../../../components/alert-dialog-wrapper/alert-dialog-wrapper.component";
import { ManufacturerForm } from "./components/manufacturer-form/manufacturer-form.component";
import { DataTable } from "@/components/data-table/data-table.component";
import { DialogWrapper } from "../../../../../../components/dialog-wrapper/dialog-wrapper.component";
// Hooks
import { ManufacturersHook } from "./hooks/manufacturers.hook";
// Types
import type { ManufacturersProps } from "./types/manufacturers.container.types";

const ManufacturersContainer = ({ initialData }: ManufacturersProps) => {
  const {
    columns,
    data,
    form,
    handleCreate,
    handleOpenChangeAlertDialog,
    handleOpenChangeDialog,
    handleSubmit,
    handleSubmitDelete,
    handleSubmitDeleteMultiple,
    loading,
    multipleSelectActionsProps,
    openAlert,
    openDialog,
    selectedRow,
    selectedRows,
  } = ManufacturersHook({ initialData });

  return (
    <div className="flex grow p-4">
      <DataTable
        columns={columns}
        data={data}
        initialColumnVisibility={{}}
        multipleSelectActionsProps={multipleSelectActionsProps}
        onCreateRecord={handleCreate}
      />
      <DialogWrapper
        description={`Rellena los campos para ${selectedRow ? "editar" : "crear"} un fabricante.`}
        onOpenChange={handleOpenChangeDialog}
        open={openDialog}
        title={`${selectedRow ? "Editar" : "Crear"} fabricante`}
      >
        <ManufacturerForm
          form={form}
          handleSubmit={handleSubmit}
          label={selectedRow ? "Editar" : "Crear"}
          loading={loading}
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
            ? "los fabricantes seleccionados"
            : "el fabricante seleccionado"
        }?`}
        open={openAlert}
        onOpenChange={handleOpenChangeAlertDialog}
        title={`Eliminar ${selectedRows.length > 1 ? "fabricantes" : "fabricante"}`}
      />
    </div>
  );
};

export { ManufacturersContainer };
