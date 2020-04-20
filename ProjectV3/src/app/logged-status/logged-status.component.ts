import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import {UserServiceService} from '../user-service.service';
import {Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-logged-status',
  templateUrl: './logged-status.component.html',
  styleUrls: ['./logged-status.component.css']
})
export class LoggedStatusComponent implements OnInit {
  activeUser: User;
  admin: boolean;
  constructor(
    private router: Router,
    private userServiceService: UserServiceService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.userServiceService.getLoggedStatus().subscribe(user => this.activeUser = user);
    if(this.activeUser.login === 'Admin') {
      this.admin = true;
    }
  }
  logOut() {
    this.userServiceService.logOut();
    this.location.back();
  }
}
