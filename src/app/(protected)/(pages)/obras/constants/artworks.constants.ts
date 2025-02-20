const constants = {
  DEFAULT_FORM_VALUES: {
    artistId: "",
    colors: [] as string[],
    finishId: "",
    formatId: "",
    height: 0,
    images: [] as File[],
    referenceNumber: 0,
    referenceCode: "ART",
    styleId: "",
    supportId: "",
    tag: "",
    title: "",
    width: 0,
  },
} as const;

export default constants;
