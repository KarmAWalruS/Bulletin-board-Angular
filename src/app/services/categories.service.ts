import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from '../pages/categories-list/categories-list.interface';

@Injectable({
  providedIn: 'root',
})
export class categoriesService {
  private httpClient: HttpClient;
  public categoriesList!: Categories[];
  constructor(private _http: HttpClient) {
    this.httpClient = _http;
  }

  getCategories() {
    const url =
      'http://194.87.237.48:5000/Categories/00000000-0000-0000-0000-000000000000';
    return this.httpClient.get<any>(url);
  }
}
