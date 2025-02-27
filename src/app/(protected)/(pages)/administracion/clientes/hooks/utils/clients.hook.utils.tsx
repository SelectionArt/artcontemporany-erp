// Vendors
import Link from "next/link";
// Components
import { RowActions } from "@/components/data-table/components/row-actions/row-actions.component";
import { SelectAllCheckbox } from "@/components/data-table/components/select-all-checkbox/select-all-checkbox.component";
import { SelectRowCheckbox } from "@/components/data-table/components/select-row-checkbox/select-row-checkbox.component";
import { ColumnSorter } from "@/components/data-table/components/column-sorter/column-sorter.component";
// Icons
import { Ellipsis, Eye, SquarePen, Trash2 } from "lucide-react";
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
  handleNavigate,
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
      cell: ({ row }) => (
        <Link href={`/administracion/clientes/${row.original.id}`}>
          {row.original.name}
        </Link>
      ),
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
      accessorKey: "cif",
      header: ({ column }) => <ColumnSorter column={column} label="CIF" />,
      meta: "CIF",
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
            { icon: Eye, label: "Ver cliente", onClick: handleNavigate },
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
