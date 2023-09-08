import { Component, Input } from '@angular/core';
import { Daum } from 'src/app/interfaces/main-board.interface';

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.scss'],
})
export class MainBoardComponent {
  @Input() bulletin!: Daum;
}
