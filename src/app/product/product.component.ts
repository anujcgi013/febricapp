import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { product } from '../Model/Product';
import { Guid } from 'guid-typescript';
import { DatePipe} from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productForm;
  SerialId:string="1999";
  date=new Date();
  constructor(private formBuilder:FormBuilder, private pruductService:ProductsService,
    private datepipe:DatePipe) { 
    this.productForm=this.formBuilder.group({
      bundleNumber:['', [Validators.required,isSymbols]],
      length:'',
      weight:'',
      comments:'',
      createdDate:''
    })
  }
  
  ngOnInit() {
  }


 saveProduct(){
  var productdata:product={
    companyId: '2e3a0c4c-eb8d-4903-b729-38679ea404a6',
    bundleNumber: this.productForm.value.bundleNumber,
    length: this.productForm.value.length,
    weight:this.productForm.value.weight,
    comments:this.productForm.value.comments,
    createdDate:this.GetDate()
  }
  console.log(productdata);
  this.pruductService.postproducts(productdata).subscribe(
    data=>{
      alert('Your review is saved')
      this.ngOnInit();
    },
    (error)=>
    alert('Not saved ---some Error')
  )
}
GetDate():string
{
  this.date=new Date();
  let latest_date =this.datepipe.transform(this.date, 'yyyy-MM-dd');
  return latest_date;
}
}

function isSymbols(input:FormControl){
  let temp:RegExp=new RegExp('^[0-9]*$');
  let temp1:boolean=false;
  if(!temp.test(input.value))
      temp1=true;
    return temp1?null:{needFormat:true};
}

