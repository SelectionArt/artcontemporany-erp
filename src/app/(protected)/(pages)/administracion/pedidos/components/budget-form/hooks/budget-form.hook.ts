"use client";
// Vendors
import { useState } from "react";
// Types
import type {
  BudgetsHookProps,
  BudgetsHookReturn,
} from "./types/budgets.hook.types";

const BudgetsHook = ({
  clients,
  form,
}: BudgetsHookProps): BudgetsHookReturn => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const clientId = form.watch("clientId");

  const clientsValues = clients
    .filter(
      (client) =>
        client.id === clientId ||
        [client.name, client.legalName, client.cif].some((field) =>
          field?.toLowerCase().includes(clientId.toLowerCase()),
        ),
    )
    .slice(0, 10)
    .map((client) => ({
      value: client.id,
      label: client.name,
    }));

  return {
    clientsValues,
    isCalendarOpen,
    setIsCalendarOpen,
  };
};

export { BudgetsHook };
