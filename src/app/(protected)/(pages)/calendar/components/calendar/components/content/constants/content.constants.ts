const constants = {
  FULLCALENDAR_PROPS: {
    dayHeaders: true,
    editable: true,
    headerToolbar: false,
    height: "100%",
    initialView: "dayGridMonth",
    navLinks: true,
    navLinkDayClick: "timeGridDay",
    selectable: true,
    unselectAuto: true,
  },
} as const;

export default constants;
