"use client";
// Components
import { AlertForm } from "@/components/ui/alert-form";
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
import constants from "./constants/reset-form.constants";
// Hooks
import { ResetHook } from "../../hooks/reset.hook";

const ResetForm = () => {
  const { alert, form, handleSubmit, loading } = ResetHook();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="space-y-4">
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
        </div>

        {alert && <AlertForm {...alert} />}

        <ButtonLoading
          {...{
            ...constants.BUTTON_PROPS.SUBMIT,
            loading,
          }}
        />
      </form>
    </Form>
  );
};

export { ResetForm };
