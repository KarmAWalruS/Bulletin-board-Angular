import { Component, Input } from '@angular/core';
import { Daum } from 'src/app/bulletin-board/main-board/main-board.interface';

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.scss'],
})
export class MainBoardComponent {
  @Input() bulletin!: Daum;
}
