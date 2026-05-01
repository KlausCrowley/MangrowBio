export class ApiError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
  }
}

export function getErrorResponse(error: unknown) {
  if (error instanceof ApiError) {
    return {
      status: error.statusCode,
      body: { error: error.message },
    };
  }

  return {
    status: 500,
    body: { error: "Internal server error" },
  };
}
