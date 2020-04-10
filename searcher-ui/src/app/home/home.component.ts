import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Observable } from 'rxjs';
import { HomeMovieModel } from '../shared/model/homemovie.model';
import { HomeMovieResponse } from '../shared/model/homemovie.resposne';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    freeDrag: true,
    navSpeed: 600,
    margin: 15,
    nav: false,
    navText: [''],

    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    }
  };

  homeMovies: HomeMovieModel[];
  constructor(private homeService: HomeService) {
   }

  ngOnInit(): void {
    this.loadMoviesForHome();
  }

  loadMoviesForHome() {
    this.homeService.getHomeMovies().subscribe(x => this.homeMovies =  x.movies);
  }
}
