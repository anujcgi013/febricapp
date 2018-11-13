import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

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
      "http://febricclubapp.azurewebsites.net/API/product/productDetails",
    obj,
    this.httpOptions);
  }

//   getProducts():Observable<Object>{
//     return this.http.get("http://febricclubapp.azurewebsites.net/API/product");
//  }
}
