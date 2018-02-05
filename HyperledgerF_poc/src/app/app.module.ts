import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from  '@angular/forms';
import { AppComponent }  from './app.component';
import { CommonService } from './common/sharedservices/common.services';
import { HttpModule } from '@angular/http';
import { BgcComponent } from './BGC/component/bgc.component';
import { DashboardComponent } from './BGC/component/dashboard.component';
import { AppRoutingModule } from './BGC/route/route.module';
import { TransactionHistoryComponent } from './BGC/component/txnhistory.component';
import { WelcomeComponent } from './BGC/component/welcome.component';
import { AddEmpComponent } from './BGC/component/addEmp.component';
import { HttpClient } from '@angular/common/http';
import { ReleaseEmpComponent } from './BGC/component/releaseEmp.component';

@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule,AppRoutingModule],
  declarations: [ ReleaseEmpComponent,AppComponent,AddEmpComponent,BgcComponent,DashboardComponent,TransactionHistoryComponent,WelcomeComponent],
  bootstrap:    [ AppComponent ],
  providers:[CommonService]
})
export class AppModule { }