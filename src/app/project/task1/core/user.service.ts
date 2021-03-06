import { Injectable } from "@angular/core";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {

  constructor( public afAuth: AngularFireAuth ){ }

  getCurrentUser(){
    return new Promise<any>((resolve, reject) => {
        firebase.auth().onAuthStateChanged(function(user){
          if (user) {
            resolve(user);
          } else {
            reject('No user logged in');
          }
      })
    })
  }
}