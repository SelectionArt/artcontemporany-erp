// Vendors
import Image from "next/image";
import Link from "next/link";
// Components
import { RowActions } from "@/components/data-table/components/row-actions/row-actions.component";
import { SelectAllCheckbox } from "@/components/data-table/components/select-all-checkbox/select-all-checkbox.component";
import { SelectRowCheckbox } from "@/components/data-table/components/select-row-checkbox/select-row-checkbox.component";
import { ColumnSorter } from "@/components/data-table/components/column-sorter/column-sorter.component";
// Icons
import { Ellipsis, Eye, SquarePen, Trash2 } from "lucide-react";
// Types
import type { Frame } from "../../types/frames.container.types";
import type {
  GetColumnsConfigProps,
  GetColumnsConfigReturn,
  GetMultipleSelectActionsProps,
  GetMultipleSelectActionsReturn,
} from "./types/frames.hook.utils.types";

function getColumnsConfig({
  handleDelete,
  handleEdit,
  handleNavigate,
}: GetColumnsConfigProps<Frame>): GetColumnsConfigReturn<Frame> {
  return [
    {
      cell: ({ row }) => <SelectRowCheckbox row={row} />,
      enableHiding: false,
      header: ({ table }) => <SelectAllCheckbox table={table} />,
      id: "selection",
    },
    {
      cell: ({ row }) => (
        <Link
          href={`/molduras/${row.original.id}`}
          target="_blank"
          prefetch={false}
        >
          <div className="relative m-2 size-16">
            <Image
              src={`https://res.cloudinary.com/dpj6kupra/image/upload/f_auto,q_auto,w_64,h_64,c_fill/v1/${row.original.images[0].publicId}`}
              alt="Imagen de la moldura"
              fill={true}
              className="rounded-md object-cover"
            />
          </div>
        </Link>
      ),
      header: "Imagen",
      meta: "Imagen",
    },
    {
      accessorKey: "name",
      header: ({ column }) => <ColumnSorter column={column} label="Nombre" />,
      meta: "Nombre",
    },
    {
      accessorKey: "reference",
      header: ({ column }) => (
        <ColumnSorter column={column} label="Referencia" />
      ),
      meta: "Referencia",
    },
    {
      accessorKey: "width",
      header: ({ column }) => <ColumnSorter column={column} label="Ancho" />,
      meta: "Ancho",
    },
    {
      accessorKey: "height",
      header: ({ column }) => <ColumnSorter column={column} label="Alto" />,
      meta: "Alto",
    },
    {
      accessorKey: "galce",
      header: ({ column }) => <ColumnSorter column={column} label="Galce" />,
      meta: "Galce",
    },
    {
      accessorFn: (row) => row.material?.name || "",
      header: ({ column }) => <ColumnSorter column={column} label="Material" />,
      id: "material",
      meta: "Material",
    },
    {
      accessorKey: "description",
      header: ({ column }) => (
        <ColumnSorter column={column} label="Descripción" />
      ),
      meta: "Descripción",
    },
    {
      accessorFn: (row) => row.manufacturer?.name || "",
      header: ({ column }) => (
        <ColumnSorter column={column} label="Fabricante" />
      ),
      id: "manufacturer",
      meta: "Fabricante",
    },
    {
      accessorKey: "manufacturerReference",
      header: ({ column }) => (
        <ColumnSorter column={column} label="Ref. fabricante" />
      ),
      meta: "Ref. fabricante",
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
            { icon: Eye, label: "Ver moldura", onClick: handleNavigate },
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
