// @ts-nocheck
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SNSMobileSDK } from '@sumsub/cordova-idensic-mobile-sdk-plugin';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor() {}

  /**
   * This is a method that is never called in this project */
  neverCalledEver() {
    // 👇🏾 but this code still manages to crash the home page somehow.
    SNSMobileSDK.init();
    // I have removed all the other arguments that go into the init() function to simplify the problem.
    // Adding all the arguments and configs makes no difference. It still crashes.
  }
}
