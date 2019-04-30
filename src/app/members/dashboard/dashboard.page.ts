import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';
import { UserService } from "../../services/user.service";
import { User } from "../../models/user";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {


  constructor(private authService: AuthenticationService, private userService: UserService) { }
 
  ngOnInit() {
    this.getUsersList();
  }
 
  logout() {
    this.authService.logout();
  }

  getUsersList(){
    this.userService.getUsers()
    .subscribe(res =>{
      this.userService.user= res as User[];
      console.log(res);
    });
  }

}
