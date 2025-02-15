const constants = {
  INPUT_FIELDS: {
    NAME: {
      labelProps: {
        htmlFor: "title",
      },
      labelText: "Título",
      inputProps: {
        id: "title",
        name: "title",
        placeholder: "Título de la obra",
        type: "text",
        ["aria-describedby"]: "ntitleame-helper",
      },
      messageProps: {
        id: "title-helper",
      },
    },
    IMAGES: {
      labelProps: {
        htmlFor: "images",
      },
      labelText: "Imágenes",
      inputProps: {
        accept: "image/*",
        id: "images",
        multiple: true,
        name: "images",
        placeholder: "Imágenes de la obra",
        type: "file",
        ["aria-describedby"]: "images-helper",
      },
      messageProps: {
        id: "images-helper",
      },
    },
    REFERENCE_NUMBER: {
      labelProps: {
        htmlFor: "referenceNumber",
      },
      labelText: "Número de referencia",
      inputProps: {
        id: "referenceNumber",
        name: "referenceNumber",
        placeholder: "Número de referencia",
        type: "number",
        ["aria-describedby"]: "referenceNumber-helper",
      },
      messageProps: {
        id: "referenceNumber-helper",
      },
    },
    REFERENCE_CODE: {
      labelProps: {
        htmlFor: "referenceCode",
      },
      labelText: "Código de referencia",
      inputProps: {
        id: "referenceCode",
        name: "referenceCode",
        placeholder: "Código de referencia",
        type: "text",
        ["aria-describedby"]: "referenceCode-helper",
      },
      messageProps: {
        id: "referenceCode-helper",
      },
    },
    WIDTH: {
      labelProps: {
        htmlFor: "width",
      },
      labelText: "Ancho",
      inputProps: {
        id: "width",
        name: "width",
        placeholder: "Ancho de la obra",
        type: "number",
        ["aria-describedby"]: "width-helper",
      },
      messageProps: {
        id: "width-helper",
      },
    },
    HEIGHT: {
      labelProps: {
        htmlFor: "height",
      },
      labelText: "Alto",
      inputProps: {
        id: "height",
        name: "height",
        placeholder: "Alto de la obra",
        type: "number",
        ["aria-describedby"]: "height-helper",
      },
      messageProps: {
        id: "height-helper",
      },
    },
  },

  SELECT_FIELDS: {
    ARTIST: {
      labelText: "Artista",
      name: "artistId",
      placeholder: "Artista de la obra",
    },
    SUPPORT: {
      labelText: "Soporte",
      name: "supportId",
      placeholder: "Soporte de la obra",
    },
    COLOR: {
      labelText: "Color",
      name: "colorId",
      placeholder: "Color de la obra",
    },
    STYLE: {
      labelText: "Estilo",
      name: "styleId",
      placeholder: "Estilo de la obra",
    },
    FINISH: {
      labelText: "Acabado",
      name: "finishId",
      placeholder: "Acabado de la obra",
    },
    FORMAT: {
      labelText: "Formato",
      name: "formatId",
      placeholder: "Formato de la obra",
    },
  },
  BUTTON_PROPS: {
    SUBMIT: {
      fullWidth: true,
      label: "Register",
      type: "submit",
    },
    SUBMIT_LABEL_CREATE: "Crear",
    SUBMIT_LABEL_UPDATE: "Actualizar",
  },
} as const;

export default constants;
