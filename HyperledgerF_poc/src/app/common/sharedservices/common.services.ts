import { Component, Injectable } from '@angular/core';
import { HttpModule, Http, RequestOptions, Response, Headers } from '@angular/http';
import { HttpEvent, HttpHeaders, HttpInterceptor, HttpHandler, HttpRequest, HttpClient } from '@angular/common/http';
//import {  } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CommonService {

    errorLog: any[];
    //endpointUrl 18.218.79.90

    private assetUrl = 'http://18.218.79.90:3000/api/org.bgc.base.Employee/';
    private searchAssetHistoryUrl = "http://18.218.79.90:3000/api/queries/getTxnemployee?Emp=resource%3Aorg.bgc.base.Employee%23";
    private fetchEmployerUrl = "http://18.218.79.90:3000/api/org.bgc.base.Employer/";
    private addAssetUrl = "http://18.218.79.90:3000/api/org.bgc.base.Employee";
    private empTransactUrl = "http://18.218.79.90:3000/api/org.bgc.base.TransferEmployee";


    constructor(private _http: Http) {

    }


    fetchAsset(assetId) {
        return this._http.get(this.assetUrl + assetId)
            .map((response: Response) => response.json())
            .catch(this.handleError);

    }
    fetchEmployer(assetId) {
        return this._http.get(this.fetchEmployerUrl + assetId)
            .map((response: Response) => response.json()
            ).catch(this.handleError);
    }

    fetchAssetHistory(assetId) {
        ////console.log("@@@@@@@"+this.searchAssetHistoryUrl+assetId);
        return this._http.get(this.searchAssetHistoryUrl + assetId)
            .map((response: Response) => response.json())
            .catch(this.handleError);

    }

    addAsset(emp) {

        const options = new RequestOptions({

            headers: new Headers({ 'Content-Type': 'application/json' })

        });
        const body = {

            "empployeeID": emp.eid,
            "employer": "resource:org.bgc.base.Employer#" + emp.employer,
            "firstName": emp.fname,
            "lastName": emp.lname,
            "aadhaar": emp.adhaar,
            "gender": emp.gender,
            "comments": emp.comments,
            "reason": "ok",
            "contactDetails": {

                "email": emp.email,
                "mobilePhone": emp.phone

            },
            "birthDetails": {
                "dateOfBirth": emp.dob

            },
            "status": emp.status
        }
        //console.log(body);
        return this._http.post(this.addAssetUrl, body, options)
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }



    empTransact(emp) {
        if (emp.status == "RELEASED") {
            emp.employer = "0000";
        }
        if (emp.reason == null || emp.reason == "") {
            emp.reason = "NA";
        }
        if (emp.comments == null || emp.comments == "") {
            emp.comments = "NA";
        }
        const options = new RequestOptions({

            headers: new Headers({ 'Content-Type': 'application/json' })

        });
        const body = {

            "employee": "resource:org.bgc.base.Employee#" + emp.adhaar,
            "newEmployer": "resource:org.bgc.base.Employer#" + emp.employer,
            "comments": emp.comments,
            "reason": emp.reason,
            "action": emp.status
        }
        ////console.log(body);
        return this._http.post(this.empTransactUrl, body, options)
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    /*

    fetchAssetData() {
        return this._http.get(this.assetUrl)
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }
    ////console.log(responseresults);*/


    handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        this.errorLog = errMsg;
        return Observable.throw(errMsg);
    }
}