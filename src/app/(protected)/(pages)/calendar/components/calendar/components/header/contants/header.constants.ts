const constants = {
  BUTTON_PROPS: {
    variant: "ghost",
    size: "icon",
  },
  DEFAULT_VIEW: "dayGridMonth",
  LABELS: {
    NEXT: "Next",
    PREV: "Previous",
    TODAY: "Today",
    TOGGLE_SIDEBAR: "Toggle Sidebar",
    CHANGE_VIEW: "Change view",
  },
  VIEW: {
    BUTTON_PROPS: {
      variant: "ghost",
    },
    DROPDOWN: {
      CONTENT_PROPS: {
        align: "end",
      },
      ITEMS: [
        { label: "Month", value: "dayGridMonth" },
        { label: "Week", value: "timeGridWeek" },
        { label: "Day", value: "timeGridDay" },
        { label: "List week", value: "listWeek" },
        { label: "List day", value: "listDay" },
      ],
    },
  },
  VIEW_MAP: {
    dayGridMonth: "month",
    timeGridWeek: "week",
    timeGridDay: "day",
    listWeek: "week",
    listDay: "day",
  },
} as const;

export default constants;
