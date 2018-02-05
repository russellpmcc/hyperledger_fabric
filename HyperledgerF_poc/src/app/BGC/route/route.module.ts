import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../component/dashboard.component';
import { BgcComponent } from '../component/bgc.component';
import { TransactionHistoryComponent } from '../component/txnhistory.component';
import { WelcomeComponent } from '../component/welcome.component';
import { AddEmpComponent } from '../component/addEmp.component';
import { ReleaseEmpComponent } from '../component/releaseEmp.component';



const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'searchEmp', component: DashboardComponent },
  { path: 'searchAsset/:assetId', component: BgcComponent },
  { path: 'searchHistory/:assetId', component: TransactionHistoryComponent },
  { path: 'addEmp', component: AddEmpComponent },
  { path: 'relEmp/:assetId/:employer/:status', component: ReleaseEmpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }