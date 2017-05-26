import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod, HttpModule } from '@angular/http';
import { headerCaseNormalise } from '../../node_modules/header-case-normalizer';
import { Utils } from '../utility/Utils';
import { Logger } from '../utility/Logger';
import { LoginResponse } from '../Models/auth-models';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DashBoardService {
  apiUrl: string;
  res: any;
  constructor(public http: Http, private utils: Utils, private logger: Logger) {
  }

  GetSummaryCounts(): Observable<any> {
    return this.http.get(this.utils.FormateUrl('api/summary/counts'), this.utils.GetHttpOptions());
  }

  GetStorage(): Observable<any> {
    return this.http.get(this.utils.FormateUrl('api/storage/?usage=backup,archive'), this.utils.GetHttpOptions());
  }
}


