import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from 'sdk';
import { CityController } from './city.controller';
import { CityService } from './city.service';

@Module({
  imports: [TypeOrmModule.forFeature([City])],
  controllers: [CityController],
  providers: [CityService],
})
export class CityModule {}
