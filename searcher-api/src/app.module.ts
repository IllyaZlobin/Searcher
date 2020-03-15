import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from './core/config/config.service';
import { async } from 'rxjs/internal/scheduler/async';
import { MoviesModule } from './movies/movies.module';
import { DbEntities } from './dbEntities';
import { NamesModule } from './names/names.module';
import { ProdcompanyModule } from './prodcompany/prodcompany.module';
import { CountryModule } from './country/country.module';
import { CityModule } from './city/city.module';
import { ActorModule } from './actor/actor.module';
import { UserModule } from './user/user.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [
    CoreModule,
    HttpModule,
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        ...configService.getTypeOrmConfig()
      })
    }),
    TypeOrmModule.forFeature(DbEntities),
    MoviesModule,
    NamesModule,
    ProdcompanyModule,
    CountryModule,
    CityModule,
    ActorModule,
    UserModule,
    ReviewsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
