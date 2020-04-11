import { LoggerRequestInfo } from './loggerRequestInfo';

export interface Logger {
  init(config: unknown): void;
  error(
    err: unknown,
    request: LoggerRequestInfo,
    userId?: number | string,
  ): void;
}
