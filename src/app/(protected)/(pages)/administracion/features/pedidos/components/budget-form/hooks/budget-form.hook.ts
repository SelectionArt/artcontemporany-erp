"use client";
// Vendors
import { useEffect, useState } from "react";
// Types
import type {
  BudgetsHookProps,
  BudgetsHookReturn,
} from "./types/budgets.hook.types";

const BudgetsHook = ({
  clients,
  form,
}: BudgetsHookProps): BudgetsHookReturn => {
  const [searchValueClient, setSearchValueClient] = useState("");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const clientId = form.watch("clientId");

  const clientsValues = clients
    .filter((client) => {
      const search = searchValueClient.toLowerCase().trim();
      if (!search) return true;

      return (
        client.name.toLowerCase().includes(search) ||
        client.legalName?.toLowerCase().includes(search) ||
        client.cif?.toLowerCase().includes(search)
      );
    })
    .slice(0, 10)
    .map((client) => ({
      value: client.id,
      label: client.name,
    }));

  useEffect(() => {
    const selectedClient = clients.find((c) => c.id === clientId);
    if (selectedClient) {
      const label = selectedClient.name;
      if (searchValueClient !== label) {
        setSearchValueClient(label);
      }
    } else if (searchValueClient !== "") {
      setSearchValueClient("");
    }
  }, [clientId, clients]);

  return {
    clientsValues,
    isCalendarOpen,
    setIsCalendarOpen,
    searchValueClient,
    setSearchValueClient,
  };
};

export { BudgetsHook };
