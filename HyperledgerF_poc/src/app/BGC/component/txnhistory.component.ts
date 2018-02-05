//
import { Component, OnInit } from '@angular/core';
import { Asset } from '../model/asset.model';
import { CommonService } from '../../common/sharedservices/common.services';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'txnhistory-component',
    templateUrl: './txn.componentview.html'
})

export class TransactionHistoryComponent implements OnInit {
    assetHistory: any[];

    constructor(
        private route: ActivatedRoute,
        private _cs: CommonService,
        private location: Location
    ) { }

    ngOnInit() {
        return this._cs.fetchAssetHistory(this.route.snapshot.paramMap.get('assetId'))
            .subscribe(
            results => {
                this.assetHistory = results;
                //console.log(this.assetHistory);
            }

            )
    }

}
