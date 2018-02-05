//
import { Component } from '@angular/core';
import { Asset } from '../model/asset.model';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'dashboard-component',
    templateUrl: './dashboard.view.html'
})

export class DashboardComponent {
    assetId: any;
    constructor() {

    }
    appendToContainer() {
        alert("hi");
    }



}
