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
import constants from "./constants/increment-form.constants";
// Types
import type { IncrementFormProps } from "./types/increment-form.component.types";

const IncrementForm = ({
  form,
  handleSubmit,
  label,
  loading,
}: IncrementFormProps) => (
  <Form {...form}>
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col gap-4">
        <FormField
          control={form.control}
          name={constants.FIELD_PROPS.FIXED_INCREMENT.inputProps.name}
          render={({ field }) => (
            <FormItem>
              <FormLabel {...constants.FIELD_PROPS.FIXED_INCREMENT.labelProps}>
                {constants.FIELD_PROPS.FIXED_INCREMENT.labelText}
              </FormLabel>
              <FormControl>
                <Input
                  {...{
                    ...field,
                    ...constants.FIELD_PROPS.FIXED_INCREMENT.inputProps,
                    disabled: loading,
                  }}
                />
              </FormControl>
              <FormMessage
                {...constants.FIELD_PROPS.FIXED_INCREMENT.messageProps}
              />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={constants.FIELD_PROPS.PORCENTUAL_INCREMENT.inputProps.name}
          render={({ field }) => (
            <FormItem>
              <FormLabel
                {...constants.FIELD_PROPS.PORCENTUAL_INCREMENT.labelProps}
              >
                {constants.FIELD_PROPS.PORCENTUAL_INCREMENT.labelText}
              </FormLabel>
              <FormControl>
                <Input
                  {...{
                    ...field,
                    ...constants.FIELD_PROPS.PORCENTUAL_INCREMENT.inputProps,
                    disabled: loading,
                  }}
                />
              </FormControl>
              <FormMessage
                {...constants.FIELD_PROPS.PORCENTUAL_INCREMENT.messageProps}
              />
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

export { IncrementForm };
