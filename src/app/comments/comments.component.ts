import { Component, OnInit } from '@angular/core';
import { CommentSubmission, PlantPinService } from '../api/plant-pin.service';
import { AuthService } from '../api/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Array<Comment> = [];
  commentForm: CommentSubmission = new CommentSubmission();

  constructor(
    private plantPinServ: PlantPinService,
    public myAuthServ: AuthService,
    public myRouterServ: Router

  ) { }

  ngOnInit() {
    this.fetchComments();
  }

  fetchComments() {
    // call service method that connects to plant comments API
      // then set our comments array
  }

  leaveComment() {
    this.plantPinServ.postComment(this.commentForm)
      .then((response) => {
        // do something if it works maybe
        this.fetchComments();
      })
    .catch((err) => {
      alert("oops! problems with comment...");
      console.log(err);
    });
  }

  // fetchPlantPinId() {
  //   return this.plantPinServ.returnPPID();
  // }

}
