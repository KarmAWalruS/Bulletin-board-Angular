import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BulletinBoardComponent } from './bulletin-board.component';

const routes: Routes = [{ path: '', component: BulletinBoardComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BulletinBoardRoutingModule {}
