import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  private httpClient: HttpClient;
  settingsForm: UntypedFormGroup = new UntypedFormGroup({});

  constructor(private fb: FormBuilder, _http: HttpClient) {
    this.httpClient = _http;
    this._buildForm();
  }

  private _buildForm() {
    this.settingsForm = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      adress: ['', [Validators.required]],

      changePassForm: this.fb.group({
        currentPassword: ['', [Validators.required]],
        newPassword: ['', [Validators.required]],
      }),
    });
  }

  /* changeSettings() {
    this.httpClient.
  } */
}
