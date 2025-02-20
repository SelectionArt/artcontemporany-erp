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
import type { Artwork } from "../../types/artworks.container.types";
import type {
  GetColumnsConfigProps,
  GetColumnsConfigReturn,
  GetMultipleSelectActionsProps,
  GetMultipleSelectActionsReturn,
} from "./types/artworks.hook.utils.types";

function getColumnsConfig({
  handleDelete,
  handleEdit,
  handleNavigate,
}: GetColumnsConfigProps<Artwork>): GetColumnsConfigReturn<Artwork> {
  return [
    {
      cell: ({ row }) => <SelectRowCheckbox row={row} />,
      enableHiding: false,
      header: ({ table }) => <SelectAllCheckbox table={table} />,
      id: "selection",
    },
    {
      cell: ({ row }) => (
        <Link href={`/galeria/${row.original.id}`}>
          <div className="relative m-2 size-16">
            <Image
              src={row.original.images[0].url}
              alt="Imagen de la obra"
              fill={true}
              className="rounded-md border object-cover"
            />
          </div>
        </Link>
      ),
      header: "Imagen",
      meta: "Imagen",
    },
    {
      accessorKey: "title",
      header: ({ column }) => <ColumnSorter column={column} label="Título" />,
      meta: "Título",
    },
    {
      accessorFn: (row) => row.artist.name,
      header: ({ column }) => <ColumnSorter column={column} label="Artista" />,
      id: "artist",
      meta: "Artista",
    },
    {
      accessorFn: (row) => row.support?.name || "",
      header: ({ column }) => <ColumnSorter column={column} label="Soporte" />,
      id: "support",
      meta: "Soporte",
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
      accessorFn: (row) =>
        row.referenceCode
          ? `${row.referenceNumber}-${row.referenceCode}`
          : row.referenceNumber,
      header: ({ column }) => (
        <ColumnSorter column={column} label="Referencia" />
      ),
      id: "referenceNumber",
      meta: "Referencia",
    },
    {
      accessorFn: (row) => row.colors.map((color) => color.name).join(", "),
      cell: ({ row }) => {
        return (
          <div className="flex flex-wrap items-center gap-1">
            {row.original.colors.map((color) => (
              <div key={color.id} className="flex items-center gap-1">
                <div
                  className="h-4 w-4 rounded-full"
                  style={{ backgroundColor: color.hex }}
                />
                <span>{color.name}</span>
              </div>
            ))}
          </div>
        );
      },
      header: ({ column }) => <ColumnSorter column={column} label="Color" />,
      id: "colors",
      meta: "Color",
    },
    {
      accessorFn: (row) => row.style?.name || "",
      header: ({ column }) => <ColumnSorter column={column} label="Estilo" />,
      id: "style",
      meta: "Estilo",
    },
    {
      accessorFn: (row) => row.finish?.name || "",
      header: ({ column }) => <ColumnSorter column={column} label="Técnica" />,
      id: "finish",
      meta: "Técnica",
    },
    {
      accessorFn: (row) => row.format?.name || "",
      header: ({ column }) => <ColumnSorter column={column} label="Formato" />,
      id: "format",
      meta: "Formato",
    },
    {
      accessorFn: (row) => row.tag,
      header: ({ column }) => <ColumnSorter column={column} label="Tag" />,
      id: "tag",
      meta: "Tag",
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
            { icon: Eye, label: "Ver obra", onClick: handleNavigate },
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
