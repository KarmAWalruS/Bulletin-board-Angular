import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Root } from '../shared/main-board/main-board.interface';

@Injectable({
  providedIn: 'root',
})
export class BulletinsService {
  private httpClient: HttpClient;
  constructor(private _http: HttpClient) {
    this.httpClient = _http;
  }
  getBulletins(): void {
    this.httpClient
      .post('http://194.87.237.48:5000/Advert/search', {})
      .subscribe((data) => {
        console.log(data);
      });
  }
}
