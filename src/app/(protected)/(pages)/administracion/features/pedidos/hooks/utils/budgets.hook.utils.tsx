// Vendors
import { format } from "date-fns";
// Components
import { RowActions } from "@/components/data-table/components/row-actions/row-actions.component";
import { SelectAllCheckbox } from "@/components/data-table/components/select-all-checkbox/select-all-checkbox.component";
import { SelectRowCheckbox } from "@/components/data-table/components/select-row-checkbox/select-row-checkbox.component";
import { ColumnSorter } from "@/components/data-table/components/column-sorter/column-sorter.component";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
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
  handleStatusChange,
}: GetColumnsConfigProps<Budget>): GetColumnsConfigReturn<Budget> {
  return [
    {
      cell: ({ row }) => <SelectRowCheckbox row={row} />,
      enableHiding: false,
      header: ({ table }) => <SelectAllCheckbox table={table} />,
      id: "selection",
    },
    {
      accessorFn: (row) => String(row.number),
      header: ({ column }) => <ColumnSorter column={column} label="Número" />,
      id: "number",
      meta: "Número",
    },

    {
      accessorFn: (row) => format(new Date(row.date), "dd/MM/yyyy"),
      cell: ({ row }) => format(new Date(row.original.date), "dd/MM/yyyy"),
      header: ({ column }) => <ColumnSorter column={column} label="Fecha" />,
      id: "date",
      meta: "Fecha",
    },
    {
      accessorFn: (row) => row.client.name,
      cell: ({ row }) => row.original.client.name,
      header: "Cliente",
      id: "client",
      meta: "Cliente",
    },
    {
      accessorKey: "status",
      header: "Estado",
      id: "status",
      cell: ({ row }) => {
        const { id, status } = row.original;

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
              label: "Completado",
              className: "bg-orange-100 text-orange-800",
            },
          };

        return (
          <Select
            value={status}
            onValueChange={(newStatus) => handleStatusChange({ id, newStatus })}
          >
            <SelectTrigger
              className={`h-8 w-[130px] border-0 ${
                statusMap[status]?.className || "bg-gray-100 text-gray-800"
              }`}
            >
              <SelectValue placeholder="Estado" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(statusMap).map(([key, { label }]) => (
                <SelectItem key={key} value={key}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      },
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
              label: "Descargar PDF presupuesto",
              onClick: (row) => handleDownloadPDF({ row, type: "budget" }),
            },
            {
              icon: FileDown,
              label: "Descargar PDF factura proforma",
              onClick: (row) => handleDownloadPDF({ row, type: "invoice" }),
            },
            {
              icon: FileDown,
              label: "Descargar PDF nota entrega",
              onClick: (row) =>
                handleDownloadPDF({ row, type: "deliveryNote" }),
            },
            {
              icon: FileDown,
              label: "Descargar PDF confirmación de pedido",
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
