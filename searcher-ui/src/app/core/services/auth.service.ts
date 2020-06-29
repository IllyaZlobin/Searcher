﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthUserData } from '../models/authUserData';
import { JwtHelperService } from '@auth0/angular-jwt';
import { config } from '../../../config';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private jwtHelper: JwtHelperService = new JwtHelperService();
  currentUserSubject = new BehaviorSubject<any>(this.getToken());
  public currentUser: Observable<AuthUserData>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<AuthUserData>(
      JSON.parse(localStorage.getItem('userAuthData'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): AuthUserData {
    return this.currentUserSubject.value;
  }

  register(email: string, name: string, surname: string, password: string) {
    const response = this.http
      .post<any>(`${config.apiUrl}/user/new`, {
        email,
        name,
        surname,
        password,
      })
      .pipe(
        map((res) => {
          const { data } = res;
          this.login(data.email, password);
        })
      );
    return response;
  }

  login(email: string, password: string) {
    const response = this.http
      .post<any>(`${config.apiUrl}/auth/login`, {
        email,
        password,
      })
      .pipe(
        map((res) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          const { data } = res;
          localStorage.setItem('userAuthData', JSON.stringify(data));
          localStorage.setItem('token', data.accessToken);
          return data;
        })
      );
    this.currentUserSubject.next(response);
    return response;
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('userAuthData');
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);

    return this.currentUserSubject;
  }

  isAuth() {
    const token = this.getToken();
    const decodedToken = this.jwtHelper.decodeToken(token);
    const isExpired = this.jwtHelper.isTokenExpired(token);
    if (decodedToken && !isExpired) {
      return true;
    } else {
      return false;
    }
  }

  private getToken() {
    return localStorage.getItem('token');
  }

  setUserData(): void {
    this.currentUserSubject.next(this.getAuthDetails());
    this.currentUser = this.getAuthDetails();
  }

  getAuthDetails(): any {
    const accessToken = this.getToken();
    if (accessToken) {
      return this.jwtHelper.decodeToken(accessToken);
    } else {
      return false;
    }
  }
}
