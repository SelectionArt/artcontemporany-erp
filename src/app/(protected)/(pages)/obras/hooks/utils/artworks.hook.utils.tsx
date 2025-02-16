// Vendors
import Image from "next/image";
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
  artists,
  colors,
  finishes,
  formats,
  handleDelete,
  handleEdit,
  handleNavigate,
  styles,
  supports,
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
        <div className="relative m-2 size-16">
          <Image
            src={row.original.images[0]}
            alt="Imagen de la obra"
            fill={true}
            className="rounded-md border object-cover"
          />
        </div>
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
      accessorFn: (row) =>
        artists.find((artist) => artist.id === row.artistId)?.name || "",
      header: ({ column }) => <ColumnSorter column={column} label="Artista" />,
      id: "artistId",
      meta: "Artista",
    },
    {
      cell: ({ row }) =>
        supports.find((support) => support.id === row.original.supportId)?.name,
      header: ({ column }) => <ColumnSorter column={column} label="Soporte" />,
      id: "supportId",
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
      accessorFn: (row) =>
        colors.find((color) => color.id === row.colorId)?.name || "",
      cell: ({ row }) => {
        return (
          <div className="flex items-center gap-2">
            <div
              className="h-6 w-6 rounded-full"
              style={{
                backgroundColor: colors.find(
                  (color) => color.id === row.original.colorId,
                )?.hex,
              }}
            />
            <span>
              {colors.find((color) => color.id === row.original.colorId)?.name}
            </span>
          </div>
        );
      },
      id: "colorId",
      header: ({ column }) => <ColumnSorter column={column} label="Color" />,
      meta: "Color",
    },
    {
      accessorFn: (row) =>
        styles.find((style) => style.id === row.styleId)?.name || "",
      id: "styleId",
      meta: "Estilo",
    },
    {
      accessorFn: (row) =>
        finishes.find((finish) => finish.id === row.finishId)?.name || "",
      header: ({ column }) => <ColumnSorter column={column} label="Acabado" />,
      id: "finishId",
      meta: "Acabado",
    },
    {
      accessorFn: (row) =>
        formats.find((format) => format.id === row.formatId)?.name || "",
      header: ({ column }) => <ColumnSorter column={column} label="Formato" />,
      id: "formatId",
      meta: "Formato",
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
