const constants = {
  CARD_TITLE: "Login",
  CARD_DESCRIPTION: "Welcome back",
  CARD_SEPARATOR: "Or login with",
  BUTTON_LINK: {
    fullWidth: true,
    href: "/register",
    label: "Don't have an account?",
  },
  OAUTH_ACCOUNT_NOT_LINKED: "OAuthAccountNotLinked",
  OAUTH_ACCOUNT_NOT_LINKED_ERROR:
    "Email already in use with different provider. Please login with the provider you used to sign up.",
} as const;

export default constants;
