import { Module, HttpModule, Global } from '@nestjs/common';
import { ConfigService } from './config/config.service';

@Global()
@Module({
  imports: [HttpModule],
  providers: [ConfigService],
  exports: [ConfigService]
})
export class CoreModule {}
