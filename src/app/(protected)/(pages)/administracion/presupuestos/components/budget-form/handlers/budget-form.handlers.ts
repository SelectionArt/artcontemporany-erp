// Actions
import { fetchPricingItems } from "../../../actions/budgets.actions";
// Utils
import { updatePrice } from "./utils/budget-form.handlers.utils";
// Types
import type {
  ArtworkPricingsValueChangeHandlerProps,
  BudgetFormHandlersProps,
  BudgetFormHandlersReturn,
  HeightValueChangeHandlerProps,
  FramePricingsValueChangeHandlerProps,
  QuantityValueChangeHandlerProps,
  WidthValueChangeHandlerProps,
} from "./types/budget-form.handlers.types";

const artworkPricingsValueChangeHandler = async ({
  field,
  form,
  framePricingItems,
  index,
  setArtworkPricingItems,
  value,
}: ArtworkPricingsValueChangeHandlerProps): Promise<void> => {
  field.onChange(value);
  const artworkPricingItems = await fetchPricingItems({ id: value });
  setArtworkPricingItems((prev) => ({
    ...prev,
    [index]: artworkPricingItems,
  }));

  const { artworkPricingsId, framePricingsId, height, width } = form.getValues(
    `items.${index}`,
  );

  updatePrice({
    form,
    index,
    pricingItems: artworkPricingItems,
    pricingId: artworkPricingsId,
    priceField: "artworkPrice",
    width,
    height,
  });

  if (framePricingItems[index]) {
    updatePrice({
      form,
      index,
      pricingItems: framePricingItems[index],
      pricingId: framePricingsId,
      priceField: "framePrice",
      width,
      height,
    });
  }
};

const framePricingsValueChangeHandler = async ({
  field,
  form,
  artworkPricingItems,
  index,
  setFramePricingItems,
  value,
}: FramePricingsValueChangeHandlerProps): Promise<void> => {
  field.onChange(value);
  const framePricingItems = await fetchPricingItems({ id: value });
  setFramePricingItems((prev) => ({
    ...prev,
    [index]: framePricingItems,
  }));

  const { artworkPricingsId, framePricingsId, height, width } = form.getValues(
    `items.${index}`,
  );

  if (artworkPricingItems[index]) {
    updatePrice({
      form,
      index,
      pricingItems: artworkPricingItems[index],
      pricingId: artworkPricingsId,
      priceField: "artworkPrice",
      width,
      height,
    });
  }

  updatePrice({
    form,
    index,
    pricingItems: framePricingItems,
    pricingId: framePricingsId,
    priceField: "framePrice",
    width,
    height,
  });
};

const heightValueChangeHandler = ({
  artworkPricingItems,
  event,
  field,
  form,
  framePricingItems,
  index,
}: HeightValueChangeHandlerProps): void => {
  field.onChange(event);

  const { artworkPricingsId, framePricingsId, width, height } = form.getValues(
    `items.${index}`,
  );

  updatePrice({
    form,
    index,
    pricingItems: artworkPricingItems[index] ?? [],
    pricingId: artworkPricingsId,
    priceField: "artworkPrice",
    width,
    height,
  });

  updatePrice({
    form,
    index,
    pricingItems: framePricingItems[index] ?? [],
    pricingId: framePricingsId,
    priceField: "framePrice",
    width,
    height,
  });
};

const quantityValueChangeHandler = ({
  event,
  field,
  form,
  index,
}: QuantityValueChangeHandlerProps): void => {
  field.onChange(event);
};

const widthValueChangeHandler = ({
  artworkPricingItems,
  event,
  field,
  form,
  framePricingItems,
  index,
}: WidthValueChangeHandlerProps): void => {
  field.onChange(event);

  const { artworkPricingsId, framePricingsId, height, width } = form.getValues(
    `items.${index}`,
  );

  updatePrice({
    form,
    index,
    pricingItems: artworkPricingItems[index] ?? [],
    pricingId: artworkPricingsId,
    priceField: "artworkPrice",
    width,
    height,
  });

  updatePrice({
    form,
    index,
    pricingItems: framePricingItems[index] ?? [],
    pricingId: framePricingsId,
    priceField: "framePrice",
    width,
    height,
  });
};

const BudgetFormHandlers = ({
  artworkPricingItems,
  form,
  framePricingItems,
  setArtworkPricingItems,
  setFramePricingItems,
}: BudgetFormHandlersProps): BudgetFormHandlersReturn => {
  return {
    handleArtworkPricingsValueChange: ({ field, index, value }) =>
      artworkPricingsValueChangeHandler({
        field,
        form,
        framePricingItems,
        index,
        setArtworkPricingItems,
        value,
      }),
    handleFramePricingsValueChange: ({ field, index, value }) =>
      framePricingsValueChangeHandler({
        artworkPricingItems,
        field,
        form,
        index,
        setFramePricingItems,
        value,
      }),
    handleHeightValueChange: ({ event, field, index }) =>
      heightValueChangeHandler({
        artworkPricingItems,
        event,
        field,
        form,
        framePricingItems,
        index,
      }),
    handleQuantityValueChange: ({ event, field, index }) =>
      quantityValueChangeHandler({
        event,
        field,
        form,
        index,
      }),
    handleWidthValueChange: ({ event, field, index }) =>
      widthValueChangeHandler({
        artworkPricingItems,
        event,
        field,
        form,
        framePricingItems,
        index,
      }),
  };
};

export { BudgetFormHandlers };
