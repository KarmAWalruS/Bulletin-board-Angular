import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  private httpClient: HttpClient;
  constructor(_http: HttpClient) {
    this.httpClient = _http;
  }

  onCreate(form: NgForm): void {
    console.log(form.value);
    this.httpClient
      .post('http://194.87.237.48:5000/Auth/Register', {
        name: form.value.name,
        login: form.value.login,
        password: form.value.password,
      })
      .subscribe((data) => {
        console.log(data);
      });
  }
}
