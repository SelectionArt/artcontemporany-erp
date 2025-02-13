"use client";
// Components
import { Button } from "@/components/ui/button";
// Constants
import constants from "./constants/auth-provider-buttons.constants";
// Hooks
import { AuthProviderButtonsHook } from "./hooks/auth-provider-buttons.hook";
// Icons
import { LoaderCircle } from "lucide-react";

const AuthProviderButtons = (): React.ReactElement => {
  const { handleButtonClick, loading } = AuthProviderButtonsHook();

  return (
    <div className="flex w-full flex-col gap-4">
      {constants.PROVIDERS.map((provider) => (
        <Button
          key={provider.provider}
          {...{
            ...constants.BUTTON_PROPS,
            className: "w-full",
            disabled: loading.status,
            onClick: () => handleButtonClick(provider.provider),
          }}
        >
          {loading.status && loading.provider === provider.provider ? (
            <LoaderCircle className="mr-2 h-5 w-5 animate-spin" />
          ) : (
            <>
              <provider.icon className="mr-2 h-5 w-5" />
              {provider.label}
            </>
          )}
        </Button>
      ))}
    </div>
  );
};

export { AuthProviderButtons };
