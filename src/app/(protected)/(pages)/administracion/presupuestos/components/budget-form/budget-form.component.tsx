// Vendors
import { format } from "date-fns";
import { es } from "date-fns/locale/es";
// Components
import { AutoComplete } from "@/components/ui/autocomplete";
import { Button } from "@/components/ui/button";
import { ButtonLoading } from "@/components/ui/button-loading";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
// Constants
import constants from "./constants/budget-form.constants";
import { DEFAULT_ITEM } from "../../constants/budgets.constants";
// Hooks
import { BudgetsHook } from "./hooks/budget-form.hook";
// Icons
import { CalendarIcon, Plus, Trash2 } from "lucide-react";
// Libs
import { cn } from "@/lib/utils";
// Types
import type { BudgetFormProps } from "./types/budget-form.component.types";

const BudgetForm = ({
  artworks,
  clients,
  fieldArray,
  form,
  frames,
  handleSubmit,
  label,
  loading,
  pricings,
}: BudgetFormProps) => {
  const {
    artworksValues,
    artworkTotalPrice,
    clientsValues,
    framesValues,
    frameTotalPrice,
    handleArtworkPricingsValueChange,
    handleFramePricingsValueChange,
    handleHeightValueChange,
    handleWidthValueChange,
    isCalendarOpen,
    setIsCalendarOpen,
    total,
  } = BudgetsHook({ artworks, clients, form, frames });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <FormField
              control={form.control}
              name={constants.CLIENT_FIELD.name}
              render={({ field }) => (
                <FormItem className="grow basis-1/3">
                  <FormLabel>{constants.CLIENT_FIELD.labelText}</FormLabel>
                  <FormControl>
                    <AutoComplete
                      {...constants.CLIENT_FIELD.autocompleteProps}
                      items={clientsValues}
                      onSelectedValueChange={field.onChange}
                      selectedValue={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={constants.DATE_FIELD.name}
              render={({ field }) => (
                <FormItem className="grow basis-1/3">
                  <FormLabel>{constants.DATE_FIELD.labelText}</FormLabel>
                  <Popover
                    open={isCalendarOpen}
                    onOpenChange={setIsCalendarOpen}
                  >
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          {...constants.DATE_FIELD.buttonProps}
                          className={cn(
                            "w-full pl-3 text-left font-normal text-ellipsis",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          {field.value ? (
                            format(field.value, "P", { locale: es })
                          ) : (
                            <span>{constants.DATE_FIELD.buttonText}</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={
                          field.value ? new Date(field.value) : undefined
                        }
                        onSelect={(e) => {
                          field.onChange(e);
                          setIsCalendarOpen(false);
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={constants.STATUS_FIELD.name}
              render={({ field }) => (
                <FormItem className="grow basis-1/3">
                  <FormLabel>{constants.STATUS_FIELD.labelText}</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder={constants.STATUS_FIELD.placeholder}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {constants.STATUS_FIELD.options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex gap-2">
            <FormField
              control={form.control}
              name={constants.NUMBER_FIELD.inputProps.name}
              render={({ field }) => (
                <FormItem className="grow basis-1/3">
                  <FormLabel {...constants.NUMBER_FIELD.labelProps}>
                    {constants.NUMBER_FIELD.labelText}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...{
                        ...field,
                        ...constants.NUMBER_FIELD.inputProps,
                        disabled: loading,
                      }}
                    />
                  </FormControl>
                  <FormMessage {...constants.NUMBER_FIELD.messageProps} />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={constants.REFERENCE_FIELD.inputProps.name}
              render={({ field }) => (
                <FormItem className="grow basis-1/3">
                  <FormLabel {...constants.REFERENCE_FIELD.labelProps}>
                    {constants.REFERENCE_FIELD.labelText}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...{
                        ...field,
                        ...constants.REFERENCE_FIELD.inputProps,
                        disabled: loading,
                      }}
                    />
                  </FormControl>
                  <FormMessage {...constants.REFERENCE_FIELD.messageProps} />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={constants.VALIDITY_FIELD.inputProps.name}
              render={({ field }) => (
                <FormItem className="grow basis-1/3">
                  <FormLabel {...constants.VALIDITY_FIELD.labelProps}>
                    {constants.VALIDITY_FIELD.labelText}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...{
                        ...field,
                        ...constants.VALIDITY_FIELD.inputProps,
                        disabled: loading,
                      }}
                    />
                  </FormControl>
                  <FormMessage {...constants.VALIDITY_FIELD.messageProps} />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col gap-2 overflow-y-auto rounded-md border p-4">
            <div className="grid grid-cols-[2fr_2fr_1fr_1fr_1fr_1fr_auto] gap-2">
              <div className="flex min-w-[160px] text-sm">Producto</div>
              <div className="flex min-w-[160px] text-sm">Tarifa</div>
              <div className="flex min-w-[80px] text-sm">Medidas</div>
              <div className="flex min-w-[80px] text-sm">Cantidad</div>
              <div className="flex min-w-[80px] text-sm">Precio u.</div>
              <div className="flex w-[80px] justify-end text-sm">Total</div>
              <div className="w-10" />
            </div>
            {fieldArray.fields.map((field, index) => (
              <div
                key={field.id}
                className="grid grid-cols-[2fr_2fr_1fr_1fr_1fr_1fr_auto] gap-2"
              >
                <div className="flex flex-col gap-2">
                  <FormField
                    control={form.control}
                    name={`items.${index}.artworkId`}
                    render={({ field }) => {
                      console.log("AutoComplete items:", artworksValues(index));

                      return (
                        <FormItem className="min-w-[160px]">
                          <FormControl>
                            <AutoComplete
                              {...constants.ARTWORK_FIELD.autocompleteProps}
                              items={artworksValues(index)}
                              onSelectedValueChange={(value) => {
                                console.log("AutoComplete value:", value);
                                field.onChange(value);
                              }}
                              selectedValue={field.value}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  <FormField
                    control={form.control}
                    name={`items.${index}.frameId`}
                    render={({ field }) => (
                      <FormItem className="min-w-[160px]">
                        <FormControl>
                          <AutoComplete
                            {...constants.FRAME_FIELD.autocompleteProps}
                            items={framesValues(index)}
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
                    control={form.control}
                    name={`items.${index}.artworkPricingId`}
                    render={({ field }) => (
                      <FormItem className="min-w-[160px]">
                        <Select
                          onValueChange={(value) =>
                            handleArtworkPricingsValueChange({
                              field,
                              index,
                              value,
                            })
                          }
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue
                                placeholder={
                                  constants.ARTWORK_PRICINGS_FIELD.placeholder
                                }
                              />
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
                    control={form.control}
                    name={`items.${index}.framePricingId`}
                    render={({ field }) => (
                      <FormItem className="min-w-[160px]">
                        <Select
                          onValueChange={(value) =>
                            handleFramePricingsValueChange({
                              field,
                              index,
                              value,
                            })
                          }
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue
                                placeholder={
                                  constants.FRAME_PRICINGS_FIELD.placeholder
                                }
                              />
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
                    control={form.control}
                    name={`items.${index}.width`}
                    render={({ field }) => (
                      <FormItem className="min-w-[80px]">
                        <FormControl>
                          <Input
                            {...{
                              ...field,
                              ...constants.WIDTH_FIELD.inputProps,
                              disabled: loading,
                              onChange: (event) => {
                                handleWidthValueChange({
                                  event,
                                  field,
                                  index,
                                });
                              },
                            }}
                          />
                        </FormControl>
                        <FormMessage {...constants.WIDTH_FIELD.messageProps} />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`items.${index}.height`}
                    render={({ field }) => (
                      <FormItem className="min-w-[80px]">
                        <FormControl>
                          <Input
                            {...{
                              ...field,
                              ...constants.HEIGHT_FIELD.inputProps,
                              disabled: loading,
                              onChange: (event) => {
                                handleHeightValueChange({
                                  event,
                                  field,
                                  index,
                                });
                              },
                            }}
                          />
                        </FormControl>
                        <FormMessage {...constants.HEIGHT_FIELD.messageProps} />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name={`items.${index}.quantity`}
                  render={({ field }) => (
                    <FormItem className="min-w-[80px]">
                      <FormControl>
                        <Input
                          {...{
                            ...field,
                            ...constants.QUANTITY_FIELD.inputProps,
                            disabled: loading,
                          }}
                        />
                      </FormControl>
                      <FormMessage {...constants.QUANTITY_FIELD.messageProps} />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col gap-2">
                  <FormField
                    control={form.control}
                    name={`items.${index}.artworkPrice`}
                    render={({ field }) => (
                      <FormItem className="min-w-[80px]">
                        <FormControl>
                          <Input
                            {...{
                              ...field,
                              ...constants.ARTWORK_PRICE_FIELD.inputProps,
                              disabled: loading,
                            }}
                          />
                        </FormControl>
                        <FormMessage
                          {...constants.ARTWORK_PRICE_FIELD.messageProps}
                        />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`items.${index}.framePrice`}
                    render={({ field }) => (
                      <FormItem className="min-w-[80px]">
                        <FormControl>
                          <Input
                            {...{
                              ...field,
                              ...constants.FRAME_PRICE_FIELD.inputProps,
                              disabled: loading,
                            }}
                          />
                        </FormControl>
                        <FormMessage
                          {...constants.FRAME_PRICE_FIELD.messageProps}
                        />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex w-[80px] flex-col gap-2">
                  <div className="flex grow items-center justify-end text-sm">
                    {new Intl.NumberFormat("es-ES", {
                      style: "currency",
                      currency: "EUR",
                    }).format(artworkTotalPrice(index))}
                  </div>
                  <div className="flex grow items-center justify-end text-sm">
                    {new Intl.NumberFormat("es-ES", {
                      style: "currency",
                      currency: "EUR",
                    }).format(frameTotalPrice(index))}
                  </div>
                </div>

                <div className="flex items-end">
                  <Button
                    {...constants.REMOVE_BUTTON_PROPS}
                    onClick={() => fieldArray.remove(index)}
                  >
                    <Trash2 />
                  </Button>
                </div>

                <FormField
                  control={form.control}
                  name={`items.${index}.observations`}
                  render={({ field }) => (
                    <FormItem className="col-[1/6] grow">
                      <FormControl>
                        <Textarea
                          {...{
                            ...field,
                            ...constants.OBSERVATIONS_ITEM_FIELD.inputProps,
                            disabled: loading,
                            rows: 1,
                          }}
                        />
                      </FormControl>
                      <FormMessage
                        {...constants.OBSERVATIONS_ITEM_FIELD.messageProps}
                      />
                    </FormItem>
                  )}
                />

                {index !== fieldArray.fields.length - 1 && (
                  <Separator className="col-[1/8] my-2" />
                )}
              </div>
            ))}

            <div className="grid grid-cols-[2fr_2fr_1fr_1fr_1fr_1fr_auto] gap-2">
              <div className="flex min-w-[160px] text-sm"></div>
              <div className="flex min-w-[160px] text-sm"></div>
              <div className="flex min-w-[80px] text-sm"></div>
              <div className="flex min-w-[80px] text-sm"></div>
              <div className="flex min-w-[80px] justify-end text-sm">Total</div>
              <div className="flex w-[80px] justify-end text-sm">
                {new Intl.NumberFormat("es-ES", {
                  style: "currency",
                  currency: "EUR",
                }).format(total)}
              </div>
              <div className="w-10" />
            </div>
          </div>
          <Button
            {...constants.ADD_BUTTON_PROPS}
            className="self-start"
            onClick={() => fieldArray.append(DEFAULT_ITEM)}
          >
            <Plus />
            Añadir item
          </Button>

          <div className="grid grid-cols-[1fr_1fr_1fr] gap-2 sm:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
            <FormField
              control={form.control}
              name={constants.PAYMENT_METHOD_FIELD.inputProps.name}
              render={({ field }) => (
                <FormItem className="col-[1/3] sm:col-[1/2]">
                  <FormLabel {...constants.PAYMENT_METHOD_FIELD.labelProps}>
                    {constants.PAYMENT_METHOD_FIELD.labelText}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...{
                        ...field,
                        ...constants.PAYMENT_METHOD_FIELD.inputProps,
                        disabled: loading,
                      }}
                    />
                  </FormControl>
                  <FormMessage
                    {...constants.PAYMENT_METHOD_FIELD.messageProps}
                  />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={constants.SHOW_IBAN_FIELD.name}
              render={({ field }) => (
                <FormItem className="grow basis-1/5">
                  <FormLabel>{constants.SHOW_IBAN_FIELD.labelText}</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={String(field.value)}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder={constants.SHOW_IBAN_FIELD.placeholder}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {constants.SHOW_IBAN_FIELD.options.map((option) => (
                        <SelectItem
                          key={String(option.value)}
                          value={String(option.value)}
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={constants.DISCOUNT_FIELD.inputProps.name}
              render={({ field }) => (
                <FormItem className="grow basis-1/5">
                  <FormLabel {...constants.DISCOUNT_FIELD.labelProps}>
                    {constants.DISCOUNT_FIELD.labelText}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...{
                        ...field,
                        ...constants.DISCOUNT_FIELD.inputProps,
                        disabled: loading,
                      }}
                    />
                  </FormControl>
                  <FormMessage {...constants.DISCOUNT_FIELD.messageProps} />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={constants.TRANSPORT_FIELD.inputProps.name}
              render={({ field }) => (
                <FormItem className="grow basis-1/5">
                  <FormLabel {...constants.TRANSPORT_FIELD.labelProps}>
                    {constants.TRANSPORT_FIELD.labelText}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...{
                        ...field,
                        ...constants.TRANSPORT_FIELD.inputProps,
                        disabled: loading,
                      }}
                    />
                  </FormControl>
                  <FormMessage {...constants.TRANSPORT_FIELD.messageProps} />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={constants.TAX_FIELD.inputProps.name}
              render={({ field }) => (
                <FormItem className="grow basis-1/5">
                  <FormLabel {...constants.TAX_FIELD.labelProps}>
                    {constants.TAX_FIELD.labelText}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...{
                        ...field,
                        ...constants.TAX_FIELD.inputProps,
                        disabled: loading,
                      }}
                    />
                  </FormControl>
                  <FormMessage {...constants.TAX_FIELD.messageProps} />
                </FormItem>
              )}
            />
          </div>

          <div className="flex gap-2">
            <FormField
              control={form.control}
              name={constants.OBSERVATIONS_FIELD.inputProps.name}
              render={({ field }) => (
                <FormItem className="grow basis-1/2 grid-rows-[auto_1fr]">
                  <FormLabel {...constants.OBSERVATIONS_FIELD.labelProps}>
                    {constants.OBSERVATIONS_FIELD.labelText}
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...{
                        ...field,
                        ...constants.OBSERVATIONS_FIELD.inputProps,
                        disabled: loading,
                      }}
                    />
                  </FormControl>
                  <FormMessage {...constants.OBSERVATIONS_FIELD.messageProps} />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={constants.SEND_ADDRESS_FIELD.inputProps.name}
              render={({ field }) => (
                <FormItem className="grow basis-1/2 grid-rows-[auto_1fr]">
                  <FormLabel {...constants.SEND_ADDRESS_FIELD.labelProps}>
                    {constants.SEND_ADDRESS_FIELD.labelText}
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...{
                        ...field,
                        ...constants.SEND_ADDRESS_FIELD.inputProps,
                        disabled: loading,
                      }}
                    />
                  </FormControl>
                  <FormMessage {...constants.SEND_ADDRESS_FIELD.messageProps} />
                </FormItem>
              )}
            />
          </div>
        </div>
        <ButtonLoading
          {...{
            ...constants.SUBMIT_BUTTON_PROPS,
            loading,
            label,
          }}
        />
      </form>
    </Form>
  );
};

export { BudgetForm };
