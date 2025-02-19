// Vendors
import Image from "next/image";
// Components
import { Button } from "@/components/ui/button";
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
import { MultiSelect } from "@/components/ui/multiple-selector";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
// Constants
import constants from "./constants/frame-form.constants";
// Icons
import { X } from "lucide-react";
// Types
import type { FrameFormProps } from "./types/frame-form.component.types";

const FrameForm = ({
  existingImages,
  filters,
  form,
  handleSubmit,
  label,
  loading,
  newImages,
  setExistingImages,
  setNewImages,
  setToDelete,
  toDelete,
}: FrameFormProps) => (
  <Form {...form}>
    <form
      onSubmit={(event) => {
        event.preventDefault();
        form.setValue("images", [...existingImages, ...newImages]);
        form.handleSubmit((values) => {
          handleSubmit(values);
        })();
      }}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col gap-4">
        <FormField
          control={form.control}
          name={constants.INPUT_FIELDS.NAME.inputProps.name}
          render={({ field }) => (
            <FormItem className="grow basis-1/2">
              <FormLabel {...constants.INPUT_FIELDS.NAME.labelProps}>
                {constants.INPUT_FIELDS.NAME.labelText}
              </FormLabel>
              <FormControl>
                <Input
                  {...{
                    ...field,
                    ...constants.INPUT_FIELDS.NAME.inputProps,
                    disabled: loading,
                  }}
                />
              </FormControl>
              <FormMessage {...constants.INPUT_FIELDS.NAME.messageProps} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={constants.INPUT_FIELDS.IMAGES.inputProps.name}
          render={({ field }) => (
            <FormItem className="grow basis-1/2">
              <FormLabel {...constants.INPUT_FIELDS.IMAGES.labelProps}>
                {constants.INPUT_FIELDS.IMAGES.labelText}
              </FormLabel>
              <FormControl>
                <div>
                  <Input
                    {...constants.INPUT_FIELDS.IMAGES.inputProps}
                    className="hidden"
                    disabled={loading}
                    onChange={(event) => {
                      const filesArray = Array.from(event.target.files || []);
                      field.onChange(filesArray);
                      setNewImages([...newImages, ...filesArray]);
                    }}
                    ref={field.ref}
                  />
                  <Button
                    onClick={() => document.getElementById("images")?.click()}
                    type="button"
                    variant="outline"
                    className={`w-full justify-start ${newImages.length === 0 ? "text-muted-foreground" : ""}`}
                  >
                    {newImages.length > 0
                      ? `${newImages.length} ${newImages.length === 1 ? "imagen" : "imágenes"} seleccionadas`
                      : "Seleccionar imágenes"}
                  </Button>
                </div>
              </FormControl>
              <FormMessage {...constants.INPUT_FIELDS.IMAGES.messageProps} />
            </FormItem>
          )}
        />

        {newImages.length > 0 && (
          <div className="flex flex-col gap-2">
            <div className="text-sm font-medium">Nuevas imágenes</div>
            <div className="grid grid-cols-5 gap-4">
              {newImages.map((file, index) => {
                const preview = URL.createObjectURL(file);
                return (
                  <div key={index} className="relative h-24">
                    <Image
                      src={preview}
                      alt={`Preview ${index}`}
                      fill
                      className="rounded-md border object-cover"
                    />
                    <button
                      type="button"
                      className="absolute top-1 right-1 flex size-8 cursor-pointer items-center justify-center rounded-full bg-red-600 text-white"
                      onClick={() => {
                        setNewImages(newImages.filter((_, i) => i !== index));
                      }}
                    >
                      <X />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {existingImages.length > 0 && (
          <div className="flex flex-col gap-2">
            <div className="text-sm font-medium">Imágenes existentes</div>
            <div className="grid grid-cols-5 gap-4">
              {existingImages.map((src, index) => (
                <div key={index} className="relative h-24">
                  <Image
                    src={src}
                    alt={`Imagen existente ${index}`}
                    fill
                    className="rounded-md border object-cover"
                  />
                  <button
                    type="button"
                    className="absolute top-1 right-1 flex size-8 cursor-pointer items-center justify-center rounded-full bg-red-600 text-white"
                    onClick={() => {
                      setToDelete([...toDelete, src]);
                      setExistingImages(
                        existingImages.filter((image) => image !== src),
                      );
                    }}
                  >
                    <X />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <FormField
          control={form.control}
          name={constants.INPUT_FIELDS.REFERENCE.inputProps.name}
          render={({ field }) => (
            <FormItem className="grow basis-1/2">
              <FormLabel {...constants.INPUT_FIELDS.REFERENCE.labelProps}>
                {constants.INPUT_FIELDS.REFERENCE.labelText}
              </FormLabel>
              <FormControl>
                <Input
                  {...{
                    ...field,
                    ...constants.INPUT_FIELDS.REFERENCE.inputProps,
                    disabled: loading,
                  }}
                />
              </FormControl>
              <FormMessage {...constants.INPUT_FIELDS.REFERENCE.messageProps} />
            </FormItem>
          )}
        />

        <div className="flex gap-4">
          <FormField
            control={form.control}
            name={constants.INPUT_FIELDS.WIDTH.inputProps.name}
            render={({ field }) => (
              <FormItem className="grow basis-1/2">
                <FormLabel {...constants.INPUT_FIELDS.WIDTH.labelProps}>
                  {constants.INPUT_FIELDS.WIDTH.labelText}
                </FormLabel>
                <FormControl>
                  <Input
                    {...{
                      ...field,
                      ...constants.INPUT_FIELDS.WIDTH.inputProps,
                      disabled: loading,
                    }}
                  />
                </FormControl>
                <FormMessage {...constants.INPUT_FIELDS.WIDTH.messageProps} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={constants.INPUT_FIELDS.HEIGHT.inputProps.name}
            render={({ field }) => (
              <FormItem className="grow basis-1/2">
                <FormLabel {...constants.INPUT_FIELDS.HEIGHT.labelProps}>
                  {constants.INPUT_FIELDS.HEIGHT.labelText}
                </FormLabel>
                <FormControl>
                  <Input
                    {...{
                      ...field,
                      ...constants.INPUT_FIELDS.HEIGHT.inputProps,
                      disabled: loading,
                    }}
                  />
                </FormControl>
                <FormMessage {...constants.INPUT_FIELDS.HEIGHT.messageProps} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={constants.INPUT_FIELDS.GALCE.inputProps.name}
            render={({ field }) => (
              <FormItem className="grow basis-1/2">
                <FormLabel {...constants.INPUT_FIELDS.GALCE.labelProps}>
                  {constants.INPUT_FIELDS.GALCE.labelText}
                </FormLabel>
                <FormControl>
                  <Input
                    {...{
                      ...field,
                      ...constants.INPUT_FIELDS.GALCE.inputProps,
                      disabled: loading,
                    }}
                  />
                </FormControl>
                <FormMessage {...constants.INPUT_FIELDS.GALCE.messageProps} />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name={constants.SELECT_FIELDS.MANUFACTURER.name}
            render={({ field }) => (
              <FormItem className="grow basis-1/2">
                <FormLabel>
                  {constants.SELECT_FIELDS.MANUFACTURER.labelText}
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder={
                          constants.SELECT_FIELDS.MANUFACTURER.placeholder
                        }
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {filters.manufacturers.map((manufacturer) => (
                      <SelectItem key={manufacturer.id} value={manufacturer.id}>
                        {manufacturer.name}
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
            name={constants.SELECT_FIELDS.MATERIAL.name}
            render={({ field }) => (
              <FormItem className="grow basis-1/2">
                <FormLabel>
                  {constants.SELECT_FIELDS.MATERIAL.labelText}
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder={
                          constants.SELECT_FIELDS.MATERIAL.placeholder
                        }
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {filters.materials.map((material) => (
                      <SelectItem key={material.id} value={material.id}>
                        {material.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name={constants.INPUT_FIELDS.DESCRIPTION.inputProps.name}
          render={({ field }) => (
            <FormItem>
              <FormLabel {...constants.INPUT_FIELDS.DESCRIPTION.labelProps}>
                {constants.INPUT_FIELDS.DESCRIPTION.labelText}
              </FormLabel>
              <FormControl>
                <Textarea
                  {...{
                    ...field,
                    ...constants.INPUT_FIELDS.DESCRIPTION.inputProps,
                    disabled: loading,
                  }}
                />
              </FormControl>
              <FormMessage
                {...constants.INPUT_FIELDS.DESCRIPTION.messageProps}
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

export { FrameForm };
