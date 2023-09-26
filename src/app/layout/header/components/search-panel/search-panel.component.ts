import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
})
export class SearchPanelComponent {
  public search = '';
  private httpClient: HttpClient;
  constructor(private router: Router, _http: HttpClient) {
    this.httpClient = _http;
  }

  openCategory() {
    this.router.navigateByUrl('/categories');
  }

  SearchAd(): void {
    if (this.search) {
      this.httpClient
        .post('http://194.87.237.48:5000/Advert/search', {
          search: this.search,
        })
        .subscribe((search) => {
          console.log(search);
          search = '';
        });
    }
  }
}
