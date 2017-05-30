import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Http, HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//// pages
import { UreApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HeaderPage } from '../pages/header/header';
import { SideMenuPage } from '../pages/side-menu/side-menu';
import { DashBoardMainPage } from '../pages/dashboard/dashboard-main';
import { AssetsPage } from '../pages/assets/assets';
import { JobsPage } from '../pages/jobs/jobs';
import { AlertsPage } from '../pages/alerts/alerts';
import { AlertsModalPage } from '../pages/alerts/alert-modal';
import { PageNotFoundComponent } from '../pages/others/not-found';
//import { BackupsPage } from '../pages/backups/backups';
import { HeaderModelPage } from '../pages/header/header-modal-page';
//import { NavFooterPage } from '../pages/footer/nav-footer';

//// services
import { AuthService } from '../providers/auth-service';
import { DashBoardService } from '../providers/dashboard-service';
import { AssetsService } from '../providers/assets-service';
import { JobsService } from '../providers/jobs-service';
import { AlertsService } from '../providers/alerts-service';
import { Utils } from '../utility/Utils';
import { Logger } from '../utility/Logger';
//import { AuthGuard } from '../Guards/auth-guard';
//import { BackupsService } from '../providers/backups-service';


@NgModule({
  declarations: [
    UreApp,
    LoginPage,
    HeaderPage,
    HeaderModelPage,
    SideMenuPage,
    DashBoardMainPage,
    AssetsPage,
    AlertsPage,
    AlertsModalPage,
    JobsPage,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(UreApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    UreApp,
    LoginPage,
    HeaderPage,
    HeaderModelPage,
    SideMenuPage,
    DashBoardMainPage,
    AssetsPage,
    AlertsPage,
    AlertsModalPage,
    JobsPage,
    PageNotFoundComponent
  ],
  providers: [
    Logger,
    Utils,
    AuthService,
    DashBoardService,
    AssetsService,
    AlertsService,
    JobsService,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
