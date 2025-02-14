// Components
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
// Constants
import constants from "./constants/create-record.constants";
// Icons
import { Plus } from "lucide-react";
// Types
import type { CreateRecordProps } from "./types/create-record.component.types";

const CreateRecord = ({ onCreateRecord }: CreateRecordProps) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          {...{
            ...constants.BUTTON_PROPS,
            onClick: onCreateRecord,
          }}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>{constants.TOOLTIP_PROPS.label}</TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export { CreateRecord };
