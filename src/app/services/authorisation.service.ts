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
    const url = 'http://194.87.237.48:5000/Auth/Login';
    const body = { login: username, password: password };

    new Observable((observer) => {
      this._http.post(url, body).subscribe(
        (response: any) => {
          console.log('login', response);
          localStorage.setItem('jwtToken', response);
          this.isAuthenticated = true;
          this.isUserLoggedIn = true;
          this.modalServiceService.openLoginForm = false;

          observer.complete();
        },
        (error) => {
          observer.error(error);
          observer.complete();
        }
      );
    }).subscribe();
  }

  logOut() {
    this.isAuthenticated = false;
    this.isUserLoggedIn = false;
  }
}
