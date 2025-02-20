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
        placeholder: "Nombre del sección",
        type: "text",
        ["aria-describedby"]: "name-helper",
      },
      messageProps: {
        id: "name-helper",
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
