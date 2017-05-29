import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';
import { NavController} from 'ionic-angular';
import { LoginPage } from '../login/login';
import { DashBoardMainPage } from '../dashboard/dashboard-main';
import { AssetsPage } from '../assets/assets';
import { Logger } from '../../utility/Logger';

@Component({
  selector: 'app-side-menu',
  templateUrl: 'side-menu.html',
})
export class SideMenuPage {
  pages: Array<{ title: string, component: any }>;
  @ViewChild(NavController) navCtrl: NavController;
  @ViewChild(Nav) nav: Nav;

  constructor(public logger: Logger) {

    this.pages = [
      { title: 'Dashboard', component: DashBoardMainPage },
      { title: 'Assets', component: AssetsPage },
      { title: 'Jobs', component: LoginPage },
      { title: 'Alerts', component: LoginPage },
      { title: 'Logout', component: LoginPage }
    ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.logger.LogInfo('SideMenuPage: openPage(page) ...called');
    this.nav.setRoot(page.component);
    //this.navCtrl.setRoot(page.component);      
    
    //this.nav.push(page.component);
  }

}
