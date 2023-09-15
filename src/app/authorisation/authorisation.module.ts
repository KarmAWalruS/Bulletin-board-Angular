import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorisationComponent } from './authorisation.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthorisationRoutingModule } from './authorisation.routing.module';

@NgModule({
  declarations: [AuthorisationComponent, LoginComponent, RegistrationComponent],
  imports: [CommonModule, AuthorisationRoutingModule],
  exports: [LoginComponent, AuthorisationComponent],
})
export class AuthorisationModule {}
