import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';

import { MoviesService, UserService } from './../../../core/services';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  @Input() comments: any[];
  @Input() width: number;
  @Input() totalPages: number;
  @Input() itemsPerPage: number;
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
    public userService: UserService
  ) {
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.commentsData = {
      comments: this.comments,
      currentPage: 1,
      itemsPerPage: this.itemsPerPage,
      totalPages: this.totalPages,
    };
    console.log(this.commentsData);
  }

  changePage(ev: number): void {
    this.commentsPageNr$.next(ev);
  }

  /*postComent(): void {
    if (!this.commentForm.valid) {
      return;
    }

    const commentBody = this.commentForm.value['comment'];
    this.postingComment = true;
    this..postComment(this.movieId, commentBody).subscribe((res) => {
      this.postingComment = false;
      this.commentForm.reset();

      // reload comments from page 1
      this.commentsPageNr$.next(1);
    });
  }*/

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
