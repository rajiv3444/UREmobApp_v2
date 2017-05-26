import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Http, HttpModule } from '@angular/http';

//app
import { UreApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { DashBoardMainPage } from '../pages/dashboard/dashboard-main';
import { HeaderPage } from '../pages/header/header';
import { SideMenuPage } from '../pages/side-menu/side-menu';

//services
import { AuthService } from '../providers/auth-service';
//import { AuthGuard } from '../Guards/auth-guard';
//import { AssetsService } from '../providers/assets-service';
//import { BackupsService } from '../providers/backups-service';
//import { DashBoardService } from '../providers/dashboard-service';
//import { JobsService } from '../providers/jobs-service';
//import { AlertsService } from '../providers/alerts-service';
import { Utils } from '../utility/Utils';
import { Logger } from '../utility/Logger';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    UreApp,
    LoginPage,
    HeaderPage,
    SideMenuPage,
    DashBoardMainPage
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
    SideMenuPage,
    DashBoardMainPage
  ],
  providers: [
    AuthService,
    Utils,
    Logger,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
