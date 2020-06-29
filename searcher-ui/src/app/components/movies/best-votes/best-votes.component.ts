import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { MoviesService } from '../../../core/services';
import { Observable, from } from 'rxjs';
import { config } from '../../../../config';

@Component({
  selector: 'best-votes',
  templateUrl: './best-votes.component.html',
  styleUrls: ['./best-votes.component.scss'],
  providers: [MoviesService],
})
export class BestVotesComponent implements OnInit {
  @Input() topMovies$: Observable<any>;
  public moviesSinceDate: Date | any;
  public spinnerStyles: any;

  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit() {
    if (!this.topMovies$) {
      this.topMovies$ = this.moviesService.getMovieList(config.filmOrderKeys.votes);
    }
    this.spinnerStyles = {
      margin: '-24px -24px 16px -24px',
    };
  }

  getMovieDetails(movieId: number): void {
    this.router.navigate([`/details/${movieId}`]);
  }
}
