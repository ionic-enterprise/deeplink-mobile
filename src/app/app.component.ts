import { Component } from '@angular/core';

import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor(
    private deeplinks: Deeplinks,
    private navController: NavController,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.setupDeepLinks();
    });
  }

  private setupDeepLinks() {
    this.deeplinks
      .route({
        black: '/black',
        dark: '/dark',
        green: '/green',
        herbal: '/herbal',
        oolong: '/oolong',
        puer: '/puer',
        white: '/white',
        yellow: '/yellow',
      })
      .subscribe(
        match => {
          console.log('match', match);
          if (match.$args.teaid) {
            alert(match.$args.teaid);
          }
          this.navController.navigateRoot(`/${match.$route}`);
        },
        nomatch => {
          // nomatch.$link - the full link data
          console.error('Got a deeplink that did not match', nomatch);
        },
      );
  }
}
