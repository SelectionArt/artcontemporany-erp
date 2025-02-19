import type {
  FetchFiltersReturn,
  FetchFramesReturn,
} from "../actions/types/frames.actions.types";

type Filters = FetchFiltersReturn;

type Frame = FetchFramesReturn[number];

type FramesProps = {
  frames: Frame[];
  filters: Filters;
};

export type { Frame, FramesProps };
