import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-route.module';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    // CommonModule,
    SharedModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class LoginModule { }
