import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { FormBuilder, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:string="";
  pass:string="";
  message:string;

  constructor(private _router:Router, private Auth:AuthenticationService) { 

    // Style to add background image only to Login page;
    document.body.style.backgroundImage = "url('../../assets/images/fabric-wallpaper7.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
  }

  ngOnInit() {
  }

  navigateDetails() {
      document.body.style.backgroundImage = '';
      this._router.navigate(['./product']);
    }

    login(){
      this.Auth.login(this.user, this.pass).subscribe(
        (x:boolean)=>{
          if(x==true)
          {
            this.navigateDetails();
          }
          else
          {
            this.message="User Is Not Valid";
            console.log(this.message);
          }
        }
      )
    }
}
