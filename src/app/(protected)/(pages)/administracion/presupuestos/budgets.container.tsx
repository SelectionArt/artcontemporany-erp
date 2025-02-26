"use client";
// Vendors
import SignatureCanvas from "react-signature-canvas";
// Components
import { AlertDialogWrapper } from "@/components/alert-dialog-wrapper/alert-dialog-wrapper.component";
import { BudgetForm } from "./components/budget-form/budget-form.component";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/data-table/data-table.component";
import { DialogWrapper } from "@/components/dialog-wrapper/dialog-wrapper.component";
// Hooks
import { BudgetsHook } from "./hooks/budgets.hook";
// Icons
import { Eraser } from "lucide-react";
// Types
import type { BudgetsProps } from "./types/budgets.container.types";

const BudgetsContainer = ({
  artworks,
  budgets,
  clients,
  frames,
  pricings,
}: BudgetsProps) => {
  const {
    columns,
    data,
    fieldArray,
    form,
    handleCreate,
    handleOpenChangeAlertDialog,
    handleOpenChangeDialog,
    handleOpenChangeSignatureDialog,
    handleSubmit,
    handleSubmitDelete,
    handleSubmitDeleteMultiple,
    loading,
    multipleSelectActionsProps,
    openAlert,
    openDialog,
    openSignatureDialog,
    selectedRow,
    selectedRows,
    signatureRef,
  } = BudgetsHook({ budgets });

  return (
    <div className="flex w-full grow p-4">
      <DataTable
        columns={columns}
        data={data}
        initialColumnVisibility={{}}
        multipleSelectActionsProps={multipleSelectActionsProps}
        onCreateRecord={handleCreate}
      />
      <DialogWrapper
        className="max-w-[960px]"
        description={`Rellena los campos para ${selectedRow ? "editar" : "crear"} un presupuesto.`}
        onOpenChange={handleOpenChangeDialog}
        open={openDialog}
        title={`${selectedRow ? "Editar" : "Crear"} presupuesto`}
      >
        <BudgetForm
          artworks={artworks}
          clients={clients}
          fieldArray={fieldArray}
          form={form}
          frames={frames}
          handleSubmit={handleSubmit}
          label={selectedRow ? "Editar" : "Crear"}
          loading={loading}
          pricings={pricings}
        />
      </DialogWrapper>
      <DialogWrapper
        className="max-w-[640px]"
        description="Dibuja tu firma en el recuadro para firmar el presupuesto."
        onOpenChange={handleOpenChangeSignatureDialog}
        open={openSignatureDialog}
        title="Firmar"
      >
        <div className="flex flex-col gap-4">
          <div className="relative rounded-md border">
            <Button
              className="absolute top-4 right-4 size-10"
              onClick={() => signatureRef.current?.clear()}
              size="icon"
              variant="ghost"
            >
              <Eraser />
            </Button>
            <SignatureCanvas
              canvasProps={{ width: 590, height: 300 }}
              ref={signatureRef}
            />
          </div>
          <Button
            onClick={() => signatureRef.current?.toDataURL()}
          >
            Firmar
          </Button>
        </div>
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
            ? "los presupuestos seleccionados"
            : "el presupuesto seleccionado"
        }?`}
        open={openAlert}
        onOpenChange={handleOpenChangeAlertDialog}
        title={`Eliminar ${selectedRows.length > 1 ? "presupuestos" : "presupuesto"}`}
      />
    </div>
  );
};

export { BudgetsContainer };
