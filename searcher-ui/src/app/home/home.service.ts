import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HomeMovieModel } from '../shared/model/homemovie.model';
import { HomeMovieResponse } from '../shared/model/homemovie.resposne';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private hhtpClient: HttpClient) { }

  getHomeMovies(): Observable<HomeMovieResponse> {
    return this.hhtpClient.get<HomeMovieResponse>('http://localhost:3000/movies/home');
  }
}
