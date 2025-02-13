"use client";
// Components
import { AlertForm } from "@/components/ui/alert-form";
import { ButtonLink } from "@/components/ui/button-link";
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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
// Constants
import constants from "./constants/login-form.constants";
// Hooks
import { LoginHook } from "../../hooks/login.hook";

const LoginForm = () => {
  const {
    alert,
    form,
    handleToggleShowPassword,
    handleSubmit,
    loading,
    showPassword,
    showTwoFactor,
  } = LoginHook();

  const passwordType = showPassword
    ? constants.FIELD_PROPS.PASSWORD_TYPE_VISIBLE
    : constants.FIELD_PROPS.PASSWORD_TYPE_HIDDEN;

  const submitLabel = showTwoFactor
    ? constants.BUTTON_PROPS.SUBMIT_LABEL_OTP
    : constants.BUTTON_PROPS.SUBMIT_LABEL_DEFAULT;

  const isSubmitting =
    loading.status && loading.provider === constants.PROVIDER_CREDENTIALS;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col gap-4">
          {showTwoFactor && (
            <FormField
              control={form.control}
              name={constants.FIELD_PROPS.OTP.inputProps.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel {...constants.FIELD_PROPS.OTP.labelProps}>
                    {constants.FIELD_PROPS.OTP.labelText}
                  </FormLabel>
                  <FormControl>
                    <InputOTP
                      {...{
                        ...field,
                        ...constants.FIELD_PROPS.OTP.inputProps,
                        disabled: loading.status,
                      }}
                    >
                      <InputOTPGroup>
                        {Array.from({ length: 6 }).map((_, index) => (
                          <InputOTPSlot key={index} index={index} />
                        ))}
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage {...constants.FIELD_PROPS.OTP.messageProps} />
                </FormItem>
              )}
            />
          )}
          {!showTwoFactor && (
            <>
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
                    <FormMessage
                      {...constants.FIELD_PROPS.EMAIL.messageProps}
                    />
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
                            disabled: loading.status,
                            onClick: handleToggleShowPassword,
                            showPassword,
                          }}
                        />
                      </div>
                    </FormControl>
                    <FormMessage
                      {...constants.FIELD_PROPS.PASSWORD.messageProps}
                    />
                    <ButtonLink
                      {...{
                        ...constants.BUTTON_PROPS.LINK_FORGOT_PASSWORD,
                        className: "self-start",
                      }}
                    />
                  </FormItem>
                )}
              />
            </>
          )}
        </div>

        {alert && <AlertForm {...alert} />}

        <ButtonLoading
          {...{
            ...constants.BUTTON_PROPS.SUBMIT,
            disabled: loading.status,
            loading: isSubmitting,
            label: submitLabel,
          }}
        />
      </form>
    </Form>
  );
};

export { LoginForm };
