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
        placeholder: "Nombre del cliente",
        type: "text",
        ["aria-describedby"]: "name-helper",
      },
      messageProps: {
        id: "name-helper",
      },
    },
    LEGAL_NAME: {
      labelProps: {
        htmlFor: "legalName",
      },
      labelText: "Razón social",
      inputProps: {
        id: "legalName",
        name: "legalName",
        placeholder: "Razón social",
        type: "text",
        ["aria-describedby"]: "legalName-helper",
      },
      messageProps: {
        id: "legalName-helper",
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
    ADDRESS: {
      labelProps: {
        htmlFor: "address",
      },
      labelText: "Dirección",
      inputProps: {
        id: "address",
        name: "address",
        placeholder: "Dirección",
        type: "text",
        ["aria-describedby"]: "address-helper",
      },
      messageProps: {
        id: "address-helper",
      },
    },
    SEND_ADDRESS: {
      labelProps: {
        htmlFor: "sendAddress",
      },
      labelText: "Dirección de envío",
      inputProps: {
        id: "sendAddress",
        name: "sendAddress",
        placeholder: "Dirección de envío",
        type: "text",
        ["aria-describedby"]: "sendAddress-helper",
      },
      messageProps: {
        id: "sendAddress-helper",
      },
    },
    CIF: {
      labelProps: {
        htmlFor: "cif",
      },
      labelText: "CIF",
      inputProps: {
        id: "cif",
        name: "cif",
        placeholder: "CIF",
        type: "text",
        ["aria-describedby"]: "cif-helper",
      },
      messageProps: {
        id: "cif-helper",
      },
    },
    IBAN: {
      labelProps: {
        htmlFor: "iban",
      },
      labelText: "IBAN",
      inputProps: {
        id: "iban",
        name: "iban",
        placeholder: "IBAN",
        type: "text",
        ["aria-describedby"]: "iban-helper",
      },
      messageProps: {
        id: "iban-helper",
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
