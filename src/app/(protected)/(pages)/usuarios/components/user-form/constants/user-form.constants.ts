const constants = {
  NAME: {
    labelProps: {
      htmlFor: "name",
    },
    labelText: "Nombre",
    inputProps: {
      id: "name",
      name: "name",
      placeholder: "Nombre del usuario",
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
    labelText: "Email",
    inputProps: {
      id: "email",
      name: "email",
      placeholder: "Email del usuario",
      type: "email",
      ["aria-describedby"]: "email-helper",
    },
    messageProps: {
      id: "email-helper",
    },
  },
  IS_AUTHORIZED: {
    labelText: "Autorizado",
    name: "isAuthorized",
    placeholder: "Usuario autorizado",
  },
  ROLE: {
    labelText: "Rol",
    name: "role",
    placeholder: "Rol del usuario",
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
