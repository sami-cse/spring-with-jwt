import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public user2: any;

  constructor(public userService: UserService, public router: Router) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    let data = localStorage.getItem('currentUser');
    if (data != null) {
      let user = JSON.parse(data);
      let userData = user._body;
      let user1 = JSON.parse(userData);
      this.user2 = user1.user.role;
    }

  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
    location.reload();
  }


}
