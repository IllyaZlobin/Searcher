import { Injectable } from '@nestjs/common';
import Config = require('config');

@Injectable()
export class ConfigServiceBase<T> {
  get(path: keyof T): any {
    return Config.get(path);
  }
}
