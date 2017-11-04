import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook';


var config = {
  apiKey: "AIzaSyBwVvMPTSe0-73U0tIuypfy-Of8DT1bjD4",
  authDomain: "loginred-55848.firebaseapp.com",
  databaseURL: "https://loginred-55848.firebaseio.com",
  projectId: "loginred-55848",
  storageBucket: "",
  messagingSenderId: "305507482569"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
