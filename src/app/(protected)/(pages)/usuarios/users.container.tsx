"use client";
// Components
import { AlertDialogWrapper } from "@/components/alert-dialog-wrapper/alert-dialog-wrapper.component";
import { UserForm } from "./components/user-form/user-form.component";
import { DataTable } from "@/components/data-table/data-table.component";
import { DialogWrapper } from "@/components/dialog-wrapper/dialog-wrapper.component";
// Hooks
import { UsersHook } from "./hooks/users.hook";
// Types
import type { UsersProps } from "./types/users.container.types";

const UsersContainer = ({ initialData }: UsersProps) => {
  const {
    columns,
    data,
    form,
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
  } = UsersHook({ initialData });

  return (
    <div className="flex w-full grow p-4">
      <DataTable
        columns={columns}
        data={data}
        initialColumnVisibility={{}}
        multipleSelectActionsProps={multipleSelectActionsProps}
      />
      <DialogWrapper
        description={`Rellena los campos para ${selectedRow ? "editar" : "crear"} un usuario.`}
        onOpenChange={handleOpenChangeDialog}
        open={openDialog}
        title={`${selectedRow ? "Editar" : "Crear"} usuario`}
      >
        <UserForm
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
            ? "los usuarios seleccionados"
            : "el usuario seleccionado"
        }?`}
        open={openAlert}
        onOpenChange={handleOpenChangeAlertDialog}
        title={`Eliminar ${selectedRows.length > 1 ? "usuarios" : "usuario"}`}
      />
    </div>
  );
};

export { UsersContainer };
