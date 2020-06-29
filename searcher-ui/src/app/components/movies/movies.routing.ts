import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NgModule } from '@angular/core';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AuthGuard } from 'src/app/core/guards';
import { BestVotesComponent } from './best-votes/best-votes.component';
import { BestRevenueComponent } from './best-revenue/best-revenue.component';
import { BestRatingComponent } from './best-rating/best-rating.component';
import { SearchFilmComponent } from './search-film/search-film.component';

const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'details/:id', component: MovieDetailsComponent },
  { path: 'votes', component: BestVotesComponent },
  { path: 'revenue', component: BestRevenueComponent },
  { path: 'rating', component: BestRatingComponent },
  { path: 'search', component: SearchFilmComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
