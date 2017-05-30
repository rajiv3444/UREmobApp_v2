import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod, HttpModule } from '@angular/http';
import { Utils } from '../utility/Utils';
//import { Logger } from '../utility/Logger';
//import {LoginResponse} from '../Models/auth-models';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthService {    
  constructor(public http: Http, private utils: Utils) {
    //this.logger.LogInfo('AuthService Provider constructor');
  }
  
  DoLogin(username: string, password: string): Observable<any> {    
    let body = JSON.stringify({ username, password });  
    let apiIp = this.utils.GetUREHostedApiIp();
    return this.http.post('http://'+apiIp+'/api/login', body, { headers: this.utils.GetEmptyHeader() });
  } 
}

