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

  launchSumsub() {
    let accessToken = 'your_access_token';

    // NOTE commenting this 👇🏾 out makes the home page appear
    // leaving this here makes the home page crash
    let snsMobileSDK = SNSMobileSDK.init(accessToken, () => {
        return new Promise((resolve, reject) => {
            resolve('new_access_token')
        })
      })
    // NOTE commented out until I figure out why SNSMobileSDK.init() is freaking out
    //   .withHandlers({ // Optional callbacks you can use to get notified of the corresponding events
    //     onStatusChanged: (event) => {
    //       console.log("onStatusChanged: [" + event.prevStatus + "] => [" + event.newStatus + "]");
    //     }
    //   })
    //   .withDebug(true)
    //   .withLocale('en') // Optional, for cases when you need to override the system locale
    //   .build();

    // snsMobileSDK.launch().then((result: any) => {
    //   console.log("Sumsub SDK State: " + JSON.stringify(result))
    // }).catch((err: any) => {
    //   console.log("Sumsub SDK Error: " + JSON.stringify(err))
    // });
  }
}
