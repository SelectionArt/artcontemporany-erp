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
    labelText: "Validez",
    inputProps: {
      id: "validity",
      name: "validity",
      placeholder: "Validez del presupuesto",
      type: "number",
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
