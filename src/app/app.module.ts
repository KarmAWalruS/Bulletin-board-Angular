import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { ProfileBoardComponent } from './bulletin-board/profile-board/profile-board.component';
import { UserMenuComponent } from './layout/header/components/user-menu/user-menu.component';
import { SearchPanelComponent } from './layout/header/components/search-panel/search-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ProfileBoardComponent,
    UserMenuComponent,
    SearchPanelComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, RouterOutlet],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
