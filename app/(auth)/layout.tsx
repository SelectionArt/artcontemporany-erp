// Types
import { AuthLayoutProps } from "@/app/(auth)/types/layout.types";

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex grow justify-center md:items-center">{children}</div>
  );
};

export default AuthLayout;
