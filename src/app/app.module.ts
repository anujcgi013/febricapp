import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRouteModule } from './app-route.module';
import { LayoutModule } from './layout/layout.module';
import {LoginModule} from './login/login.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {NgxBarcodeModule} from 'ngx-barcode';
import { Guid } from "guid-typescript";
import {DatePipe} from '@angular/common';
//import {Observable} from 'rxjs';
//import {AgGridModule} from 'ag-grid-angular';


import {ProductComponent} from './product/product.component';
import {SharedComponent} from './shared/shared.component';
import { AppComponent } from './app.component';

import { ProductsService } from './services/products.service';
import {AuthenticationService} from './services/authentication.service'
import { ProductlistComponent } from './product/productlist/productlist.component';

@NgModule({
  declarations: [
    AppComponent, ProductComponent, ProductlistComponent, SharedComponent
  ],
  imports: [
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRouteModule,
    LayoutModule,
    LoginModule,
    NgxBarcodeModule    
  //  AgGridModule.withComponents([AppComponent])
  ],
  providers: [ProductsService, DatePipe, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
