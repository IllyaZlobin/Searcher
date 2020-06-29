import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MoviesService } from '../../../core/services';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { config } from '../../../../config';
import { FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'search-film',
  templateUrl: './search-film.component.html',
  styleUrls: ['./search-film.component.scss'],
  providers: [MoviesService],
})
export class SearchFilmComponent implements OnInit {
  public topMovies$: Observable<any>;
  private searchTerms = new Subject<string>();
  public moviesSinceDate: Date | any;
  public spinnerStyles: any;
  public filter;
  searchForm;

  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.searchForm = this.formBuilder.group({
      filter: '',
    });
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.topMovies$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.moviesService.getMovieListByName(term))
    );
    this.topMovies$.subscribe((x) => console.log(x));
    // this.moviesService
    //  .getMovieList(config.filmOrderKeys.rating)
    //  .subscribe((x) => {
    //    console.log(x);
    //    this.topMovies$ = x;
    //    console.log(this.topMovies$);
    //  });
    this.spinnerStyles = {
      margin: '-24px -24px 16px -24px',
    };
  }

  getMovieDetails(movieId: number): void {
    this.router.navigate([`/details/${movieId}`]);
  }
}
