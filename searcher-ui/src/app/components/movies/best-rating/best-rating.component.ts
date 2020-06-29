import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { MoviesService } from '../../../core/services';
import { Observable, from } from 'rxjs';
import { config } from '../../../../config';

@Component({
  selector: 'best-rating',
  templateUrl: './best-rating.component.html',
  styleUrls: ['./best-rating.component.scss'],
  providers: [MoviesService],
})
export class BestRatingComponent implements OnInit {
  @Input() topMovies$: Observable<any>;
  public moviesSinceDate: Date | any;
  public spinnerStyles: any;

  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit() {
    if (!this.topMovies$) {
      this.topMovies$ = this.moviesService.getMovieList(config.filmOrderKeys.rating);
    }
    this.spinnerStyles = {
      margin: '-24px -24px 16px -24px',
    };
  }

  getMovieDetails(movieId: number): void {
    this.router.navigate([`/details/${movieId}`]);
  }
}
