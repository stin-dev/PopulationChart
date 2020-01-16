export class ResasApiError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
  ) {
    super(`${statusCode}: ${message}`);
  }
}