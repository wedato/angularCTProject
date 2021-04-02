import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularCTProject';

  constructor() {

    var firebaseConfig = {
      apiKey: "AIzaSyCxiRQA5ILXT4WxWSO7r8aNhfu-g24GHeA",
      authDomain: "ctannonce-f7c66.firebaseapp.com",
      projectId: "ctannonce-f7c66",
      storageBucket: "ctannonce-f7c66.appspot.com",
      messagingSenderId: "459742395812",
      appId: "1:459742395812:web:44a363b0b050d1cf67d531",
      measurementId: "G-9MRTW8FW2M"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }

}
