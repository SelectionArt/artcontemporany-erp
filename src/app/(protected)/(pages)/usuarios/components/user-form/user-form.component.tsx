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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
// Constants
import constants from "./constants/user-form.constants";
// Types
import type { UserFormProps } from "./types/user-form.component.types";

const UserForm = ({ form, handleSubmit, label, loading }: UserFormProps) => (
  <Form {...form}>
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col gap-4">
        <FormField
          control={form.control}
          name={constants.NAME.inputProps.name}
          render={({ field }) => (
            <FormItem>
              <FormLabel {...constants.NAME.labelProps}>
                {constants.NAME.labelText}
              </FormLabel>
              <FormControl>
                <Input
                  {...{
                    ...field,
                    ...constants.NAME.inputProps,
                    disabled: loading,
                  }}
                />
              </FormControl>
              <FormMessage {...constants.NAME.messageProps} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={constants.EMAIL.inputProps.name}
          render={({ field }) => (
            <FormItem>
              <FormLabel {...constants.EMAIL.labelProps}>
                {constants.EMAIL.labelText}
              </FormLabel>
              <FormControl>
                <Input
                  {...{
                    ...field,
                    ...constants.EMAIL.inputProps,
                    disabled: loading,
                  }}
                />
              </FormControl>
              <FormMessage {...constants.EMAIL.messageProps} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={constants.IS_AUTHORIZED.name}
          render={({ field }) => (
            <FormItem className="grow basis-1/2">
              <FormLabel>{constants.IS_AUTHORIZED.labelText}</FormLabel>
              <Select
                onValueChange={(value) => field.onChange(value === "true")}
                defaultValue={String(field.value)}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue
                      placeholder={constants.IS_AUTHORIZED.placeholder}
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {[
                    { id: true, name: "Sí" },
                    { id: false, name: "No" },
                  ].map((auth) => (
                    <SelectItem key={String(auth.id)} value={String(auth.id)}>
                      {auth.name}
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
          name={constants.ROLE.name}
          render={({ field }) => (
            <FormItem className="grow basis-1/2">
              <FormLabel>{constants.ROLE.labelText}</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={constants.ROLE.placeholder} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {[
                    { id: "USER", name: "Usuario" },
                    { id: "ADMIN", name: "Administrador" },
                  ].map((auth) => (
                    <SelectItem key={auth.id} value={auth.id}>
                      {auth.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
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

export { UserForm };
