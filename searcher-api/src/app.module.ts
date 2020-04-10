import { Module, HttpModule, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from './core/config/config.service';
import { MoviesModule } from './modules/movies/movies.module';
import { DbEntities } from './common/db/dbEntities';
import { NamesModule } from './modules/names/names.module';
import { ProdcompanyModule } from './modules/prodcompany/prodcompany.module';
import { CountryModule } from './modules/country/country.module';
import { CityModule } from './modules/city/city.module';
import { ActorModule } from './modules/actor/actor.module';
import { UserModule } from './modules/user/user.module';
import { ReviewsModule } from './modules/reviews/reviews.module';
import { UserInfoMiddleware } from './common/middlewares/userInfo.middleware';
import { MoviesController } from './modules/movies/movies.controller';
import { AuthModule } from './core/auth/auth.module';

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
    ReviewsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UserInfoMiddleware)
      .forRoutes('*');
  }
  
} 
