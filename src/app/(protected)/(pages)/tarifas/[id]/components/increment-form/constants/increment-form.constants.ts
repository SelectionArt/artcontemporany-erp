const constants = {
  FIELD_PROPS: {
    FIXED_INCREMENT: {
      labelProps: {
        htmlFor: "fixedIncrement",
      },
      labelText: "Incremento fijo",
      inputProps: {
        id: "fixedIncrement",
        name: "fixedIncrement",
        placeholder: "Incremento fijo",
        type: "number",
        ["aria-describedby"]: "fixedIncrement-helper",
      },
      messageProps: {
        id: "fixedIncrement-helper",
      },
    },
    PORCENTUAL_INCREMENT: {
      labelProps: {
        htmlFor: "porcentualIncrement",
      },
      labelText: "Incremento porcentual",
      inputProps: {
        id: "porcentualIncrement",
        name: "porcentualIncrement",
        placeholder: "Incremento porcentual",
        type: "number",
        ["aria-describedby"]: "porcentualIncrement-helper",
      },
      messageProps: {
        id: "porcentualIncrement-helper",
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
