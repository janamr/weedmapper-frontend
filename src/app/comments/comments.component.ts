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
  commentForm: CommentSubmission = new CommentSubmission();

  constructor(
    private plantPinServ: PlantPinService,
    public myAuthServ: AuthService,
    public myRouterServ: Router

  ) { }

  ngOnInit() {
  }

  leaveComment() {
    this.plantPinServ.postComment(this.commentForm)
    .then((response) => {
      this.myRouterServ.navigateByUrl("/map-page")
    })
    .catch((err) => {
      alert("oops! problems with comment...");
      console.log(err);
    });
  }

}
