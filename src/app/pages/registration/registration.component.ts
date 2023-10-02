import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import {
  FormBuilder,
  NgForm,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  private httpClient: HttpClient;

  registrationForm: UntypedFormGroup = new UntypedFormGroup({});

  constructor(private fb: FormBuilder, _http: HttpClient) {
    this._buildForm();
    this.httpClient = _http;
  }

  private _buildForm() {
    this.registrationForm = this.fb.group({
      login: ['', [Validators.required, Validators.minLength(4)]],
      name: '',
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onCreate(): void {
    this.httpClient
      .post('http://194.87.237.48:5000/Auth/Register', {
        name: this.registrationForm.get('name')?.value,
        login: this.registrationForm.get('login')?.value,
        password: this.registrationForm.get('password')?.value,
      })
      .subscribe((data) => {
        console.log(data);
      });
  }
}
