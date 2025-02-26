const constants = {
  FIELD_PROPS: {
    NAME: {
      labelProps: {
        htmlFor: "name",
      },
      labelText: "Nombre",
      inputProps: {
        id: "name",
        name: "name",
        placeholder: "Nombre del fabricante",
        type: "text",
        ["aria-describedby"]: "name-helper",
      },
      messageProps: {
        id: "name-helper",
      },
    },
    REFERENCE: {
      labelProps: {
        htmlFor: "reference",
      },
      labelText: "Referencia",
      inputProps: {
        id: "reference",
        name: "reference",
        placeholder: "Referencia del fabricante",
        type: "text",
        ["aria-describedby"]: "reference-helper",
      },
      messageProps: {
        id: "reference-helper",
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
