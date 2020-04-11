import { Module, Global } from '@nestjs/common';
import { ConfigService } from './configuration';
import { TypeOrmConfig } from './db';


@Global()
@Module({
  providers: [ConfigService, TypeOrmConfig],
  exports: [ConfigService, TypeOrmConfig],
})
export class SharedModule {}
