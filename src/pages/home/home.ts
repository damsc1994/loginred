import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook';
import { Platform } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  displayName: String;
  urlImagen: any;

  constructor(public navCtrl: NavController, public facebook: Facebook, public plaform: Platform) {
         if(this.plaform.is('core')){
          console.log('I am on a web browser')
         }
  }

  loginFacebook () {

    this.facebook.login(['public_profile','email']).then(loginresponse => {
      let credential = firebase.auth.FacebookAuthProvider.credential(loginresponse.authResponse.accessToken);
      firebase.auth().signInWithCredential(credential).then(resul => {
            this.displayName = firebase.auth().currentUser.displayName;
            this.urlImagen = firebase.auth().currentUser.photoURL;
            // alert(JSON.stringify(resul));
      });
    }).catch(error =>{
        alert(error);
    });
  }

  // loginFacebook (){
  //   let provedor = new firebase.auth.FacebookAuthProvider();

  //   firebase.auth().signInWithRedirect(provedor).then(()=>{
  //     firebase.auth().getRedirectResult().then((result)=>{
  //       alert(JSON.stringify(result));
  //     }).catch(function(error){
  //       alert(JSON.stringify(error));
  //     });
  //   })

  // }

}
