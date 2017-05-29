import { Component } from '@angular/core';
import { JobsService } from '../../providers/jobs-service';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Logger } from '../../utility/Logger';
import { GenericData } from '../../Models/common-models';

@Component({
  selector: 'page-jobs',
  templateUrl: 'jobs.html'
})
export class JobsPage {
  pageTitle: string = 'Jobs';
  activeJobs: any;
  isActiveJobFound: boolean = false;
  public displayResult: any[] = [];
  constructor(private jobsService: JobsService, private logger: Logger, private alertController: AlertController) {
    this.isActiveJobFound = false;
    this.GetActiveJobs();
  }

  GetActiveJobs() {
    this.jobsService.GetJobs('active').subscribe((resp) => {
      var jsonResult = JSON.parse(resp['_body']);
      this.activeJobs = jsonResult.data;
      this.isActiveJobFound = this.activeJobs != undefined && this.activeJobs.length > 0;
    },
      err => {
        this.logger.LogError('Erro while fetching data');
      });
  }

  AlertJobDetails(job) {

    let row = "";
    if (job != null && job != undefined) {
      this.logger.LogInfo("not null - " + job.id);

      for (let key in job) {
        row += "<tr><td>" + key + "</td><td>" + job[key] + "</td></tr>";
      }

      let alert = this.alertController.create({
        title: 'Job - ' + job.id,
        subTitle: job.asset_name,
        message: "<table border='1'><tr><th>Key</th><th> value</th></tr>" + row + "</table>",
        buttons: ['Ok'],
        cssClass: 'full-popup',
      });
      alert.present();
    }
    else {
      this.logger.LogInfo("----------- job null -------");
    }
  }
}
