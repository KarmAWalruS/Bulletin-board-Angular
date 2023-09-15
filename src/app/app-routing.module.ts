import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BulletinBoardComponent } from './bulletin-board/bulletin-board.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bulletinBoard',
    pathMatch: 'full',
  },
  {
    path: 'bulletinBoard',
    title: 'Доска объявлений',
    loadChildren: () =>
      import('./bulletin-board/bulletin-board.module').then(
        (m) => m.BulletinBoardModule
      ),
  },
  {
    path: 'advertisement/new-card',
    title: 'Новое объявление',
    loadChildren: () =>
      import(
        './advertisement/new-or-change-card/new-or-change-card.module'
      ).then((m) => m.NewOrChangeCardModule),
  },
  {
    path: 'logIn',
    title: 'Авторизация',
    loadChildren: () =>
      import('./authorisation/authorisation.module').then(
        (m) => m.AuthorisationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
