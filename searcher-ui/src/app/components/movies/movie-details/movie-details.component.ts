import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import {
  MoviesService,
  UserService,
  AuthenticationService,
} from './../../../core/services';

@Component({
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  providers: [MoviesService, UserService, AuthenticationService],
})
export class MovieDetailsComponent implements OnInit {
  selectedValue: number;
  stars: number[] = [1, 2, 3, 4, 5];
  movie$: Observable<any>;
  genres: string[];
  actors: string[];
  directors: string[];
  movieInternalDetails: any;
  movieId: number;
  previousUserRating = 0;
  starVal: number;
  avgStars: number;

  constructor(
    private route: ActivatedRoute,
    public userService: UserService,
    private movieService: MoviesService,
    public authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((param) => {
      const movieId = param.id;
      this.movieId = movieId;
    });
    this.movie$ = this.movieService.getMovieDetails(this.movieId);
    this.movie$.subscribe((x) => {
      this.genres = x.data.details.genres.split(',').join(', ');
      this.actors = x.data.details.actors.split(',');
      this.directors = x.data.details.directors.split(',');
    });

    if (this.authService.currentUserSubject) {
      this.movieService
        .getMovieDetailsUserStar(this.movieId)
        .subscribe((x) => (this.avgStars = x.data.averageStars));
    } else {
      this.avgStars = 0;
    }
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

  rateMovie(event) {
    const { value } = event;
    this.movieService.setMovieDetailsUserStar(this.movieId, value).subscribe(x => this.avgStars = x.data.stars);
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
