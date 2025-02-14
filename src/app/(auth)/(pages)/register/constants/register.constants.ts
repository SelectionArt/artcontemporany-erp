const constants = {
  CARD_TITLE: "Register",
  CARD_DESCRIPTION: "Create an account",
  CARD_SEPARATOR: "Or register with",
  BUTTON_LINK: {
    fullWidth: true,
    href: "/login",
    label: "Already have an account?",
  },
  OAUTH_ACCOUNT_NOT_LINKED: "OAuthAccountNotLinked",
  OAUTH_ACCOUNT_NOT_LINKED_ERROR:
    "Email already in use with different provider!",
} as const;

export default constants;
