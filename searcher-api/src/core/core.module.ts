import { Module, HttpModule, Global } from '@nestjs/common';

@Global()
@Module({
  imports: [HttpModule],
  providers: [],
  exports: [],
})
export class CoreModule {}
