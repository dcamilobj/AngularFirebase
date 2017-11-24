import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AngularFireAuth]
})
export class AppComponent implements OnInit{
  constructor(public afAuth: AngularFireAuth){}
  ngOnInit() {
  }
  title = 'app';
  login() {
   this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
 }
 logout() {
   this.afAuth.auth.signOut();
 }

 sendToken(){
   firebase.auth().currentUser.getToken(/* forceRefresh */ true).then(function(idToken) {
  // Send token to your backend via HTTPS
  // ...
    console.log(idToken);
  }).catch(function(error) {
  // Handle error
  });

 }
}
