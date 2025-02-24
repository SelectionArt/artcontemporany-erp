// Types
import type {
  GetPriceProps,
  GetPriceReturn,
  GetRoundedItemProps,
  GetRoundedItemReturn,
  UpdatePriceProps,
} from "./types/budget-form.handlers.utils.types";

const updatePrice = ({
  form,
  index,
  pricingItems,
  pricingId,
  priceField,
  width,
  height,
}: UpdatePriceProps): void => {
  if (!pricingItems.length || !pricingId || !width || !height) return;

  const newPrice = getPrice({
    pricingItems,
    width,
    height,
  });

  const currentPrice = form.getValues(`items.${index}.${priceField}`);

  if (currentPrice !== newPrice) {
    form.setValue(`items.${index}.${priceField}`, newPrice, {
      shouldValidate: true,
    });
  }
};

const getPrice = ({
  pricingItems,
  width,
  height,
}: GetPriceProps): GetPriceReturn => {
  const item = getRoundedItem({
    pricingItems,
    width,
    height,
  });

  return item.price;
};

const getRoundedItem = ({
  pricingItems,
  width,
  height,
}: GetRoundedItemProps): GetRoundedItemReturn =>
  pricingItems.find((item) => item.width === width && item.height === height) ||
  pricingItems
    .filter((p) => p.width >= Number(width) && p.height >= Number(height))
    .sort((a, b) => a.width * a.height - b.width * b.height)[0] ||
  pricingItems
    .filter((p) => p.width <= Number(width) && p.height <= Number(height))
    .sort((a, b) => b.width * b.height - a.width * a.height)[0];

export { getPrice, updatePrice };
