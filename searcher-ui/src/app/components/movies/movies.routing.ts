import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NgModule } from '@angular/core';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AuthGuard } from 'src/app/core/guards';

const routes: Routes = [
  { path: '', component: MovieListComponent, canActivate: [AuthGuard] },
  { path: 'details/:id', component: MovieDetailsComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
