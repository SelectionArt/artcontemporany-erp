// Components
import { AlertForm } from "@/components/ui/alert-form";
import { Button } from "@/components/ui/button";
import { ButtonLoading } from "@/components/ui/button-loading";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
import constants from "./constants/create-dialog.constants";
// Hooks
import { CreateDialogHook } from "./hooks/create-dialog.hook";
// Types
import type { CreateDialogProps } from "./types/create-dialog.component.types";

import { DateTimePicker } from "@/components/ui/date-time-picker";

const CreateDialog = ({ form, open, setOpen }: CreateDialogProps) => {
  const { alert, handleSubmit, loading } = CreateDialogHook({
    form,
  });

  function handleStartDateSelect(date: Date | undefined) {
    if (date) {
      form.setValue("start", date);
    }
  }

  function handleEndDateSelect(date: Date | undefined) {
    if (date) {
      form.setValue("end", date);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Create event</DialogTitle>
          <DialogDescription>
            Fill in the form below to create a new event.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            {...constants.FORM_PROPS}
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              <FormField
                control={form.control}
                name={constants.FIELD_PROPS.TITLE.inputProps.name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel {...constants.FIELD_PROPS.TITLE.labelProps}>
                      {constants.FIELD_PROPS.TITLE.labelText}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...{
                          ...field,
                          ...constants.FIELD_PROPS.TITLE.inputProps,
                          disabled: loading,
                        }}
                      />
                    </FormControl>
                    <FormMessage
                      {...constants.FIELD_PROPS.TITLE.messageProps}
                    />
                  </FormItem>
                )}
              />

              <div className="flex flex-col gap-4 sm:flex-row">
                <FormField
                  control={form.control}
                  name={constants.FIELD_PROPS.START.inputProps.name}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel {...constants.FIELD_PROPS.START.labelProps}>
                        {constants.FIELD_PROPS.START.labelText}
                      </FormLabel>
                      <FormControl>
                        <DateTimePicker
                          disabled={loading}
                          onSelect={handleStartDateSelect}
                          value={field.value}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={constants.FIELD_PROPS.END.inputProps.name}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel {...constants.FIELD_PROPS.END.labelProps}>
                        {constants.FIELD_PROPS.END.labelText}
                      </FormLabel>
                      <FormControl>
                        <DateTimePicker
                          disabled={loading}
                          onSelect={handleEndDateSelect}
                          value={field.value}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {alert && <AlertForm {...alert} />}
          </form>
        </Form>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <ButtonLoading
            {...{
              ...constants.BUTTON_PROPS.SUBMIT,
              disabled: loading,
              loading: loading,
            }}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { CreateDialog };
