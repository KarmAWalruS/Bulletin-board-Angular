import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorisationComponent } from './authorisation.component';

import { AuthorisationRoutingModule } from './authorisation.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthorisationComponent],
  imports: [
    CommonModule,
    AuthorisationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [AuthorisationComponent],
})
export class AuthorisationModule {}
