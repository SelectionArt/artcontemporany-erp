const COMMON_BUTTON_PROPS = {
  variant: "outline",
  size: "icon",
} as const;

const constants = {
  FIRST_PAGE_BUTTON_PROPS: {
    ...COMMON_BUTTON_PROPS,
    "aria-label": "Ir a la primera página",
  },
  LAST_PAGE_BUTTON_PROPS: {
    ...COMMON_BUTTON_PROPS,
    "aria-label": "Ir a la última página",
  },
  NEXT_PAGE_BUTTON_PROPS: {
    ...COMMON_BUTTON_PROPS,
    "aria-label": "Ir a la página siguiente",
  },
  PREVIOUS_PAGE_BUTTON_PROPS: {
    ...COMMON_BUTTON_PROPS,
    "aria-label": "Ir a la página anterior",
  },
} as const;

export default constants;
