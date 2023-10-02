import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ModalService } from './modal.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorisationService {
  constructor(
    private _http: HttpClient,
    public modalServiceService: ModalService,
    private router: Router
  ) {}
  isUserLoggedIn: boolean = false;
  isAuthenticated: boolean = false;

  login(username: string, password: string) {
    const url = 'http://localhost:3000/Auth/login';
    const body = { login: username, password: password };

    new Observable((observer) => {
      this._http.post(url, body).subscribe(
        (response: any) => {
          console.log('login', response);
          localStorage.setItem('jwtToken', response.token); // Сохраняем токен в localStorage
          this.isAuthenticated = true;
          this.isUserLoggedIn = true;
          this.modalServiceService.openLoginForm = false;

          this.router.navigate([`/dashboard/${response}`]);
          observer.complete(); // Завершаем Observable
        },
        (error) => {
          observer.error(error); // Передаем ошибку наблюдателю
          observer.complete(); // Завершаем Observable
        }
      );
    }).subscribe(); // Не забудьте подписаться на Observable
  }
}
