"use client";
import { useState, useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";
// Actions
import { fetchPricingItems } from "../../../../actions/budgets.actions";
// Components
import { AutoComplete } from "@/components/ui/autocomplete";
import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
// Icons
import { Eraser, Trash2 } from "lucide-react";
// Types
import type {
  Artwork,
  Frame,
  Pricing,
} from "../../../../types/budgets.container.types";
import { getPrice } from "./utils/item.utils";
import type { BudgetSchema } from "../../../../schemas/types/budget.schema.types";
import type { UseFieldArrayReturn } from "react-hook-form";
import type { PricingItem } from "../../../../types/budgets.container.types";

type BudgetItemRowProps = {
  artworks: Artwork[];
  fieldArray: UseFieldArrayReturn<BudgetSchema, "items">;
  frames: Frame[];
  index: number;
  loading: boolean;
  pricings: Pricing[];
};

const Item = ({
  artworks,
  fieldArray,
  frames,
  index,
  loading,
  pricings,
}: BudgetItemRowProps) => {
  const [artworkPricingItems, setArtworkPricingItems] = useState<PricingItem[]>(
    [],
  );
  const [framePricingItems, setFramePricingItems] = useState<PricingItem[]>([]);

  const { control, getValues, setValue } = useFormContext();

  const items = useWatch({ name: `items.${index}`, control });

  const artworksValues = () => {
    const searchValue = items.artworkId || "";

    const selectedArtwork = artworks.find(
      (artwork) => artwork.id === searchValue,
    );

    const filteredArtworks = artworks
      .filter((artwork) =>
        `${artwork.referenceNumber}-${artwork.referenceCode}`
          .toLowerCase()
          .includes(searchValue.toLowerCase() || ""),
      )
      .slice(0, 10)
      .map((artwork) => ({
        value: artwork.id,
        label: `${artwork.referenceNumber}-${artwork.referenceCode}`,
        imageUrl: artwork.imageUrl || "",
      }));

    return selectedArtwork
      ? [
          {
            value: selectedArtwork.id,
            label: `${selectedArtwork.referenceNumber}-${selectedArtwork.referenceCode}`,
            imageUrl: selectedArtwork.imageUrl || "",
          },
          ...filteredArtworks,
        ]
      : filteredArtworks;
  };

  const framesValues = () => {
    const searchValue = items.frameId || "";

    const selectedFrame = frames.find((frame) => frame.id === searchValue);

    const filteredFrames = frames
      .filter((frame) =>
        frame.reference
          .toLowerCase()
          .includes((searchValue ?? "").toLowerCase()),
      )
      .slice(0, 10)
      .map((frame) => ({
        value: frame.id,
        label: `${frame.reference} ${frame.name}`,
        imageUrl: frame.imageUrl || "",
      }));

    return selectedFrame
      ? [
          {
            value: selectedFrame.id,
            label: selectedFrame.reference,
            imageUrl: selectedFrame.imageUrl || "",
          },
          ...filteredFrames,
        ]
      : filteredFrames;
  };

  const handleArtworkPricingsValueChange = async (
    value: string,
  ): Promise<void> => {
    const artworkPricingItems = await fetchPricingItems({ id: value });

    setArtworkPricingItems(artworkPricingItems);

    const { height, width } = getValues(`items.${index}`);

    const newPrice = getPrice({
      pricingItems: artworkPricingItems,
      width: width,
      height: height,
    });

    const currentPrice = getValues(`items.${index}.artworkPrice`);

    if (currentPrice !== newPrice) {
      setValue(`items.${index}.artworkPrice`, newPrice, {
        shouldValidate: true,
      });
    }
  };

  const handleFramePricingsValueChange = async (
    value: string,
  ): Promise<void> => {
    const framePricingItems = await fetchPricingItems({ id: value });

    setFramePricingItems(framePricingItems);

    const { height, width } = getValues(`items.${index}`);

    const newPrice = getPrice({
      pricingItems: framePricingItems,
      width: width,
      height: height,
    });

    const currentPrice = getValues(`items.${index}.framePrice`);

    if (currentPrice !== newPrice) {
      setValue(`items.${index}.framePrice`, newPrice, {
        shouldValidate: true,
      });
    }
  };

  const handleWidthValueChange = (): void => {
    const { artworkPricingId, framePricingId, height, width } = getValues(
      `items.${index}`,
    );

    if (!artworkPricingId || !artworkPricingItems.length || !height || !width) {
      return;
    }

    const newArtworkPrice = getPrice({
      pricingItems: artworkPricingItems,
      width: width,
      height: height,
    });

    const artworkCurrentPrice = getValues(`items.${index}.artworkPrice`);

    if (artworkCurrentPrice !== newArtworkPrice) {
      setValue(`items.${index}.artworkPrice`, newArtworkPrice, {
        shouldValidate: true,
      });
    }

    if (!framePricingId || !framePricingItems.length) {
      return;
    }

    const newFramePrice = getPrice({
      pricingItems: framePricingItems,
      width: width,
      height: height,
    });

    const frameCurrentPrice = getValues(`items.${index}.framePrice`);

    if (frameCurrentPrice !== newFramePrice) {
      setValue(`items.${index}.framePrice`, newFramePrice, {
        shouldValidate: true,
      });
    }
  };

  const handleHeightValueChange = (): void => {
    const { artworkPricingId, framePricingId, height, width } = getValues(
      `items.${index}`,
    );

    if (!artworkPricingId || !artworkPricingItems.length || !height || !width) {
      return;
    }

    const newArtworkPrice = getPrice({
      pricingItems: artworkPricingItems,
      width: width,
      height: height,
    });

    const artworkCurrentPrice = getValues(`items.${index}.artworkPrice`);

    if (artworkCurrentPrice !== newArtworkPrice) {
      setValue(`items.${index}.artworkPrice`, newArtworkPrice, {
        shouldValidate: true,
      });
    }

    if (!framePricingId || !framePricingItems.length) {
      return;
    }

    const newFramePrice = getPrice({
      pricingItems: framePricingItems,
      width: width,
      height: height,
    });

    const frameCurrentPrice = getValues(`items.${index}.framePrice`);

    if (frameCurrentPrice !== newFramePrice) {
      setValue(`items.${index}.framePrice`, newFramePrice, {
        shouldValidate: true,
      });
    }
  };

  const artworkTotalPrice = () => {
    const [artworkPrice, quantity] = [items.artworkPrice, items.quantity].map(
      Number,
    );
    return artworkPrice * quantity;
  };

  const frameTotalPrice = () => {
    const [framePrice, quantity] = [items.framePrice, items.quantity].map(
      Number,
    );
    return framePrice * quantity;
  };

  useEffect(() => {
    const { artworkPricingId, framePricingId } = getValues(`items.${index}`);

    if (artworkPricingId) {
      handleArtworkPricingsValueChange(artworkPricingId);
    }
    if (framePricingId) {
      handleFramePricingsValueChange(framePricingId);
    }
  }, []);

  return (
    <div className="grid grid-cols-[auto_2fr_2fr_1fr_1fr_1fr_1fr_auto] gap-2">
      <div className="flex flex-col gap-2">
        <Button
          {...{ size: "icon", type: "button", variant: "ghost" }}
          onClick={() => {
            setValue(`items.${index}.artworkId`, "");
            setValue(`items.${index}.artworkPricingId`, "");
            setValue(`items.${index}.artworkPrice`, 0);
          }}
        >
          <Eraser />
        </Button>
        <Button
          {...{ size: "icon", type: "button", variant: "ghost" }}
          onClick={() => {
            setValue(`items.${index}.frameId`, "");
            setValue(`items.${index}.framePricingId`, "");
            setValue(`items.${index}.framePrice`, 0);
          }}
        >
          <Eraser />
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        <FormField
          control={control}
          name={`items.${index}.artworkId`}
          render={({ field }) => (
            <FormItem className="min-w-[160px]">
              <FormControl>
                <AutoComplete
                  emptyMessage="No se han encontrado obras."
                  placeholder="Referencia obra"
                  items={artworksValues()}
                  onSelectedValueChange={field.onChange}
                  selectedValue={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={`items.${index}.frameId`}
          render={({ field }) => (
            <FormItem className="min-w-[160px]">
              <FormControl>
                <AutoComplete
                  emptyMessage="No se han encontrado molduras."
                  placeholder="Referencia moldura"
                  items={framesValues()}
                  onSelectedValueChange={field.onChange}
                  selectedValue={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="flex flex-col gap-2">
        <FormField
          control={control}
          name={`items.${index}.artworkPricingId`}
          render={({ field }) => (
            <FormItem className="min-w-[160px]">
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  handleArtworkPricingsValueChange(value);
                }}
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Tarifa obra" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {pricings
                    .filter((pricing) => pricing.type === "artwork")
                    .map((pricing) => (
                      <SelectItem key={pricing.id} value={pricing.id}>
                        {pricing.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={`items.${index}.framePricingId`}
          render={({ field }) => (
            <FormItem className="min-w-[160px]">
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  handleFramePricingsValueChange(value);
                }}
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Tarifa moldura" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {pricings
                    .filter((pricing) => pricing.type === "frame")
                    .map((pricing) => (
                      <SelectItem key={pricing.id} value={pricing.id}>
                        {pricing.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="flex flex-col gap-2">
        <FormField
          control={control}
          name={`items.${index}.width`}
          render={({ field }) => (
            <FormItem className="min-w-[80px]">
              <FormControl>
                <Input
                  {...{
                    ...field,
                    type: "number",
                    placeholder: "Ancho",
                    disabled: loading,
                    onChange: (event) => {
                      field.onChange(event);
                      handleWidthValueChange();
                    },
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={`items.${index}.height`}
          render={({ field }) => (
            <FormItem className="min-w-[80px]">
              <FormControl>
                <Input
                  {...{
                    ...field,
                    type: "number",
                    placeholder: "Alto",
                    disabled: loading,
                    onChange: (event) => {
                      field.onChange(event);
                      handleHeightValueChange();
                    },
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={control}
        name={`items.${index}.quantity`}
        render={({ field }) => (
          <FormItem className="min-w-[80px]">
            <FormControl>
              <Input
                {...{
                  ...field,
                  type: "number",
                  placeholder: "Cantidad",
                  disabled: loading,
                }}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="flex flex-col gap-2">
        <FormField
          control={control}
          name={`items.${index}.artworkPrice`}
          render={({ field }) => (
            <FormItem className="min-w-[80px]">
              <FormControl>
                <Input
                  {...{
                    ...field,
                    type: "number",
                    placeholder: "Precio",
                    disabled: loading,
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={`items.${index}.framePrice`}
          render={({ field }) => (
            <FormItem className="min-w-[80px]">
              <FormControl>
                <Input
                  {...{
                    ...field,
                    type: "number",
                    placeholder: "Precio",
                    disabled: loading,
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="flex w-[80px] flex-col gap-2">
        <div className="flex grow items-center justify-end text-sm">
          {new Intl.NumberFormat("es-ES", {
            style: "currency",
            currency: "EUR",
          }).format(artworkTotalPrice())}
        </div>
        <div className="flex grow items-center justify-end text-sm">
          {new Intl.NumberFormat("es-ES", {
            style: "currency",
            currency: "EUR",
          }).format(frameTotalPrice())}
        </div>
      </div>

      <div className="flex items-end">
        <Button
          {...{ size: "icon", type: "button", variant: "ghost" }}
          onClick={() => fieldArray.remove(index)}
        >
          <Trash2 />
        </Button>
      </div>

      <FormField
        control={control}
        name={`items.${index}.observations`}
        render={({ field }) => (
          <FormItem className="col-[2/7] grow">
            <FormControl>
              <Textarea
                {...{
                  ...field,
                  placeholder: "Observaciones item",
                  disabled: loading,
                  rows: 1,
                }}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {index !== fieldArray.fields.length - 1 && (
        <Separator className="col-[1/8] my-2" />
      )}
    </div>
  );
};

export { Item };
