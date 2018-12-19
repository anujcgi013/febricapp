import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable(
  {
  providedIn: 'root'
}
)

export class AuthenticationService{
  constructor(private http: HttpClient) { }

  login(username: string, password: string):any {
      return this.http.get<boolean>("https://febricclubservices.azurewebsites.net/api/ValidateUser", {params:{
              emailId:username,
              password:password
      }}).pipe(map((x:boolean)=> { if(x)
        {
            localStorage.setItem('Logged', "true");
    }
    return x;
    }));
  }
}