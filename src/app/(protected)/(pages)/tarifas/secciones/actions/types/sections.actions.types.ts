// Types
import type { Section } from "../../types/sections.container.types";
import type { SectionSchema } from "../../schemas/types/section.schema.types";

type CreateSectionProps = {
  values: SectionSchema;
};

type CreateSectionReturn = {
  section?: Section;
  error?: string;
  success?: string;
};

type DeleteSectionProps = {
  id: string;
};

type DeleteSectionReturn = {
  success?: string;
  error?: string;
};

type DeleteMultipleSectionsProps = {
  ids: string[];
};

type DeleteMultipleSectionsReturn = {
  success?: string;
  error?: string;
};

type FetchSectionsReturn = Section[];

type UpdateSectionProps = {
  id: string;
  values: SectionSchema;
};

type UpdateSectionReturn = {
  section?: Section;
  error?: string;
  success?: string;
};

export type {
  CreateSectionProps,
  CreateSectionReturn,
  DeleteSectionProps,
  DeleteSectionReturn,
  DeleteMultipleSectionsProps,
  DeleteMultipleSectionsReturn,
  FetchSectionsReturn,
  UpdateSectionProps,
  UpdateSectionReturn,
};
