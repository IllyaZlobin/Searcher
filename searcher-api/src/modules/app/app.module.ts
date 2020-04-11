import { Module, HttpModule, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { CoreModule } from '../../core/core.module';
import { MoviesModule } from '../movies/movies.module';
import { NamesModule } from '../names/names.module';
import { ProdcompanyModule } from '../prodcompany/prodcompany.module';
import { CountryModule } from '../country/country.module';
import { CityModule } from '../city/city.module';
import { ActorModule } from '../actor/actor.module';
import { UserModule } from '../user/user.module';
import { ReviewsModule } from '../reviews/reviews.module';
import { UserInfoMiddleware } from '../../../sdk/nest/middlewares/userInfo.middleware';
import { AuthModule } from '../../core/auth/auth.module';
import { SharedModule } from '../shared/shared.module';
import { TypeOrmConfig } from '../shared/db';

@Module({
  imports: [
    SharedModule,
    CoreModule,
    HttpModule,
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
    AuthModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(UserInfoMiddleware).forRoutes('*');
  }
}
