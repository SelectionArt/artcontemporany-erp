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
        placeholder: "Nombre del color",
        type: "text",
        ["aria-describedby"]: "name-helper",
      },
      messageProps: {
        id: "name-helper",
      },
    },
    HEX: {
      labelProps: {
        htmlFor: "hex",
      },
      labelText: "Código hexadecimal",
      inputProps: {
        id: "hex",
        name: "hex",
        placeholder: "Código hexadecimal",
        type: "text",
        ["aria-describedby"]: "hex-helper",
      },
      messageProps: {
        id: "hex-helper",
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
