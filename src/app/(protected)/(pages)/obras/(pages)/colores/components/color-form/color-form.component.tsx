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
import constants from "./constants/color-form.constants";
// Types
import type { ColorFormProps } from "./types/color-form.component.types";

const ColorForm = ({ form, handleSubmit, label, loading }: ColorFormProps) => (
  <Form {...form}>
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col gap-4">
        <FormField
          control={form.control}
          name={constants.FIELD_PROPS.NAME.inputProps.name}
          render={({ field }) => (
            <FormItem>
              <FormLabel {...constants.FIELD_PROPS.NAME.labelProps}>
                {constants.FIELD_PROPS.NAME.labelText}
              </FormLabel>
              <FormControl>
                <Input
                  {...{
                    ...field,
                    ...constants.FIELD_PROPS.NAME.inputProps,
                    disabled: loading,
                  }}
                />
              </FormControl>
              <FormMessage {...constants.FIELD_PROPS.NAME.messageProps} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={constants.FIELD_PROPS.HEX.inputProps.name}
          render={({ field }) => (
            <FormItem>
              <FormLabel {...constants.FIELD_PROPS.HEX.labelProps}>
                {constants.FIELD_PROPS.HEX.labelText}
              </FormLabel>
              <FormControl>
                <Input
                  {...{
                    ...field,
                    ...constants.FIELD_PROPS.HEX.inputProps,
                    disabled: loading,
                  }}
                />
              </FormControl>
              <FormMessage {...constants.FIELD_PROPS.HEX.messageProps} />
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

export { ColorForm };
