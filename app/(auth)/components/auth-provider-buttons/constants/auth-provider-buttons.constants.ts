// Icons
import { SiGithub, SiGoogle } from "@icons-pack/react-simple-icons";

const constants = {
  BUTTON_PROPS: {
    variant: "outline",
  },
  PROVIDERS: [
    {
      icon: SiGoogle,
      label: "Continue with Google",
      provider: "google",
    },
    {
      icon: SiGithub,
      label: "Continue with GitHub",
      provider: "github",
    },
  ],
} as const;

export default constants;
