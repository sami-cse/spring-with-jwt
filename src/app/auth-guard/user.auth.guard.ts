import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class UserAuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        let data = localStorage.getItem('currentUser');
        let user = JSON.parse(data);
        let userData = user._body;
        let user1 = JSON.parse(userData);
        let user2 = user1.user.role;
        console.log(user2);
        
        if (user2 === 'USER') {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}