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

  const clientsValues = (() => {
    const search = searchValueClient.toLowerCase().trim();

    // Cliente actualmente seleccionado (si existe)
    const selectedClient = clients.find((c) => c.id === clientId);

    // Filtro de coincidencias de búsqueda
    const filtered = clients
      .filter((client) => {
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
        label: `${client.name}${
          client.legalName ? ` · ${client.legalName}` : ""
        }${client.cif ? ` · ${client.cif}` : ""}`,
      }));

    // Si hay un cliente seleccionado, antepónlo a la lista (y evita duplicarlo)
    return selectedClient
      ? [
          {
            value: selectedClient.id,
            label: `${selectedClient.name}${
              selectedClient.legalName ? ` · ${selectedClient.legalName}` : ""
            }${selectedClient.cif ? ` · ${selectedClient.cif}` : ""}`,
          },
          ...filtered.filter((c) => c.value !== selectedClient.id),
        ]
      : filtered;
  })();

  useEffect(() => {
    const selectedClient = clients.find((c) => c.id === clientId);

    if (selectedClient) {
      const label = `${selectedClient.name}${
        selectedClient.legalName ? ` · ${selectedClient.legalName}` : ""
      }${selectedClient.cif ? ` · ${selectedClient.cif}` : ""}`;
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
