import { Component } from '@angular/core';
//import { DashBoardService } from '../../providers/dashboard-service';
//import { Utils } from '../../utility/Utils';
//import { Logger } from '../../utility/Logger';

@Component({
    selector: 'dashboard-main',
    templateUrl: 'dashboard-main.html'
})
export class DashBoardMainPage {
    pageTitle:string = 'Dashboard';
    shownMain: any;
    backupSummary: any;
    storage: any = [];
    mains = [
        { name: 'Assets', id: 1, items: [{ subName: 'Get Assets', routerLink: '/assets' }, { subName: 'M1-Sub-2', routerLink: '/dashboardmain' }] },
        { name: 'Backups', id: 2, items: [{ subName: 'Bavkups Sub menu-1', routerLink: '/test' }, { subName: 'Backups - Sub menu-2', routerLink: '/test' }] },
        { name: 'Restore', id: 3, items: [{ subName: 'M3-Sub-1', routerLink: '/test' }, { subName: 'M3-Sub-2', routerLink: '/test' }] },
    ];
  
    // constructor(private dashBoardService: DashBoardService, private logger: Logger) {
    //     this.backupSummary = {
    //         errorsCount: 0,
    //         notProtectedCount: 0,
    //         protectedCount: 0
    //     };

    //     this.GetSummaryCounts();
    //     this.GetStorageDetils();
    // }

    // toggleMain(main) {
    //     if (this.isMainShown(main)) {
    //         this.shownMain = null;
    //     } else {
    //         this.shownMain = main;
    //     }
    // };
    // isMainShown(main) {
    //     return this.shownMain === main;
    // };

    // GetSummaryCounts() {
    //     this.dashBoardService.GetSummaryCounts()
    //         .subscribe((resp) => {
    //             var jsonResult = JSON.parse(resp['_body']);
    //             this.backupSummary.errorsCount = jsonResult.backup_errors;
    //             this.backupSummary.notProtectedCount = jsonResult['backup_not_protected'];//another way to read the value
    //             this.backupSummary.protectedCount = jsonResult['backup_protected'];
    //         },
    //         err => {
    //             this.logger.LogError('Erro while fetching summary data');
    //         });

    // }

    // GetStorageDetils() {
    //     this.dashBoardService.GetStorage()
    //         .subscribe((resp) => {
    //             var jsonResult = JSON.parse(resp['_body']);
    //             this.storage = jsonResult.storage;            },
    //         err => {
    //             this.logger.LogError('Erro while fetching storage data');
    //         });

    // }
}