const constants = {
  ARTWORK_FIELD: {
    autocompleteProps: {
      emptyMessage: "No se han encontrado obras.",
      placeholder: "Referencia obra",
    },
  },
  ARTWORK_PRICE_FIELD: {
    inputProps: {
      name: "artworkPrice",
      placeholder: "Precio",
      type: "number",
      ["aria-describedby"]: "artworkPrice-helper",
    },
    messageProps: {
      id: "artworkPrice-helper",
    },
  },
  ARTWORK_PRICINGS_FIELD: {
    placeholder: "Tarifa obra",
  },
  CLIENT_FIELD: {
    labelText: "Cliente",
    name: "clientId",
    autocompleteProps: {
      emptyMessage: "No se han encontrado clientes.",
      placeholder: "Nombre cliente",
    },
  },
  DATE_FIELD: {
    buttonProps: {
      variant: "outline",
      role: "combobox",
    },
    buttonText: "Seleccionar fecha",
    labelText: "Fecha",
    name: "date",
  },
  FRAME_FIELD: {
    autocompleteProps: {
      emptyMessage: "No se han encontrado molduras.",
      placeholder: "Referencia moldura",
    },
  },
  FRAME_PRICE_FIELD: {
    inputProps: {
      name: "framePrice",
      placeholder: "Precio",
      type: "number",
      ["aria-describedby"]: "framePrice-helper",
    },
    messageProps: {
      id: "framePrice-helper",
    },
  },
  FRAME_PRICINGS_FIELD: {
    placeholder: "Tarifa moldura",
  },
  HEIGHT_FIELD: {
    inputProps: {
      name: "height",
      placeholder: "Alto",
      type: "number",
      ["aria-describedby"]: "height-helper",
    },
    messageProps: {
      id: "height-helper",
    },
  },
  NUMBER_FIELD: {
    labelProps: {
      htmlFor: "number",
    },
    labelText: "Número",
    inputProps: {
      id: "number",
      name: "number",
      placeholder: "Número presupuesto",
      type: "text",
      ["aria-describedby"]: "number-helper",
    },
    messageProps: {
      id: "number-helper",
    },
  },
  OBSERVATIONS_ITEM_FIELD: {
    inputProps: {
      placeholder: "Observaciones item",
      ["aria-describedby"]: "observations-helper",
    },
    messageProps: {
      id: "observations-helper",
    },
  },
  OBSERVATIONS_FIELD: {
    labelProps: {
      htmlFor: "observations",
    },
    labelText: "Observaciones",
    inputProps: {
      id: "observations",
      name: "observations",
      placeholder: "Observaciones presupuesto",
      ["aria-describedby"]: "observations-helper",
    },
    messageProps: {
      id: "observations-helper",
    },
  },
  QUANTITY_FIELD: {
    inputProps: {
      name: "quantity",
      placeholder: "Cantidad",
      type: "number",
      ["aria-describedby"]: "quantity-helper",
    },
    messageProps: {
      id: "quantity-helper",
    },
  },
  REFERENCE_FIELD: {
    labelProps: {
      htmlFor: "reference",
    },
    labelText: "Referencia",
    inputProps: {
      id: "reference",
      name: "reference",
      placeholder: "Referencia presupuesto",
      type: "text",
      ["aria-describedby"]: "reference-helper",
    },
    messageProps: {
      id: "reference-helper",
    },
  },
  VALIDITY_FIELD: {
    labelProps: {
      htmlFor: "validity",
    },
    labelText: "Tiempo de entrega",
    inputProps: {
      id: "validity",
      name: "validity",
      placeholder: "Tiempo de entrega del presupuesto",
      type: "text",
      ["aria-describedby"]: "validity-helper",
    },
    messageProps: {
      id: "validity-helper",
    },
  },
  WIDTH_FIELD: {
    inputProps: {
      name: "width",
      placeholder: "Ancho",
      type: "number",
      ["aria-describedby"]: "width-helper",
    },
    messageProps: {
      id: "width-helper",
    },
  },
  DISCOUNT_FIELD: {
    labelProps: {
      htmlFor: "discount",
    },
    labelText: "Descuento (%)",
    inputProps: {
      id: "discount",
      name: "discount",
      placeholder: "Descuento",
      type: "number",
      ["aria-describedby"]: "discount-helper",
    },
    messageProps: {
      id: "discount-helper",
    },
  },
  TRANSPORT_FIELD: {
    labelProps: {
      htmlFor: "transport",
    },
    labelText: "Transporte (€)",
    inputProps: {
      id: "transport",
      name: "transport",
      placeholder: "Transporte",
      type: "number",
      ["aria-describedby"]: "transport-helper",
    },
    messageProps: {
      id: "transport-helper",
    },
  },
  TAX_FIELD: {
    labelProps: {
      htmlFor: "tax",
    },
    labelText: "IVA (%)",
    inputProps: {
      id: "tax",
      name: "tax",
      placeholder: "IVA",
      type: "number",
      ["aria-describedby"]: "tax-helper",
    },
    messageProps: {
      id: "tax-helper",
    },
  },
  SURCHARGE_FIELD: {
    labelProps: {
      htmlFor: "surcharge",
    },
    labelText: "RE (%)",
    inputProps: {
      id: "surcharge",
      name: "surcharge",
      placeholder: "RE",
      type: "number",
      ["aria-describedby"]: "surcharge-helper",
    },
    messageProps: {
      id: "surcharge-helper",
    },
  },
  PAYMENT_METHOD_FIELD: {
    labelProps: {
      htmlFor: "paymentMethod",
    },
    labelText: "Forma de pago",
    inputProps: {
      id: "paymentMethod",
      name: "paymentMethod",
      placeholder: "Forma de pago",
      type: "text",
      ["aria-describedby"]: "paymentMethod-helper",
    },
    messageProps: {
      id: "paymentMethod-helper",
    },
  },
  STATUS_FIELD: {
    labelText: "Estado",
    name: "status",
    placeholder: "Estado",
    options: [
      { label: "Pendiente", value: "pending" },
      { label: "Aceptado", value: "accepted" },
      { label: "Rechazado", value: "rejected" },
      { label: "Completado", value: "closed" },
    ],
  },
  SEND_ADDRESS_FIELD: {
    labelProps: {
      htmlFor: "sendAddress",
    },
    labelText: "Dirección de envío",
    inputProps: {
      id: "sendAddress",
      name: "sendAddress",
      placeholder: "Dirección de envío",
      ["aria-describedby"]: "sendAddress-helper",
    },
    messageProps: {
      id: "sendAddress-helper",
    },
  },
  SHOW_IBAN_FIELD: {
    labelText: "Mostrar IBAN",
    name: "showIBAN",
    placeholder: "Mostrar IBAN",
    options: [
      { label: "Sí", value: true },
      { label: "No", value: false },
    ],
  },
  ADD_BUTTON_PROPS: {
    type: "button",
  },
  REMOVE_BUTTON_PROPS: {
    size: "icon",
    type: "button",
    variant: "ghost",
  },
  SUBMIT_BUTTON_PROPS: {
    fullWidth: true,
    label: "Register",
    type: "submit",
  },
} as const;

export default constants;
