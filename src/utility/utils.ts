import { Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
//import { GenericData } from '../Models/common-models';
//import { LoginPage } from '../Pages/Login/Login';

export const AUTHTOKEN:string = 'authToken';

@Injectable()
export class Utils {    
    _isAuthentic: boolean;
    constructor() {
        this._isAuthentic = false;
    }
    FormateUrl(api: string) {
        let wrapperApiUrlPrefix = 'http://localhost:54434';// "http://192.168.5.60:54434";
        return wrapperApiUrlPrefix + "/api/GenericApi/TestApi?api=" + api;
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

    IsAuthenticated() {
        return this._isAuthentic;
    }

    GetAuthTokenLocal() {
        return localStorage.getItem(AUTHTOKEN);
    }

    SetAuthTokenLocal(authToken: string) {
        localStorage.setItem(AUTHTOKEN, authToken);
    }

    CleanAuthDetails() {
        localStorage.removeItem(AUTHTOKEN);
        return '';
    }

    // FormKeyValueData(jsonResult) {
    //     let formedData: any[] = [];

    //     // for (let key in data) {
    //     //     let data = new GenericData();
    //     //     this.genericData.name = key;
    //     //     this.genericData.data = data[key];
    //     //     formedData.push(this.genericData);
    //     // }
    //     for (let key in jsonResult.data[0]) {
    //         let data = new GenericData();
    //         data.name = key;
    //         data.data = jsonResult.data[0][key];
    //         formedData.push(data);
    //     }
    //     return formedData;
    // }
}
