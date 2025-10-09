// Types
import type {
  GetPriceProps,
  GetPriceReturn,
  GetRoundedItemProps,
  GetRoundedItemReturn,
} from "./types/item.utils.types";

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

  if (!item) {
    return 0;
  }

  return item.price;
};

const getRoundedItem = ({
  pricingItems,
  width,
  height,
}: GetRoundedItemProps): GetRoundedItemReturn | null => {
  const sortedItems = pricingItems.sort(
    (a, b) => a.width * a.height - b.width * b.height,
  );

  const exactMatch = sortedItems.find(
    (item) => item.width === width && item.height === height,
  );

  if (exactMatch) {
    return exactMatch;
  }

  const largerItems = sortedItems.filter(
    (item) => item.width >= Number(width) && item.height >= Number(height),
  );

  if (largerItems.length) {
    return largerItems[0];
  }

  if (
    Number(width) > sortedItems[sortedItems.length - 1].width ||
    Number(height) > sortedItems[sortedItems.length - 1].height
  ) {
    return null;
  }

  return sortedItems[0];
};

export { getPrice };
