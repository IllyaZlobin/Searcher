import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { MoviesService } from '../../../core/services';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { config } from '../../../../config';
import { FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  providers: [MoviesService],
})
export class MovieListComponent implements OnInit {
  @Input() topMovies$: Observable<any>;
  public moviesSinceDate: Date | any;
  public spinnerStyles: any;

  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit() {
    if (!this.topMovies$) {
      this.topMovies$ = this.moviesService.getMovieList(
        config.filmOrderKeys.votes
      );
    }
    this.spinnerStyles = {
      margin: '-24px -24px 16px -24px',
    };
  }

  getMovieDetails(movieId: number): void {
    this.router.navigate([`/details/${movieId}`]);
  }
}
