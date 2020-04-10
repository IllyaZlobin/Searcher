import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'movies', component: MoviesComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '***', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
