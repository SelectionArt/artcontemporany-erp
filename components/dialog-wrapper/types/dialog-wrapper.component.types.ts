type DialogWrapperProps = {
  children: React.ReactNode;
  description: string;
  onOpenChange: (open: boolean) => void;
  open: boolean;
  title: string;
};

export type { DialogWrapperProps };
