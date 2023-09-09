import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'bulletin-board',
    loadChildren: () =>
      import('./bulletin-board/bulletin-board.module').then(
        (m) => m.BulletinBoardModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
