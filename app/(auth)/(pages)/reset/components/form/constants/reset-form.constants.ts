const constants = {
  ALERT_PROPS: {
    ERROR: {
      type: "error",
      role: "alert",
    },
    SUCCESS: {
      type: "success",
      role: "status",
    },
  },
  BUTTON_PROPS: {
    SUBMIT: {
      fullWidth: true,
      label: "Send reset email",
      showLabel: false,
      type: "submit",
    },
  },
  FIELD_PROPS: {
    EMAIL: {
      labelProps: {
        htmlFor: "email",
      },
      labelText: "Email",
      inputProps: {
        autoComplete: "username",
        id: "email",
        name: "email",
        placeholder: "john.doe@example.com",
        type: "email",
        ["aria-describedby"]: "email-helper",
      },
      messageProps: {
        id: "email-helper",
      },
    },
  },
} as const;

export default constants;
