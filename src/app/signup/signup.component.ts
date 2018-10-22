import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user: any = {};

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  userSave(user: any, userForm: any) {
    user.enabled = true;
    this.userService.saveUser(user).subscribe(
      response => {
        console.log(response);
        this.user = user;
        userForm.reset();
      },
      error => {
        console.log(error);
      }
    );
  }
}
