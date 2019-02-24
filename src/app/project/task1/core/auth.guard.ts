import { Injectable } from '@angular/core';
// import { CanActivate, Router } from "@angular/router";
// import { AngularFireAuth } from 'angularfire2/auth';
// import { UserService } from '../core/user.service';

@Injectable()
export class AuthGuard {

  // constructor(public afAuth: AngularFireAuth, 
  //   public userService: UserService, 
  //   private router: Router) { }

  // canActivate(): Promise<boolean>{
  //   return new Promise((resolve) => {
  //     this.userService.getCurrentUser()
  //     .then(user => {
  //       this.router.navigate(['/task']);
  //       return resolve(false);
  //     }, err => {
  //       return resolve(true);
  //     })
  //   })
  // }
}