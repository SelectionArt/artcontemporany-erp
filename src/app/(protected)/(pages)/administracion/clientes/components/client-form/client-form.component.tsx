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
import constants from "./constants/client-form.constants";
// Types
import type { ClientFormProps } from "./types/client-form.component.types";

const ClientForm = ({
  form,
  handleSubmit,
  label,
  loading,
}: ClientFormProps) => (
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
          name={constants.FIELD_PROPS.LEGAL_NAME.inputProps.name}
          render={({ field }) => (
            <FormItem>
              <FormLabel {...constants.FIELD_PROPS.LEGAL_NAME.labelProps}>
                {constants.FIELD_PROPS.LEGAL_NAME.labelText}
              </FormLabel>
              <FormControl>
                <Input
                  {...{
                    ...field,
                    ...constants.FIELD_PROPS.LEGAL_NAME.inputProps,
                    disabled: loading,
                  }}
                />
              </FormControl>
              <FormMessage {...constants.FIELD_PROPS.LEGAL_NAME.messageProps} />
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
        <div className="flex gap-4">
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
          <FormField
            control={form.control}
            name={constants.FIELD_PROPS.CIF.inputProps.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel {...constants.FIELD_PROPS.CIF.labelProps}>
                  {constants.FIELD_PROPS.CIF.labelText}
                </FormLabel>
                <FormControl>
                  <Input
                    {...{
                      ...field,
                      ...constants.FIELD_PROPS.CIF.inputProps,
                      disabled: loading,
                    }}
                  />
                </FormControl>
                <FormMessage {...constants.FIELD_PROPS.CIF.messageProps} />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name={constants.FIELD_PROPS.ADDRESS.inputProps.name}
          render={({ field }) => (
            <FormItem className="grow basis-1/2 grid-rows-[auto_1fr]">
              <FormLabel {...constants.FIELD_PROPS.ADDRESS.labelProps}>
                {constants.FIELD_PROPS.ADDRESS.labelText}
              </FormLabel>
              <FormControl>
                <Textarea
                  {...{
                    ...field,
                    ...constants.FIELD_PROPS.ADDRESS.inputProps,
                    className: "min-h-16",
                    disabled: loading,
                  }}
                />
              </FormControl>
              <FormMessage {...constants.FIELD_PROPS.ADDRESS.messageProps} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={constants.FIELD_PROPS.SEND_ADDRESS.inputProps.name}
          render={({ field }) => (
            <FormItem className="grow basis-1/2 grid-rows-[auto_1fr]">
              <FormLabel {...constants.FIELD_PROPS.SEND_ADDRESS.labelProps}>
                {constants.FIELD_PROPS.SEND_ADDRESS.labelText}
              </FormLabel>
              <FormControl>
                <Textarea
                  {...{
                    ...field,
                    ...constants.FIELD_PROPS.SEND_ADDRESS.inputProps,
                    className: "min-h-16",
                    disabled: loading,
                  }}
                />
              </FormControl>
              <FormMessage
                {...constants.FIELD_PROPS.SEND_ADDRESS.messageProps}
              />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={constants.FIELD_PROPS.IBAN.inputProps.name}
          render={({ field }) => (
            <FormItem>
              <FormLabel {...constants.FIELD_PROPS.IBAN.labelProps}>
                {constants.FIELD_PROPS.IBAN.labelText}
              </FormLabel>
              <FormControl>
                <Input
                  {...{
                    ...field,
                    ...constants.FIELD_PROPS.IBAN.inputProps,
                    disabled: loading,
                  }}
                />
              </FormControl>
              <FormMessage {...constants.FIELD_PROPS.IBAN.messageProps} />
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

export { ClientForm };
