type ErrorResponse = {
  status: number;
  error: {
    code: string;
    message: string;
  };
};

const createErrorResponse = (
  status: number,
  code: string,
  message: string,
): ErrorResponse => {
  return {
    status,
    error: {
      code,
      message,
    },
  };
};

type SuccessResponse = {
  status: number;
  message: string;
};

const createSuccessResponse = (message: string): SuccessResponse => {
  return {
    status: 200,
    message,
  };
};

export { createErrorResponse, createSuccessResponse };
export type { ErrorResponse, SuccessResponse };
