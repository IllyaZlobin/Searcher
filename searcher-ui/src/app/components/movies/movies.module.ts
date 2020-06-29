import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { MoviesRoutingModule } from './movies.routing';
import { MovieListComponent } from './movie-list/movie-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { CommentsComponent } from './comments/comments.component';
import { BestVotesComponent } from './best-votes/best-votes.component';
import { BestRevenueComponent } from './best-revenue/best-revenue.component';
import { BestRatingComponent } from './best-rating/best-rating.component';
import { RatingModule } from 'ng-starrating';
import { SearchFilmComponent } from './search-film/search-film.component';
import {StarRatingModule} from 'angular-star-rating';

@NgModule({
  imports: [SharedModule, FlexLayoutModule, MoviesRoutingModule, RatingModule, StarRatingModule.forRoot()],
  declarations: [
    MovieListComponent,
    MovieDetailsComponent,
    CommentsComponent,
    BestVotesComponent,
    BestRevenueComponent,
    BestRatingComponent,
    SearchFilmComponent,
  ],
  providers: [],
})
export class MoviesModule {}
