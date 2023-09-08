import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorisationComponent } from './authorisation.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';



@NgModule({
  declarations: [
    AuthorisationComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthorisationModule { }
