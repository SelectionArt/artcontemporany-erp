"use client";
// Components
import { AlertDialogWrapper } from "../../../../../../components/alert-dialog-wrapper/alert-dialog-wrapper.component";
import { FinishForm } from "./components/finish-form/finish-form.component";
import { DataTable } from "@/components/data-table/data-table.component";
import { DialogWrapper } from "../../../../../../components/dialog-wrapper/dialog-wrapper.component";
// Hooks
import { FinishesHook } from "./hooks/finishes.hook";
// Types
import type { FinishesProps } from "./types/finishes.container.types";

const FinishesContainer = ({ initialData }: FinishesProps) => {
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
  } = FinishesHook({ initialData });

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
        description={`Rellena los campos para ${selectedRow ? "editar" : "crear"} un acabado.`}
        onOpenChange={handleOpenChangeDialog}
        open={openDialog}
        title={`${selectedRow ? "Editar" : "Crear"} acabado`}
      >
        <FinishForm
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
            ? "los acabados seleccionados"
            : "el acabado seleccionado"
        }?`}
        open={openAlert}
        onOpenChange={handleOpenChangeAlertDialog}
        title={`Eliminar ${selectedRows.length > 1 ? "acabados" : "acabado"}`}
      />
    </div>
  );
};

export { FinishesContainer };
