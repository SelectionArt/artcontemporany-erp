"use client";
// Vendors
import { useForm } from "react-hook-form";
import { useParams } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import constants from "../constants/persons.constants";
// Handlers
import { PersonsHandlers } from "../handlers/persons.handlers";
// Schemas
import { personSchema } from "../schemas/person.schema";
// Types
import type { Person } from "../types/persons.container.types";
import type { PersonSchema } from "../schemas/types/person.schema.types";
import type {
  PersonsHookProps,
  PersonsHookReturn,
} from "./types/persons.hook.types";
// Utils
import {
  getColumnsConfig,
  getMultipleSelectActionsProps,
} from "./utils/persons.hook.utils";

const PersonsHook = ({ initialData }: PersonsHookProps): PersonsHookReturn => {
  const [data, setData] = useState<Person[]>(initialData);
  const [loading, setLoading] = useState<boolean>(false);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<Person | null>(null);
  const [selectedRows, setSelectedRows] = useState<Person[]>([]);
  const [observations, setObservations] = useState<string>("");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const form = useForm<PersonSchema>({
    resolver: zodResolver(personSchema),
    defaultValues: constants.DEFAULT_FORM_VALUES,
  });

  const params = useParams<{ id: string }>();

  const {
    handleCreate,
    handleDelete,
    handleDeleteMultiple,
    handleEdit,
    handleOpenChangeAlertDialog,
    handleOpenChangeDialog,
    handleSaveObservations,
    handleSubmit,
    handleSubmitDelete,
    handleSubmitDeleteMultiple,
  } = PersonsHandlers({
    form,
    observations,
    params,
    selectedRow,
    selectedRows,
    setData,
    setLoading,
    setOpenAlert,
    setOpenDialog,
    setSaving,
    setSaved,
    setSelectedRow,
    setSelectedRows,
  });

  const columns = getColumnsConfig({ handleDelete, handleEdit });
  const multipleSelectActionsProps = getMultipleSelectActionsProps({
    handleDeleteMultiple,
  });

  return {
    columns,
    data,
    form,
    handleCreate,
    handleOpenChangeAlertDialog,
    handleOpenChangeDialog,
    handleSaveObservations,
    handleSubmit,
    handleSubmitDelete,
    handleSubmitDeleteMultiple,
    loading,
    multipleSelectActionsProps,
    observations,
    openAlert,
    openDialog,
    saved,
    saving,
    selectedRow,
    selectedRows,
    setObservations,
  };
};

export { PersonsHook };
