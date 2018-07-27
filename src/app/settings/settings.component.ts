import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settingsForm: any;
  updateImage: any;
  updateAbout: any;
  changeUsername: any;
  changeName: any;
  changeEmail: any;
  changeOriginalPassword: any;

  constructor() { }

  ngOnInit() {
  }

}
