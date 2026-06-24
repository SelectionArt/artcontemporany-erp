"use client";
// Components
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
// Hooks
import { useCreateRecord } from "./hooks/use-create-record/use-create-record.hook";
// Icons
import { Plus } from "lucide-react";
// Types
import type { CreateRecordProps } from "./types/create-record.component.types";

const CreateRecord = ({ createRecord }: CreateRecordProps) => {
  const { t } = useCreateRecord();

  if (!createRecord || createRecord.visible === false) {
    return null;
  }

  const tooltip = createRecord.tooltip ?? t("addRecord");

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              aria-label={tooltip}
              size="icon"
              variant="ghost"
              onClick={createRecord.onClick}
            />
          }
        >
          <Plus className="h-4 w-4" />
        </TooltipTrigger>
        <TooltipContent>{tooltip}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export { CreateRecord };
