const DEFAULT_ITEM = {
  artworkId: "",
  artworkPrice: 0,
  artworkPricingId: "",
  frameId: "",
  framePrice: 0,
  framePricingId: "",
  height: 0,
  observations: "",
  quantity: 1,
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
    validity: "30 días",
    discount: 0,
    transport: 0,
    tax: 21,
    paymentMethod: "",
    surcharge: 0,
    status: "pending",
    sendAddress: "",
    showIBAN: false,
  },
  DEFAULT_SEND_EMAIL_FORM_VALUES: {
    type: "budget",
    emails: [] as string[],
    salespersonsEmails: [] as string[],
    freeEmails: [] as string[],
    subject: "{{type}}",
    message:
      "Estimado cliente.\n\nAdjunto envío {{type}}.\nGracias.\n\nUn saludo.",
  },
};

export default constants;
export { DEFAULT_ITEM };
