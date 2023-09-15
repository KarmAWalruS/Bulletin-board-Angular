import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorisationComponent } from './authorisation.component';
import { LoginComponent } from './login/login.component';

import { AuthorisationRoutingModule } from './authorisation.routing.module';

@NgModule({
  declarations: [AuthorisationComponent, LoginComponent],
  imports: [CommonModule, AuthorisationRoutingModule],
  exports: [LoginComponent, AuthorisationComponent],
})
export class AuthorisationModule {}
