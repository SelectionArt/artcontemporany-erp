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
        placeholder: "Nombre del comercial",
        type: "text",
        ["aria-describedby"]: "name-helper",
      },
      messageProps: {
        id: "name-helper",
      },
    },
    EMAIL: {
      labelProps: {
        htmlFor: "email",
      },
      labelText: "Correo electrónico",
      inputProps: {
        id: "email",
        name: "email",
        placeholder: "Correo electrónico",
        type: "email",
        ["aria-describedby"]: "email-helper",
      },
      messageProps: {
        id: "email-helper",
      },
    },
    PHONE: {
      labelProps: {
        htmlFor: "phone",
      },
      labelText: "Teléfono",
      inputProps: {
        id: "phone",
        name: "phone",
        placeholder: "Teléfono",
        type: "tel",
        ["aria-describedby"]: "phone-helper",
      },
      messageProps: {
        id: "phone-helper",
      },
    },
    AREA: {
      labelProps: {
        htmlFor: "area",
      },
      labelText: "Zona",
      inputProps: {
        id: "area",
        name: "area",
        placeholder: "Zona",
        ["aria-describedby"]: "area-helper",
      },
      messageProps: {
        id: "area-helper",
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
