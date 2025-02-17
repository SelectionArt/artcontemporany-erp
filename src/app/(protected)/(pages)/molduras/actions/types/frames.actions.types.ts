// Types
import type { Frame } from "../../types/frames.container.types";
import type { FrameSchema } from "../../schemas/types/frame.schema.types";

type CreateFrameProps = {
  values: FrameSchema;
};

type CreateFrameReturn = {
  frame?: Frame;
  error?: string;
  success?: string;
};

type DeleteFrameProps = {
  id: string;
};

type DeleteFrameReturn = {
  success?: string;
  error?: string;
};

type DeleteMultipleFramesProps = {
  ids: string[];
};

type DeleteMultipleFramesReturn = {
  success?: string;
  error?: string;
};

type FetchFramesReturn = Frame[];

type UpdateFrameProps = {
  id: string;
  values: FrameSchema;
};

type UpdateFrameReturn = {
  frame?: Frame;
  error?: string;
  success?: string;
};

export type {
  CreateFrameProps,
  CreateFrameReturn,
  DeleteFrameProps,
  DeleteFrameReturn,
  DeleteMultipleFramesProps,
  DeleteMultipleFramesReturn,
  FetchFramesReturn,
  UpdateFrameProps,
  UpdateFrameReturn,
};
