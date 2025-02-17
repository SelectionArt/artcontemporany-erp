"use client";
// Components
import { AlertDialogWrapper } from "../../../../../../components/alert-dialog-wrapper/alert-dialog-wrapper.component";
import { MaterialForm } from "./components/material-form/material-form.component";
import { DataTable } from "@/components/data-table/data-table.component";
import { DialogWrapper } from "../../../../../../components/dialog-wrapper/dialog-wrapper.component";
// Hooks
import { MaterialsHook } from "./hooks/materials.hook";
// Types
import type { MaterialsProps } from "./types/materials.container.types";

const MaterialsContainer = ({ initialData }: MaterialsProps) => {
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
  } = MaterialsHook({ initialData });

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
        description={`Rellena los campos para ${selectedRow ? "editar" : "crear"} un material.`}
        onOpenChange={handleOpenChangeDialog}
        open={openDialog}
        title={`${selectedRow ? "Editar" : "Crear"} material`}
      >
        <MaterialForm
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
            ? "los materiales seleccionados"
            : "el material seleccionado"
        }?`}
        open={openAlert}
        onOpenChange={handleOpenChangeAlertDialog}
        title={`Eliminar ${selectedRows.length > 1 ? "materiales" : "material"}`}
      />
    </div>
  );
};

export { MaterialsContainer };
