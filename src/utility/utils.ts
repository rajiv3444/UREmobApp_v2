import { Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

export const AUTHTOKEN: string = 'authToken';

@Injectable()
export class Utils {
    _isAuthentic: boolean;
    
    constructor() { }

    FormateUrl(api: string) {
        //let wrapperApiUrlPrefix = "http://192.168.5.60:54434";
        let wrapperApiUrlPrefix = 'http://localhost:54434';
        return wrapperApiUrlPrefix + "/api/GenericApi/TestApi?api=" + api;
    }
    GetUREHostedApiIp(): string {
        //return '192.168.8.160';
        return '10.102.48.91';            
    }
   
    GetEmptyHeader() {
        return new Headers();
        //httpRequestHeaders.append('Content-Type', 'application/json; charset=UTF-8');
        //return httpRequestHeaders;
    }

    GetHeadersWithAuthToken() {
        let httpRequestHeaders = this.GetEmptyHeader();
        httpRequestHeaders.append('Content-Type', 'application/json; charset=UTF-8');
        //httpRequestHeaders.append('Accept', 'application/json');
        httpRequestHeaders.append(AUTHTOKEN, this.GetAuthTokenLocal());
        return httpRequestHeaders;
    }

    GetHttpOptions() {
        let httpRequestHeaders = this.GetHeadersWithAuthToken();
        let requestOptions = new RequestOptions({ headers: httpRequestHeaders });
        return requestOptions;
    }

    IsAuthenticated(): boolean {
        if (this.GetAuthTokenLocal() == '' || this.GetAuthTokenLocal() == undefined) {
            this._isAuthentic = false;            
        }
        else {
            this._isAuthentic = true;
        }
        return this._isAuthentic;
    }

    GetAuthTokenLocal(): string {
        return localStorage.getItem(AUTHTOKEN);
    }

    SetAuthTokenLocal(authToken: string) {
        localStorage.setItem(AUTHTOKEN, authToken);
    }

    CleanAuthDetails() {
        localStorage.removeItem(AUTHTOKEN);
        return '';
    }
}
