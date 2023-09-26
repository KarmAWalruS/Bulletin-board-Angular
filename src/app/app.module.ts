import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { UserMenuComponent } from './layout/header/components/user-menu/user-menu.component';
import { SearchPanelComponent } from './layout/header/components/search-panel/search-panel.component';
import { BulletinBoardModule } from './pages/bulletin-board/bulletin-board.module';
import { AuthorisationModule } from './pages/authorisation/authorisation.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    UserMenuComponent,
    SearchPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BulletinBoardModule,
    AuthorisationModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
