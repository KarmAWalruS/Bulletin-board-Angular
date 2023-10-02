import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
})
export class SearchPanelComponent {
  public search = '';
  private httpClient: HttpClient;
  constructor(
    private router: Router,
    _http: HttpClient,
    private searchService: SearchService
  ) {
    this.httpClient = _http;
  }

  openCategory() {
    this.router.navigateByUrl('/categories');
  }

  SearchAd(): void {
    if (this.search) {
      this.searchService.search(this.search).subscribe((search) => {
        console.log(search);
      });
    }
  }
}
@Injectable({ providedIn: 'root' })
class SearchService {
  constructor(private httpClient: HttpClient) {}
  search(value: string): Observable<any[]> {
    return this.httpClient.post<any[]>(
      'http://194.87.237.48:5000/Advert/search',
      {
        search: value,
      }
    );
  }
}
