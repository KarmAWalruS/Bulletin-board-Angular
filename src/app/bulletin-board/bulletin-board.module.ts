import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBoardComponent } from './main-board/main-board.component';
import { ProfileBoardComponent } from './profile-board/profile-board.component';
import { BulletinBoardComponent } from './bulletin-board.component';

@NgModule({
  declarations: [
    MainBoardComponent,
    ProfileBoardComponent,
    BulletinBoardComponent,
  ],
  imports: [CommonModule],
})
export class BulletinBoardModule {}
