import { Component, Input } from '@angular/core';
import { Daum } from './main-board/main-board.interface';
import { BulletinsService } from '../services/bulletins.service';

@Component({
  selector: 'app-bulletin-board',
  templateUrl: './bulletin-board.component.html',
  styleUrls: ['./bulletin-board.component.scss'],
})
export class BulletinBoardComponent {
  bulletins: Daum[] = [];

  constructor(private _bulletinService: BulletinsService) {}

  ngOnInit() {
    this._bulletinService.getBulletins().subscribe((resp) => {
      this.bulletins = resp.data;
    });
  }
}
