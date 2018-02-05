//
import { Component } from '@angular/core';
import { Employee } from '../model/emp.model';
//import { CommonService } from '../../common/sharedservices/common.services';
import { Observable } from 'rxjs/Rx';
import { CommonService } from '../../common/sharedservices/common.services';

@Component({
    selector: 'addemployee-component',
    templateUrl: './addEmp.componentview.html'
})

export class AddEmpComponent {
    resp: string;
    response: any;
    emp = new Employee("", "", "", "", "", "", "", "", "", "", "", "", "");

    constructor(
        private _cs: CommonService
    ) {

    }
    addEmployee() {
        this.emp.status = 'EMPLOYED';
        // console.log("----"+this.emp);


        this._cs.addAsset(this.emp)
            .subscribe(
            results => {
                this.response = results;
                console.log(this.response.empployeeID);
                if (this.response.empployeeID == this.emp.eid) {
                    return this._cs.empTransact(this.emp)
                        .subscribe(
                        results => {
                            this.response = results;
                            console.log(":::" + results);
                            //console.log(this.response.Employee+"  "+"resource:org.bgc.base.Employee#"+this.emp.adhaar);
                            if (this.response.employee == "resource:org.bgc.base.Employee#" + this.emp.adhaar) {
                                this.resp = "Added Successfully";
                            } else
                                this.resp = "Failed";
                        }

                        )
                } else
                    this.resp = "Failed";
            }

            )
    }



}
