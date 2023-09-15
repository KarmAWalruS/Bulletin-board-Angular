import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBoardComponent } from './main-board/main-board.component';
import { ProfileBoardComponent } from './profile-board/profile-board.component';
import { BulletinBoardComponent } from './bulletin-board.component';
import { BulletinBoardRoutingModule } from './bulletin-board.routing.module';

@NgModule({
  declarations: [
    MainBoardComponent,
    ProfileBoardComponent,
    BulletinBoardComponent,
  ],
  imports: [CommonModule, BulletinBoardRoutingModule],
  exports: [BulletinBoardComponent, ProfileBoardComponent, MainBoardComponent],
})
export class BulletinBoardModule {}
