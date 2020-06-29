import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { AuthenticationService, MoviesService } from '../../../core/services';
import { config } from '../../../../config';
import { Observable } from 'rxjs';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'navbar',
  styleUrls: ['./navbar.component.scss'],
  templateUrl: './navbar.component.html',
  providers: [AuthenticationService, UserService, MoviesService],
})
export class NavbarComponent implements OnInit {
  public mostVotes;
  public mostRating;
  constructor(
    public userService: UserService,
    public movieService: MoviesService,
    public authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  getMostVotes() {
    this.movieService.getMovieList('votes').subscribe((x) => {
      this.mostVotes = x;
    });
  }

  getMostRating() {
    this.movieService.getMovieList('rating').subscribe((x) => {
      this.mostRating = x;
    });
  }
}
