"use client";
// Components
import { AlertDialogWrapper } from "../../../../components/alert-dialog-wrapper/alert-dialog-wrapper.component";
import { ArtworkForm } from "./components/artwork-form/artwork-form.component";
import { DataTable } from "@/components/data-table/data-table.component";
import { DialogWrapper } from "../../../../components/dialog-wrapper/dialog-wrapper.component";
// Hooks
import { ArtworksHook } from "./hooks/artworks.hook";
// Types
import type { ArtworksProps } from "./types/artworks.container.types";

const ArtworksContainer = ({
  artists,
  colors,
  finishes,
  formats,
  initialData,
  styles,
  supports,
}: ArtworksProps) => {
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
  } = ArtworksHook({
    artists,
    colors,
    finishes,
    formats,
    initialData,
    styles,
    supports,
  });

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
        description={`Rellena los campos para ${selectedRow ? "editar" : "crear"} una obra.`}
        onOpenChange={handleOpenChangeDialog}
        open={openDialog}
        title={`${selectedRow ? "Editar" : "Crear"} obra`}
      >
        <ArtworkForm
          artists={artists}
          colors={colors}
          finishes={finishes}
          form={form}
          formats={formats}
          handleSubmit={handleSubmit}
          label={selectedRow ? "Editar" : "Crear"}
          loading={loading}
          styles={styles}
          supports={supports}
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
            ? "las obras seleccionadas"
            : "la obra seleccionada"
        }?`}
        open={openAlert}
        onOpenChange={handleOpenChangeAlertDialog}
        title={`Eliminar ${selectedRows.length > 1 ? "obras" : "obra"}`}
      />
    </div>
  );
};

export { ArtworksContainer };
