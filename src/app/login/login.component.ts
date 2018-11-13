import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router:Router) { 

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


}
