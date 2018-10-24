import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public userService: UserService, public router: Router) { }

  ngOnInit() {
    let data = localStorage.getItem('currentUser');
    let user = JSON.parse(data);
    let userData = user._body;
    let user1 = JSON.parse(userData);
    let user2 = user1.user.role;
    console.log(user2);
  }

  logout() {
    this.userService.logOut().subscribe(
      response => {
        localStorage.clear();
        this.router.navigate(['login']);
      },
      error => {
        console.log(error);
      }
    );
  }


}
