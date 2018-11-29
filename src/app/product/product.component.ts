import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { product } from '../Model/Product';
import { DatePipe} from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  productForm;
  bundleNumber:string;
  date=new Date();
  ProductDetails:product;
  show:boolean=false;
  currentSerialNumber:number=1;
  barcodeNumber:string;


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
    this.pruductService.getSerialNumber().subscribe(
      (x:any) => {
        this.currentSerialNumber+=x
        this.show=true;
      },
      (y)=>{alert("Error in Fetching Serial Number")})
    }

barcodeControl:any;
  saveProduct(){
    var productdata:product={
      companyId: 'E5E1377F-7275-4937-B9B4-4EF6BFD5EB8E',
      bundleNumber: this.productForm.value.bundleNumber,
      length: this.productForm.value.length,
      weight:this.productForm.value.weight,
      comments:this.productForm.value.comments,
      createdDate:this.GetDate()
    }
    this.pruductService.postproducts(productdata).subscribe(
      data=>{
        alert('Your detail has been saved')
        this.show=true
        this.barcodeNumber = this.currentSerialNumber + ' ' + this.bundleNumber
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

    print(): void {
      let printContents, popupWin;
      printContents = document.getElementById('print-section').innerHTML;
      popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
      popupWin.document.open();
      popupWin.document.write(`
        <html>
          <head>
            <style>
            //........Customized style.......
            </style>
          </head>
      <body onload="window.print();window.close()">${printContents}</body>
        </html>`
      );
      popupWin.document.close();
  }
}

function isSymbols(input:FormControl){
  let temp:RegExp=new RegExp('^[0-9]*$');
  let temp1:boolean=false;
  if(!temp.test(input.value))
      temp1=true;
    return temp1?null:{needFormat:true};
}

