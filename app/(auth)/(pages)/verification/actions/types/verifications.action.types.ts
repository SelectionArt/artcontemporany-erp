type VerificationActionProps = {
  token: string | null;
};

type VerificationActionReturn = {
  error?: string;
  success?: string;
};

export type { VerificationActionProps, VerificationActionReturn };
