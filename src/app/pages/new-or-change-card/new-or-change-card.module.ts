import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewOrChangeCardRoutingModule } from './new-or-change-card-routing.module';
import { NewOrChangeCardComponent } from './new-or-change-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewOrChangeCardComponent],
  imports: [
    CommonModule,
    NewOrChangeCardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [NewOrChangeCardComponent],
})
export class NewOrChangeCardModule {}
