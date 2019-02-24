import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<firebase.User>;
  email: string; password: string;

  constructor(public afAuth: AngularFireAuth, private router: Router){
    this.user = afAuth.authState;
  }
  
  doRegister(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
          // this.router.navigate(['/login'], {
          // queryParams: {
          // return: state.url
          // debugger
      }, err => reject(err))
    })
  }

  login(value) {
    this.afAuth
      .auth
      .signInWithEmailAndPassword(value.email, value.password)
      .then(value => {
        value.user.getIdToken().then(res=> { localStorage.setItem('token', res);})
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  logout() {
    this.afAuth
      .auth
      .signOut();
    localStorage.removeItem('token');
  }
}