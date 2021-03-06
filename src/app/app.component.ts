import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { DashBoardMainPage } from '../pages/dashboard/dashboard-main';
import { AssetsPage } from '../pages/assets/assets';
import { AlertsPage } from '../pages/alerts/alerts';
import { JobsPage } from '../pages/jobs/jobs';
import { PageNotFoundComponent } from '../pages/others/not-found';

@Component({
  templateUrl: 'app.html'
})
export class UreApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
     this.pages = [      
      { title: 'Dashboard', component: DashBoardMainPage },
      { title: 'Assets', component: AssetsPage },
      { title: 'Jobs', component: JobsPage },
      { title: 'Alerts', component: AlertsPage },
      { title: 'Logout', component: LoginPage }      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
