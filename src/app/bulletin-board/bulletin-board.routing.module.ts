import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BulletinBoardComponent } from './bulletin-board.component';

const routes: Routes = [
  { path: '', component: BulletinBoardComponent },
  {
    path: 'advertisement',
    title: 'Объявление',
    loadChildren: () =>
      import('../advertisement/advertisement.module').then(
        (m) => m.AdvertisementModule
      ),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BulletinBoardRoutingModule {}
