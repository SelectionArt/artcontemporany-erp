// Vendors
import { ButtonHTMLAttributes } from "react";
// Icons
import { Eye, EyeOff } from "lucide-react";

type ButtonTogglePasswordProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  showPassword: boolean;
};

const ButtonTogglePassword = ({
  showPassword,
  ...props
}: ButtonTogglePasswordProps) => (
  <button
    type="button"
    className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 transform items-center justify-center text-gray-400"
    {...props}
  >
    {showPassword ? (
      <EyeOff className="h-5 w-5" />
    ) : (
      <Eye className="h-5 w-5" />
    )}
  </button>
);

export { ButtonTogglePassword };
