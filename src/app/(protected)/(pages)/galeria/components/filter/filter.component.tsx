// Components
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
// Icons
import { Check, PlusCircle } from "lucide-react";
// Libs
import { cn } from "@/lib/utils";
// Types
import { FilterProps } from "./types/filter.component.types";

const Filter = ({
  title,
  options,
  selectedValues,
  onFilterChange,
}: FilterProps) => {
  const toggleSelection = (value: string) => {
    const newSelected = new Set(selectedValues);
    newSelected.has(value) ? newSelected.delete(value) : newSelected.add(value);
    onFilterChange(newSelected);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex h-8 items-center gap-2 border-dashed"
        >
          <PlusCircle />
          {title}
          {selectedValues.size > 0 && (
            <span className="bg-primary text-primary-foreground flex h-4 w-4 items-center justify-center rounded text-xs">
              {selectedValues.size}
            </span>
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          <CommandInput placeholder={`Filtrar ${title}`} />
          <CommandList>
            <CommandEmpty>No se encontraron resultados.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <FilterOption
                  key={option.value}
                  option={option}
                  isSelected={selectedValues.has(option.value)}
                  toggleSelection={toggleSelection}
                />
              ))}
            </CommandGroup>
            {selectedValues.size > 0 && (
              <CommandGroup>
                <CommandSeparator />
                <CommandItem
                  onSelect={() => onFilterChange(new Set())}
                  className="justify-center text-center"
                >
                  Limpiar filtros
                </CommandItem>
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

const FilterOption = ({
  option,
  isSelected,
  toggleSelection,
}: {
  option: {
    value: string;
    label: string;
    icon?: React.ComponentType<{ className?: string }>;
  };
  isSelected: boolean;
  toggleSelection: (value: string) => void;
}) => {
  return (
    <CommandItem
      key={option.value}
      onSelect={() => toggleSelection(option.value)}
    >
      <div
        className={cn(
          "border-primary mr-2 flex h-4 w-4 items-center justify-center rounded-sm border",
          isSelected ? "bg-primary" : "opacity-50 [&_svg]:invisible",
        )}
      >
        <Check className="text-primary-foreground" />
      </div>
      {option.icon && (
        <option.icon className="text-muted-foreground mr-2 h-4 w-4" />
      )}
      <span>{option.label}</span>
    </CommandItem>
  );
};

export { Filter };
