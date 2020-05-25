import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { MoviesRoutingModule } from './movies.routing';
import {
  MovieListComponent
} from './movie-list/movie-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@NgModule({
  imports: [
    SharedModule,
    FlexLayoutModule,
    MoviesRoutingModule
  ],
  declarations: [
    MovieListComponent,
    MovieDetailsComponent
  ],
  providers: []
})
export class MoviesModule { }
