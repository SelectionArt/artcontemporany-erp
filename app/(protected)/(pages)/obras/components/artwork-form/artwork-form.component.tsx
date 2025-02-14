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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// Constants
import constants from "./constants/artwork-form.constants";
// Types
import type { ArtworkFormProps } from "./types/artwork-form.component.types";

const ArtworkForm = ({
  artists,
  colors,
  finishes,
  formats,
  form,
  handleSubmit,
  label,
  loading,
  styles,
  supports,
}: ArtworkFormProps) => (
  <Form {...form}>
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
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
            name={constants.SELECT_FIELDS.ARTIST.name}
            render={({ field }) => (
              <FormItem className="grow basis-1/2">
                <FormLabel>
                  {constants.SELECT_FIELDS.ARTIST.labelText}
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder={constants.SELECT_FIELDS.ARTIST.placeholder}
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {artists.map((artist) => (
                      <SelectItem key={artist.id} value={artist.id}>
                        {artist.name}
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
            name={constants.SELECT_FIELDS.SUPPORT.name}
            render={({ field }) => (
              <FormItem className="grow basis-1/2">
                <FormLabel>
                  {constants.SELECT_FIELDS.SUPPORT.labelText}
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder={
                          constants.SELECT_FIELDS.SUPPORT.placeholder
                        }
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {supports.map((support) => (
                      <SelectItem key={support.id} value={support.id}>
                        {support.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name={constants.SELECT_FIELDS.COLOR.name}
            render={({ field }) => (
              <FormItem className="grow basis-1/2">
                <FormLabel>{constants.SELECT_FIELDS.COLOR.labelText}</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder={constants.SELECT_FIELDS.COLOR.placeholder}
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {colors.map((color) => (
                      <SelectItem key={color.id} value={color.id}>
                        {color.name}
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
            name={constants.SELECT_FIELDS.STYLE.name}
            render={({ field }) => (
              <FormItem className="grow basis-1/2">
                <FormLabel>{constants.SELECT_FIELDS.STYLE.labelText}</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder={constants.SELECT_FIELDS.STYLE.placeholder}
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {styles.map((style) => (
                      <SelectItem key={style.id} value={style.id}>
                        {style.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name={constants.SELECT_FIELDS.FINISH.name}
            render={({ field }) => (
              <FormItem className="grow basis-1/2">
                <FormLabel>
                  {constants.SELECT_FIELDS.FINISH.labelText}
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder={constants.SELECT_FIELDS.FINISH.placeholder}
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {finishes.map((finish) => (
                      <SelectItem key={finish.id} value={finish.id}>
                        {finish.name}
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
            name={constants.SELECT_FIELDS.FORMAT.name}
            render={({ field }) => (
              <FormItem className="grow basis-1/2">
                <FormLabel>
                  {constants.SELECT_FIELDS.FORMAT.labelText}
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder={constants.SELECT_FIELDS.FORMAT.placeholder}
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {formats.map((format) => (
                      <SelectItem key={format.id} value={format.id}>
                        {format.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
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
        </div>
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

export { ArtworkForm };
