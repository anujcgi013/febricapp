import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Input() flag:string=localStorage.getItem("Logged");
  ngOnInit() {
  }

  logout(){
    localStorage.removeItem("Logged");
    console.log("flag removed");
  }

}
