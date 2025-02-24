// Components
import { ButtonLoading } from "@/components/ui/button-loading";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// Constants
import constants from "./constants/pricing-form.constants";
// Types
import type { PricingFormProps } from "./types/pricing-form.component.types";

const PricingForm = ({
  form,
  handleSubmit,
  label,
  loading,
}: PricingFormProps) => (
  <Form {...form}>
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name={constants.FIELD_PROPS.WIDTH.inputProps.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel {...constants.FIELD_PROPS.WIDTH.labelProps}>
                  {constants.FIELD_PROPS.WIDTH.labelText}
                </FormLabel>
                <FormControl>
                  <Input
                    {...{
                      ...field,
                      ...constants.FIELD_PROPS.WIDTH.inputProps,
                      disabled: loading,
                    }}
                  />
                </FormControl>
                <FormMessage {...constants.FIELD_PROPS.WIDTH.messageProps} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={constants.FIELD_PROPS.HEIGHT.inputProps.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel {...constants.FIELD_PROPS.HEIGHT.labelProps}>
                  {constants.FIELD_PROPS.HEIGHT.labelText}
                </FormLabel>
                <FormControl>
                  <Input
                    {...{
                      ...field,
                      ...constants.FIELD_PROPS.HEIGHT.inputProps,
                      disabled: loading,
                    }}
                  />
                </FormControl>
                <FormMessage {...constants.FIELD_PROPS.HEIGHT.messageProps} />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name={constants.FIELD_PROPS.PRICE.inputProps.name}
          render={({ field }) => (
            <FormItem>
              <FormLabel {...constants.FIELD_PROPS.PRICE.labelProps}>
                {constants.FIELD_PROPS.PRICE.labelText}
              </FormLabel>
              <FormControl>
                <Input
                  {...{
                    ...field,
                    ...constants.FIELD_PROPS.PRICE.inputProps,
                    disabled: loading,
                  }}
                />
              </FormControl>
              <FormMessage {...constants.FIELD_PROPS.PRICE.messageProps} />
            </FormItem>
          )}
        />
      </div>
      <ButtonLoading
        {...{
          ...constants.BUTTON_PROPS.SUBMIT,
          loading,
          label,
        }}
      />
    </form>
  </Form>
);

export { PricingForm };
