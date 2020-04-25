import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/core/auth/auth.module';
import { AppController } from './app.controller';
import { MoviesModule } from '../movies/movies.module';
import { NamesModule } from '../names/names.module';
import { ProdcompanyModule } from '../prodcompany/prodcompany.module';
import { CountryModule } from '../country/country.module';
import { CityModule } from '../city/city.module';
import { ActorModule } from '../actor/actor.module';
import { UserModule } from '../user/user.module';
import { ReviewsModule } from '../reviews/reviews.module';
import { SharedModule } from '../shared/shared.module';
import { TypeOrmConfig } from '../shared/db';

@Module({
  imports: [
    SharedModule,
    HttpModule,
    AuthModule,
    TypeOrmModule.forRootAsync({
      inject: [TypeOrmConfig],
      useFactory: async (config: TypeOrmConfig) => ({
        ...config.configure(),
      }),
    }),
    MoviesModule,
    NamesModule,
    ProdcompanyModule,
    CountryModule,
    CityModule,
    ActorModule,
    UserModule,
    ReviewsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
