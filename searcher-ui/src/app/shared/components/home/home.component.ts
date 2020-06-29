﻿import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserService, AuthenticationService } from '../../../core/services';

@Component({ templateUrl: 'home.component.html', providers: [UserService, AuthenticationService] })
export class HomeComponent {
  loading = false;
  users: Array<any[]>;

  constructor(private userService: UserService, private authService: AuthenticationService) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.userService
      .getAll()
      .pipe(first())
      .subscribe((response) => {
        const { data: { items } } = response;
        this.loading = false;
        this.users = items;
      });
      console.log(this.authService.isAuth());
  }
}
