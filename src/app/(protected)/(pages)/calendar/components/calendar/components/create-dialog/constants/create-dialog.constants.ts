const constants = {
  BUTTON_PROPS: {
    SUBMIT: {
      form: "create-event-form",
      label: "Create",
      showLabel: false,
      type: "submit",
    },
  },
  FIELD_PROPS: {
    START: {
      labelProps: {
        htmlFor: "start",
      },
      labelText: "Start",
      inputProps: {
        name: "start",
      },
    },
    END: {
      labelProps: {
        htmlFor: "end",
      },
      labelText: "End",
      inputProps: {
        name: "end",
      },
    },
    TITLE: {
      labelProps: {
        htmlFor: "title",
      },
      labelText: "Title",
      inputProps: {
        id: "title",
        name: "title",
        placeholder: "Enter title",
        type: "text",
        ["aria-describedby"]: "title-message",
      },
      messageProps: {
        id: "title-message",
      },
    },
  },
  FORM_PROPS: {
    id: "create-event-form",
  },
} as const;

export default constants;
