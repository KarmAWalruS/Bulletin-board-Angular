import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Categories } from './categories-list.interface';
import { categoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
})
export class CategoriesListComponent implements OnInit {
  public categoriesList!: Categories[];
  private httpClient: HttpClient;
  constructor(public categoriesService: categoriesService, _http: HttpClient) {
    this.httpClient = _http;
  }

  ngOnInit() {
    this.categoriesService.getCategories().subscribe((response) => {
      this.categoriesList = response.childs;
    });
  }
}
