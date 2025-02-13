"use client";
// Components
import { AlertForm } from "@/components/ui/alert-form";
import { ButtonLoading } from "@/components/ui/button-loading";
import { ButtonTogglePassword } from "@/components/ui/button-toggle-password";
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
import constants from "./constants/new-password-form.constants";
// Hooks
import { NewPasswordHook } from "../../hooks/new-password.hook";

const NewPasswordForm = (): React.ReactElement => {
  const {
    alert,
    form,
    handleToggleShowPassword,
    handleSubmit,
    loading,
    showPassword,
  } = NewPasswordHook();

  const passwordType = showPassword
    ? constants.FIELD_PROPS.PASSWORD_TYPE_VISIBLE
    : constants.FIELD_PROPS.PASSWORD_TYPE_HIDDEN;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name={constants.FIELD_PROPS.PASSWORD.inputProps.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel {...constants.FIELD_PROPS.PASSWORD.labelProps}>
                  {constants.FIELD_PROPS.PASSWORD.labelText}
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...{
                        ...field,
                        ...constants.FIELD_PROPS.PASSWORD.inputProps,
                        disabled: loading,
                        type: passwordType,
                        className: "pr-12",
                      }}
                    />
                    <ButtonTogglePassword
                      {...{
                        ...constants.BUTTON_PROPS.TOGGLE_PASSWORD,
                        onClick: handleToggleShowPassword,
                        showPassword,
                      }}
                    />
                  </div>
                </FormControl>
                <FormMessage {...constants.FIELD_PROPS.PASSWORD.messageProps} />
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

export { NewPasswordForm };
