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
    LINK_FORGOT_PASSWORD: {
      href: "/reset",
      label: "Forgot password?",
    },
    SUBMIT: {
      fullWidth: true,
      showLabel: false,
      type: "submit",
    },
    SUBMIT_LABEL_DEFAULT: "Login",
    SUBMIT_LABEL_OTP: "Confirm",
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
    OTP: {
      labelProps: {
        htmlFor: "otp",
      },
      labelText: "One-time password",
      inputProps: {
        id: "otp",
        maxLength: 6,
        name: "otp",
        type: "text",
        ["aria-describedby"]: "otp-helper",
      },
      messageProps: {
        id: "otp-helper",
      },
    },
  },
  PROVIDER_CREDENTIALS: "credentials",
} as const;

export default constants;
