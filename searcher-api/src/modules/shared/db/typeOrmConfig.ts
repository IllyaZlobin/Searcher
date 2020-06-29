import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '../configuration/configService';
import { DbEntities } from './dbEntities';

@Injectable()
export class TypeOrmConfig {
  constructor(private configService: ConfigService) {}

  configure(): TypeOrmModuleOptions {
    return {
      ...this.configService.get('db.connections.default'),
      entities: DbEntities,
    };
  }
}
