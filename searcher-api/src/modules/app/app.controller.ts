import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  async get(): Promise<Date> {
    return new Date();
  }
}
