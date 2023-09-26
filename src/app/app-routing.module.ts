import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
      import('./pages/bulletin-board/bulletin-board.module').then(
        (m) => m.BulletinBoardModule
      ),
  },
  {
    path: 'new-card',
    title: 'Новое объявление',
    loadChildren: () =>
      import('./pages/new-or-change-card/new-or-change-card.module').then(
        (m) => m.NewOrChangeCardModule
      ),
  },
  {
    path: 'logIn',
    title: 'Авторизация',
    loadChildren: () =>
      import('./pages/authorisation/authorisation.module').then(
        (m) => m.AuthorisationModule
      ),
  },
  {
    path: 'registration',
    title: 'Регистрация',
    loadChildren: () =>
      import('./pages/registration/registration.module').then(
        (m) => m.RegistrationModule
      ),
  },
  {
    path: 'categories',
    title: 'Категории',
    loadChildren: () =>
      import('./pages/categories-list/categories-list.module').then(
        (m) => m.CategoriesListModule
      ),
  },
  {
    path: 'settings',
    title: 'Настройки профиля',
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfileModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
