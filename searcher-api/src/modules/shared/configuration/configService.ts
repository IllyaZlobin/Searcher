import { Injectable } from '@nestjs/common';
import { ConfigServiceBase } from 'sdk';
import { ConfigPath } from './configPath';

@Injectable()
export class ConfigService extends ConfigServiceBase<ConfigPath> {}
