import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: any = {};
  constructor(public userService: UserService,public router : Router) { }

  ngOnInit() {
  }

  login(user : any) {
    this.userService.login(user).subscribe(
      response => {
        if(response){
          localStorage.setItem('currentUser', JSON.stringify(response));
          console.log(response);
          let body = <any>response;
          let user = JSON.parse(body._body);
          if(user.user.role == 'ADMIN'){
            this.router.navigate(['admin']);
          } else if (user.user.role == 'USER'){
            this.router.navigate(['user']);
          }
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
