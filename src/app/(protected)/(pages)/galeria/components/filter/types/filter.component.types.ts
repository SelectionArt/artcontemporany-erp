type FilterProps = {
  title: string;
  options: {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
  selectedValues: Set<string>;
  onFilterChange: (selected: Set<string>) => void;
};

export type { FilterProps };
