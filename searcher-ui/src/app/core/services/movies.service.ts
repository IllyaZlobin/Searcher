import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../../config';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class MoviesService {
  public movieList = new BehaviorSubject<any>(
    this.getMovieList(config.filmOrderKeys.rating)
  );
  constructor(private http: HttpClient) {}

  getMovieList(order: string) {
    const url = `${config.apiUrl}/movies/list?limit=50&offset=0&order=${order}`;
    const response = this.http.get<any[]>(url);
    return response;
  }

  getMovieListByName(name: string) {
    const url = `${config.apiUrl}/movies/list/name?limit=50&offset=0&name=${name}`;
    const response = this.http.get<any[]>(url);
    return response;
  }

  getMovieDetails(id: number): Observable<any> {
    const url = `${config.apiUrl}/movies/${id}`;
    return this.http.get<any[]>(url);
  }

  getMovieDetailsUserStar(movieId: number): Observable<any> {
    const url = `${config.apiUrl}/movies/stars/${movieId}`;
    return this.http.get<any[]>(url);
  }

  setMovieDetailsUserStar(movieId: number, stars: number): Observable<any> {
    const url = `${config.apiUrl}/movies/stars/${movieId}`;
    return this.http.post<any[]>(url, { stars });
  }

  postComment(movieId: number, comment: string): Observable<any> {
    const url = `${config.apiUrl}/reviews`;
    return this.http.post<any[]>(url, { review_text: comment, movieId });
  }

  getComments(movieId: number, page: number): Observable<any> {
    const url = `${config.apiUrl}/reviews/${movieId}/${page}`;
    return this.http.get<any[]>(url);
  }
}
