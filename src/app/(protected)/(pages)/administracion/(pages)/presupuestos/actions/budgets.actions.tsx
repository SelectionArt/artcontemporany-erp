"use server";
// Libs
import { prisma } from "@/lib/prisma";
// Types
import type { FetchBudgetsReturn } from "./types/budgets.actions.types";

const fetchBudgets = async (): Promise<FetchBudgetsReturn> => {
  try {
    const budgets = await prisma.budget.findMany({
      where: {
        status: {
          in: ["pending", "rejected"],
        },
      },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        clientId: true,
        client: { select: { id: true, name: true } },
        date: true,
        number: true,
        observations: true,
        reference: true,
        validity: true,
        discount: true,
        transport: true,
        tax: true,
        paymentMethod: true,
        status: true,
        surcharge: true,
        sendAddress: true,
        showIBAN: true,
        createdAt: true,
        updatedAt: true,
        budgetItems: {
          select: {
            artworkId: true,
            artworkPrice: true,
            artworkPricingId: true,
            frameId: true,
            framePrice: true,
            framePricingId: true,
            height: true,
            width: true,
            quantity: true,
            observations: true,
          },
        },
        budgetSignature: {
          select: {
            imageUrl: true,
          },
        },
      },
    });

    return budgets.map(({ budgetItems, ...budget }) => ({
      ...budget,
      observations: budget.observations ?? "",
      reference: budget.reference ?? "",
      sendAddress: budget.sendAddress ?? "",
      items: budgetItems.map((item) => ({
        ...item,
        artworkPricingId: item.artworkPricingId ?? "",
        frameId: item.frameId ?? "",
        framePricingId: item.framePricingId ?? "",
        observations: item.observations ?? "",
      })),
      signature: budget.budgetSignature ?? null,
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};

export { fetchBudgets };
