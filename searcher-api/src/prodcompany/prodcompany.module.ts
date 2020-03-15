import { Module } from '@nestjs/common';
import { ProdcompanyService } from './prodcompany.service';
import { ProdcompanyController } from './prodcompany.controller';

@Module({
  providers: [ProdcompanyService],
  controllers: [ProdcompanyController]
})
export class ProdcompanyModule {}
