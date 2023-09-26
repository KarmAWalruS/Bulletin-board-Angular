import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Root } from '../shared/main-board/main-board.interface';

@Injectable({
  providedIn: 'root',
})
export class BulletinsService {
  constructor(private _http: HttpClient) {}
  getBulletins(): Observable<Root> {
    return this._http.get<Root>('https://fakestoreapi.com/products');
  }
}
