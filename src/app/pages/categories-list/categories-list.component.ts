import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Categories } from './categories-list.interface';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
})
export class CategoriesListComponent implements OnInit {
  public categoriesList!: Categories[];
  private httpClient: HttpClient;
  constructor(_http: HttpClient) {
    this.httpClient = _http;
  }

  ngOnInit(): void {
    this.httpClient
      .get<Categories[]>('http://194.87.237.48:5000/Categories')
      .subscribe((categoriesList) => {
        this.categoriesList = categoriesList;
      });
  }
}
