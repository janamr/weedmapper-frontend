import { Component, OnInit } from '@angular/core';
import { LoginSubmission, AuthService } from '../api/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: LoginSubmission = new LoginSubmission();


  constructor(
    public myAuthServ: AuthService,
    public myRouterServ: Router
  ) { }

  ngOnInit() {
  }

  loginSubmit() {
    this.myAuthServ.postLogin(this.loginForm)
    .then((response) => {
      // redirect away to home page (import router service to do a redirect -- ^^ public myRouterServ)
      this.myRouterServ.navigateByUrl("/userPage")
    })
    .catch((err) => {
      alert("Sorry! problems with login...");
      console.log(err);
    });
  }
}
