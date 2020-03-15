import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Country } from 'src/country/country.entity';
import { City } from 'src/city/city.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Country, City])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
