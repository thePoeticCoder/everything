export class BaseError extends Error {
  public readonly code?: string;
  public readonly statusCode?: number;

  constructor(
    message: string,
    options?: {
      code?: string;
      statusCode?: number;
      cause?: unknown;
    },
  ) {
    super(message);
    this.code = options?.code;
    this.statusCode = options?.statusCode;

    if (options?.cause) {
      // preserve original error for logging
      (this as any).cause = options.cause;
    }
  }
}
