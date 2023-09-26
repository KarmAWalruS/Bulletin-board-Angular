import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertisementComponent } from './advertisement.component';
import { AdvertisementCardComponent } from './advertisement-card/advertisement-card.component';
import { AdvertisementRoutingModule } from './advertisement.routing.module';

@NgModule({
  declarations: [AdvertisementComponent, AdvertisementCardComponent],
  imports: [CommonModule, AdvertisementRoutingModule],
  exports: [AdvertisementCardComponent],
})
export class AdvertisementModule {}
