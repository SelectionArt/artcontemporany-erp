"use client";
// Vendors
import SignatureCanvas from "react-signature-canvas";
import { useTheme } from "next-themes";
// Components
import { AlertDialogWrapper } from "@/components/alert-dialog-wrapper/alert-dialog-wrapper.component";
import { BudgetForm } from "./components/budget-form/budget-form.component";
import { Button } from "@/components/ui/button";
import { ButtonLoading } from "@/components/ui/button-loading";
import { DataTable } from "@/components/data-table/data-table.component";
import { DialogWrapper } from "@/components/dialog-wrapper/dialog-wrapper.component";
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
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { MultiSelect } from "@/components/ui/multiple-selector";
// Hooks
import { BudgetsHook } from "./hooks/budgets.hook";
// Icons
import { Eraser } from "lucide-react";
// Types
import type { BudgetsProps } from "./types/budgets.container.types";

const BudgetsContainer = ({
  artworks,
  budgets,
  clients,
  frames,
  pricings,
}: BudgetsProps) => {
  const {
    columns,
    data,
    fieldArray,
    form,
    handleCreate,
    handleOpenChangeAlertDialog,
    handleOpenChangeDialog,
    handleOpenChangeSendEmailDialog,
    handleOpenChangeSignatureDialog,
    handleSign,
    handleSubmit,
    handleSubmitDelete,
    handleSubmitDeleteMultiple,
    handleSubmitEmail,
    loading,
    multipleSelectActionsProps,
    openAlert,
    openDialog,
    openSendEmailDialog,
    openSignatureDialog,
    selectedRow,
    selectedRows,
    sendEmails,
    sendEmailForm,
    signatureRef,
    signLoading,
    emailLoading,
  } = BudgetsHook({ budgets });

  const { theme } = useTheme();

  return (
    <div className="flex w-full grow p-4">
      <DataTable
        columns={columns}
        data={data}
        initialColumnVisibility={{}}
        multipleSelectActionsProps={multipleSelectActionsProps}
        onCreateRecord={handleCreate}
      />
      <DialogWrapper
        className="max-w-[960px]"
        description={`Rellena los campos para ${selectedRow ? "editar" : "crear"} un presupuesto.`}
        onOpenChange={handleOpenChangeDialog}
        open={openDialog}
        title={`${selectedRow ? "Editar" : "Crear"} presupuesto`}
      >
        <BudgetForm
          artworks={artworks}
          clients={clients}
          fieldArray={fieldArray}
          form={form}
          frames={frames}
          handleSubmit={handleSubmit}
          label={selectedRow ? "Editar" : "Crear"}
          loading={loading}
          pricings={pricings}
        />
      </DialogWrapper>
      <DialogWrapper
        className="max-w-[640px]"
        description="Dibuja tu firma en el recuadro para firmar el presupuesto."
        onOpenChange={handleOpenChangeSignatureDialog}
        open={openSignatureDialog}
        title="Firmar"
      >
        <div className="flex flex-col gap-4">
          <div className="relative rounded-md border">
            <Button
              className="absolute top-4 right-4 size-10"
              onClick={() => signatureRef.current?.clear()}
              size="icon"
              variant="ghost"
            >
              <Eraser />
            </Button>
            <SignatureCanvas
              canvasProps={{
                className: "h-full w-full min-h-[200px]",
                height: 200,
              }}
              penColor={theme === "dark" ? "white" : "black"}
              ref={signatureRef}
            />
          </div>
          <ButtonLoading
            label="Firmar"
            loading={signLoading}
            onClick={handleSign}
          />
        </div>
      </DialogWrapper>
      <DialogWrapper
        className="w-full max-w-[640px]"
        description="Selecciona los emails a los que quieres enviar el presupuesto o añade uno nuevo."
        onOpenChange={handleOpenChangeSendEmailDialog}
        open={openSendEmailDialog}
        title="Enviar por email"
      >
        <Form {...sendEmailForm}>
          <form
            onSubmit={sendEmailForm.handleSubmit(handleSubmitEmail)}
            className="flex flex-col gap-6"
          >
            <FormField
              control={sendEmailForm.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo de documento</FormLabel>
                  <Select
                    disabled={emailLoading}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona el tipo de documento" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {[
                        { label: "Presupuesto", value: "budget" },
                        { label: "Factura proforma", value: "invoice" },
                        { label: "Nota de entrega", value: "deliveryNote" },
                        {
                          label: "Confirmación de pedido",
                          value: "orderConfirmation",
                        },
                      ].map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={sendEmailForm.control}
              name="emails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Emails cliente o personas</FormLabel>
                  <FormControl>
                    <MultiSelect
                      {...field}
                      options={sendEmails}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      placeholder="Selecciona los emails"
                      variant="inverted"
                      disabled={emailLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={sendEmailForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email libre</FormLabel>
                  <FormControl>
                    <Input
                      {...{
                        ...field,
                        type: "email",
                        placeholder: "Escribe un email",
                        disabled: emailLoading,
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={sendEmailForm.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Asunto</FormLabel>
                  <FormControl>
                    <Input
                      {...{
                        ...field,
                        placeholder: "Escribe un asunto",
                        disabled: emailLoading,
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={sendEmailForm.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cuerpo del mensaje</FormLabel>
                  <FormControl>
                    <Textarea
                      {...{
                        ...field,
                        placeholder: "Escribe un mensaje",
                        rows: 1,
                        disabled: emailLoading,
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <ButtonLoading
              {...{
                fullWidth: true,
                type: "submit",
                label: "Enviar",
                loading: emailLoading,
              }}
            />
          </form>
        </Form>
      </DialogWrapper>
      <AlertDialogWrapper
        action={{
          onClick: selectedRows.length
            ? handleSubmitDeleteMultiple
            : handleSubmitDelete,
          label: "Eliminar",
        }}
        cancel={{
          label: "Cancelar",
        }}
        description={`¿Estás seguro de que quieres eliminar ${
          selectedRows.length > 1
            ? "los presupuestos seleccionados"
            : "el presupuesto seleccionado"
        }?`}
        open={openAlert}
        onOpenChange={handleOpenChangeAlertDialog}
        title={`Eliminar ${selectedRows.length > 1 ? "presupuestos" : "presupuesto"}`}
      />
    </div>
  );
};

export { BudgetsContainer };
