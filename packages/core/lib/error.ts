import { appLogger } from "./log";

export class AppError extends Error {
  public code: number;
  // public message: string;

  constructor(logMsg: string, statusCode?: number, error?: any) {
    super(logMsg);

    this.message = logMsg;
    this.code = statusCode || 500;
    appLogger.err(logMsg, error);
  }
}
