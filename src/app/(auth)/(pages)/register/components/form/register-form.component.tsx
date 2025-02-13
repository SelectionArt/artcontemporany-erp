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
import constants from "./constants/register-form.constants";
// Hooks
import { RegisterHook } from "../../hooks/register.hook";

const RegisterForm = (): React.ReactElement => {
  const {
    alert,
    form,
    handleSubmit,
    handleToggleShowPassword,
    loading,
    showPassword,
  } = RegisterHook();

  const passwordType = showPassword
    ? constants.FIELD_PROPS.PASSWORD_TYPE_VISIBLE
    : constants.FIELD_PROPS.PASSWORD_TYPE_HIDDEN;

  const isSubmitting =
    loading.status && loading.provider === constants.PROVIDER_CREDENTIALS;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col gap-4">
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
                      disabled: loading.status,
                    }}
                  />
                </FormControl>
                <FormMessage {...constants.FIELD_PROPS.EMAIL.messageProps} />
              </FormItem>
            )}
          />
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
                        disabled: loading.status,
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
          {...{ ...constants.BUTTON_PROPS.SUBMIT, loading: isSubmitting }}
        />
      </form>
    </Form>
  );
};

export { RegisterForm };
