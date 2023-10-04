import { Component } from '@angular/core';
import { AuthorisationService } from '../../../../services/authorisation.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  providers: [AuthorisationService],
})
export class UserMenuComponent {
  constructor(authService: AuthorisationService) {}
}
