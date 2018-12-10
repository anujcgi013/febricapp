import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {LayoutModule} from '../layout/layout.module';
import {FormsModule} from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
