import { cn } from "@/lib/utils";
import Image from "next/image";
import { Command as CommandPrimitive } from "cmdk";
import { Check } from "lucide-react";
import { useMemo, useState, useEffect } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
} from "@/components/ui/popover";
import { Skeleton } from "@/components/ui/skeleton";

type Props<T extends string> = {
  selectedValue: T;
  onSelectedValueChange: (value: T) => void;
  items: { value: T; label: string; imageUrl?: string }[];
  isLoading?: boolean;
  emptyMessage?: string;
  placeholder?: string;
};

export function AutoComplete<T extends string>({
  selectedValue,
  onSelectedValueChange,
  items,
  isLoading,
  emptyMessage = "No items.",
  placeholder = "Search...",
}: Props<T>) {
  const [open, setOpen] = useState(false);
  const [internalSearchValue, setInternalSearchValue] = useState("");

  const selectedLabel = useMemo(() => {
    return items.find((item) => item.value === selectedValue)?.label ?? "";
  }, [selectedValue, items]);

  useEffect(() => {
    setInternalSearchValue(selectedLabel);
  }, [selectedLabel]);

  const reset = () => {
    onSelectedValueChange("" as T);
    setInternalSearchValue("");
  };

  const onInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (
      !e.relatedTarget?.hasAttribute("cmdk-list") &&
      internalSearchValue !== selectedLabel
    ) {
      reset();
    }
  };

  const onSelectItem = (inputValue: string) => {
    if (inputValue === selectedValue) {
      reset();
    } else {
      onSelectedValueChange(inputValue as T);
      setInternalSearchValue(
        items.find((item) => item.value === inputValue)?.label ?? "",
      );
    }
    setOpen(false);
  };

  return (
    <div className="flex items-center">
      <Popover open={open} onOpenChange={setOpen}>
        <Command shouldFilter={false}>
          <PopoverAnchor asChild>
            <CommandPrimitive.Input
              asChild
              value={internalSearchValue}
              onValueChange={(val) => {
                setInternalSearchValue(val);
                onSelectedValueChange(val as T);
              }}
              onKeyDown={(e) => setOpen(e.key !== "Escape")}
              onMouseDown={() =>
                setOpen((open) => !!internalSearchValue || !open)
              }
              onBlur={onInputBlur}
            >
              <Input placeholder={placeholder} />
            </CommandPrimitive.Input>
          </PopoverAnchor>
          <PopoverContent
            asChild
            onOpenAutoFocus={(e) => e.preventDefault()}
            onInteractOutside={(e) => {
              if (
                e.target instanceof Element &&
                e.target.hasAttribute("cmdk-input")
              ) {
                e.preventDefault();
              }
            }}
            className="w-72 p-0"
            align="start"
          >
            <CommandList>
              {isLoading && (
                <CommandPrimitive.Loading>
                  <div className="p-1">
                    <Skeleton className="h-6 w-full" />
                  </div>
                </CommandPrimitive.Loading>
              )}
              {items.length > 0 && !isLoading ? (
                <CommandGroup>
                  {items.map((option) => (
                    <CommandItem
                      key={option.value}
                      value={option.value}
                      onMouseDown={(e) => e.preventDefault()}
                      onSelect={onSelectItem}
                      className="flex justify-between"
                    >
                      <div className="flex items-center gap-2">
                        {option.imageUrl && (
                          <div className="relative size-10 shrink-0">
                            <Image
                              alt={option.label}
                              className="h-10 w-10 rounded-md object-cover"
                              fill={true}
                              sizes="40px"
                              src={option.imageUrl}
                            />
                          </div>
                        )}
                        <span>{option.label}</span>
                      </div>
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          selectedValue === option.value
                            ? "opacity-100"
                            : "opacity-0",
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              ) : null}
              {!isLoading ? (
                <CommandEmpty>{emptyMessage ?? "No items."}</CommandEmpty>
              ) : null}
            </CommandList>
          </PopoverContent>
        </Command>
      </Popover>
    </div>
  );
}
