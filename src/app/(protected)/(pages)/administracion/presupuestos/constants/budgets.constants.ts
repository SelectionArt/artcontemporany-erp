const DEFAULT_ITEM = {
  artworkId: "",
  artworkPrice: 0,
  artworkPricingId: "",
  frameId: "",
  framePrice: 0,
  framePricingId: "",
  height: 0,
  quantity: 1,
  observations: "",
  width: 0,
};

const constants = {
  DEFAULT_FORM_VALUES: {
    clientId: "",
    date: "",
    items: [DEFAULT_ITEM],
    number: 0,
    observations: "",
    reference: "",
    validity: 30,
    discount: 0,
    transport: 0,
    tax: 21,
    paymentMethod: "",
    status: "pending",
    sendAddress: "",
    showIBAN: false,
  },
  DEFAULT_SEND_EMAIL_FORM_VALUES: {
    type: "budget",
    emails: [] as string[],
    email: "",
    subject: "{{type}}",
    message:
      "Estimado cliente.\n\nAdjunto envío {{type}}. Por favor, revísalo y en el caso de que necesites más información o alguna modificación no dudes en contactar.\n\nSaludos",
  },
};

export default constants;
export { DEFAULT_ITEM };
