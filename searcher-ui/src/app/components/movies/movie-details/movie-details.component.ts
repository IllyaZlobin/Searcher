import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { MoviesService, UserService } from './../../../core/services';

@Component({
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  providers: [MoviesService, UserService]
})
export class MovieDetailsComponent implements OnInit {
  movie$: Observable<any>;
  genres: string[];
  actors: string[];
  directors: string[];
  movieInternalDetails: any;
  movieId: number;
  previousUserRating = 0;

  constructor(
    private route: ActivatedRoute,
    public userService: UserService,
    private movieService: MoviesService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((param) => {
      const movieId = param.id;
      this.movieId = movieId;
    });
    this.movie$ = this.movieService.getMovieDetails(this.movieId);
    this.movie$.subscribe(x => console.log(x));
    this.movie$.subscribe(x => {
      this.genres = x.data.details.genres.split(',').join(', ');
      this.actors = x.data.details.actors.split(',');
      this.directors = x.data.details.directors.split(',');
    });

    // check if user has already rated the movie
    // this.ms
    //   .getMovieRating(this.movieId)
    //   .first()
    //   .subscribe((res) => {
    //     this.previousUserRating = res.data.rating || 0;
    //   });
  }

  getDetails(id: number) {
    return this.movieService.getMovieDetails(id);
  }

  // rateMovie(ev: IStarRatingOnClickEvent): void {
  //   this.ms.rateMovie(this.movieId, ev.rating)
  //     .subscribe(
  //       res => {
  //         this.previousUserRating = ev.rating;
  //         this.getInternalDetails(this.movieId);
  //       },
  //       err => this.helpers.showMessage('There was an error while rating the movie')
  //     );
  // }

  // removeRating(): void {
  //   this.ms.removeRating(this.movieId)
  //     .subscribe(
  //       res => {
  //         this.previousUserRating = 0;
  //         this.getInternalDetails(this.movieId);
  //       },
  //       err => this.helpers.showMessage('There was an error while removing the rating')
  //     );
  // }

  // private getInternalDetails(id: string): void {
  //   this.ms.getMovieInternalDetails(id)
  //     .map(res => res.data)
  //     .subscribe(res => this.movieInternalDetails = res);
  // }
}
