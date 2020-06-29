﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../../config';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get<any[]>(`${config.apiUrl}/user`);
  }
}
