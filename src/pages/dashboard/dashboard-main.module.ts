import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashBoardMainPage } from './dashboard-main';

@NgModule({
  declarations: [
    DashBoardMainPage,
  ],
  imports: [
    IonicPageModule.forChild(DashBoardMainPage),
  ],
  exports: [
    DashBoardMainPage
  ]
})
export class DashboardModule {}
