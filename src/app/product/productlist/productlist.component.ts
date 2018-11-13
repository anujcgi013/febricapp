import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
//import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { product } from 'src/app/Model/Product';
//import { observable, Observable } from 'rxjs';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
})
export class ProductlistComponent implements OnInit {
  productList : product[];
  
  constructor(private productService:ProductsService) { }

  ngOnInit() {
    // this.productService.getProducts().subscribe(
    //   (x:product[])=>{this.productList=x},
    //   (y)=>{alert("Error in fetching review")}
    // )
  }

}
