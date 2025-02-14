"use client";
// Components
import { AlertDialogWrapper } from "../../../../../../components/alert-dialog-wrapper/alert-dialog-wrapper.component";
import { StyleForm } from "./components/style-form/style-form.component";
import { DataTable } from "../../../../../../components/data-table/data-table.component";
import { DialogWrapper } from "../../../../../../components/dialog-wrapper/dialog-wrapper.component";
// Hooks
import { StylesHook } from "./hooks/styles.hook";
// Types
import type { StylesProps } from "./types/styles.container.types";

const StylesContainer = ({ initialData }: StylesProps) => {
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
  } = StylesHook({ initialData });

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
        description={`Rellena los campos para ${selectedRow ? "editar" : "crear"} un estilo.`}
        onOpenChange={handleOpenChangeDialog}
        open={openDialog}
        title={`${selectedRow ? "Editar" : "Crear"} estilo`}
      >
        <StyleForm
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
            ? "los estilos seleccionados"
            : "el estilo seleccionado"
        }?`}
        open={openAlert}
        onOpenChange={handleOpenChangeAlertDialog}
        title={`Eliminar ${selectedRows.length > 1 ? "estilos" : "estilo"}`}
      />
    </div>
  );
};

export { StylesContainer };
