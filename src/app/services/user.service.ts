import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: Http) {
    this.http = http;
  }

  saveUser(user: any) {
    let url = "http://localhost:8080/api/signup/registration";
    let headers = new Headers({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    });
    return this.http.post(url, JSON.stringify(user), { headers: headers });
  }

  login(user: any) {
    let url = "http://localhost:8080/api/signup/login";
    let headers = new Headers({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    });
    return this.http.post(url, JSON.stringify(user), { headers: headers });
  }

  logOut() {
    let url = "http://localhost:8080/api/signup/logout";
    let headers = new Headers({
      'x-auth-token': localStorage.getItem('X-AuthToken')
    });

    return this.http.post(url, ' ', { headers: headers });
  }
}

