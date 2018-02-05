"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var CommonService = (function () {
    function CommonService(_http) {
        this._http = _http;
        //endpointUrl
        this.ebayURL = 'https://raw.githubusercontent.com/awasekhirni/jsondata/master/ebayproducts.json';
        this.imdbUrl = 'https://raw.githubusercontent.com/awasekhirni/jsondata/master/imdbmovies.json';
        this.loanUrl = 'app/data/loan-mock.json';
    }
    CommonService.prototype.fetchEbayData = function () {
        return this._http.get(this.ebayURL)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CommonService.prototype.fetchMovieData = function () {
        return this._http.get(this.imdbUrl)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CommonService.prototype.fetchLoanData = function () {
        return this._http.get(this.loanUrl)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // console.log(responseresults);
    CommonService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        this.errorLog = errMsg;
        return Rx_1.Observable.throw(errMsg);
    };
    return CommonService;
}());
CommonService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CommonService);
exports.CommonService = CommonService;
//# sourceMappingURL=common.services.js.map