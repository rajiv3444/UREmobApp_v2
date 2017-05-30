import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//import { headerCaseNormalise } from '../../node_modules/header-case-normalizer';
import { Utils } from '../utility/Utils';
import { Logger } from '../utility/Logger';
//import {LoginResponse} from '../Models/auth-models';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AlertsService {
  apiUrl: string;
  res: any;
  constructor(public http: Http, private utils: Utils, private logger: Logger) {    
  }  

  GetAlerts(): Observable<any> {    
    return this.http.get(this.utils.FormateUrl('/api/alerts'), this.utils.GetHttpOptions());
  }

   
}
