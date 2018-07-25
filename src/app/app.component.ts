import { Component, OnInit } from '@angular/core';

import { AuthService } from './api/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    public myAuthServ: AuthService
  ) { }

  ngOnInit() {
    this.myAuthServ.check()
    .catch((err) => {
      alert("are you sure your internet is working?");
      console.log(err);
    });
  }
}


