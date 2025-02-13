type AlertDialogWrapperProps = {
  action: {
    label: string;
    onClick: () => void;
  };
  cancel: {
    label: string;
  };
  description: string;
  onOpenChange: (open: boolean) => void;
  open: boolean;
  title: string;
};

export type { AlertDialogWrapperProps };
