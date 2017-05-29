import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Utils } from '../utility/Utils';
import { Logger } from '../utility/Logger';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class JobsService {

  constructor(public http: Http, private utils: Utils, private logger: Logger) {
  }

  GetJobs(jobType:string): Observable<any> {
    return this.http.get(this.utils.FormateUrl('api/jobs/'+jobType), this.utils.GetHttpOptions());
  }
}
