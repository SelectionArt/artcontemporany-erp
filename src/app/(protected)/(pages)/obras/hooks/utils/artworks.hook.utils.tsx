// Components
import { RowActions } from "@/components/data-table/components/row-actions/row-actions.component";
import { SelectAllCheckbox } from "@/components/data-table/components/select-all-checkbox/select-all-checkbox.component";
import { SelectRowCheckbox } from "@/components/data-table/components/select-row-checkbox/select-row-checkbox.component";
import { ColumnSorter } from "@/components/data-table/components/column-sorter/column-sorter.component";
// Icons
import { Ellipsis, SquarePen, Trash2 } from "lucide-react";
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
      accessorKey: "title",
      header: ({ column }) => <ColumnSorter column={column} label="Título" />,
      meta: "Título",
    },
    {
      accessorKey: "artistId",
      cell: ({ row }) =>
        artists.find((artist) => artist.id === row.original.artistId)?.name,
      header: ({ column }) => <ColumnSorter column={column} label="Artista" />,
      meta: "Artista",
    },
    {
      accessorKey: "supportId",
      cell: ({ row }) =>
        supports.find((support) => support.id === row.original.supportId)?.name,
      header: ({ column }) => <ColumnSorter column={column} label="Soporte" />,
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
      accessorKey: "reference",
      header: ({ column }) => (
        <ColumnSorter column={column} label="Referencia" />
      ),
      meta: "Referencia",
    },
    {
      accessorKey: "colorId",
      cell: ({ row }) =>
        colors.find((color) => color.id === row.original.colorId)?.name,
      header: ({ column }) => <ColumnSorter column={column} label="Color" />,
      meta: "Color",
    },
    {
      accessorKey: "styleId",
      cell: ({ row }) =>
        styles.find((style) => style.id === row.original.styleId)?.name,
      header: ({ column }) => <ColumnSorter column={column} label="Estilo" />,
      meta: "Estilo",
    },
    {
      accessorKey: "finishId",
      cell: ({ row }) =>
        finishes.find((finish) => finish.id === row.original.finishId)?.name,
      header: ({ column }) => <ColumnSorter column={column} label="Acabado" />,
      meta: "Acabado",
    },
    {
      accessorKey: "formatId",
      cell: ({ row }) =>
        formats.find((format) => format.id === row.original.formatId)?.name,
      header: ({ column }) => <ColumnSorter column={column} label="Formato" />,
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
