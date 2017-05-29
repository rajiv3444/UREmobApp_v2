import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Nav } from 'ionic-angular';
import { AssetsService } from '../../providers/assets-service';
import { Utils } from '../../utility/Utils';
import { Logger } from '../../utility/Logger';
import { GenericData } from '../../Models/common-models';

@Component({
    selector: 'assets',
    templateUrl: 'assets.html'
})
export class AssetsPage {
    pageTitle:string = 'Assets';
    public displayResult: any[] = [];
    public displayAssets: any[] = [];
    shownMain: any;
    showAssets: any;
    constructor(private assetsService: AssetsService, private utils: Utils, private logger: Logger) {
        this.GetAssets();
    }

    GetAssets() {
        this.assetsService.GetAssets()
            .subscribe((resp) => {
                var jsonResult = JSON.parse(resp['_body']);
                //this.displayResult = this.utils.FormKeyValueData(jsonResult);

                for (let key in jsonResult.data[0]) {
                    let data = new GenericData();
                    data.name = key;
                    data.data = jsonResult.data[0][key];
                    this.displayResult.push(data);
                }
                this.displayAssets = jsonResult.data;
            },
            err => {
                this.logger.LogError('Erro while fetching assets data');
            });
    }

    toggleAssets(id) {
        if (this.isAssetsShown(id)) {
            this.showAssets = null;
        } else {
            this.showAssets = id;
        }
    }

    isAssetsShown(id) {
        return this.showAssets === id;
    }

    toggleChildren(id) {
        if (this.isChildrenShown(id)) {
            this.shownMain = null;
        } else {
            this.shownMain = id;
        }
    }

    isChildrenShown(id) {
        return this.shownMain === id;
    };
}