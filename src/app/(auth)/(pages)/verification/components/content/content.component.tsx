"use client";
// Components
import { AlertForm } from "@/components/ui/alert-form";
import { BeatLoader } from "react-spinners";
// Constants
import constants from "./constants/content.constants";
// Hooks
import { VerificationHook } from "../../hooks/verification.hook";

const Content = (): React.ReactElement => {
  const { alert, loading } = VerificationHook();

  return (
    <>
      {loading && (
        <div className="flex h-10 items-center justify-center">
          <BeatLoader {...{ ...constants.LOADER_PROPS, loading }} />
        </div>
      )}

      {alert && <AlertForm {...alert} />}
    </>
  );
};

export { Content };
