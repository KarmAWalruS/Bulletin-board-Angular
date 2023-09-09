import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { CategoryComponent } from './layout/header/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CategoryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, RouterOutlet],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
