// Components
import { Badge } from "@/components/ui/badge";
import { RowActions } from "@/components/data-table/components/row-actions/row-actions.component";
import { SelectAllCheckbox } from "@/components/data-table/components/select-all-checkbox/select-all-checkbox.component";
import { SelectRowCheckbox } from "@/components/data-table/components/select-row-checkbox/select-row-checkbox.component";
import { ColumnSorter } from "@/components/data-table/components/column-sorter/column-sorter.component";
// Icons
import {
  Ellipsis,
  Eye,
  FileDown,
  Mail,
  Signature,
  SquarePen,
  Trash2,
} from "lucide-react";
// Types
import type { Budget } from "../../types/budgets.container.types";
import type {
  GetColumnsConfigProps,
  GetColumnsConfigReturn,
  GetMultipleSelectActionsProps,
  GetMultipleSelectActionsReturn,
} from "./types/budgets.hook.utils.types";

function getColumnsConfig({
  handleDelete,
  handleDownloadPDF,
  handleEdit,
  handleOpenSign,
  handlePreviewPDF,
  handleSendEmail,
}: GetColumnsConfigProps<Budget>): GetColumnsConfigReturn<Budget> {
  return [
    {
      cell: ({ row }) => <SelectRowCheckbox row={row} />,
      enableHiding: false,
      header: ({ table }) => <SelectAllCheckbox table={table} />,
      id: "selection",
    },
    {
      accessorKey: "number",
      header: ({ column }) => <ColumnSorter column={column} label="Número" />,
      meta: "Número",
    },
    {
      accessorKey: "date",
      header: ({ column }) => <ColumnSorter column={column} label="Fecha" />,
      meta: "Fecha",
    },
    {
      accessorKey: "client",
      cell: ({ row }) => row.original.client.name,
      header: "Cliente",
      id: "client",
    },
    {
      accessorKey: "status",
      cell: ({ row }) => {
        const statusMap: Record<string, { label: string; className: string }> =
          {
            pending: {
              label: "Pendiente",
              className: "bg-blue-100 text-blue-800",
            },
            accepted: {
              label: "Aceptado",
              className: "bg-green-100 text-green-800",
            },
            rejected: {
              label: "Rechazado",
              className: "bg-red-100 text-red-800",
            },
            closed: {
              label: "Cerrado",
              className: "bg-orange-100 text-orange-800",
            },
          };

        const status = row.original.status;
        return (
          <Badge
            className={
              statusMap[status]?.className || "bg-gray-100 text-gray-800"
            }
          >
            {statusMap[status]?.label || "Desconocido"}
          </Badge>
        );
      },
      header: "Estado",
      id: "status",
    },
    {
      accessorKey: "signature",
      cell: ({ row }) => (row.original.signature ? "Sí" : "No"),
      header: "Firmado",
      id: "signature",
    },
    {
      cell: ({ row }) => (
        <RowActions
          row={row}
          button={{
            ariaLabel: "Abrir menú de acciones",
            icon: Ellipsis,
          }}
          actions={[
            {
              icon: Eye,
              label: "Previsualizar Presupuesto",
              onClick: (row) => handlePreviewPDF({ row, type: "budget" }),
            },
            {
              icon: Mail,
              label: "Enviar por correo",
              onClick: (row) => handleSendEmail({ row, type: "budget" }),
            },
            {
              icon: FileDown,
              label: "Descargar PDF Presupuesto",
              onClick: (row) => handleDownloadPDF({ row, type: "budget" }),
            },
            {
              icon: FileDown,
              label: "Descargar PDF Factura",
              onClick: (row) => handleDownloadPDF({ row, type: "invoice" }),
            },
            {
              icon: FileDown,
              label: "Descargar PDF Albarán",
              onClick: (row) =>
                handleDownloadPDF({ row, type: "deliveryNote" }),
            },
            {
              icon: FileDown,
              label: "Descargar PDF Confirmación de pedido",
              onClick: (row) =>
                handleDownloadPDF({ row, type: "orderConfirmation" }),
            },
            { icon: Signature, label: "Firmar", onClick: handleOpenSign },
            { icon: SquarePen, label: "Editar", onClick: handleEdit },
            { icon: Trash2, label: "Eliminar", onClick: handleDelete },
          ]}
        />
      ),
      enableHiding: false,
      header: "Acciones",
      id: "actions",
    },
  ];
}

function getMultipleSelectActionsProps<TData>({
  handleDeleteMultiple,
}: GetMultipleSelectActionsProps<TData>): GetMultipleSelectActionsReturn<TData> {
  return {
    button: {
      ariaLabel: "Abrir menú de acciones",
      icon: Ellipsis,
    },
    actions: [
      {
        icon: Trash2,
        label: "Eliminar seleccionados",
        onClick: handleDeleteMultiple,
      },
    ],
  };
}

export { getColumnsConfig, getMultipleSelectActionsProps };
