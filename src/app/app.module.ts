import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2'
import { AngularFireAuth } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBPu2i5JN2L-THImOfA98EHnoj1M8j5mhw",
  authDomain: "gohotels-5a589.firebaseapp.com",
  databaseURL: "https://gohotels-5a589.firebaseio.com",
  projectId: "gohotels-5a589",
  storageBucket: "gohotels-5a589.appspot.com",
  messagingSenderId: "827262016005"
  };


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
