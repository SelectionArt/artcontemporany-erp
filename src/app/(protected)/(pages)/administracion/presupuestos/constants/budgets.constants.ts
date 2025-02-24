const DEFAULT_ITEM = {
  artworkId: "",
  artworkPrice: 0,
  artworkPricingsId: "",
  frameId: "",
  framePrice: 0,
  framePricingsId: "",
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
  },
};

export default constants;
export { DEFAULT_ITEM };
