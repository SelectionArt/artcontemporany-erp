import { useWatch, useFormContext } from "react-hook-form";
import { BudgetSchema } from "../../../../schemas/types/budget.schema.types";

const Total = () => {
  const { control } = useFormContext();

  const items: BudgetSchema["items"] = useWatch({ name: "items", control });

  const total = items.reduce(
    (acc, { artworkPrice, framePrice, quantity }) =>
      acc + artworkPrice * quantity + (framePrice ?? 0) * quantity,
    0,
  );

  return (
    <>
      {new Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: "EUR",
      }).format(total)}
    </>
  );
};

export { Total };
