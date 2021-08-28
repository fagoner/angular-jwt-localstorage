import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models';
import {  UserService } from '../_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  users: User[];
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    
    
    this.userService.getUsers().then((data) => {
      this.users = data;
    })
  }


}
