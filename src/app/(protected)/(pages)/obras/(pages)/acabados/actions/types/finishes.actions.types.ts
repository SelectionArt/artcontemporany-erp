// Types
import type { Finish } from "../../types/finishes.container.types";
import type { FinishSchema } from "../../schemas/types/finish.schema.types";

type CreateFinishProps = {
  values: FinishSchema;
};

type CreateFinishReturn = {
  finish?: Finish;
  error?: string;
  success?: string;
};

type DeleteFinishProps = {
  id: string;
};

type DeleteFinishReturn = {
  success?: string;
  error?: string;
};

type DeleteMultipleFinishesProps = {
  ids: string[];
};

type DeleteMultipleFinishesReturn = {
  success?: string;
  error?: string;
};

type FetchFinishesReturn = Finish[];

type UpdateFinishProps = {
  id: string;
  values: FinishSchema;
};

type UpdateFinishReturn = {
  finish?: Finish;
  error?: string;
  success?: string;
};

export type {
  CreateFinishProps,
  CreateFinishReturn,
  DeleteFinishProps,
  DeleteFinishReturn,
  DeleteMultipleFinishesProps,
  DeleteMultipleFinishesReturn,
  FetchFinishesReturn,
  UpdateFinishProps,
  UpdateFinishReturn,
};
