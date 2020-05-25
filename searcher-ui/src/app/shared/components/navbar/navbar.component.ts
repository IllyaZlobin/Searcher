import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { AuthenticationService } from '../../../core/services';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'navbar',
  styleUrls: ['./navbar.component.scss'],
  templateUrl: './navbar.component.html',
  providers: [AuthenticationService, UserService]
})
export class NavbarComponent implements OnInit {
  constructor(public userService: UserService, public authService: AuthenticationService, private router: Router) {}

  ngOnInit() {
    // after each navigation event ends, check if auth token is not expired
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && !this.authService.isAuth()) {
        this.authService.logout();
      }
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  //goToEditProfile(): void {
  //  this.router.navigate(['/user/edit']);
  //}
}
