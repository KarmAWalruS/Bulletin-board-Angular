import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthorisationService } from '../../services/authorisation.service';
import {
  FormBuilder,
  NgForm,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-authorisation',
  templateUrl: './authorisation.component.html',
  styleUrls: ['./authorisation.component.scss'],
})
export class AuthorisationComponent {
  private httpClient: HttpClient;
  badRequest: Boolean = false;
  authorisationForm: UntypedFormGroup = new UntypedFormGroup({});
  modalServiceService: any;

  constructor(
    private fb: FormBuilder,
    _http: HttpClient,
    public authorisationService: AuthorisationService
  ) {
    this.httpClient = _http;
    this._buildForm();
  }

  isUserLoggedIn: boolean = false;
  isAuthenticated: boolean = false;

  private _buildForm() {
    this.authorisationForm = this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  logIn() {
    if (this.authorisationForm.valid) {
      const username = this.authorisationForm.get('login')?.value;
      const password = this.authorisationForm.get('password')?.value;
      this.authorisationService.login(username, password);
      console.log(this.isAuthenticated);
      console.log(this.isUserLoggedIn);
    }
    /* this.httpClient
      .post('http://194.87.237.48:5000/Auth/Login', {
        login: this.authorisationForm.get('login')?.value,
        password: this.authorisationForm.get('password')?.value,
      })
      .subscribe(
        (data: any) => {
          console.log(data);
          localStorage.setItem('jwtToken', data);
          this.isAuthenticated = true;
          this.isUserLoggedIn = true;
          this.modalServiceService.openLoginForm = false;
        },
        (errorResponse) => {
          if (errorResponse.status == 400) {
            this.badRequest = true;
          }
        }
      ); */
  }
}
