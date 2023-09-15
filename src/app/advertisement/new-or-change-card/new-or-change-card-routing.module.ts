import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewOrChangeCardComponent } from './new-or-change-card.component';

const routes: Routes = [{ path: '', component: NewOrChangeCardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewOrChangeCardRoutingModule {}
