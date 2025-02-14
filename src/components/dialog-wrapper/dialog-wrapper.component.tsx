// Components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
// Types
import { DialogWrapperProps } from "./types/dialog-wrapper.component.types";

const DialogWrapper = ({
  children,
  description,
  onOpenChange,
  open,
  title,
}: DialogWrapperProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
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
