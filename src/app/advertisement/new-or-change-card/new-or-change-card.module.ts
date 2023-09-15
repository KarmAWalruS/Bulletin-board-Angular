import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewOrChangeCardRoutingModule } from './new-or-change-card-routing.module';
import { NewOrChangeCardComponent } from './new-or-change-card.component';

@NgModule({
  declarations: [NewOrChangeCardComponent],
  imports: [CommonModule, NewOrChangeCardRoutingModule],
  exports: [NewOrChangeCardComponent],
})
export class NewOrChangeCardModule {}
