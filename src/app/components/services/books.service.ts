import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Root } from '../main-board/main-board.interface';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private _http: HttpClient) {}
  getBooks(): Observable<Root> {
    return this._http.get<Root>(
      'https://fakerapi.it/api/v1/books?_quantity=20'
    );
  }
}
