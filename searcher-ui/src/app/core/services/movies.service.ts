import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../../config';
import { Observable } from 'rxjs';

@Injectable()
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovieList() {
    const url = `${config.apiUrl}/movies/list?limit=50&offset=0`;
    return this.http.get<any[]>(url);
  }

  getMovieDetails(id: number): Observable<any> {
    const url = `${config.apiUrl}/movies/${id}`;
    return this.http.get<any[]>(url);
  }
}
