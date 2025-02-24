// Components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
// Types
import { DialogWrapperProps } from "./types/dialog-wrapper.component.types";

const DialogWrapper = ({
  className,
  children,
  description,
  onOpenChange,
  open,
  title,
}: DialogWrapperProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={className}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <div className="overflow-auto px-4 sm:px-6">{children}</div>
      </DialogContent>
    </Dialog>
  );
};

export { DialogWrapper };
