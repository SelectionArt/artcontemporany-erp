// Vendors
import { useTranslations } from "next-intl";

const useCreateRecord = () => {
  const t = useTranslations(
    "root.components.dataTable.components.header.components.createRecord",
  );

  return { t };
};

export { useCreateRecord };
