import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {product} from '../Model/Product';

@Injectable()
export class ProductsService {
  httpOptions;
  constructor(private http:HttpClient) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
     }
  }

  postproducts(obj):Observable<object>{
    return this.http.post(
      "https://febricclubservices.azurewebsites.net/api/product/productDetail",
    obj,
    this.httpOptions);
  }

  getProducts():Observable<Object>{
    return this.http.get("https://febricclubservices.azurewebsites.net/api/product");
 }

 getSerialNumber():Observable<object>{
   return this.http.get<object>("https://febricclubservices.azurewebsites.net/api/TopSerial");
}
}
