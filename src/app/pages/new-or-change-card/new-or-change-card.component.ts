import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-or-change-card',
  templateUrl: './new-or-change-card.component.html',
  styleUrls: ['./new-or-change-card.component.scss'],
})
export class NewOrChangeCardComponent {
  public id = '';
  public name = '';
  public description = '';
  public location = '';
  public imagesIds = [];
  public cost = '';
  private httpClient: HttpClient;
  constructor(_http: HttpClient) {
    this.httpClient = _http;
  }

  onCreate(): void {
    if (this.name && this.location && this.cost) {
      this.httpClient.post('http://194.87.237.48:5000/Advert', {
        id: this.id,
        name: this.name,
        description: this.description,
        location: this.location,
        imagesIds: this.imagesIds,
        cost: this.cost,
      });
    }
  }
}
