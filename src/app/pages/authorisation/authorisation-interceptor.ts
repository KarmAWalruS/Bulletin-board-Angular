import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthorisationService } from '../../services/authorisation.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authorisationService: AuthorisationService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authToken = localStorage.getItem('jwtToken');

    if (authToken !== null) {
      const authReq = req.clone({
        headers: req.headers.set('Authorisation', `Bearer ${authToken}`),
      });

      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
