"use client";
// Components
import { AlertDialogWrapper } from "../../../../../../components/alert-dialog-wrapper/alert-dialog-wrapper.component";
import { SupportForm } from "./components/support-form/support-form.component";
import { DataTable } from "../../../../../../components/data-table/data-table.component";
import { DialogWrapper } from "../../../../../../components/dialog-wrapper/dialog-wrapper.component";
// Hooks
import { SupportsHook } from "./hooks/supports.hook";
// Types
import type { SupportsProps } from "./types/supports.container.types";

const SupportsContainer = ({ initialData }: SupportsProps) => {
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
  } = SupportsHook({ initialData });

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
        description={`Rellena los campos para ${selectedRow ? "editar" : "crear"} un soporte.`}
        onOpenChange={handleOpenChangeDialog}
        open={openDialog}
        title={`${selectedRow ? "Editar" : "Crear"} soporte`}
      >
        <SupportForm
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
            ? "los soportes seleccionados"
            : "el soporte seleccionado"
        }?`}
        open={openAlert}
        onOpenChange={handleOpenChangeAlertDialog}
        title={`Eliminar ${selectedRows.length > 1 ? "soportes" : "soporte"}`}
      />
    </div>
  );
};

export { SupportsContainer };
