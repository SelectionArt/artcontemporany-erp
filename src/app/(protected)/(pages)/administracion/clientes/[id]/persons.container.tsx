"use client";
// Components
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { AlertDialogWrapper } from "@/components/alert-dialog-wrapper/alert-dialog-wrapper.component";
import { PersonForm } from "./components/person-form/person-form.component";
import { DataTable } from "@/components/data-table/data-table.component";
import { DialogWrapper } from "@/components/dialog-wrapper/dialog-wrapper.component";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
// Hooks
import { PersonsHook } from "./hooks/persons.hook";
// Types
import type { PersonsProps } from "./types/persons.container.types";
const PersonsContainer = ({ client, initialData }: PersonsProps) => {
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
  } = PersonsHook({ initialData });

  if (!client) {
    return <div>Cliente no encontrado</div>;
  }

  return (
    <div className="flex w-full grow flex-col gap-4 p-4">
      <Card className="max-w-auto p-0">
        <CardContent>
          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-semibold">{client.name}</h1>
              <p className="text-muted-foreground text-lg">
                {client.legalName}
              </p>
            </div>
          </div>

          <Separator />

          <div className="flex max-w-xl flex-col gap-4">
            <h2 className="text-base font-semibold">Detalles</h2>
            <div className="grid grid-cols-2 gap-2">
              <div>CIF:</div>
              <div>{client.cif || "N/A"}</div>
              <div>Email:</div>
              <div>{client.email || "N/A"}</div>
              <div>Teléfono:</div>
              <div>{client.phone || "N/A"}</div>
              <div>Dirección:</div>
              <div>{client.address || "N/A"}</div>
              <div>Dirección de envío:</div>
              <div>{client.sendAddress || "N/A"}</div>
              <div>IBAN:</div>
              <div>{client.iban || "N/A"}</div>
              <div>Creado el:</div>
              <div>
                {format(new Date(client.createdAt), "PPP", { locale: es })}
              </div>
              <div>Última actualización:</div>
              <div>
                {format(new Date(client.updatedAt), "PPP", { locale: es })}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <DataTable
        columns={columns}
        data={data}
        initialColumnVisibility={{}}
        multipleSelectActionsProps={multipleSelectActionsProps}
        onCreateRecord={handleCreate}
      />
      <DialogWrapper
        description={`Rellena los campos para ${selectedRow ? "editar" : "crear"} un persona.`}
        onOpenChange={handleOpenChangeDialog}
        open={openDialog}
        title={`${selectedRow ? "Editar" : "Crear"} persona`}
      >
        <PersonForm
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
            ? "los personas seleccionados"
            : "el persona seleccionado"
        }?`}
        open={openAlert}
        onOpenChange={handleOpenChangeAlertDialog}
        title={`Eliminar ${selectedRows.length > 1 ? "personas" : "persona"}`}
      />
    </div>
  );
};

export { PersonsContainer };
