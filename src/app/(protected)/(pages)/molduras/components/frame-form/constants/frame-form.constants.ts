const constants = {
  INPUT_FIELDS: {
    NAME: {
      labelProps: {
        htmlFor: "name",
      },
      labelText: "Nombre",
      inputProps: {
        id: "name",
        name: "name",
        placeholder: "Nombre de la moldura",
        type: "text",
        ["aria-describedby"]: "name-helper",
      },
      messageProps: {
        id: "name-helper",
      },
    },
    DESCRIPTION: {
      labelProps: {
        htmlFor: "description",
      },
      labelText: "Descripción",
      inputProps: {
        id: "description",
        name: "description",
        placeholder: "Descripción de la moldura",
        ["aria-describedby"]: "description-helper",
      },
      messageProps: {
        id: "description-helper",
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
        placeholder: "Imágenes de la moldura",
        type: "file",
        ["aria-describedby"]: "images-helper",
      },
      messageProps: {
        id: "images-helper",
      },
    },
    REFERENCE: {
      labelProps: {
        htmlFor: "reference",
      },
      labelText: "Referencia",
      inputProps: {
        id: "reference",
        name: "reference",
        placeholder: "Código de referencia",
        type: "text",
        ["aria-describedby"]: "reference-helper",
      },
      messageProps: {
        id: "reference-helper",
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
        placeholder: "Altura de la moldura",
        type: "number",
        ["aria-describedby"]: "height-helper",
      },
      messageProps: {
        id: "height-helper",
      },
    },
    MANUFACTURER_REFERENCE: {
      labelProps: {
        htmlFor: "manufacturerReference",
      },
      labelText: "Ref. Fabricante",
      inputProps: {
        id: "manufacturerReference",
        name: "manufacturerReference",
        placeholder: "Código de referencia del fabricante",
        type: "text",
        ["aria-describedby"]: "manufacturerReference-helper",
      },
      messageProps: {
        id: "manufacturerReference-helper",
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
        placeholder: "Ancho de la moldura",
        type: "number",
        ["aria-describedby"]: "width-helper",
      },
      messageProps: {
        id: "width-helper",
      },
    },
    GALCE: {
      labelProps: {
        htmlFor: "galce",
      },
      labelText: "Galce",
      inputProps: {
        id: "galce",
        name: "galce",
        placeholder: "Galce de la moldura",
        type: "number",
        ["aria-describedby"]: "galce-helper",
      },
      messageProps: {
        id: "galce-helper",
      },
    },
  },

  SELECT_FIELDS: {
    MANUFACTURER: {
      labelText: "Fabricante",
      name: "manufacturerId",
      placeholder: "Seleccione un fabricante",
    },
    MATERIAL: {
      labelText: "Material",
      name: "materialId",
      placeholder: "Seleccione un material",
    },
  },

  BUTTON_PROPS: {
    SUBMIT: {
      fullWidth: true,
      label: "Registrar",
      type: "submit",
    },
    SUBMIT_LABEL_CREATE: "Crear",
    SUBMIT_LABEL_UPDATE: "Actualizar",
  },
} as const;

export default constants;
