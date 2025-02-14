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
      label: "Register",
      showLabel: false,
      type: "submit",
    },
    TOGGLE_PASSWORD: {
      ["aria-label"]: "Toggle password visibility",
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
    PASSWORD: {
      labelProps: {
        htmlFor: "password",
      },
      labelText: "Password",
      inputProps: {
        autoComplete: "current-password",
        id: "password",
        name: "password",
        placeholder: "******",
        type: "password",
        ["aria-describedby"]: "password-helper",
      },
      messageProps: {
        id: "password-helper",
      },
    },
    PASSWORD_TYPE_HIDDEN: "password",
    PASSWORD_TYPE_VISIBLE: "text",
  },
  PROVIDER_CREDENTIALS: "credentials",
} as const;

export default constants;
