import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';

import {
  MoviesService,
  UserService,
  AuthenticationService,
} from './../../../core/services';
import { flatMap, map } from 'rxjs/operators';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  providers: [AuthenticationService],
})
export class CommentsComponent implements OnInit {
  comments: any[];
  @Input() movieId: number;
  @Input() width: number;
  @Input() totalPages: number;
  @Input() itemsPerPage: number;

  userEmail: string;

  commentsData: {
    comments: any[];
    currentPage: number;
    itemsPerPage: number;
    totalPages: number;
  };
  commentForm: FormGroup;
  postingComment = false;
  commentsPageNr$ = new BehaviorSubject<number>(1);

  constructor(
    private movieService: MoviesService,
    private formBuilder: FormBuilder,
    public userService: UserService,
    public authService: AuthenticationService
  ) {
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.required],
    });
  }

  ngOnInit() {
    const { email } = this.authService.getAuthDetails();
    this.userEmail = email;
    this.commentsPageNr$
      .pipe(
        flatMap((page) => this.movieService.getComments(this.movieId, page)),
        map((res) => res.data),
        map((data) => {
          return {
            comments: data.comments.reverse(),
            currentPage: data.currentPage,
            itemsPerPage: data.itemsPerPage,
            totalPages: data.totalPages,
          };
        })
      )
      .subscribe((commentObj) => {
        this.commentsData = commentObj;
      });
    // this.commentsData = {
    //   comments: this.comments,
    //   currentPage: 1,
    //   itemsPerPage: this.itemsPerPage,
    //   totalPages: this.totalPages,
    // };
    console.log(this.commentsPageNr$, this.movieId);
  }

  changePage(ev: number): void {
    console.log(ev);
    this.commentsPageNr$.next(ev);
  }

  postComent(): void {
    if (!this.commentForm.valid) {
      return;
    }

    const commentBody = this.commentForm.value['comment'];
    this.postingComment = true;
    this.movieService
      .postComment(this.movieId, commentBody)
      .subscribe((res) => {
        this.postingComment = false;
        this.commentForm.reset();

        // reload comments from page 1
        this.commentsPageNr$.next(1);
      });
  }

  /*removeComment(id: string): void {
    this.ms.removeComment(id).subscribe(
      (res) => {
        // reload current comments page
        this.commentsPageNr$.next(this.commentsData.currentPage);
      },
      (err) => this.helpers.showMessage('The comment could not be removed')
    );
  }*/
}
