import { Component } from '@angular/core';
import { Daum } from './interfaces/main-board.interface';
import { BulletinsService } from './services/bulletins.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bulletin_board';
}
