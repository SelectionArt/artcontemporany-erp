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
      label: "Reset password",
      showLabel: false,
      type: "submit",
    },
    TOGGLE_PASSWORD: {
      ["aria-label"]: "Toggle password visibility",
    },
  },
  FIELD_PROPS: {
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
} as const;

export default constants;
