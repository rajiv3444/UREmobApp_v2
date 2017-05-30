import { Component, OnInit } from '@angular/core';
import { NavParams} from 'ionic-angular';

@Component({
    selector: 'alert-page',
    templateUrl: 'alert-modal.html'
})
export class AlertsModalPage implements OnInit {
    pageTitle: string = 'Alert Detail';
    displayData: any[] = [];
    constructor(private navParams: NavParams) {
    }

    ngOnInit() {
        this.displayData = this.navParams.get('alertItemsArray');
    }

}
