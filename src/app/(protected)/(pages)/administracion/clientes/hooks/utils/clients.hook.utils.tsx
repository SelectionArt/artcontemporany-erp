// Components
import { RowActions } from "@/components/data-table/components/row-actions/row-actions.component";
import { SelectAllCheckbox } from "@/components/data-table/components/select-all-checkbox/select-all-checkbox.component";
import { SelectRowCheckbox } from "@/components/data-table/components/select-row-checkbox/select-row-checkbox.component";
import { ColumnSorter } from "@/components/data-table/components/column-sorter/column-sorter.component";
// Icons
import { Ellipsis, SquarePen, Trash2 } from "lucide-react";
// Types
import type { Client } from "../../types/clients.container.types";
import type {
  GetColumnsConfigProps,
  GetColumnsConfigReturn,
  GetMultipleSelectActionsProps,
  GetMultipleSelectActionsReturn,
} from "./types/clients.hook.utils.types";

function getColumnsConfig({
  handleDelete,
  handleEdit,
}: GetColumnsConfigProps<Client>): GetColumnsConfigReturn<Client> {
  return [
    {
      cell: ({ row }) => <SelectRowCheckbox row={row} />,
      enableHiding: false,
      header: ({ table }) => <SelectAllCheckbox table={table} />,
      id: "selection",
    },
    {
      accessorKey: "name",
      header: ({ column }) => <ColumnSorter column={column} label="Nombre" />,
      meta: "Nombre",
    },
    {
      accessorKey: "legalName",
      header: ({ column }) => (
        <ColumnSorter column={column} label="Razón social" />
      ),
      meta: "Razón social",
    },
    {
      accessorKey: "email",
      header: ({ column }) => (
        <ColumnSorter column={column} label="Correo electrónico" />
      ),
      meta: "Correo electrónico",
    },
    {
      accessorKey: "phone",
      header: ({ column }) => <ColumnSorter column={column} label="Teléfono" />,
      meta: "Teléfono",
    },
    {
      accessorKey: "address",
      header: ({ column }) => (
        <ColumnSorter column={column} label="Dirección" />
      ),
      meta: "Dirección",
    },
    {
      accessorKey: "sendAddress",
      header: ({ column }) => (
        <ColumnSorter column={column} label="Dirección de envío" />
      ),
      meta: "Dirección de envío",
    },
    {
      accessorKey: "cif",
      header: ({ column }) => <ColumnSorter column={column} label="CIF" />,
      meta: "CIF",
    },
    {
      accessorKey: "iban",
      header: ({ column }) => <ColumnSorter column={column} label="IBAN" />,
      meta: "IBAN",
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
