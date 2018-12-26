import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { AlertService } from '../services/alert.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // user:string="";
  // pass:string="";
  message:string;
  loginForm:FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private _router:Router, 
    private Auth:AuthenticationService, 
    private alertService: AlertService, 
    private formBuilder: FormBuilder
    ){ 
    // Style to add background image only to Login page;
    document.body.style.backgroundImage = "url('../../assets/images/fabric-wallpaper7.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  // this.Auth.lo
}

get f() { return this.loginForm.controls; }

  navigateDetails() {
      
    }

    onSubmit(){
      this.submitted = true;
      if (this.loginForm.invalid) {
        return;
    }
      this.loading = true;
      debugger;
      this.Auth.login(this.f.username.value, this.f.password.value).subscribe(
        (data:Boolean) => {
          if(data)
          {
          document.body.style.backgroundImage = '';
          this._router.navigate(['./product']);
          }
         else
         {
          this.setError();
         }
                },
          error => {
            this.setError();
          }
      )
    }

    setError()
    {
      this.alertService.error("Invalid User Details. Please try again...");
      this.loading = false;
      this.loginForm.patchValue({username:null, password:null})
    }
}
