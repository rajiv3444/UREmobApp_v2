import { Component, Input } from '@angular/core';
import { Logger } from '../../utility/Logger';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'app-header-modal-page',
  templateUrl: 'header-modal-page.html',
})
export class HeaderModelPage {
  @Input() headerTitle: string;
  constructor(private logger: Logger, public viewCtrl: ViewController) {
  }

  DismissModalPage() {
    this.viewCtrl.dismiss();
  }
}
