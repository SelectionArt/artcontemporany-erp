const constants = {
  FIELD_PROPS: {
    WIDTH: {
      labelProps: {
        htmlFor: "width",
      },
      labelText: "Ancho (cm)",
      inputProps: {
        id: "width",
        name: "width",
        placeholder: "Ancho (cm)",
        type: "number",
        ["aria-describedby"]: "width-helper",
      },
      messageProps: {
        id: "width-helper",
      },
    },
    HEIGHT: {
      labelProps: {
        htmlFor: "height",
      },
      labelText: "Alto (cm)",
      inputProps: {
        id: "height",
        name: "height",
        placeholder: "Alto (cm)",
        type: "number",
        ["aria-describedby"]: "height-helper",
      },
      messageProps: {
        id: "height-helper",
      },
    },
    PRICE: {
      labelProps: {
        htmlFor: "price",
      },
      labelText: "Precio",
      inputProps: {
        id: "price",
        name: "price",
        placeholder: "Precio",
        type: "number",
        ["aria-describedby"]: "price-helper",
      },
      messageProps: {
        id: "price-helper",
      },
    },
    SLUG: {
      labelProps: {
        htmlFor: "slug",
      },
      labelText: "Identificador de URL",
      inputProps: {
        id: "slug",
        name: "slug",
        placeholder: "Identificador de URL",
        type: "text",
        ["aria-describedby"]: "slug-helper",
      },
      messageProps: {
        id: "slug-helper",
      },
    },
  },
  BUTTON_PROPS: {
    SUBMIT: {
      fullWidth: true,
      label: "Register",
      type: "submit",
    },
    SUBMIT_LABEL_CREATE: "Crear",
    SUBMIT_LABEL_UPDATE: "Actualizar",
  },
} as const;

export default constants;
