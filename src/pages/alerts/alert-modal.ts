import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'alert-page',
    templateUrl: 'alert-modal.html'
})
export class AlertsModalPage implements OnInit {
    pageTitle: string = 'Description';
    displayData: any[] = [];
    constructor(private navParams: NavParams, public viewCtrl: ViewController) {
    }

    ngOnInit() {
        this.displayData = this.navParams.get('alertItemsArray');
    }

}
