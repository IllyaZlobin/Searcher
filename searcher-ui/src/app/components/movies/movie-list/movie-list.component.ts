import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MoviesService } from '../../../core/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  providers: [MoviesService],
})
export class MovieListComponent implements OnInit {
  public topMovies$: Observable<any>;
  public moviesSinceDate: Date | any;
  public spinnerStyles: any;

  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit() {
    this.topMovies$ =  this.moviesService.getMovieList();
    this.moviesService.getMovieList().subscribe(movies => {
      console.log(movies);
    })
    // custom styles to fit loader to card container
    this.spinnerStyles = {
      margin: '-24px -24px 16px -24px',
    };
  }

  getMovieDetails(movieId: number): void {
    this.router.navigate([`/details/${movieId}`]);
  }
}
