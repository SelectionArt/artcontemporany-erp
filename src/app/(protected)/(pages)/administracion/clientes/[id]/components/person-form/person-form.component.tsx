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
import { Textarea } from "@/components/ui/textarea";
// Constants
import constants from "./constants/person-form.constants";
// Types
import type { PersonFormProps } from "./types/person-form.component.types";

const PersonForm = ({
  form,
  handleSubmit,
  label,
  loading,
}: PersonFormProps) => (
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
          name={constants.FIELD_PROPS.EMAIL.inputProps.name}
          render={({ field }) => (
            <FormItem>
              <FormLabel {...constants.FIELD_PROPS.EMAIL.labelProps}>
                {constants.FIELD_PROPS.EMAIL.labelText}
              </FormLabel>
              <FormControl>
                <Input
                  {...{
                    ...field,
                    ...constants.FIELD_PROPS.EMAIL.inputProps,
                    disabled: loading,
                  }}
                />
              </FormControl>
              <FormMessage {...constants.FIELD_PROPS.EMAIL.messageProps} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={constants.FIELD_PROPS.PHONE.inputProps.name}
          render={({ field }) => (
            <FormItem>
              <FormLabel {...constants.FIELD_PROPS.PHONE.labelProps}>
                {constants.FIELD_PROPS.PHONE.labelText}
              </FormLabel>
              <FormControl>
                <Input
                  {...{
                    ...field,
                    ...constants.FIELD_PROPS.PHONE.inputProps,
                    disabled: loading,
                  }}
                />
              </FormControl>
              <FormMessage {...constants.FIELD_PROPS.PHONE.messageProps} />
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

export { PersonForm };
