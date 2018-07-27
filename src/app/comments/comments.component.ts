import { Component, OnInit } from '@angular/core';
import { CommentSubmission, PlantPinService, PlantPin } from '../api/plant-pin.service';
import { AuthService } from '../api/auth.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Array<any> = [];
  commentForm: CommentSubmission = new CommentSubmission();
  currentPlant;
  id: string;

  constructor(
    private plantPinServ: PlantPinService,
    public myAuthServ: AuthService,
    public myRouterServ: Router,
    private myActivated: ActivatedRoute

  ) { }

  ngOnInit() {
    this.myActivated.paramMap.subscribe((params) => {
      this.id = params.get('plantId');
      this.fetchComments();
      this.fetchPlant();
    });
  }

  fetchPlant() {
    this.plantPinServ.getPlantPinItem(this.id)
    .then((response: PlantPin) => {
      this.currentPlant = response;
    })
    .catch((err) => {
      alert("Sorry! Plant problems.");
      console.log(err);
    });
  }

  fetchComments() {
    // call service method that connects to plant comments API
    this.plantPinServ.getPlantCommentsList(this.id)
    // then set our comments array
    .then((response: Array<Comment>) => {
      // connects the DATA from the API to the COMPONENT state
      this.comments = response;
    })
    .catch((err) => {
      alert("Sorry! commenting problems.");
      console.log(err);
    });
  }

  leaveComment() {
    this.commentForm.plantPin = this.id;
    this.plantPinServ.postComment(this.commentForm)
    .then((response) => {
      // do something if it works maybe
        this.fetchComments();
        this.commentForm = new CommentSubmission();
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
