import { Component, OnInit } from '@angular/core';
import { AlertsService } from '../../providers/alerts-service';
import { Utils } from '../../utility/Utils';
import { Logger } from '../../utility/Logger';
import { GenericData } from '../../Models/common-models';
import { AlertController, ModalController, ViewController } from 'ionic-angular';
import { AlertsModalPage } from './alert-modal';

@Component({
    selector: 'alerts',
    templateUrl: 'alerts.html'
    // styles: ['.even { background-color: #ccc;}','.odd { background-color:#FFFFFF; }']

})
export class AlertsPage implements OnInit {
    pageTitle: string = 'Alerts';
    public displayAlerts: any[] = [];

    constructor(private alertsService: AlertsService, private utils: Utils, private logger: Logger, private alertController: AlertController, public modalCtrl: ModalController) {

    }
    ngOnInit() {
        this.GetAlerts();
    }

    GetAlerts() {
        this.alertsService.GetAlerts()
            .subscribe((resp) => {
                var jsonResult = JSON.parse(resp['_body']);
                this.displayAlerts = jsonResult.data;
            },
            err => {
                this.logger.LogError('Erro while fetching alerts data');
            });
    }

    OpenModalPage(alertItem) {
        let itemsArray: any[] = [];
        let alertObj;
        for (let key in alertItem) {
            alertObj = { key: key, value: alertItem[key] };
            itemsArray.push(alertObj)
        }
        let obj = { alertItemsArray: itemsArray };
        let appModal = this.modalCtrl.create(AlertsModalPage, obj);
        appModal.present();
    }

    // AlertDetail(alertItem) {
    //     let row = "";
    //     for (let key in alertItem) {
    //         row += "<tr><td>" + key + "</td><td>" + alertItem[key] + "</td></tr>";
    //     }

    //     let alert = this.alertController.create({
    //         title: 'alert - ' + alertItem.id,
    //         subTitle: alertItem.created,
    //         message: "<table border='1'><tr><th>Key</th><th> value</th></tr>" + row + "</table>",
    //         buttons: ['Ok'],
    //         cssClass: 'full-popup',
    //     });
    //     alert.present();
    // }
}
