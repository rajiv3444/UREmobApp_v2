import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Nav } from 'ionic-angular';
import { DashBoardService } from '../../providers/dashboard-service';
import { LoginPage } from '../../pages/login/login';
import { Utils } from '../../utility/Utils';
import { Logger } from '../../utility/Logger';

@Component({
    selector: 'dashboard-main',
    templateUrl: 'dashboard-main.html'
})
export class DashBoardMainPage {
    pageTitle: string = 'Dashboard';
    shownMain: any;
    backupSummary: { errorsCount: number, notProtectedCount: number, protectedCount: number };
    storage: any = [];

    constructor(private dashBoardService: DashBoardService, private logger: Logger, private utils: Utils, public navCtrl: NavController) {
        this.backupSummary = {
            errorsCount: 0,
            notProtectedCount: 0,
            protectedCount: 0
        };
        this.GetSummaryCounts();
        this.GetStorageDetils();
    }

    ngOnInit() {
        this.utils.IsAuthenticated();
        if (!this.utils._isAuthentic) {
            this.navCtrl.setRoot(LoginPage);
        }
    }
    
    GetSummaryCounts() {
        this.dashBoardService.GetSummaryCounts()
            .subscribe((resp) => {
                var jsonResult = JSON.parse(resp['_body']);
                this.backupSummary.errorsCount = jsonResult.backup_errors;
                this.backupSummary.notProtectedCount = jsonResult['backup_not_protected'];//another way to read the value
                this.backupSummary.protectedCount = jsonResult['backup_protected'];
            },
            err => {
                this.logger.LogError('Erro while fetching summary data');
            });
    }

    GetStorageDetils() {
        this.dashBoardService.GetStorage()
            .subscribe((resp) => {
                var jsonResult = JSON.parse(resp['_body']);
                this.storage = jsonResult.storage;
            },
            err => {
                this.logger.LogError('Erro while fetching storage data');
            });
    }
}