import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Actor } from 'sdk';
import { ActorController } from './actor.controller';
import { ActorService } from './actor.service';

@Module({
  imports: [TypeOrmModule.forFeature([Actor])],
  controllers: [ActorController],
  providers: [ActorService],
})
export class ActorModule {}
