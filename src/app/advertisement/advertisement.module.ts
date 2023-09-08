import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertisementComponent } from './advertisement.component';
import { AdvertisementCardComponent } from './advertisement-card/advertisement-card.component';
import { NewOrChangeCardComponent } from './new-or-change-card/new-or-change-card.component';



@NgModule({
  declarations: [
    AdvertisementComponent,
    AdvertisementCardComponent,
    NewOrChangeCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdvertisementModule { }
