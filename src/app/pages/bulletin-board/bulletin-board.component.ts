import { Component, Input } from '@angular/core';
import { Root2 } from '../../shared/main-board/main-board.interface';
import { BulletinsService } from '../../services/bulletins.service';

@Component({
  selector: 'app-bulletin-board',
  templateUrl: './bulletin-board.component.html',
  styleUrls: ['./bulletin-board.component.scss'],
})
export class BulletinBoardComponent {
  bulletins: Root2[] = [];

  constructor(private _bulletinService: BulletinsService) {}

  ngOnInit() {
    this._bulletinService.getBulletins().subscribe((resp) => {
      this.bulletins = resp;
    });
  }
}
