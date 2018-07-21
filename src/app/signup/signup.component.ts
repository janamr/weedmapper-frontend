import { Component, OnInit } from '@angular/core';
import { SignupSubmission, AuthService } from '../api/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: SignupSubmission = new SignupSubmission();

  constructor(
    public myAuthServ: AuthService,
    public myRouterServ: Router
  ) { }

  ngOnInit() {
  }
  signupSubmit() {
    // pass the form inputs to the service
    this.myAuthServ.postSignup(this.signupForm)
    .then((response) => {
      // redirect away to home page
      this.myRouterServ.navigateByUrl("/");
    })
    .catch((err) => {
      alert("Sorry! couldn't sign you up");
      console.log(err);
    });
  }

}
