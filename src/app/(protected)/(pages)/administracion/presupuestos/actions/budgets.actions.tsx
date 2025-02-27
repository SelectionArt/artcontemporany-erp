"use server";
// Vendors
import { Resend } from "resend";
import { PDFDocument, StandardFonts, PDFFont, PDFPage, rgb } from "pdf-lib";
import { format } from "date-fns";
// Libs
import { prisma } from "@/lib/prisma";
import { uploadImage, deleteImage } from "@/lib/cloudinary";
// Schemas
import { budgetSchema } from "../schemas/budget.schema";
// Types
import type {
  CreateBudgetProps,
  CreateBudgetReturn,
  DeleteBudgetProps,
  DeleteBudgetReturn,
  DeleteMultipleBudgetsProps,
  DeleteMultipleBudgetsReturn,
  FetchArtworksReturn,
  FetchBudgetsReturn,
  FetchClientsReturn,
  FetchEmailsProps,
  FetchEmailsReturn,
  FetchFramesReturn,
  FetchPricingItemsProps,
  FetchPricingItemsReturn,
  FetchPricingsReturn,
  GeneratePDFProps,
  GeneratePDFReturn,
  SignBudgetProps,
  UpdateBudgetProps,
  UpdateBudgetReturn,
  SendEmailProps,
} from "./types/budgets.actions.types";
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

type DrawTextProps = {
  page: PDFPage;
  text: string;
  x: number;
  y: number;
  maxWidth?: number;
  align?: "left" | "right";
  font: PDFFont;
  fontSize?: number;
  color?: { r: number; g: number; b: number };
};

type DrawImageProps = {
  page: PDFPage;
  pdfDoc: PDFDocument;
  url: string;
  x: number;
  y: number;
  maxWidth: number;
  maxHeight: number;
};

const addNewPage = ({
  margins,
  pdfDoc,
}: {
  margins: {
    left: number;
    right: number;
    top: number;
    bottom: number;
  };
  pdfDoc: PDFDocument;
}): {
  height: number;
  page: PDFPage;
  yPosition: number;
  width: number;
} => {
  const page = pdfDoc.addPage([595, 842]);
  const { height, width } = page.getSize();

  const yPosition = height - margins.top;

  return { height, page, yPosition, width };
};

const drawText = ({
  page,
  text,
  x,
  y,
  maxWidth,
  align = "left",
  font,
  fontSize = 10,
  color = { r: 0, g: 0, b: 0 },
}: DrawTextProps) => {
  const lines = text.split("\n");
  let yOffset = 0;

  lines.forEach((lineText) => {
    const words = lineText.split(" ");
    let line = "";

    words.forEach((word) => {
      const testLine = line.length > 0 ? `${line} ${word}` : word;
      const textWidth = font.widthOfTextAtSize(testLine, fontSize);

      if (textWidth < (maxWidth ?? page.getWidth() - x)) {
        line = testLine;
      } else {
        const xPos =
          align === "right" ? x - font.widthOfTextAtSize(line, fontSize) : x;
        page.drawText(line, {
          x: xPos,
          y: y - yOffset,
          size: fontSize,
          font,
          color: rgb(color.r, color.g, color.b),
        });
        line = word;
        yOffset += fontSize * 1.5;
      }
    });

    if (line.length > 0) {
      const xPos =
        align === "right" ? x - font.widthOfTextAtSize(line, fontSize) : x;
      page.drawText(line, {
        x: xPos,
        y: y - yOffset,
        size: fontSize,
        font,
        color: rgb(color.r, color.g, color.b),
      });
    }

    yOffset += fontSize * 1.5;
  });

  return yOffset;
};

const drawImage = async ({
  page,
  pdfDoc,
  url,
  x,
  y,
  maxWidth,
  maxHeight,
}: DrawImageProps) => {
  const imageBytes = await fetch(url).then((res) => res.arrayBuffer());
  const image = url.endsWith(".png")
    ? await pdfDoc.embedPng(imageBytes)
    : await pdfDoc.embedJpg(imageBytes);

  const originalWidth = image.width;
  const originalHeight = image.height;

  const aspectRatio = originalWidth / originalHeight;

  let width = maxWidth;
  let height = maxWidth / aspectRatio;

  if (height > maxHeight) {
    height = maxHeight;
    width = maxHeight * aspectRatio;
  }

  page.drawImage(image, {
    x,
    y,
    width,
    height,
  });
};

const formatter = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
});

const ensureSpace = ({
  neededSpace,
  yPosition,
  margins,
  pdfDoc,
  page,
}: {
  neededSpace: number;
  yPosition: number;
  margins: {
    left: number;
    right: number;
    top: number;
    bottom: number;
  };
  pdfDoc: PDFDocument;
  page: PDFPage;
}) => {
  if (yPosition - neededSpace < margins.bottom) {
    const { page: newPage, yPosition: newYPosition } = addNewPage({
      margins,
      pdfDoc,
    });
    return { page: newPage, yPosition: newYPosition };
  }
  return { page, yPosition };
};

const gneratePDF = async ({
  id,
  type,
}: GeneratePDFProps): Promise<GeneratePDFReturn> => {
  const budgetData = await prisma.budget.findUnique({
    where: { id },
    include: {
      budgetItems: {
        include: {
          artwork: {
            include: {
              artist: true,
              images: true,
            },
          },
          frame: {
            include: {
              images: true,
            },
          },
        },
      },
      client: true,
      budgetSignature: true,
    },
  });

  if (!budgetData) {
    throw new Error("Presupuesto no encontrado");
  }

  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const margins = {
    left: 50,
    right: 50,
    top: 50,
    bottom: 50,
  };
  const lineSpacing = 15;

  const newPageData = addNewPage({ margins, pdfDoc });
  let { page, yPosition } = newPageData;
  const { width } = newPageData;

  const logoURL =
    "https://res.cloudinary.com/dpj6kupra/image/upload/v1740514863/uifwktt9tskfogjd97s4.png";

  await drawImage({
    page,
    pdfDoc,
    url: logoURL,
    x: width / 2 - 60,
    y: yPosition,
    maxWidth: 120,
    maxHeight: 120,
  });

  yPosition -= 20;

  // CIF
  drawText({
    page,
    text: "CIF: B98511637",
    fontSize: 8,
    x: width / 2 - 40,
    y: yPosition,
    font,
  });

  yPosition -= 20;

  // Cabecera
  const titleMap = {
    budget: "PRESUPUESTO",
    invoice: "FACTURA PROFORMA",
    orderConfirmation: "CONFIRMACIÓN DE PEDIDO",
    deliveryNote: "HOJA DE ENTREGA",
  };
  drawText({
    page,
    text: `${titleMap[type]}`,
    x: margins.left,
    y: yPosition,
    font: boldFont,
  });
  drawText({
    page,
    text: `N°: ${budgetData.number}`,
    x: margins.left,
    y: yPosition - lineSpacing,
    font,
  });
  drawText({
    page,
    text: `Fecha: ${format(new Date(budgetData.date), "dd/MM/yyyy")}`,
    x: margins.left,
    y: yPosition - lineSpacing * 2,
    font,
  });

  // Datos del cliente
  const maxTextWidth = 180;
  yPosition -= drawText({
    page,
    text: budgetData.client.name,
    x: width - maxTextWidth - margins.right,
    y: yPosition,
    font,
  });
  if (budgetData.client.legalName) {
    yPosition -= drawText({
      page,
      text: budgetData.client.legalName,
      x: width - maxTextWidth - margins.right,
      y: yPosition,
      font,
    });
  }
  if (budgetData.client.cif) {
    yPosition -= drawText({
      page,
      text: budgetData.client.cif,
      x: width - maxTextWidth - margins.right,
      y: yPosition,
      font,
    });
  }
  if (budgetData.client.phone) {
    yPosition -= drawText({
      page,
      text: budgetData.client.phone,
      x: width - maxTextWidth - margins.right,
      y: yPosition,
      font,
    });
  }
  if (budgetData.client.address) {
    yPosition -= drawText({
      page,
      text: budgetData.client.address,
      x: width - maxTextWidth - margins.right,
      y: yPosition,
      maxWidth: maxTextWidth,
      font,
    });
  }
  if (budgetData.client.email) {
    yPosition -= drawText({
      page,
      text: budgetData.client.email,
      x: width - maxTextWidth - margins.right,
      y: yPosition,
      font,
    });
  }

  yPosition -= 40;

  // Tabla encabezados

  const tableStartX = 50;
  const tableEndX = width - 50;
  const columnWidths = [
    (tableEndX - tableStartX) * 0.2,
    100,
    (tableEndX - tableStartX) * 0.2,
    (tableEndX - tableStartX) * 0.1,
    (tableEndX - tableStartX) * 0.175,
    (tableEndX - tableStartX) * 0.175,
  ];

  drawText({
    page,
    text: "ARTÍCULO",
    x: tableStartX,
    y: yPosition,
    font: boldFont,
  });

  drawText({
    page,
    text: "OBRA",
    x: tableStartX + columnWidths[0],
    y: yPosition,
    font: boldFont,
  });
  drawText({
    page,
    text: "DESCRIPCIÓN",
    x: tableStartX + columnWidths[0] + columnWidths[1],
    y: yPosition,
    font: boldFont,
  });
  drawText({
    page,
    text: "CANTIDAD",
    x: tableStartX + columnWidths[0] + columnWidths[1] + columnWidths[2],
    y: yPosition,
    font: boldFont,
  });
  drawText({
    page,
    text: "PRECIO",
    x:
      tableStartX +
      columnWidths[0] +
      columnWidths[1] +
      columnWidths[2] +
      columnWidths[3] +
      columnWidths[4] -
      5,
    y: yPosition,
    font: boldFont,
    align: "right",
  });
  drawText({
    page,
    text: "IMPORTE",
    x: tableEndX,
    y: yPosition,
    font: boldFont,
    align: "right",
  });

  yPosition -= 30;

  for (const [index, item] of budgetData.budgetItems.entries()) {
    ({ page, yPosition } = ensureSpace({
      neededSpace: 60,
      yPosition,
      margins,
      pdfDoc,
      page,
    }));

    // Artículo
    drawText({
      page,
      text: `${item.artwork.referenceNumber}-${item.artwork.referenceCode}`,
      x: tableStartX,
      y: yPosition,
      font,
    });
    if (item.frame) {
      drawText({
        page,
        text: `${item.frame.reference}`,
        x: tableStartX,
        y: yPosition - 20,
        font,
      });
    }

    const artworkImageUrl =
      item.artwork.images.length > 0 ? item.artwork.images[0].url : null;

    if (artworkImageUrl) {
      await drawImage({
        page,
        pdfDoc,
        url: artworkImageUrl,
        x: tableStartX + columnWidths[0],
        y: yPosition - 60,
        maxWidth: 70,
        maxHeight: 70,
      });
    }

    // Descripción
    drawText({
      page,
      text: `${item.artwork.artist.name} ${item.width}x${item.height}`,
      x: tableStartX + columnWidths[0] + columnWidths[1],
      y: yPosition,
      font,
    });
    if (item.frame) {
      drawText({
        page,
        text: `Moldura ${item.frame.name}`,
        x: tableStartX + columnWidths[0] + columnWidths[1],
        y: yPosition - 20,
        font,
      });
    }

    // Cantidad
    drawText({
      page,
      text: `${item.quantity}`,
      x: tableStartX + columnWidths[0] + columnWidths[1] + columnWidths[2],
      y: yPosition,
      font,
    });
    drawText({
      page,
      text: `${item.quantity}`,
      x: tableStartX + columnWidths[0] + columnWidths[1] + columnWidths[2],
      y: yPosition - 20,
      font,
    });

    // Precio
    drawText({
      page,
      text: formatter.format(item.artworkPrice),
      x:
        tableStartX +
        columnWidths[0] +
        columnWidths[1] +
        columnWidths[2] +
        columnWidths[3] +
        columnWidths[4] -
        5,
      y: yPosition,
      font,
      align: "right",
    });

    if (item.frame) {
      drawText({
        page,
        text: formatter.format(item.framePrice),
        x:
          tableStartX +
          columnWidths[0] +
          columnWidths[1] +
          columnWidths[2] +
          columnWidths[3] +
          columnWidths[4] -
          5,
        y: yPosition - 20,
        font,
        align: "right",
      });
    }

    // Importe
    drawText({
      page,
      text: formatter.format(item.artworkPrice * item.quantity),
      x: tableEndX,
      y: yPosition,
      font,
      align: "right",
    });

    if (item.frame) {
      drawText({
        page,
        text: formatter.format(item.framePrice * item.quantity),
        x: tableEndX,
        y: yPosition - 20,
        font,
        align: "right",
      });
    }

    if (artworkImageUrl) {
      yPosition -= 60;
    }
    if (index !== budgetData.budgetItems.length - 1) {
      yPosition -= 30;
    }
  }

  yPosition -= 100;

  // Resumen final
  const subtotal = budgetData.budgetItems.reduce(
    (sum, item) => sum + item.artworkPrice * item.quantity,
    0,
  );
  const discount = subtotal * (budgetData.discount / 100);
  const transport = budgetData.transport;
  const iva = (subtotal - discount + transport) * 0.21;
  const total = subtotal - discount + transport + iva;

  ({ page, yPosition } = ensureSpace({
    neededSpace: 80,
    yPosition,
    margins,
    pdfDoc,
    page,
  }));
  drawText({
    page,
    text: "SUBTOTAL",
    x:
      tableStartX +
      columnWidths[0] +
      columnWidths[1] +
      columnWidths[2] +
      columnWidths[3] +
      columnWidths[4] -
      5,
    y: yPosition,
    font,
    align: "right",
  });
  drawText({
    page,
    text: formatter.format(subtotal),
    x: tableEndX,
    y: yPosition,
    font,
    align: "right",
  });
  yPosition -= 16;
  if (budgetData.discount) {
    drawText({
      page,
      text: `DESCUENTO ${budgetData.discount}%`,
      x:
        tableStartX +
        columnWidths[0] +
        columnWidths[1] +
        columnWidths[2] +
        columnWidths[3] +
        columnWidths[4] -
        5,
      y: yPosition,
      font,
      align: "right",
    });
    drawText({
      page,
      text: `${formatter.format(discount)}`,
      x: tableEndX,
      y: yPosition,
      font,
      align: "right",
    });
    yPosition -= 16;
  }

  drawText({
    page,
    text: "TRANSPORTE",
    x:
      tableStartX +
      columnWidths[0] +
      columnWidths[1] +
      columnWidths[2] +
      columnWidths[3] +
      columnWidths[4] -
      5,
    y: yPosition,
    font,
    align: "right",
  });
  drawText({
    page,
    text: formatter.format(transport),
    x: tableEndX,
    y: yPosition,
    font,
    align: "right",
  });
  yPosition -= 16;
  drawText({
    page,
    text: `IVA ${budgetData.tax}%`,
    x:
      tableStartX +
      columnWidths[0] +
      columnWidths[1] +
      columnWidths[2] +
      columnWidths[3] +
      columnWidths[4] -
      5,
    y: yPosition,
    font,
    align: "right",
  });
  drawText({
    page,
    text: formatter.format(iva),
    x: tableEndX,
    y: yPosition,
    font,
    align: "right",
  });
  yPosition -= 16;
  drawText({
    page,
    text: "TOTAL",
    x:
      tableStartX +
      columnWidths[0] +
      columnWidths[1] +
      columnWidths[2] +
      columnWidths[3] +
      columnWidths[4] -
      5,
    y: yPosition,
    font: boldFont,
    align: "right",
  });
  drawText({
    page,
    text: formatter.format(total),
    x: tableEndX,
    y: yPosition,
    font: boldFont,
    align: "right",
  });

  yPosition -= 20;

  // Información extra
  ({ page, yPosition } = ensureSpace({
    neededSpace: 160,
    yPosition,
    margins,
    pdfDoc,
    page,
  }));
  drawText({
    page,
    text: "CONDICIONES VENTA:",
    x: margins.left,
    y: yPosition,
    font,
  });
  drawText({
    page,
    text: `${budgetData.paymentMethod}`,
    x: margins.left,
    y: yPosition - lineSpacing,
    font,
  });

  if (budgetData.showIBAN) {
    drawText({
      page,
      text: `IBAN: ES8021001231231231231231`,
      x: margins.left,
      y: yPosition - lineSpacing * 2,
      font,
    });
  }
  yPosition -= 56;

  drawText({
    page,
    text: "FECHA ENTREGA:",
    x: margins.left,
    y: yPosition,
    font,
  });
  drawText({
    page,
    text: `${budgetData.validity} días`,
    x: 140,
    y: yPosition,
    font,
  });

  yPosition -= 30;

  drawText({
    page,
    text: "DIRECCIÓN ENTREGA:",
    x: margins.left,
    y: yPosition,
    font,
  });
  const address = budgetData.sendAddress
    ? budgetData.sendAddress
    : budgetData.client.sendAddress
      ? budgetData.client.sendAddress
      : budgetData.client.address;
  drawText({
    page,
    text: `${address}`,
    x: margins.left,
    y: yPosition - lineSpacing,
    font,
  });

  // Firma
  if (
    budgetData.budgetSignature?.imageUrl &&
    (type === "deliveryNote" || type === "orderConfirmation")
  ) {
    ({ page, yPosition } = ensureSpace({
      neededSpace: 100,
      yPosition,
      margins,
      pdfDoc,
      page,
    }));
    await drawImage({
      page,
      pdfDoc,
      url: budgetData.budgetSignature.imageUrl,
      x: width - 50 - 200,
      y: 60,
      maxWidth: 300,
      maxHeight: 200,
    });
  }

  ({ page, yPosition } = ensureSpace({
    neededSpace: 8,
    yPosition,
    margins,
    pdfDoc,
    page,
  }));
  drawText({
    page,
    fontSize: 8,
    text: "Telf. + 3496 120 1908 Camino Vereda (norte), 56 46469 Beniparrell (Valencia-España) info@artcontemporany.com",
    x: 90,
    y: margins.bottom,
    font,
  });

  // Generar PDF
  const pdfBytes = await pdfDoc.save();

  const fileNameMap = {
    budget: `presupuesto_${budgetData.number}.pdf`,
    invoice: `factura-proforma_${budgetData.number}.pdf`,
    orderConfirmation: `confirmacion-pedido_${budgetData.number}.pdf`,
    deliveryNote: `hoja-entrega_${budgetData.number}.pdf`,
  };

  return {
    pdf: pdfBytes,
    fileName: fileNameMap[type],
  };
};

const createBudget = async ({
  values,
}: CreateBudgetProps): Promise<CreateBudgetReturn> => {
  const validatedFields = budgetSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  const {
    clientId,
    date,
    number,
    observations,
    reference,
    validity,
    discount,
    transport,
    tax,
    paymentMethod,
    status,
    sendAddress,
    showIBAN,
    items,
  } = validatedFields.data;

  try {
    const newBudget = await prisma.$transaction(async (prisma) => {
      const budget = await prisma.budget.create({
        data: {
          clientId,
          date,
          number,
          observations,
          reference,
          validity,
          discount,
          transport,
          tax,
          paymentMethod,
          status,
          sendAddress,
          showIBAN,
        },
        include: {
          client: { select: { id: true, name: true } },
          budgetSignature: { select: { imageUrl: true } },
        },
      });

      const createdItems = items.length
        ? await Promise.all(
            items.map(async (item) => {
              const newItem = await prisma.budgetItem.create({
                data: {
                  artworkId: item.artworkId,
                  artworkPrice: item.artworkPrice,
                  artworkPricingId: item.artworkPricingId,
                  frameId: item.frameId || null,
                  framePrice: item.framePrice ?? 0,
                  framePricingId: item.framePricingId || null,
                  height: item.height,
                  width: item.width,
                  quantity: item.quantity,
                  observations: item.observations || null,
                  budgetId: budget.id,
                },
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
              });

              return {
                ...newItem,
                observations: newItem.observations ?? "",
              };
            }),
          )
        : [];

      return {
        ...budget,
        observations: budget.observations ?? "",
        reference: budget.reference ?? "",
        sendAddress: budget.sendAddress ?? "",
        client: budget.client,
        items: createdItems.map((item) => ({
          ...item,
          frameId: item.frameId ?? "",
          framePricingId: item.framePricingId ?? "",
          observations: item.observations ?? "",
        })),
        signature: budget.budgetSignature ?? null,
      };
    });

    return { success: "Presupuesto creado con éxito", budget: newBudget };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al crear el presupuesto. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteBudget = async ({
  id,
}: DeleteBudgetProps): Promise<DeleteBudgetReturn> => {
  try {
    await prisma.budget.delete({
      where: { id },
    });
    return { success: "Presupuesto eliminado con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar el presupuesto. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteMultipleBudgets = async ({
  ids,
}: DeleteMultipleBudgetsProps): Promise<DeleteMultipleBudgetsReturn> => {
  try {
    await prisma.budget.deleteMany({
      where: { id: { in: ids } },
    });
    return { success: "Presupuestos eliminados con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error:
        "Error al eliminar los presupuestos. Por favor, inténtalo de nuevo",
    };
  }
};

const fetchArtworks = async (): Promise<FetchArtworksReturn> => {
  try {
    const artworks = await prisma.artwork.findMany({
      orderBy: { referenceNumber: "asc" },
      select: {
        id: true,
        referenceNumber: true,
        referenceCode: true,
        images: {
          select: {
            url: true,
          },
          take: 1,
        },
      },
    });

    return artworks.map((artwork) => ({
      id: artwork.id,
      referenceNumber: artwork.referenceNumber,
      referenceCode: artwork.referenceCode,
      imageUrl: artwork.images.length > 0 ? artwork.images[0].url : null,
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};

const fetchBudgets = async (): Promise<FetchBudgetsReturn> => {
  try {
    const budgets = await prisma.budget.findMany({
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

const fetchClients = async (): Promise<FetchClientsReturn> => {
  try {
    const clients = await prisma.client.findMany({
      orderBy: { name: "asc" },
      select: { id: true, name: true, legalName: true, cif: true },
    });
    return clients;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const fetchEmails = async ({
  id,
}: FetchEmailsProps): Promise<FetchEmailsReturn> => {
  try {
    const client = await prisma.client.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        persons: {
          select: {
            id: true,
            email: true,
          },
        },
      },
    });

    if (!client) return [];

    const emails: FetchEmailsReturn = [];

    if (client.email) {
      emails.push({ id: client.id, email: client.email, type: "client" });
    }

    client.persons.forEach((person) => {
      if (person.email) {
        emails.push({ id: person.id, email: person.email, type: "person" });
      }
    });

    return emails;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const fetchFrames = async (): Promise<FetchFramesReturn> => {
  try {
    const frames = await prisma.frame.findMany({
      orderBy: { reference: "asc" },
      select: {
        id: true,
        name: true,
        reference: true,
        images: {
          select: {
            url: true,
          },
          take: 1,
        },
      },
    });

    return frames.map((frame) => ({
      id: frame.id,
      name: frame.name,
      reference: frame.reference,
      imageUrl: frame.images.length > 0 ? frame.images[0].url : null,
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};

const fetchPricingItems = async ({
  id,
}: FetchPricingItemsProps): Promise<FetchPricingItemsReturn> => {
  try {
    const items = await prisma.pricingItem.findMany({
      where: { pricingId: id },
      select: { id: true, width: true, height: true, price: true },
    });
    return items;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const fetchPricings = async (): Promise<FetchPricingsReturn> => {
  try {
    const pricings = await prisma.pricing.findMany({
      orderBy: { name: "asc" },
      select: { id: true, name: true, type: true },
    });
    return pricings;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const generateUniqueRandomNumber = async (): Promise<number> => {
  const existingNumbers = await prisma.budget.findMany({
    select: { number: true },
  });

  const existingSet = new Set(existingNumbers.map((budget) => budget.number));

  let number;

  do {
    number = Math.floor(Math.random() * 999999) + 1;
  } while (existingSet.has(number));

  return number;
};

const signBudget = async ({
  id,
  signature,
}: SignBudgetProps): Promise<string> => {
  const existingSignature = await prisma.budgetSignature.findUnique({
    where: { budgetId: id },
  });

  if (existingSignature) {
    await deleteImage(existingSignature.publicId);
  }

  const byteString = atob(signature.split(",")[1]);
  const mimeString = signature.split(",")[0].split(":")[1].split(";")[0];
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const uint8Array = new Uint8Array(arrayBuffer);

  for (let i = 0; i < byteString.length; i++) {
    uint8Array[i] = byteString.charCodeAt(i);
  }

  const blob = new Blob([uint8Array], { type: mimeString });
  const file = new File([blob], `signature_${id}.png`, { type: mimeString });

  const uploadedImage = await uploadImage({
    file,
    folder: "budget_signatures",
    reference: `budget_${id}`,
  });

  if (!uploadedImage) {
    throw new Error("Error al subir la firma a Cloudinary.");
  }

  await prisma.budgetSignature.upsert({
    where: { budgetId: id },
    update: {
      imageUrl: uploadedImage.url,
      publicId: uploadedImage.publicId,
    },
    create: {
      budgetId: id,
      imageUrl: uploadedImage.url,
      publicId: uploadedImage.publicId,
    },
  });

  return uploadedImage.url;
};

const updateBudget = async ({
  id,
  values,
}: UpdateBudgetProps): Promise<UpdateBudgetReturn> => {
  const validatedFields = budgetSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  const {
    clientId,
    date,
    number,
    observations,
    reference,
    validity,
    discount,
    transport,
    tax,
    paymentMethod,
    status,
    sendAddress,
    showIBAN,
    items,
  } = validatedFields.data;

  try {
    const updatedBudget = await prisma.$transaction(async (prisma) => {
      const budget = await prisma.budget.update({
        where: { id },
        data: {
          clientId,
          date,
          number,
          observations,
          reference,
          validity,
          discount,
          transport,
          tax,
          paymentMethod,
          status,
          sendAddress,
          showIBAN,
        },
        include: {
          client: { select: { id: true, name: true } },
          budgetSignature: { select: { imageUrl: true } },
        },
      });

      await prisma.budgetItem.deleteMany({ where: { budgetId: id } });

      const updatedItems = items.length
        ? await Promise.all(
            items.map(async (item) => {
              return prisma.budgetItem.create({
                data: {
                  artworkId: item.artworkId,
                  artworkPrice: item.artworkPrice,
                  artworkPricingId: item.artworkPricingId,
                  frameId: item.frameId || null,
                  framePrice: item.framePrice ?? 0,
                  framePricingId: item.framePricingId || null,
                  height: item.height,
                  width: item.width,
                  quantity: item.quantity,
                  observations: item.observations || null,
                  budgetId: budget.id,
                },
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
              });
            }),
          )
        : [];

      return {
        ...budget,
        observations: budget.observations ?? "",
        reference: budget.reference ?? "",
        sendAddress: budget.sendAddress ?? "",
        client: budget.client,
        items: updatedItems.map((item) => ({
          ...item,
          frameId: item.frameId ?? "",
          framePricingId: item.framePricingId ?? "",
          observations: item.observations ?? "",
        })),
        signature: budget.budgetSignature ?? null,
      };
    });

    return {
      success: "Presupuesto actualizado con éxito",
      budget: updatedBudget,
    };
  } catch (error) {
    console.error(error);
    return {
      error:
        "Error al actualizar el presupuesto. Por favor, inténtalo de nuevo",
    };
  }
};

const resend = new Resend(process.env.RESEND_API_KEY);

type BudgetEmailProps = {
  subject: string;
  message: string;
};

const BudgetEmail = ({ subject, message }: BudgetEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>{subject}</Preview>
      <Tailwind>
        <Body className="m-0 bg-slate-50 p-4 font-sans">
          <Container className="max-w-lg rounded-lg bg-white p-8 shadow-lg">
            <Section>
              <Text className="text-3xl font-semibold text-slate-700">
                {subject}
              </Text>
              <Text className="text-lg whitespace-pre-line text-slate-700">
                {message}
              </Text>
            </Section>

            <Hr className="my-4 border-t border-slate-300" />

            <Section>
              <Text className="text-sm text-slate-400">
                Si tiene alguna consulta, no dude en responder a este correo.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const sendEmail = async ({
  emails,
  subject,
  message,
  file,
  fileName,
}: SendEmailProps): Promise<{
  success: boolean;
  error?: string;
}> => {
  try {
    if (!emails.length || !subject || !message || !file) {
      return {
        success: false,
        error: "Faltan datos necesarios para enviar el email.",
      };
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const emailResponse = await resend.emails.send({
      from: "noreply@gesartcontemporany.com",
      to: emails,
      subject,
      react: <BudgetEmail subject={subject} message={message} />,
      attachments: [
        {
          filename: fileName,
          content: buffer.toString("base64"),
        },
      ],
    });

    if (emailResponse.error) {
      return {
        success: false,
        error: "Error al enviar el email.",
      };
    }

    return { success: true };
  } catch (error) {
    console.error("Error al enviar el email:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Error desconocido",
    };
  }
};

export {
  createBudget,
  deleteBudget,
  deleteMultipleBudgets,
  fetchArtworks,
  fetchBudgets,
  fetchClients,
  fetchEmails,
  fetchFrames,
  fetchPricings,
  fetchPricingItems,
  gneratePDF,
  generateUniqueRandomNumber,
  signBudget,
  updateBudget,
  sendEmail,
};
