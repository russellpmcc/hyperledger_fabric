//
import { Component, OnInit } from '@angular/core';
import { Asset } from '../model/asset.model';
import { CommonService } from '../../common/sharedservices/common.services';
import { Observable } from 'rxjs/Rx';
import { SlicePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Location, DatePipe } from '@angular/common';
import { AssetHistory } from '../model/assetHistory.model';

@Component({
    selector: 'bgc-component',
    templateUrl: './bgc.componentview.html'
})

export class BgcComponent implements OnInit {
    employerDtls: Observable<any>;
    assetHistory: any[];
    assetDetails: any;
    assetId: any;
    historyVisibility: any;




    constructor(
        private route: ActivatedRoute,
        private _cs: CommonService,
        private location: Location
    ) { }


    ngOnInit() {
        this.assetId = this.route.snapshot.paramMap.get('assetId');
        return this._cs.fetchAsset(this.assetId)
            .subscribe(
            results => {

                this.assetDetails = results;
                //console.log(this.assetDetails);
                // for (let item of this.assetDetails)
                {

                    this._cs.fetchEmployer(((this.assetDetails.employer).split("#", 2))[1]).
                        subscribe(
                        result => {
                            //  console.log(result.details.companyName);
                            this.assetDetails.employer = result.details.companyName;
                        }

                        )

                }

            }

            )
    }

    searchHistory() {
        //alert("Hello");
        this.historyVisibility = true;
        return this._cs.fetchAssetHistory(this.assetId)
            .subscribe(
            results => {
                this.assetHistory = results;

                for (let item of this.assetHistory) {

                    this._cs.fetchEmployer(((item.newEmployer).split("#", 2))[1]).
                        subscribe(
                        result => {
                            //  console.log(result.details.companyName);
                            item.newEmployer = result.details.companyName;
                        }

                        )

                }

            }

            )
    }

}
