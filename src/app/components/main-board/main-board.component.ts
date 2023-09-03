import { Component, Input } from '@angular/core';
import { Daum } from './main-board.interface';

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.scss'],
})
export class MainBoardComponent {
  @Input() book!: Daum;
}
