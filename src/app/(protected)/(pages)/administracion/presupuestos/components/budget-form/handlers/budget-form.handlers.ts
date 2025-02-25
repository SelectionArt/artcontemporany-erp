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

  const { artworkPricingId, framePricingId, height, width } = form.getValues(
    `items.${index}`,
  );

  updatePrice({
    form,
    index,
    pricingItems: artworkPricingItems,
    pricingId: artworkPricingId,
    priceField: "artworkPrice",
    width,
    height,
  });

  if (framePricingItems[index]) {
    updatePrice({
      form,
      index,
      pricingItems: framePricingItems[index],
      pricingId: framePricingId,
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

  const { artworkPricingId, framePricingId, height, width } = form.getValues(
    `items.${index}`,
  );

  if (artworkPricingItems[index]) {
    updatePrice({
      form,
      index,
      pricingItems: artworkPricingItems[index],
      pricingId: artworkPricingId,
      priceField: "artworkPrice",
      width,
      height,
    });
  }

  updatePrice({
    form,
    index,
    pricingItems: framePricingItems,
    pricingId: framePricingId,
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

  const { artworkPricingId, framePricingId, width, height } = form.getValues(
    `items.${index}`,
  );

  updatePrice({
    form,
    index,
    pricingItems: artworkPricingItems[index] ?? [],
    pricingId: artworkPricingId,
    priceField: "artworkPrice",
    width,
    height,
  });

  updatePrice({
    form,
    index,
    pricingItems: framePricingItems[index] ?? [],
    pricingId: framePricingId,
    priceField: "framePrice",
    width,
    height,
  });
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

  const { artworkPricingId, framePricingId, height, width } = form.getValues(
    `items.${index}`,
  );

  updatePrice({
    form,
    index,
    pricingItems: artworkPricingItems[index] ?? [],
    pricingId: artworkPricingId,
    priceField: "artworkPrice",
    width,
    height,
  });

  updatePrice({
    form,
    index,
    pricingItems: framePricingItems[index] ?? [],
    pricingId: framePricingId,
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
